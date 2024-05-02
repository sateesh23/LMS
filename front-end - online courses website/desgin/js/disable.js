const disableDarkMode = () =>{
  toggleBtn.classList.replace('fa-moon', 'fa-sun');
  body.classList.remove('dark');
  localStorage.setItem('dark-mode', 'disabled');
}

