var check = function() {
    if (document.getElementById('password').value ===
      document.getElementById('confirm_password').value) {
      document.getElementById('message').style.cssText = "color: green; letter-spacing: 0.01rem; font-family: sans-serif";
      document.getElementById('message').innerHTML = 'Matching';
    } else {
      document.getElementById('password').style.cssText = "border-color: red";
      document.getElementById('confirm_password').style.cssText = "border-color: red";
      document.getElementById('message').style.cssText = "color: red; letter-spacing: 0.01rem; font-family: sans-serif";
      document.getElementById('message').innerHTML = '* Passwords do not match';
    }
  }