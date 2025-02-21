let pArr = [] ;

const getPost = async (mvName) => {
  let apiKey = '' ;
  let baseUrl = 'https://api.themoviedb.org/3/search/movie?' ;
  let url = `${baseUrl}api_key=${apiKey}&query=${mvName}`;

  console.log('getPost',url);
  try {
    const resp = await fetch(url) ;
    const data = await resp.json() ;

    console.log(data.results[0])
    if (data.results[0] == undefined)
      pArr.push(0)
    else pArr.push(data.results[0].poster_path);
  } catch(err) {
    console.log(err);
  }
  
}
const getFetch = async(dt, ul) => {
  let apiKey = '' ;
  let baseUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?' ;
  let url = `${baseUrl}key=${apiKey}&targetDt=${dt}` ;
  console.log('getFetch',url);
  const poster = document.querySelector('#mvPost') ;

  // fetch API 
  try{
    const resp = await fetch(url) ; 
    const data = await resp.json() ;
    console.log(data.boxOfficeResult.dailyBoxOfficeList)

    let tags = '' ;
    for(let [k, item] of data.boxOfficeResult.dailyBoxOfficeList.entries()) {
      tags = tags + 
          `<li>
            <span class="sp">${item.rank}</span>
            ${item.movieNm}
          </li>` ;
      await getPost(item.movieNm) ;
    }
    console.log("pArr",pArr) ;
    ul.innerHTML = tags ;
    const lis = document.querySelectorAll('li') ; 
    
    for (let [i,li] of lis.entries()) {
      li.addEventListener("mouseenter", ()=>{
        console.log("mouseenter",pArr)
        if (pArr[i] == 0)
          poster.innerHTML = '포스터제공안됨'
        else
            poster.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${pArr[i]}">` ;
      });
    }
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
    const poster = document.querySelector('#mvPost') ;
    pArr = [];
    poster.innerHTML = '' ;

    console.log(dt.value);
    getFetch(dt.value.replaceAll('-', ''), ul) ;
  });
 

});
