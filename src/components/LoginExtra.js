/* eslint-disable no-undef */
// import React, { useState, useRef,useEffect,useReducer } from "react";
// import { Link } from "react-router-dom";
// import "./Login.css";

// const Login = () => {
//   // const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [formIsValid, setFormIsValid] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // const emailRef = useRef();
//   // const passwordRef = useRef();
// // useEffect(()=>{
// //   console.log("effect running");

// //   return()=>{
// //     console.log("effect clenaup");
// //   }
// // },[password])

// const [state,dispatch]=useReducer(reducer,initalState)
// dispatch()

useEffect(() => {
  const identifier = setTimeout(() => {
    console.log('checking for form validity')
    setFormIsValid(email.includes('@') && password.trim().length > 6)
  }, 500)

  return () => {
    console.log('cleanup function before next side effect')
    clearTimeout(identifier)
  }
}, [email, password])

// // useEffect(()=>{
// //   const user=localStorage.getItem('isLoggedIn');
// //   if(user){
// //   setIsLoggedIn(true);
// // }},[]);

//   const signInHandler = (e) => {
//     e.preventDefault();
//        console.log(formIsValid);
//   //   const enteredEmail = emailRef.current.value;
//   //   const enteredPassword = passwordRef.current.value;
//   //   console.log("email :", enteredEmail + "password : ", enteredPassword);
//   //   localStorage.setItem("isLoggedIn", "1");
//   //   setIsLoggedIn(true);
//   // };

//   // const signOut = () => {
//   //   setIsLoggedIn(false);
//   //   localStorage.removeItem("isLoggedIn");
//   //
// };

//   const emailChangeHandler=(e)=>{
//     setEmail(e.target.value)
//   }
//   const passwordChangeHandler=(e)=>{
//     setPassword(e.target.value)
//   }

//   return (
//     <div className="login">
//       {/* {isLoggedIn && (
//         <p>
//           You are logged in<button onClick={signOut}>Sign Out</button>
//         </p>
//       )} */}

//       <Link to="/">
//         <img
//           src="/asset/Amazon-Logo-Black.jpg"
//           alt="logo"
//           className="login_logo"
//         />
//       </Link>
//       <div className="login_container">
//         <h1>Sign In</h1>
//         <form>
//           <h5>Email</h5>
//           <input type="text" onChange={emailChangeHandler}value={email} placeholder="Enter  Email" />
//           <h5>Password</h5>
//           <input type="text" onChange={passwordChangeHandler} value={password} placeholder="Enter Password" />
//           {/* ref={emailRef}
//           ref={passwordRef} */}
//           <button
//             type="Submit"
//             className="login_signingBtn"
//             onClick={signInHandler}
//           >
//             Sign In
//           </button>
//         </form>
//         <p>
//           By continuing, you agree to Amazon's Conditions of Use and Privacy
//           Notice.
//         </p>
//         <button className="login_registerBtn">
//           Create your Amazon account
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;
