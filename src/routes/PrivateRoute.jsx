import { useSelector } from "react-redux";

export const PrivateRoute = ({ children, ...rest }) => {
    const { accessToken } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={() => (account.accessToken ? children : <Login />)}
    ></Route>
  );
};
