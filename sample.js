window.onload = function() {
  const spinner = document.getElementById('loading');
 
  // Add .loaded to .loading
  spinner.classList.add('loaded');
}

const pics_src = ["top1.jpg","top2.jpg","top3.jpg"];
let num = -1;
 
 
function slideshow_timer(){
  if (num === 2){
    num = 0;
  } 
  else {
    num ++;
  }
  document.getElementById("mypic").src = pics_src[num];
}
 
setInterval(slideshow_timer, 1000);
