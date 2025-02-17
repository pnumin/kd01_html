// 단위변경 
const unitChange = (s1, s2, txt1, txt2, sps) => {
  if (s1.value == "℃") s2.value = "℉" ; 
  else s2.value = "℃" ;  

  sps[0].textContent = s1.value;
  sps[1].textContent  = s2.value;
  txt1.value = "" ;
  txt2.value = "" ;
  txt1.focus();
}

// DOM 생성 후
document.addEventListener('DOMContentLoaded',()=>{
  // DOM 요소 가져오기
  //select box
  const sel1 = document.getElementById('sel1') ;
  const sel2 = document.querySelector('#sel2') ;

  //input box
  // const txt1 = document.querySelector('input') ;
  // const txt2 = document.querySelector('input[readonly]');
  const txt1 = document.querySelector('.unit input') ;
  const txt2 = document.querySelector('.unit input[readonly]') ;

  //span -> node list
  const sps = document.querySelectorAll('span') ;

  
  
  // console.log(txt1.value)
  // console.log(txt2.value)
  // console.log(sps[0].textContent)
  // console.log(sps[1].inn)

  // 첫번째 select 값이 변경이 되었을때
  sel1.addEventListener('change',()=>{
    console.log("sel1", sel1.value)
    unitChange(sel1, sel2, txt1, txt2, sps) ;
    
  });

  // 두번째 select 값이 변경이 되었을때
  sel2.addEventListener('change',()=>{
    unitChange(sel2, sel1, txt1, txt2, sps) ;
  });
}) ;