let footer = document.querySelector('.footer');
let divResize = document.createElement('div');
divResize.className = 'footer__resize';
divResize.textContent = `window size: ${window.innerWidth} x ${window.innerHeight}`;
footer.appendChild(divResize);

 const showResize = () => {
     setTimeout(function(){
         divResize.textContent = `window size: ${window.innerWidth} x ${window.innerHeight}`;
     }, 2000);
};

window.onresize = showResize;
showResize();