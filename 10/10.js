// 단위변경 
const unitChange = (s1, s2, t1, t2, sp1, sp2) => {
  if (s1.value == "℃") s2.value = "℉" ; 
  else s2.value = "℃" ;  

  sp1.textContent = s1.value;
  sp2.textContent  = s2.value;

  t1.value = "" ;
  t2.value = "" ;
  txt1.focus();
}

const unitChange2 = (s1, s2 ,txt1, txt2, sps) => {
  let s1Id = s1.getAttribute('id') ;
  console.log("s1Id" ,  s1Id)
  if (s1Id != 'sel1') {
    let stp = s1 ;
    s1 = s2;
    s2 = stp;
  }
  
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
    // unitChange(sel1, sel2, txt1, txt2, sps[0], sps[1]) ;
    unitChange2(sel1, sel2, txt1, txt2, sps) ;
    
  });

  // 두번째 select 값이 변경이 되었을때
  sel2.addEventListener('change',()=>{
    unitChange(sel2, sel1, txt2, txt1, sps[1], sps[0]) ;
  });

  //input 입력
  txt1.addEventListener('input', () => {
    console.log(txt1.value) ;
    
    if (sel1.value == "℃") {  // 섭씨 -> 화씨
      txt2.value = (( parseFloat(txt1.value) * (9 / 5) ) + 32).toFixed(4) ;
    }
    else {  //화씨 -> 섭씨
      txt2.value = ((parseFloat(txt1.value) - 32) * (5/9)).toFixed(4) ;
    }

  }) ;

}) ;