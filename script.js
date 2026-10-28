/* Gallery photos: c = caption, p = which part of the photo shows in the tile, f = file in images/gallery/ */
var GAL=[
 {
  "c": "Black metal roof on an A-frame home",
  "p": "50% 40%",
  "f": "images/gallery/photo-01.jpg"
 },
 {
  "c": "Green metal roof on a horse barn",
  "p": "50% 40%",
  "f": "images/gallery/photo-02.jpg"
 },
 {
  "c": "Green metal roof on a log home",
  "p": "50% 45%",
  "f": "images/gallery/photo-03.jpg"
 },
 {
  "c": "Black metal roof on a backyard pavilion",
  "p": "40% 45%",
  "f": "images/gallery/photo-04.jpg"
 },
 {
  "c": "Black metal roof and steel siding",
  "p": "50% 35%",
  "f": "images/gallery/photo-05.jpg"
 },
 {
  "c": "Standing seam gable and trim detail",
  "p": "50% 40%",
  "f": "images/gallery/photo-06.jpg"
 },
 {
  "c": "Black metal roof with cedar and steel siding",
  "p": "50% 72%",
  "f": "images/gallery/photo-07.jpg"
 },
 {
  "c": "Black standing seam on a timber chalet",
  "p": "50% 60%",
  "f": "images/gallery/photo-08.jpg"
 },
 {
  "c": "Silver metal roof on a white farmhouse",
  "p": "50% 55%",
  "f": "images/gallery/photo-09.jpg"
 },
 {
  "c": "Black metal roof on a modern cabin",
  "p": "50% 30%",
  "f": "images/gallery/photo-10.jpg"
 },
 {
  "c": "Brown metal roof on a ranch home",
  "p": "50% 60%",
  "f": "images/gallery/photo-11.jpg"
 },
 {
  "c": "Black standing seam with skylights",
  "p": "40% 45%",
  "f": "images/gallery/photo-12.jpg"
 },
 {
  "c": "Black metal awning on a storefront",
  "p": "50% 45%",
  "f": "images/gallery/photo-13.jpg"
 },
 {
  "c": "Bronze metal roof on a lakeside home",
  "p": "50% 50%",
  "f": "images/gallery/photo-14.jpg"
 },
 {
  "c": "Black metal roof on a lake house",
  "p": "50% 40%",
  "f": "images/gallery/photo-15.jpg"
 },
 {
  "c": "Gray metal roof on a ranch home",
  "p": "50% 60%",
  "f": "images/gallery/photo-16.jpg"
 },
 {
  "c": "Bronze metal roof on a hillside home",
  "p": "50% 72%",
  "f": "images/gallery/photo-17.jpg"
 }
];
var g=document.getElementById('grid'),FIG=[];
GAL.forEach(function(it,i){
 var f=document.createElement('figure');var bt=document.createElement('button');bt.type='button';bt.className='th';bt.setAttribute('aria-label','View photo '+(i+1)+' of '+GAL.length);
 var im=document.createElement('img');im.src=it.f;im.alt='ProLine Roofing project photo '+(i+1);im.style.objectPosition=it.p;it.src=im.src;
 bt.appendChild(im);bt.onclick=function(){openLb(i)};
 f.appendChild(bt);if(i>=9)f.hidden=true;FIG.push(f);g.appendChild(f)});
var more=document.getElementById('more');
more.textContent='Show all '+GAL.length+' photos';
more.onclick=function(){FIG.forEach(function(f){f.hidden=false});more.hidden=true};

