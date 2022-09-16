import { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";
const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:"Username should be 3-16 characters and shouldn't include any special character! ",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required:true
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "E-mail",
      errorMessage:"It shoul be valid e-mail address !",
      label: "E-mail",
      required:true
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:"Password should be 8-20 character.",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required:true
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage:"Passwords don't match !",
      label: "Confirm Password",
      pattern: values.password,
      required:true
      
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value }); //varolan değeri forma girilen değer ile değiştirmeyi sağlayan metod
  };
  console.log(values);
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}//degerleri ait olduğu stringin içerisine atayacak olan kısım
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};
export default App;
