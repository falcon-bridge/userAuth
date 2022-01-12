// import React, { useState, useEffect } from "react";

// import Card from "../UI/Card/Card";
// import classes from "./Login.module.css";
// import Button from "../UI/Button/Button";

// const Login = (props) => {
//   const [enteredEmail, setEnteredEmail] = useState("");
//   const [emailIsValid, setEmailIsValid] = useState();
//   const [enteredPassword, setEnteredPassword] = useState("");
//   const [passwordIsValid, setPasswordIsValid] = useState();
//   const [formIsValid, setFormIsValid] = useState(false);

//   useEffect(() => {
//     const identifier = setTimeout(() => {
//       console.log("checking form validity");
//       setFormIsValid(
//         enteredEmail.includes("@") && enteredPassword.trim().length > 6
//       );
//     }, 500);
//     return () => {
//       console.log("CLEANUP !!!");
//       clearTimeout(identifier);
//     };
//   }, [enteredEmail, enteredPassword]);

//   const emailChangeHandler = (event) => {
//     setEnteredEmail(event.target.value);

//     // setFormIsValid(
//     //   event.target.value.includes('@') && enteredPassword.trim().length > 6
//     // );
//   };

//   const passwordChangeHandler = (event) => {
//     setEnteredPassword(event.target.value);

//     // setFormIsValid(
//     //   event.target.value.trim().length > 6 && enteredEmail.includes('@')
//     // );
//   };

//   const validateEmailHandler = () => {
//     setEmailIsValid(enteredEmail.includes("@"));
//   };

//   const validatePasswordHandler = () => {
//     setPasswordIsValid(enteredPassword.trim().length > 6);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     props.onLogin(enteredEmail, enteredPassword);
//   };

//   return (
//     <Card className={classes.login}>
//       <form onSubmit={submitHandler}>
//         <div
//           className={`${classes.control} ${
//             emailIsValid === false ? classes.invalid : ""
//           }`}
//         >
//           <label htmlFor="email">E-Mail</label>
//           <input
//             type="email"
//             id="email"
//             value={enteredEmail}
//             onChange={emailChangeHandler}
//             onBlur={validateEmailHandler}
//           />
//         </div>
//         <div
//           className={`${classes.control} ${
//             passwordIsValid === false ? classes.invalid : ""
//           }`}
//         >
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={enteredPassword}
//             onChange={passwordChangeHandler}
//             onBlur={validatePasswordHandler}
//           />
//         </div>
//         <div className={classes.actions}>
//           <Button type="submit" className={classes.btn} disabled={!formIsValid}>
//             Login
//           </Button>
//         </div>
//       </form>
//     </Card>
//   );
// };

// export default Login;

// import React, { useState, useEffect, useReducer } from "react";

// import Card from "../UI/Card/Card";
// import classes from "./Login.module.css";
// import Button from "../UI/Button/Button";

// const emailReducer = (prevState, action) => {
//   if (action.type === "USER_INPUT") {
//     return { value: action.val, isVaild: action.val.includes("@") };
//   } else if (action.type === "INPUT_BLUR") {
//     return { value: prevState.value, isVaild: prevState.value.includes("@") };
//   }
//   return { value: "", isVaild: false };
// };

// const passwordReducer = (prevState, action) => {
//   if (action.type === "USER_INPUT") {
//     return { value: action.val, isVaild: action.val.length > 6 };
//   } else if (action.type === "I") {
//     return { value: prevState.value, isVaild: prevState.value.length > 6 };
//   }
//   return { value: "", isVaild: false };
// };

// const Login = (props) => {
//   // const [enteredEmail, setEnteredEmail] = useState("");
//   // const [emailIsValid, setEmailIsValid] = useState();
//   // const [enteredPassword, setEnteredPassword] = useState("");
//   // const [passwordIsValid, setPasswordIsValid] = useState();
//   const [formIsValid, setFormIsValid] = useState(false);

//   const [emailState, dispatchEmail] = useReducer(emailReducer, {
//     value: "",
//     isVaild: null,
//   });

//   const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
//     value: "",
//     isVaild: null,
//   });

//   // useEffect(() => {
//   //   const identifier = setTimeout(() => {
//   //     console.log("checking form validity");
//   //     setFormIsValid(
//   //       enteredEmail.includes("@") && enteredPassword.trim().length > 6
//   //     );
//   //   }, 500);
//   //   return () => {
//   //     console.log("CLEANUP !!!");
//   //     clearTimeout(identifier);
//   //   };
//   // }, [enteredEmail, enteredPassword]);

//   const emailChangeHandler = (event) => {
//     // setEmailIsValid(event.target.value);
//     dispatchEmail({ type: "USER_INPUT", val: event.target.value });

//     setFormIsValid(event.target.value.includes("@") && passwordState.isVaild);
//   };

//   const passwordChangeHandler = (event) => {
//     // setEnteredPassword(event.target.value);
//     dispatchPassword({ type: "USER_INPUT", val: event.target.value });

//     setFormIsValid(event.target.value.trim().length > 6 && emailState.isVaild);
//   };

//   const validateEmailHandler = () => {
//     // setEmailIsValid(emailState.isVaild);
//     dispatchEmail({ type: "INPUT_BLUR" });
//   };

//   const validatePasswordHandler = () => {
//     // setPasswordIsValid(enteredPassword.trim().length > 6);
//     dispatchPassword({ type: "I" });
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     props.onLogin(emailState.value, passwordState.value);
//   };

//   return (
//     <Card className={classes.login}>
//       <form onSubmit={submitHandler}>
//         <div
//           className={`${classes.control} ${
//             emailState.isVaild === false ? classes.invalid : ""
//           }`}
//         >
//           <label htmlFor="email">E-Mail</label>
//           <input
//             type="email"
//             id="email"
//             value={emailState.value}
//             onChange={emailChangeHandler}
//             onBlur={validateEmailHandler}
//           />
//         </div>
//         <div
//           className={`${classes.control} ${
//             passwordState.isVaild === false ? classes.invalid : ""
//           }`}
//         >
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={passwordState.value}
//             onChange={passwordChangeHandler}
//             onBlur={validatePasswordHandler}
//           />
//         </div>
//         <div className={classes.actions}>
//           <Button type="submit" className={classes.btn} disabled={!formIsValid}>
//             Login
//           </Button>
//         </div>
//       </form>
//     </Card>
//   );
// };

// export default Login;

import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (prevState, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isVaild: action.val.includes("@") };
  } else if (action.type === "INPUT_BLUR") {
    return { value: prevState.value, isVaild: prevState.value.includes("@") };
  }
  return { value: "", isVaild: false };
};

const passwordReducer = (prevState, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isVaild: action.val.length > 6 };
  } else if (action.type === "I") {
    return { value: prevState.value, isVaild: prevState.value.length > 6 };
  }
  return { value: "", isVaild: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isVaild: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isVaild: null,
  });

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log("checking form validity");
  //     setFormIsValid(emailState.isVaild && passwordState.isVaild);
  //   }, 500);
  //   return () => {
  //     console.log("CLEANUP !!!");
  //     clearTimeout(identifier);
  //   };
  // }, [emailState.isVaild, passwordState.isVaild]);

  const { isVaild: emailIsValid } = emailState;
  const { isVaild: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("checking form validity");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      console.log("CLEANUP !!!");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    // setEmailIsValid(event.target.value);
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(event.target.value.includes("@") && passwordState.isVaild);
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(event.target.value.trim().length > 6 && emailState.isVaild);
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isVaild);
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({ type: "I" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isVaild === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isVaild === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
