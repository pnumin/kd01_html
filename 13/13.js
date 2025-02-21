
const getYesterday = () => {
  let dt = new Date() ;
  dt.setDate(dt.getDate() - 1) ;

  //년도
  let year = dt.getFullYear() ;

  //월
  let month = String(dt.getMonth() + 1).padStart(2, '0') ;
  // month = month < 10 ? '0' + month : month ;

  //일 
  let day = String(dt.getDate()).padStart(2,'0') ;

  return (year + '-' + month + '-' + day);
}

document.addEventListener('DOMContentLoaded', ()=>{
  const inputDate = document.querySelector('[type=date]') ;
  const radios = document.querySelectorAll('[type=radio]') ;

  //어제 날짜 
  const yesterday = getYesterday() ;
  inputDate.max = yesterday ;
  console.log(yesterday);
});