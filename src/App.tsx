// import Login_Navbar_test from "./pages/Login_Navbar_test";
// import Login_test from "./pages/Login_test";
// import Logout_test from "./pages/Logout_test";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Main_test from "./pages/Main_test";
// import { UserProvider } from "./components/context/User_context";

import IanTree from "./pages/Checkbox_Tree/IanTree";
import regData from "./data/reg.json"
// import CheckedBox from "./pages/CheckedBox";


function App() {
  //登入登出
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Login_Navbar_test />,
  //     children: [
  //       {
  //         path: "",
  //         element: <Main_test />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "/login",
  //     element: <Login_test />,
  //   },
  //   {
  //     path: "/logout",
  //     element: <Logout_test />,
  //   },
  // ]);


  return (
    <>
      <div className="container">
        <IanTree regData={regData}/>
        {/* <CheckedBox /> */}
      </div>
      {/* <UserProvider>
        <div className="container">
          <RouterProvider router={router} />
        </div>
      </UserProvider> */}
    </>
  );
}

export default App;
