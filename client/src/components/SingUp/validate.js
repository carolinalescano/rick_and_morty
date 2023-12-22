const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/;

const validate = (state) => {
  const errors = {};

  const { name, email, password, birthdate, sex } = state;
  switch (state) {
    case !name:
      errors.name = "Debe cargar un nombre";
      break;

    case !regexEmail.test(state.email):
      errors.email = "Ingresa un email válido";
      break;
    case email.length > 35:
      errors.email = "el mail debe ser menor a 35 caracteres";
      break;
    case !regexPassword.test(password):
      errors.password =
        "la password debe tener entre 8 a 16 caracteres, al menos un digito, al menos una letra minuscula y una letra mayúsucula";
      break;
    case !birthdate:
      errors.birthdate = "debe colocar su fecha de nacimiento";
      break;
    case !sex:
      errors.sex = "debe elegir un sexo";
      break;
  }
  return errors;
};

export default validate;
