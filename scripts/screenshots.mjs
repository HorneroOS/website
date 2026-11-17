// Full-page screenshots of built routes at 1440 / 1024 / 390 px for evidence.
// Usage: CHROME=/usr/bin/chromium node scripts/screenshots.mjs http://127.0.0.1:4321 <out-dir> / /studio ...
import puppeteer from 'puppeteer';
const [base, out, ...paths] = process.argv.slice(2);
const b = await puppeteer.launch({executablePath:process.env.CHROME||undefined,args:['--no-sandbox']});
for (const [w,h] of [[1440,900],[1024,768],[390,844]]) {
  const p = await b.newPage(); await p.setViewport({width:w,height:h});
  for (const path of paths) {
    await p.goto(base+path,{waitUntil:'networkidle0'});
    const name = (path.replace(/\W+/g,'_')||'home')+'-'+w+'.png';
    await p.screenshot({path:`${out}/${name}`,fullPage:true});
  }
}
await b.close();
