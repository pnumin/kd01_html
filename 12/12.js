document.addEventListener('DOMContentLoaded', ()=>{
  const cols = document.querySelectorAll('.col') ;

  for(let [idx, col] of cols.entries()) {
    col.innerHTML = idx + 1 ;
  }
});