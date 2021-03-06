import "./App.css";
import Contact from "../components/contact";
import UserProfile from "../components/userProfile";

const Forms = () => {
  return (
    <div>
      <header className="App-header">
        <div className="container-login100">
          <p>
            <UserProfile />
          </p>
        </div>
      </header>
      <div className="App">
        <header className="App-header">
          <p>
            <Contact />
          </p>
        </header>
      </div>
    </div>
  );
};

export default Forms;
