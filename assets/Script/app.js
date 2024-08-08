window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 100) {
    document.getElementById("heading").className = "scroll";
  } else {
    document.getElementById("heading").className = "";
  }
}

const gridReveal = document.querySelectorAll('.grid_project'); 

for(let i = 0; i < gridReveal.length; i++){
  gridReveal[i].addEventListener('mouseover' , ()=>{
    gridReveal[i].childNodes[3].childNodes[1].classList.add('.project_images');
    gridReveal[i].childNodes[3].childNodes[1].style.opacity = '0.1'; 
    gridReveal[i].childNodes[1].classList.remove('grid_project_paragraph_dormant');
  })
  gridReveal[i].addEventListener('mouseout' , ()=>{
    gridReveal[i].childNodes[3].childNodes[1].classList.remove('.project_images');
    gridReveal[i].childNodes[3].childNodes[1].style.opacity = '1';
    gridReveal[i].childNodes[1].classList.add('grid_project_paragraph_dormant'); 
  })
}

// MEDIA QUERY

const menu = document.querySelector('.menu');
const nav  = document.querySelector('#nav');
const ul = document.querySelector('#header_ul'); 
let menuDisplay = 0;
menu.addEventListener('click',()=>{
  if(menuDisplay == 0){
      menuDisplay = 1;
      menu.childNodes[1].classList.remove('fa-bars');
      menu.childNodes[1].classList.add('fa-xmark');
      
      nav.style.display = 'block';
      nav.style.alignSelf = 'flex-end';

      ul.style.display = 'flex';
      ul.style.flexWrap = 'wrap';
      ul.style.position = 'absolute';
      ul.style.left = '0px';
      ul.style.right = '0px';
      ul.style.backgroundColor = '#fff';
      ul.style.padding = '10px 0';
      ul.style.transition = '0.4s ease';
      ul.childNodes[9].classList.remove('contact')
    
  } else{
      menuDisplay = 0;
      menu.childNodes[1].classList.remove('fa-xmark');  
      menu.childNodes[1].classList.add('fa-bars');
      nav.style.display = 'none';
      console.log('hey');

  }
   
})