/* lightbox */
var lb=document.getElementById('lb'),lbi=document.getElementById('lbi'),lbc=document.getElementById('lbc'),cur=0,lastFocus=null;
function showLb(i){cur=(i+GAL.length)%GAL.length;lbi.src=GAL[cur].src;lbi.alt='ProLine Roofing project photo '+(cur+1);lbc.textContent=(cur+1)+' of '+GAL.length}
function openLb(i){lastFocus=document.activeElement;showLb(i);lb.hidden=false;document.body.style.overflow='hidden';document.getElementById('lbx').focus()}
function closeLb(){lb.hidden=true;document.body.style.overflow='';if(lastFocus)lastFocus.focus()}
document.getElementById('lbx').onclick=closeLb;document.getElementById('lbp').onclick=function(){showLb(cur-1)};document.getElementById('lbn').onclick=function(){showLb(cur+1)};
lb.addEventListener('click',function(e){if(e.target===lb)closeLb()});
addEventListener('keydown',function(e){if(lb.hidden)return;if(e.key==='Escape')closeLb();if(e.key==='ArrowLeft')showLb(cur-1);if(e.key==='ArrowRight')showLb(cur+1)});

var COLORS=[["Arctic White","#dfe2e0"],["Polar White","#d4d4ce"],["Alamo White","#d5d5cb"],["Ivory","#dfccb3"],["Light Stone","#c8bba4"],["Saddle Tan","#b4987d"],["Tan","#b09378"],["Taupe","#958c7f"],["Buckskin","#8b8379"],["Burnished Slate","#534a41"],["Koko Brown","#61473e"],["Brown","#583f34"],["Hawaiian Blue","#4c7281"],["Ocean Blue","#466572"],["Gallery Blue","#225068"],["Ash Gray","#aaa49c"],["Old Town Gray","#999e9b"],["Pewter Gray","#8d8986"],["Charcoal Gray","#645f5e"],["Charcoal Blue Gray","#4e565a"],["Rustic Red","#88443a"],["Rural Red","#7c362c"],["Dark Red","#7d2729"],["Crimson Red","#9c3531"],["Berry","#58393a"],["Evergreen","#445245"],["Ivy Green","#27493d"],["Matte Black","#2b2e31"],["Black","#1c1d1f"],["Burgundy","#4d3539"],["Liner White","#dce0dc"],["Copper Metallic","#a06a4c"],["ULG Arctic White","#dee2e1"],["ULG Black","#303131"],["ULG Burnished Slate","#524a45"],["ULG Charcoal Gray","#696562"],["Alamo White (Crinkle)","#d0d1c8"],["Arctic White (Crinkle)","#f1efec"],["Light Stone (Crinkle)","#c5b29d"],["Ash Gray (Crinkle)","#a6a098"],["Taupe (Crinkle)","#958c80"],["Buckskin (Crinkle)","#827064"],["Burnished Slate (Crinkle)","#51473f"],["Koko Brown (Crinkle)","#61433d"],["Dark Brown (Crinkle)","#483e3d"],["Charcoal Gray (Crinkle)","#625c59"],["Black (Crinkle)","#373839"],["Rustic Red (Crinkle)","#703f3b"],["Rust (Crinkle)","#96543c"],["Burgundy (Crinkle)","#533e43"],["Evergreen (Crinkle)","#3c4f45"],["Gallery Blue (Crinkle)","#2e4d6b"],["Midnight Gray (Crinkle)","#515252"],["Acrylic Galvalume (Crinkle)","#b1b0b3"],["Rough Edge Barnwood Plank","#5b4d42","images/finishes/rough-edge-barnwood-plank.jpg","images/finishes/tex/rough-edge-barnwood-plank.jpg"],["Gray Distressed Barnwood Plank","#6a5f57","images/finishes/gray-distressed-barnwood-plank.jpg","images/finishes/tex/gray-distressed-barnwood-plank.jpg"],["Gray Wash Barnwood Plank","#816d5f","images/finishes/gray-wash-barnwood-plank.jpg","images/finishes/tex/gray-wash-barnwood-plank.jpg"],["Black Burnt Wood","#282528","images/finishes/black-burnt-wood.jpg","images/finishes/tex/black-burnt-wood.jpg"],["Charcoal Burnt Wood","#2d2d31","images/finishes/charcoal-burnt-wood.jpg","images/finishes/tex/charcoal-burnt-wood.jpg"],["Charred Wood","#3b3c39","images/finishes/charred-wood.jpg","images/finishes/tex/charred-wood.jpg"],["Chippy White","#d1c2af","images/finishes/chippy-white.jpg","images/finishes/tex/chippy-white.jpg"],["Smooth Cedar","#a67b58","images/finishes/smooth-cedar.jpg","images/finishes/tex/smooth-cedar.jpg"],["Natural Rough Sawn Cedar","#996c45","images/finishes/natural-rough-sawn-cedar.jpg","images/finishes/tex/natural-rough-sawn-cedar.jpg"],["Dark Rough Sawn Cedar","#5a2f1b","images/finishes/dark-rough-sawn-cedar.jpg","images/finishes/tex/dark-rough-sawn-cedar.jpg"],["Gray Rough Sawn Cedar","#6c645c","images/finishes/gray-rough-sawn-cedar.jpg","images/finishes/tex/gray-rough-sawn-cedar.jpg"],["Taupe Rough Sawn Cedar","#957c5c","images/finishes/taupe-rough-sawn-cedar.jpg","images/finishes/tex/taupe-rough-sawn-cedar.jpg"],["White Wash Rough Sawn Cedar","#91928b","images/finishes/white-wash-rough-sawn-cedar.jpg","images/finishes/tex/white-wash-rough-sawn-cedar.jpg"],["Natural Hickory","#b88d6b","images/finishes/natural-hickory.jpg","images/finishes/tex/natural-hickory.jpg"],["Rustic Hickory Plank","#9e6f4c","images/finishes/rustic-hickory-plank.jpg","images/finishes/tex/rustic-hickory-plank.jpg"],["Dark Oak","#584239","images/finishes/dark-oak.jpg","images/finishes/tex/dark-oak.jpg"],["Medium Oak","#a6764e","images/finishes/medium-oak.jpg","images/finishes/tex/medium-oak.jpg"],["Knotty Alder Plank","#ba885b","images/finishes/knotty-alder-plank.jpg","images/finishes/tex/knotty-alder-plank.jpg"],["Natural Canary","#c49a72","images/finishes/natural-canary.jpg","images/finishes/tex/natural-canary.jpg"],["Natural Pecky Cypress","#996a42","images/finishes/natural-pecky-cypress.jpg","images/finishes/tex/natural-pecky-cypress.jpg"],["Natural Rosewood","#633b28","images/finishes/natural-rosewood.jpg","images/finishes/tex/natural-rosewood.jpg"],["Primitive Pine Plank","#5d3a25","images/finishes/primitive-pine-plank.jpg","images/finishes/tex/primitive-pine-plank.jpg"],["Straight Grain Oak","#a38468","images/finishes/straight-grain-oak.jpg","images/finishes/tex/straight-grain-oak.jpg"],["Walnut","#674b3a","images/finishes/walnut.jpg","images/finishes/tex/walnut.jpg"],["Walnut Tree Bark","#5f3d27","images/finishes/walnut-tree-bark.jpg","images/finishes/tex/walnut-tree-bark.jpg"],["Zebrawood","#8f7359","images/finishes/zebrawood.jpg","images/finishes/tex/zebrawood.jpg"],["Black Zebrawood","#312d2b","images/finishes/black-zebrawood.jpg","images/finishes/tex/black-zebrawood.jpg"],["Blonde Zebrawood","#bda085","images/finishes/blonde-zebrawood.jpg","images/finishes/tex/blonde-zebrawood.jpg"],["Walnut Zebrawood","#40200f","images/finishes/walnut-zebrawood.jpg","images/finishes/tex/walnut-zebrawood.jpg"],["Mottled Copper","#5e493c","images/finishes/mottled-copper.jpg","images/finishes/tex/mottled-copper.jpg"],["Dark Rust Mottled Copper","#331c16","images/finishes/dark-rust-mottled-copper.jpg","images/finishes/tex/dark-rust-mottled-copper.jpg"],["Patina Mottled Copper","#6f6f61","images/finishes/patina-mottled-copper.jpg","images/finishes/tex/patina-mottled-copper.jpg"],["Rust Mottled Copper","#623b28","images/finishes/rust-mottled-copper.jpg","images/finishes/tex/rust-mottled-copper.jpg"],["Titanium Granite","#31312f","images/finishes/titanium-granite.jpg","images/finishes/tex/titanium-granite.jpg"],["Dusty Gray Stone","#6b6b64","images/finishes/dusty-gray-stone.jpg","images/finishes/tex/dusty-gray-stone.jpg"],["Acadia Ledgestone","#666060","images/finishes/acadia-ledgestone.jpg","images/finishes/tex/acadia-ledgestone.jpg"],["Canyon Ledgestone","#907b69","images/finishes/canyon-ledgestone.jpg","images/finishes/tex/canyon-ledgestone.jpg"],["Sierra Brown Flagstone","#7a5e42","images/finishes/sierra-brown-flagstone.jpg","images/finishes/tex/sierra-brown-flagstone.jpg"],["Mossy Oak Camo","#61523d","images/finishes/mossy-oak-camo.jpg","images/finishes/tex/mossy-oak-camo.jpg"],["Realtree Camo","#705e47","images/finishes/realtree-camo.jpg","images/finishes/tex/realtree-camo.jpg"]];
var LIST=[0,1,2].map(function(li){return li===1?COLORS:COLORS.filter(function(c){return !c[2]})});
var LY=[{k:'roof',orig:"#444954"},{k:'siding',orig:"#4a494c"},{k:'fascia',orig:"#1f2124"}];
var cv=document.getElementById('rec'),cx=cv.getContext('2d',{willReadFrequently:true});
var base=null,mask=null,Lref=[.283,.176,.12],meanRGB=[[68,73,84],[74,73,76],[31,33,36]],ready=false;
var ST=[{orig:true,cur:null,id:0},{orig:true,cur:null,id:0},{orig:true,cur:null,id:0}];
function hex(h){return[parseInt(h.slice(1,3),16),parseInt(h.slice(3,5),16),parseInt(h.slice(5,7),16)]}
function paint(){
 if(!ready)return;var out=cx.createImageData(cv.width,cv.height),o=out.data,b=base.data,m=mask.data,w=cv.width,n=w*cv.height,T=ST[1].tex,tw=T?T.width:0,th=T?T.height:0,td=T?T.data:null;
 for(var i=0,p=0;i<n;i++,p+=4){var r=b[p],g=b[p+1],bl=b[p+2],L=(.299*r+.587*g+.114*bl)/255;
  for(var q=0;q<3;q++){var ma=m[p+q]/255,S=ST[q];
   if(!S.orig&&ma>.004){var k=Math.min(1.8,Math.pow(L/Lref[q],.85)),c0=S.cur[0],c1=S.cur[1],c2=S.cur[2];
    if(q===1&&td){var u=(i%w)%(2*tw),v=((i/w)|0)%(2*th);if(u>=tw)u=2*tw-1-u;if(v>=th)v=2*th-1-v;var tp=(v*tw+u)*4;c0=td[tp];c1=td[tp+1];c2=td[tp+2]}
    r+=(Math.min(255,c0*k)-r)*ma;g+=(Math.min(255,c1*k)-g)*ma;bl+=(Math.min(255,c2*k)-bl)*ma}}
  o[p]=r;o[p+1]=g;o[p+2]=bl;o[p+3]=255}
 cx.putImageData(out,0,0)}
