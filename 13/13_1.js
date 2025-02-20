/* .then 
const getFetch = () => {
  
  let apiKey = '' ;
  let baseUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?' ;
  let url = `${baseUrl}key=${apiKey}&targetDt=20250219` ;

  // fetch API 
  fetch(url)
    .then(resp => resp.json() ) 
    .then(data => console.log(data.boxOfficeResult.dailyBoxOfficeList))
    .catch(err => console.log(err));

  console.log('getFetch',url);
}
*/

const getFetch = async () => {
  
  let apiKey = '' ;
  let baseUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?' ;
  let url = `${baseUrl}key=${apiKey}&targetDt=20250219` ;

  // fetch API 
  try{
    const resp = await fetch(url) ; 
    const data = await resp.json() ;
    console.log(data.boxOfficeResult.dailyBoxOfficeList)
  } catch(err) {
    console.log(err)
  }
  console.log('getFetch',url);
}


document.addEventListener('DOMContentLoaded', ()=>{
  const bt = document.querySelector('button') ;

  bt.addEventListener('click', ()=>{
    getFetch();
  }) ;
});