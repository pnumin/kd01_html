// DOM 로드가 될을 때
document.addEventListener('DOMContentLoaded', ()=>{
  const bts = document.querySelectorAll('button') ;
  const imgs = document.querySelectorAll('img') ;
  const msg = document.querySelector('#msg') ;
  
  for(let bt of bts) {
    bt.addEventListener('click', ()=>{
      // computer의 숫자와 그림 변경
      let comN = Math.floor(Math.random() * 6) + 1 ;
      imgs[0].setAttribute('src', `../img/${comN}.png`);
      imgs[0].setAttribute('alt', `${comN}`);

      // user의 숫자와 그림 변경
      // let userN = parseInt(bt.textContent.slice(0, 1)) ;
      let userN = parseInt(bt.textContent.charAt[0]) ;
      imgs[1].setAttribute('src', `../img/${userN}.png`);
      imgs[1].setAttribute('alt', `${userN}`);

      // computer와 user 숫자 비교
      // if (comN == userN) msg.innerHTML = '맞음' ;
      // else msg.innerHTML = '틀림' ;
      (comN == userN) ? msg.innerHTML = '맞음' : msg.innerHTML = '틀림'
    }) ;
  }


});