var TEXSCALE=4.5; /* bigger number = smaller grain and knots on the siding */
var TEXC={};
function loadTex(src,cb){if(TEXC[src]){cb(TEXC[src]);return}var im=new Image();im.onload=function(){var c=document.createElement('canvas');c.width=Math.max(8,Math.round(im.naturalWidth/TEXSCALE));c.height=Math.max(8,Math.round(im.naturalHeight/TEXSCALE));var x=c.getContext('2d');x.imageSmoothingQuality='high';x.drawImage(im,0,0,c.width,c.height);TEXC[src]=x.getImageData(0,0,c.width,c.height);cb(TEXC[src])};im.src=(window.TEX&&TEX[src])||src}
function setLayer(li,idx){
 var st=ST[li],to=idx===0?meanRGB[li]:hex(LIST[li][idx-1][1]),isO=idx===0,id=++st.id;
 if(RM||!ready){st.cur=to.slice();st.orig=isO;paint();return}
 var from=(st.cur||meanRGB[li]).slice(),t0=performance.now();st.orig=false;
 (function step(now){if(id!==st.id)return;var u=Math.min(1,(now-t0)/320),e=u*u*(3-2*u);
  st.cur=[from[0]+(to[0]-from[0])*e,from[1]+(to[1]-from[1])*e,from[2]+(to[2]-from[2])*e];
  if(u>=1)st.orig=isO;paint();if(u<1)requestAnimationFrame(step)})(t0);
}
function choose(li,idx){
 var sw=document.getElementById('sw-'+LY[li].k);
 sw.querySelectorAll('button').forEach(function(b){b.setAttribute('aria-pressed',+b.dataset.i===idx)});
 if(li===1){var en=idx>0?LIST[1][idx-1]:null;if(en&&en[3]){ST[1].texSrc=en[3];loadTex(en[3],function(d){if(ST[1].texSrc===en[3]){ST[1].tex=d;paint()}})}else{ST[1].texSrc=null;ST[1].tex=null}}
 document.getElementById('pk-'+LY[li].k).textContent=idx===0?'':LIST[li][idx-1][0];
 setLayer(li,idx)}
