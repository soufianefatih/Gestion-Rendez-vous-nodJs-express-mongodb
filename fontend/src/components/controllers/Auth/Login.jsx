import React,{useState}from 'react';
import "./auth.css";
import {login} from '../../../services/AuthService';
import { useDispatch } from 'react-redux';



const Login = () => {
const dispatch = useDispatch();

 const [data , setData] = useState({
  email : "",
  password : ""
});

  const [submitted, setSubmitted] = useState(false);

  const handleEmail = (e) => {
    setData({ ...data, email: e.target.value });
  };
  
  const handlePassword = (e) => {
    setData({ ...data,password: e.target.value });
  };

  // const handleSubmit =()=> {
  //   login( data).then((response) => {
     
  //     (async () => {
        
  //       console.log(response.data.user)
  //       window.localStorage.setItem("token", response.data.accessToken);
  //       window.localStorage.setItem("id", response.data.user.id);
  //       window.localStorage.setItem("name", response.data.user.name);
  //       window.localStorage.setItem("email", response.data.user.email);
  //       window.localStorage.setItem("role", response.data.user.role);
  //       window.localStorage.setItem("login", 1);
  //       window.location = "/path";
  //     })()
  //   }).catch((err) => console.log('err',err.response));
  //   setSubmitted(true);
  // };
  
  const handleSubmit = () => {
    login(data)
      .then((response) => {
        console.log(response.data.user);
        dispatch(login(response.data.user));
        (async () => {
        
                console.log(response.data.user)
                window.localStorage.setItem("token", response.data.accessToken);
                window.localStorage.setItem("id", response.data.user.id);
                window.localStorage.setItem("name", response.data.user.name);
                window.localStorage.setItem("email", response.data.user.email);
                window.localStorage.setItem("role", response.data.user.role);
                window.localStorage.setItem("login", 1);
                window.location = "/path";
              })()
      })
      .catch((err) => console.log('err', err.response));
  };




 return ( 
  






<div className="login-fg">
  <div className="container-fluid">
  
    <div className="row d-flex justify-content-center ">

    <div class="col-xl-6 col-lg-7 col-md-12 bg">
               
            </div>
      <div className="col-xl-5 col-lg-5 col-md-12 login ">
    
    <div className="login-section">
          <div className="logo clearfix">
            <a href="/">
              Sign In
            </a>
          </div>
          <h3>Sign in into your account</h3>
        
          <div className="form-container">
            <form  onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}>
              <div className="form-group form-fg">
                <input type="email" name="email" className="input-text" placeholder="Email Address"  email={data.email}
                                           onChange={handleEmail} />
                <i className="fa fa-envelope" />
              </div>
              <div className="form-group form-fg">
                <input type="password" name="email" className="input-text" placeholder="Password"   password={data.password}
                                 onChange={handlePassword} />
                <i className="fa fa-unlock-alt" />
              </div>
              <div className="checkbox clearfix">
                <div className="form-check checkbox-fg">
                  <input className="form-check-input" type="checkbox" defaultValue id="remember" />
                  <label className="form-check-label" htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <a href="#">Forgot Password</a>
              </div>
              <div className="form-group mt-2">
                <button type="submit" className="btn-md btn-fg btn-block">Login</button>
              </div>
            </form>
          </div>
          <p>Don't have an account? <a href="/register" className="linkButton"> Register</a></p>
          <div className="or-login clearfix">
            <span>Or</span>
          </div>
          <ul className="social">
            <li><a href="#" className="facebook"><i className="fab fa-facebook-f facebook-i" /><span>Facebook</span></a></li>
            <li><a href="#" className="twitter"><i className="fab fa-twitter twitter-i" /><span>Twitter</span></a></li>
            <li><a href="#" className="google"><i className="fab fa-google google-i" /><span>Google</span></a></li>
          </ul>
        </div>
    
      </div>
    </div>
  </div>
</div>


  );
}

 

export default Login;
