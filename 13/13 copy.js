const getFetch = async(dt, ul) => {
  let apiKey = '2a350cfbca6c428eb04c71e21cc681e7' ;
  let baseUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?' ;
  let url = `${baseUrl}key=${apiKey}&targetDt=${dt}` ;
  console.log('getFetch',url);
  // fetch API 
  try{
    const resp = await fetch(url) ; 
    const data = await resp.json() ;
    console.log(data.boxOfficeResult.dailyBoxOfficeList)

    let tags = '' ;
    for(let item of data.boxOfficeResult.dailyBoxOfficeList) {
      tags = tags + 
          `<li>
            <span class="sp">${item.rank}</span>
            ${item.movieNm}
          </li>` ;
    }
    ul.innerHTML = tags ;

  } catch(err) {
    console.log(err)
  }
  
}

document.addEventListener('DOMContentLoaded', ()=>{
  //필요한 요소 가지고 오기
  const dt = document.querySelector('#dt') ;
  const ul = document.querySelector('ul') ;

  dt.addEventListener('change', (e)=>{
    e.preventDefault();

    console.log(dt.value);
    getFetch(dt.value.replaceAll('-', ''), ul) ;
  });

});