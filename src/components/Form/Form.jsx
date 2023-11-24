import { useState } from "react";
import styles from "./Form.module.css";
import validate from "./validation.js";
import image from "./../../assets/img/rick&mortyPurple.gif";

const Form = (props) => {
  const initialState = { email: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validate({ ...userData, [event.target.name]: event.target.value })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <img src={image}></img>
        <label>Email</label>
        <input
          onChange={handleChange}
          type="text"
          placeholder=""
          value={userData.email}
          name="email"
        />
        {errors.email ? <p>{errors.email}</p> : null}
        <label>Password</label>
        <input
          onChange={handleChange}
          type="text"
          value={userData.password}
          name="password"
        />
        {errors.password ? <p>{errors.password}</p> : null}

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
