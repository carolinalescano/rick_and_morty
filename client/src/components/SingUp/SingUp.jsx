import { useState } from "react";
import validate from "./validate";
import axios from "axios";

const SignUp = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    birthdate: "",
    sex: "",
  };

  const [inputs, setInputs] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    setErrors(validate({ ...inputs, [event.target.name]: event.target.value }));
  };
  const signUp = (userData) => {
    const URL = "http://localhost:3001/rickandmorty/signup/";
    axios.post(URL, userData);
  };

  const handleSubmit = () => {
    signUp(inputs);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={inputs.name}
        />
        {errors.name && <p>{errors.name}</p>}
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={inputs.email}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={inputs.password}
        />
        {errors.password && <p>{errors.password}</p>}
        <label>Fecha de nacimiento</label>
        <input
          type="date"
          onChange={handleChange}
          name="birthdate"
          value={inputs.birthdate}
        />
        {errors.birthdate && <p>{errors.birthdate}</p>}
        <label>Sexo</label>
        <select id="sex" name="sex" onChange={handleChange} value={inputs.sex}>
          <option value="" selected>
            Selecciona una opción
          </option>
          <option value="masculino" id="sex" name="sex">
            Masculino
          </option>
          <option value="femenino" id="sex" name="sex">
            Femenino
          </option>
        </select>
        {errors.sex && <p>{errors.sex}</p>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default SignUp;
