const regBtn = document.getElementById("registration-btn");
const loginBtn = document.getElementById("login-btn");
const regForm = document.getElementById("registration-form");
const loginForm = document.getElementById("login-form");

loginForm.classList.add("left");

regBtn.addEventListener("click", () => {
  loginForm.classList.remove('left');
  regForm.classList.add('right');
});
loginBtn.addEventListener("click", () => {
  loginForm.classList.add('left');
  regForm.classList.remove('right');
});

/*=============== SHOW HIDDEN - PASSWORD ===============*/
const togglePasswordVisibility = (input, iconEye) => {
  iconEye.addEventListener("click", () => {
    //change password to text
    if (input.type === "password") {
      input.type = "text";
      //icon change
      iconEye.classList.add("ri-eye-line");
      iconEye.classList.remove("ri-eye-off-line");
    } else {
      input.type = "password";
      //icon change
      iconEye.classList.remove("ri-eye-line");
      iconEye.classList.add("ri-eye-off-line");
    }
  });
};

const showHiddenPass = (
  loginPass,
  loginEye,
  regPass,
  regEye,
  regCPass,
  regCEye
) => {
  const input = document.getElementById(loginPass);
  const iconEye = document.getElementById(loginEye);
  const regInput = document.getElementById(regPass);
  const regfirstEye = document.getElementById(regEye);
  const regCInput = document.getElementById(regCPass);
  const regSecondEye = document.getElementById(regCEye);

  iconEye.addEventListener("click", () => {
    togglePasswordVisibility(input, iconEye);
  });

  regfirstEye.addEventListener("click", () => {
    togglePasswordVisibility(regInput, regfirstEye);
  });

  regSecondEye.addEventListener("click", () => {
    togglePasswordVisibility(regCInput, regSecondEye);
  });
};

showHiddenPass(
  "login-pass",
  "login-eye",
  "reg-pass",
  "reg-eye",
  "reg2-pass",
  "reg2-eye"
);
