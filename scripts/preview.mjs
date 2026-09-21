// Dependency-free local preview. The published site remains plain static files.
import http from 'node:http';
import {readFile, stat} from 'node:fs/promises';
import {resolve, extname, sep} from 'node:path';
import {spawn} from 'node:child_process';
const args=process.argv.slice(2),value=(flag,fallback)=>args.includes(flag)?args[args.indexOf(flag)+1]:fallback;
const port=Number(value('--port','4173')),host=value('--host','127.0.0.1'),root=process.cwd();
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpeg':'image/jpeg','.jpg':'image/jpeg','.webp':'image/webp','.woff2':'font/woff2','.json':'application/json','.txt':'text/plain; charset=utf-8'};
const server=http.createServer(async(req,res)=>{try{
 const pathname=decodeURIComponent(new URL(req.url,'http://preview.invalid').pathname);
 if(pathname.split('/').some(part=>part.startsWith('.'))){res.writeHead(404);res.end('Not found');return;}
 let file=resolve(root,'.'+pathname);
 if(file!==root&&!file.startsWith(root+sep)){res.writeHead(403);res.end('Forbidden');return;}
 if((await stat(file)).isDirectory())file=resolve(file,'index.html');
 const data=await readFile(file);res.writeHead(200,{'Content-Type':mime[extname(file)]??'application/octet-stream','Cache-Control':'no-store'});res.end(data);
}catch{res.writeHead(404,{'Content-Type':'text/plain'});res.end('Not found');}});
server.on('error',error=>{console.error('Could not start the preview:',error.message);process.exitCode=1;});
server.listen(port,host,()=>{
 const url='http://'+host+':'+server.address().port+'/demo.html#app-demo';
 console.log('\nMapToc preview: '+url+'\nKeep this window open. Press Control+C to stop.\n');
 if(args.includes('--open')&&process.platform==='darwin'){
  const opener=spawn('open',[url],{stdio:'ignore'});
  opener.on('error',()=>console.log('Open the preview URL above in your browser.'));
 }
});
