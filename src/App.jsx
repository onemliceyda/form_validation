import { useRef } from "react";
import "./app.css";
import FormInput from "./components/FormInput";
const App = () => {
  // const [username,setUsername]=useState("")
  const usernameRef = useRef();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(usernameRef);
  };
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <FormInput refer={usernameRef} placeholder="Username" />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Full Name" />
        <FormInput placeholder="Sth else" />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default App;
