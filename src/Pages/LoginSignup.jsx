import "./Login.css";
const LoginSignup = () => {
  return (
    <div className="loginpage">
      <div className="logincontainer">
        <h1>Sign Up</h1>
        <div className="loginsignpage">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <input type="passeord" placeholder="password" />
        </div>
        <div className="agree">
          <input type="checkbox" name="" id=" " />
          <p>By Continuing ,i agree to terms of use and privacy policy</p>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account?<span>Login here</span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
