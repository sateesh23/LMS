document.querySelector('#menu-btn').onclick = () =>{
  sideBar.classList.toggle('active');
  body.classList.toggle('active');
}
document.querySelector('#close-btn').onclick = () =>{
  sideBar.classList.remove('active');
  body.classList.remove('active');
}