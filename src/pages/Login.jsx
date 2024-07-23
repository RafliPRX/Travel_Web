import GroupComponent from "../component/GroupComponent";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-5">
      <img
        className="the-interior-has-a-armchair-on-icon"
        alt=""
        src="https://img.freepik.com/free-photo/sunny-tropical-landscape_23-2150466940.jpg?t=st=1721698855~exp=1721702455~hmac=00a1e5b82683dbe0961fa04ac505176f395e8ee27f90363ae7e14809a0aef950&w=1380"
      />
      <a className="your-logo">Your Logo</a>
      <div className="login-5-inner">
        <GroupComponent />
      </div>
    </div>
  );
};

export default Login;