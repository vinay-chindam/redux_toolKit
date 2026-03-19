import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./redux/UserSlice";

function LoginButton() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((store) => store.user.isLoggedIn);

  function handleClick() {
  isLoggedIn ? dispatch(logout()) : dispatch(login("Vinay"));
}
  return (
    <button className="login-btn" onClick={handleClick}>
      {isLoggedIn ? "Logout" : "Login"}
    </button>
  );
}

export default LoginButton;
