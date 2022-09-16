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
      label: "Username",
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "E-mail",
      label: "E-mail",
    },
    {
      id: 3,
      name: "birthday",
      type: "text",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
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
        {" "}
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
