const http=require('http'),fs=require('fs'),p=require('path');
const t={'.html':'text/html','.css':'text/css','.js':'text/javascript','.json':'application/json','.svg':'image/svg+xml'};
const ROOT=p.join(__dirname,'public');
http.createServer((q,s)=>{let u=decodeURIComponent(q.url.split('?')[0]);if(u==='/')u='/index.html';
  const f=p.join(ROOT,u);fs.readFile(f,(e,d)=>{if(e){s.writeHead(404);s.end('404')}else{s.writeHead(200,{'Content-Type':t[p.extname(f)]||'text/plain'});s.end(d)}})
}).listen(process.env.PORT||8099,()=>console.log('vita up on '+(process.env.PORT||8099)));
