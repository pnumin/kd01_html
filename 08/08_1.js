document.addEventListener('DOMContentLoaded', ()=>{
  //button요소 모두 가져오기
  //1개인 경우도 결과는 노드리스트 
  const bts = document.querySelectorAll('button');
  console.log(bts)
  
  //노드리스트 순회 
  for(let bt of bts) {
    bt.addEventListener('click', () => {
      //속성 변경경
      bt.setAttribute("id", bt.textContent);
      console.log(bt.getAttribute) ;
    }) ;
  }
}) ;