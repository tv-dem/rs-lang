export default function fullScreen (){
  const container = document.querySelector(".transition-group");
  if (document.fullscreenElement){
    container.classList.remove("fullScreen");
  document.exitFullscreen();
  } else {
  container.classList.add("fullScreen");
  document.documentElement.requestFullscreen();
  }
    }