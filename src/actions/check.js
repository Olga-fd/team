export const checkEmail = (inputEmail, setErrorEmail) => {
  const regExp = /^[\w]{1}[\w-\.]+@[\w-]+\.[a-z]{2,6}$/i;

  if (inputEmail.length == 0 || !regExp.test(inputEmail)) {
    setErrorEmail("Ошибка");
  } else {
    setErrorEmail("");
  }
};

export const checkName = (inputName, setErrorName) => {
  const regExp = /^[a-zA-Z0-9\s?!*\/,.]+$/;

  if (regExp.test(inputName)) {
    setErrorName("Недопустимый формат");
  } else if (inputName.length == 0) {
    setErrorName("Необходимо ввести имя");
  } else {
    setErrorName("");
  }
};

export const checkPassword = (inputPassword, setErrorPassword) => {
  const regExp = /[0-9a-zA-Z!@#$%^&*]{6,}/g;

  if (!regExp.test(inputPassword) || inputPassword.length == 0) {
    setErrorPassword("Ошибка");
  } else {
    setErrorPassword("");
  }
};

export const confirmPassword = (
  inputConfirm,
  inputPassword,
  setErrorConfirm
) => {
  if (inputConfirm !== inputPassword) {
    setErrorConfirm("Пароли не совпадают");
  } else return;
};