LY.forEach(function(ly,li){
 var sw=document.getElementById('sw-'+ly.k),all=[["Original",ly.orig]].concat(LIST[li]);
 all.forEach(function(c,idx){var l=document.createElement('li'),b=document.createElement('button');b.type='button';b.title=c[0];b.style.setProperty('--c',c[1]);if(c[2]){b.style.backgroundImage='url('+c[2]+')';b.style.backgroundSize='cover'}b.setAttribute('aria-label',ly.k+' color: '+c[0]);b.dataset.i=idx;b.onclick=function(){choose(li,idx)};if(idx>0){l.appendChild(b);sw.appendChild(l)}});
 choose(li,0)});
var PH=new Image(),MK=new Image(),loaded=0;
function done(){if(++loaded<2)return;cv.width=PH.naturalWidth;cv.height=PH.naturalHeight;var t=document.createElement('canvas');t.width=cv.width;t.height=cv.height;var x=t.getContext('2d',{willReadFrequently:true});
 x.drawImage(PH,0,0,t.width,t.height);base=x.getImageData(0,0,t.width,t.height);x.clearRect(0,0,t.width,t.height);x.drawImage(MK,0,0,t.width,t.height);mask=x.getImageData(0,0,t.width,t.height);
 var s=[0,0,0],c=[0,0,0],sc=[[0,0,0],[0,0,0],[0,0,0]];
 for(var i=0,p=0;i<t.width*t.height;i++,p+=4){var lm=(.299*base.data[p]+.587*base.data[p+1]+.114*base.data[p+2])/255;
  for(var q=0;q<3;q++){if(mask.data[p+q]>128){s[q]+=lm;c[q]++;sc[q][0]+=base.data[p];sc[q][1]+=base.data[p+1];sc[q][2]+=base.data[p+2]}}}
 for(var q=0;q<3;q++)if(c[q]){Lref[q]=s[q]/c[q];meanRGB[q]=[sc[q][0]/c[q],sc[q][1]/c[q],sc[q][2]/c[q]]}
 ready=true;
 var fs=document.getElementById('fs-fascia');if(fs)fs.hidden=!c[2];
 [0,1,2].forEach(function(li){var sw=document.getElementById('sw-'+LY[li].k),cur=sw.querySelector('[aria-pressed=true]'),idx=cur?+cur.dataset.i:0;ST[li].cur=null;ST[li].orig=idx===0;if(idx>0)setLayer(li,idx);});
 paint()}
