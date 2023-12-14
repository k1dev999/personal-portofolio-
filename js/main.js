
//dark mode theme here
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');


toggle.addEventListener('click', function(){
  this.classList.toggle('bi-moon');
  if(this.classList.toggle('bi-brightness-high-fill')){
    body.style.background = 'white';
    body.style.color = 'black';
    body.style.transition = '2s';
  }else{
    body.style.background = 'black';
    body.style.color = 'black';
    body.style.transition = '2s';
  }
})



//back to top arrow
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
