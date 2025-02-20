let arr = [0,0,0,0,0,0,0,0,1] ;
let isFlag = false ;

const init = (cols) => {
  // 배열의 내용 섞기
  arr.sort(() => Math.random() - 0.5) ;

  // 셔플 플래그 초기화 
  isFlag = true ;

  //보드에 숫자 쓰기 
  for(let [idx, col] of cols.entries()) {
    col.innerHTML = '' ;
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  //제어할 요소 가져오기
  const cols = document.querySelectorAll('.col') ;
  const bt = document.querySelector('button') ;
  const msg = document.querySelector('#msg') ;

  //하트개수  
  let cnt = 0 ;

  //보드에 클릭 이벤트 발생 
  for(let [idx, col] of cols.entries()) {
    col.addEventListener('click' , () => {
      
      if (!isFlag) {
        msg.innerHTML = "폭탄을 섞어주세요." ;
        return ;
      } 

      //실패가 된 경우
      if (msg.innerHTML.includes('실패')) return ;

      console.log(idx, col, col.innerHTML);
      if ( arr[idx] == 0 ) {
        col.innerHTML = '<img src="../img/hart.png">' ;
        //하트개수 증가
        cnt = cnt + 1 ;

        //하트개수가 8개이면 성공 
        if (cnt == 8) {
          msg.innerHTML = "성공!" ;

          bt.innerHTML = "폭탄섞기" ;
          isFlag = false ;
          cnt = 0 ;

          //1이 있는 위치에 하트 추가 
          cols[arr.indexOf(1)].innerHTML = '<img src="../img/hart.png">' ;
        }
      }
      else if ( arr[idx] == 1 ) {
        // 실패
        col.innerHTML = '<img src="../img/boom.png">' ;
        msg.innerHTML = "실패!" ;

        bt.innerHTML = "폭탄섞기" ;
        isFlag = false ;
      }
    }) ;
  }

  //버튼 클릭
  bt.addEventListener('click' , () => {
    console.log("bt")
    if (!isFlag) {    
      msg.innerHTML = "" ;
      bt.innerHTML = "게임중..." ;

      init(cols);
      console.log(isFlag , arr) ;
    }
  }) ;
});