// retrieve password and message
const password = document.getElementById('user_password');
const confirm_pw = document.getElementById('confirm_password');
const pw_msg = document.getElementById('message');
// check if the passwords match or not
var check = function() {
    if (password.value == null) {
        pw_msg.textContent = 'enter password';
    } else if (confirm_pw.value == null) {
        pw_msg.textContent = 'confirm password';
    } else if (password.value == confirm_pw.value) {
      pw_msg.style.color = 'green';
      pw_msg.textContent = 'password matches';
    } else {
        pw_msg.style.color = 'red';
        pw_msg.textContent = 'passwords do not match';
    }
  }
