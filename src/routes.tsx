import { FC, lazy, LazyExoticComponent, Suspense } from "react";
import { Navigate } from "react-router-dom";
import loadingGif from "./assets/loading/loadEhb.gif"


const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) =>
(
  <Suspense fallback={
    <div
      className="d-flex justify-center align-center"
      style={{
        height: "100vh",
        width: "100%",
        position: 'fixed',
        left: "0",
        top: "0",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <img src={loadingGif} width={150} style={{ filter: "grayscale(1) brightness(8.5)" }} alt="" />
        <h3 style={{ color: "#6f757b", marginTop: "-29px" }}>EHB</h3>
      </div>
    </div>
  }>
    <Component {...props} />
  </Suspense>

);
const MainLayout = Loadable(lazy(() => import("./layout/mainLayout")));
const LandingPage = Loadable(lazy(() => import("./pages/dashboard")));
const SignIn = Loadable(lazy(() => import("./pages/signIn")));
const SignUp = Loadable(lazy(() => import("./pages/signUp")));
const RestPassword = Loadable(lazy(() => import("./pages/resetPassword")));

const isTokenAvailable = () => {
  const token = localStorage.getItem('token');
  return token !== null;
};

const PrivateRoute = ({ element, path }: any) => {
  if (isTokenAvailable() || path === 'sign-in' || path === 'sign-up') {
    return element;
  } else {
    return <Navigate to="/sign-in" />;
  }
};

export const routes: any = [
  { path: "/", element: <Navigate to={isTokenAvailable() ? 'home' : 'sign-in'} /> },
  {
    path: "sign-in",
    element: <SignIn />,
  },
  {
    path: "sign-in/affilate",
    element: <SignIn/>,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "sign-up/:id",
    element: <SignUp />,
  },
  {
    path: "reset-password/:token",
    element: <RestPassword />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <PrivateRoute element={<LandingPage />} path="home" />,
      },
    ],
  },
];
