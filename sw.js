const C='esther-1795552422';
const CORE=["./", "index.html", "manifest.webmanifest", "icon-512.png", "apple-touch-icon.png", "content/index.js", "content/bursa.js", "content/trading.js", "content/economics.js", "content/stocks.js", "content/business.js", "content/geopolitics.js"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(CORE)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
// network-first so new lessons/tracks show up when online; cache fallback offline
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin)return;
 e.respondWith(fetch(r).then(res=>{if(res.ok&&res.status===200){const cp=res.clone();caches.open(C).then(c=>c.put(r,cp));}return res;}).catch(()=>caches.match(r,{ignoreSearch:true}).then(x=>x||(r.mode==='navigate'?caches.match('index.html'):undefined))));});
