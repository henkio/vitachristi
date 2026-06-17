#!/usr/bin/env bash
# Vita Christi — deploy helper: push -> Coolify build -> Cloudflare purge.
# Keeps vita.luxperpetua.org proxied (Cloudflare) but always fresh after deploy.
set -e
POLO="/Users/henkwolbers/Desktop/Ignatiushuis/Polo"
APP_UUID="gxr19bt47j3qfol4cjnrhvm6"
ZONE="283650e7c9960be71d0ed9be5c85c109"

CT="$(grep -iA3 'Coolify API-token' "$POLO/Passwords.txt" | grep -oE '[0-9]+\|[A-Za-z0-9]{20,}' | head -1)"

echo "→ git push"
git push -q origin main

echo "→ trigger Coolify deploy"
curl -s -m30 -H "Authorization: Bearer $CT" \
  "https://coolify.luxperpetua.org/api/v1/deploy?uuid=$APP_UUID&force=true" >/dev/null
echo "  build queued"

echo "→ wait for build, then purge Cloudflare cache"
# find a CF token that can purge
purge(){ local T
  for T in $(grep -iA3 'Cloudflare' "$POLO/Passwords.txt" | grep -oiE '[A-Za-z0-9_-]{37,}' | sort -u); do
    if curl -s -m15 -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE/purge_cache" \
      -H "Authorization: Bearer $T" -H "Content-Type: application/json" \
      -d '{"purge_everything":true}' | grep -q '"success":true'; then echo "  purged"; return 0; fi
  done; return 1; }

# wait until the new build serves, then purge
for i in $(seq 1 40); do sleep 15
  if curl -s -4 -m10 -o /dev/null -w '%{http_code}' "https://vita.luxperpetua.org/" | grep -q 200; then break; fi
done
purge || echo "  (purge token niet gevonden — handmatig purgen in Cloudflare)"
echo "✓ deployed + purged"
