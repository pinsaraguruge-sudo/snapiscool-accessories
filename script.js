
// Simple home carousel auto-slide
(function(){
  const home = document.getElementById('homeCarousel');
  if(!home) return;
  let idx=0;
  const slides = Array.from(home.children);
  function show(i){
    slides.forEach((s,si)=> s.style.transform = `translateX(${(si-i)*100}%)`);
  }
  show(0);
  setInterval(()=>{ idx=(idx+1)%slides.length; show(idx); }, 3000);
})();

// Product carousel swipe/next-prev (basic)
(function(){
  const prod = document.getElementById('prodCarousel');
  if(!prod) return;
  const imgs = Array.from(prod.querySelectorAll('img'));
  let current = 0;
  function show(i){ imgs.forEach((im,ii)=> im.style.transform=`translateX(${(ii-i)*100}%)`); }
  imgs.forEach(im=>{ im.style.minWidth='100%'; im.style.transition='transform 300ms ease'; });
  show(0);
  prod.addEventListener('click', ()=>{ current=(current+1)%imgs.length; show(current); });
})();

// color buttons (only change active state, do NOT change image)
(function(){
  const btns = document.querySelectorAll('.color-btn');
  btns.forEach(b=> b.addEventListener('click', ()=>{
    btns.forEach(x=> x.classList.remove('active'));
    b.classList.add('active');
  }));
})();

// qty controls
(function(){
  const qval = document.getElementById('qval');
  let val = 1;
  document.getElementById('qminus').addEventListener('click', ()=>{ val=Math.max(1,val-1); qval.textContent=val; });
  document.getElementById('qplus').addEventListener('click', ()=>{ val=val+1; qval.textContent=val; });
})();

// currency detect (simple)
(function(){
  const userLang = navigator.language || navigator.userLanguage || 'en-US';
  const priceEl = document.getElementById('price');
  if(userLang.includes('LK') || userLang.includes('si') || userLang.includes('ta')){
    priceEl.textContent = 'Rs. 1600';
  } else {
    priceEl.textContent = '$8.50';
  }
})();

// cart/buy buttons (placeholders)
(function(){
  document.getElementById('addCart').addEventListener('click', ()=>{
    const color = document.querySelector('.color-btn.active').dataset.color;
    const qty = document.getElementById('qval').textContent;
    alert(`Added ${qty} x Snapiscool Wallets (${color}) to cart. Checkout (PayHere/PayPal/COD) will be integrated next.`);
  });
  document.getElementById('buyNow').addEventListener('click', ()=>{
    alert('Buy Now clicked — will redirect to checkout (placeholder).');
  });
})();
