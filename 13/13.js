//영화진흥위원회
const mvApi = '2a350cfbca6c428eb04c71e21cc681e7' ;
const baseMvUrl = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;

const getBoxOfficeList = async() => {
  const mvType = document.querySelector('[type=radio]:checked').value ;
  const dt = document.querySelector('[type=date]').value.replaceAll('-','') ;
  console.log("mvType", mvType, dt)

  let url = `${baseMvUrl}&key=${mvApi}&targetDt=${dt}` ;
  if (mvType == 'K' || mvType == 'F' ) {
    url =`${url}&repNationCd=${mvType}` ;
  }

  console.log("url",url)
}


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
  const bt = document.querySelector('button') ;
  
  //어제 날짜 
  const yesterday = getYesterday() ;
  inputDate.max = yesterday ;
  inputDate.value = yesterday ;
  

  //박스오피스 가져오기
  getBoxOfficeList() ;
  
  bt.addEventListener('click', (e)=>{
    e.preventDefault();
    
    getBoxOfficeList() ;
  });

  console.log(yesterday);
});