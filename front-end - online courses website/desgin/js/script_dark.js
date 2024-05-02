toggleBtn.onclick = (e) =>{
  darkMode = localStorage.getItem('dark-mode');
  if(darkMode === 'disabled'){
     enableDarkMode();
  }else{
     disableDarkMode();
  }
}