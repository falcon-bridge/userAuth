// import React, { useState, useEffect } from "react";

// import Login from "./components/Login/Login";
// import Home from "./components/Home/Home";
// import MainHeader from "./components/MainHeader/MainHeader";

// import AuthContext from "./store/auth-context";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');
//   // if(storedUserLoggedInInfo==='1'){
//   //   setIsLoggedIn(true);
//   // }
//   useEffect(() => {
//     const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");
//     if (storedUserLoggedInInfo === "1") {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const loginHandler = (email, password) => {
//     // We should of course check email and password
//     // But it's just a dummy/ demo anyways
//     localStorage.setItem("isLoggedIn", "1");
//     setIsLoggedIn(true);
//   };

//   const logoutHandler = () => {
//     localStorage.removeItem("isLoggedIn");
//     setIsLoggedIn(false);
//   };

//   // return (
//   //   <>
//   //     {/* <AuthContext.Provider> */}
//   //     <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
//   //     <main>
//   //       {!isLoggedIn && <Login onLogin={loginHandler} />}
//   //       {isLoggedIn && <Home onLogout={logoutHandler} />}
//   //     </main>
//   //     {/* </AuthContext.Provider> */}
//   //   </>
//   // );
//   return (
//     <AuthContext.Provider
//       value={{
//         isLoggedIn: isLoggedIn,
//         onLogout: logoutHandler,
//       }}
//     >
//       {/* <MainHeader onLogout={logoutHandler} /> */}
//       <MainHeader />
//       <main>
//         {!isLoggedIn && <Login onLogin={loginHandler} />}
//         {isLoggedIn && <Home onLogout={logoutHandler} />}
//       </main>
//     </AuthContext.Provider>
//   );
// }

// export default App;

import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
