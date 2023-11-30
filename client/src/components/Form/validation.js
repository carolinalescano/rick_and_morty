const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/;

const validate = (state) => {
  const errors = {};
  if (!regexEmail.test(state.email)) {
    errors.email = "Debe ingresar un email valido";
  } else if (state.email.lenght > 35) {
    errors.email = "El email no puede tener mas de 35 caracteres";
  } else if (!regexPassword.test(state.password)) {
    errors.password = "Debe ingresar un password válido";
  }
  return errors;
};

export default validate;
