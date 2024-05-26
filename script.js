const password = document.getElementById('user_password');
const confirm_pw = document.getElementById('confirm_password');
const pw_msg = document.getElementById('message');
var check = function() {
    if (password.value == null) {
        pw_msg.textContent = 'enter password';
    } else if (confirm_pw.value == null) {
        pw_msg.textContent = 'confirm password';
    }
    if (password.value == confirm_pw.value) {
      pw_msg.style.color = 'green';
      pw_msg.textContent = 'password matches';
    } else {
        pw_msg.style.color = 'red';
        pw_msg.textContent = 'passwords do not match';
    }
  }