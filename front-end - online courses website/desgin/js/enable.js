const enableDarkMode = () =>{
  toggleBtn.classList.replace('fa-sun', 'fa-moon');
  body.classList.add('dark');
  localStorage.setItem('dark-mode', 'enabled');
}
