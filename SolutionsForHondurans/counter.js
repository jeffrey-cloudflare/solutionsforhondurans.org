(function(){
  const KEY='solutionsforhondurans_visits';
  let visits = parseInt(localStorage.getItem(KEY) || '1072',10);
  document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.counter').forEach(el => {
      el.textContent = visits.toLocaleString();
    });
    localStorage.setItem(KEY, (visits+1).toString());
  });
})();