PH.onload=done;MK.onload=done;PH.src=REC.photo;MK.src=REC.mask;

document.getElementById('quote').addEventListener('submit',function(e){
 e.preventDefault();var m=document.getElementById('msg');
 if(!document.getElementById('ad').value.trim()){m.textContent='Enter the property address to continue.';return}
 m.textContent='This is a concept page, so nothing was sent.';
});

/* scroll animations */
var RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
function clamp(v){return Math.max(0,Math.min(1,v))}
function prog(el){var r=el.getBoundingClientRect(),st=el.firstElementChild,h=st?st.offsetHeight:innerHeight;return clamp((0-r.top)/Math.max(1,r.height-h))}
var hero=document.getElementById('hero');
hero.style.height=(hero.querySelectorAll('.cap').length*107)+'vh';
var himg=document.getElementById('himg'),himgs=[].slice.call(document.querySelectorAll('.hero img.bg')),caps=hero.querySelectorAll('.cap'),
 proc=document.getElementById('process'),scene=document.getElementById('scene'),lays=[].slice.call(scene.children),items=[].slice.call(document.getElementById('list').children),hdr=document.querySelector('header');
var MQ=matchMedia('(max-width:760px)'),ENG=false,stopAuto=function(){};
function tick(){
 hdr.classList.toggle('scrolled',scrollY>8);hdr.classList.toggle('gone',hero.getBoundingClientRect().bottom<90);
 if(MQ.matches&&!ENG){if(prog(hero)>.01){ENG=true;stopAuto()}}
 if(!MQ.matches||ENG||RM){var p=prog(hero),N=caps.length,seg=Math.min(N-1,Math.floor(p*N)),lp=p*N-seg;
 himgs.forEach(function(im,i){im.classList.toggle('on',i===seg);im.style.transform=RM?'':'scale('+(1+(i===seg?lp:0)*.2)+')'});
 caps.forEach(function(c,i){c.classList.toggle('on',i===seg)});}
 var q=prog(proc),act=Math.min(5,Math.floor(q*6.2));
 scene.style.setProperty('--gap',(6+Math.min(1,q*2.2)*(innerWidth>900?40:26))+'px');
 lays.forEach(function(l,i){l.classList.toggle('on',i===5-act)});
 items.forEach(function(d,i){d.classList.toggle('on',i===5-act)});
}
(function(){var i=0,timer=null,n=himgs.length;
 function show(k){i=k;himgs.forEach(function(im,j){var a=j===k;im.classList.toggle('on',a);
  if(a){im.style.transition='none';im.style.transform='scale(1)';void im.offsetWidth;im.style.transition='opacity .8s ease,transform 7s linear';im.style.transform='scale(1.14)'}
  else{setTimeout(function(){if(!im.classList.contains('on')){im.style.transition='none';im.style.transform='scale(1)'}},900)}});
  caps.forEach(function(c,j){c.classList.toggle('on',j===k)})}
 function start(){if(timer||RM||!MQ.matches||ENG)return;show(i);timer=setInterval(function(){show((i+1)%n)},5500)}
 function stop(){if(timer){clearInterval(timer);timer=null}}
 stopAuto=function(){stop();himgs.forEach(function(im){im.style.transition='';im.style.transform=''})};
 function sync(){if(MQ.matches)start();else{stop();himgs.forEach(function(im){im.style.transition='';im.style.transform=''});tick()}}
 document.addEventListener('visibilitychange',function(){document.hidden?stop():sync()});
 (MQ.addEventListener?MQ.addEventListener('change',sync):MQ.addListener(sync));
 sync();})();
addEventListener('scroll',tick,{passive:true});addEventListener('touchmove',tick,{passive:true});addEventListener('resize',tick);tick();
(function(){var ly=-1;function loop(){if(scrollY!==ly){ly=scrollY;tick()}requestAnimationFrame(loop)}requestAnimationFrame(loop)})();





/* reveal on scroll */
(function(){if(RM||!('IntersectionObserver' in window))return;
 var els=[].slice.call(document.querySelectorAll('.card,.grid figure,.mix .copy,.prev,form,.since .wrap>*'));
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.remove('pre');io.unobserve(e.target)}})},{threshold:.12});
 els.forEach(function(el,i){el.classList.add('rv');if(el.getBoundingClientRect().top>innerHeight){el.style.transitionDelay=((i%4)*80)+'ms';el.classList.add('pre');io.observe(el)}});
})();
