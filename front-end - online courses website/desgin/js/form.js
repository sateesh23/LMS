
const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="pass"]');


document.querySelector('form').addEventListener('submit', function(event) {
  
  event.preventDefault();

  // Validate the email field
  if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Validate the password field
  if (password.value.length < 8) {
    alert('Please enter a password with at least 8 characters.');
    return;
  }
  
  this.submit();
});