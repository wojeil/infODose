document.addEventListener("Content", function () {
    //init modals
    var modals = document.querySelectorAll(".modal");
    Modal.init(modals);
  });
  
  
  var submitBtn = $("#submit");

  const signupForm = document.querySelector('#loginform');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const email = signupForm['emailInput'].value;
    const password = signupForm['passwordInput'].value;

  
      const modal = document.querySelector('#modal-login');
      signupForm.reset();
  });
  
  
  const loginForm = document.querySelector('#regform');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const email = loginForm['emailInputReg'].value;
    const password = loginForm['passwordInputReg'].value;
  
      //localStorage.setItem("email", email);

      const modal = document.querySelector('#modal-login');
      loginForm.reset();
  });