const refs = {
  navigation: document.querySelector('#tabs [data-navigation]'),
  content: document.querySelector('#tabs [data-main-conten]')
}
refs.navigation.addEventListener("click",onChangeNavigations)

function onChangeNavigations(e){
  const {target} = e

  if(target.nodeName !== "LI") return;
  const currentBtn = target;
  clearPrevClasses();
  addCurrentClass(currentBtn);
}
function clearPrevClasses(){
  const prevActiveBtn = refs.navigation.querySelector(".work__item-active")
  const prevActiveContent = refs.content.querySelector(".work__grid-show")
 
  if(prevActiveBtn){
   prevActiveBtn.classList.remove("work__item-active")
   prevActiveContent.classList.remove("work__grid-show")
  }
}
function addCurrentClass(currentBtn){
  
  const currenTab = currentBtn.dataset.tab;
  const currentContent = refs.content.querySelector(`[data-content=${currenTab}]`)
  
  currentBtn.classList.add("work__item-active")
  currentContent.classList.add("work__grid-show")
}