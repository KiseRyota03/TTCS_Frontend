import { message } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../pages/redux/hook";
import React from "react"; // Add this import

interface IProps {
  children: React.ReactNode;
}

const LayoutApp = (props: IProps) => {
  const isRefreshToken = useAppSelector(
    (state) => state.account.isRefreshToken
  );
  const errorRefreshToken = useAppSelector(
    (state) => state.account.errorRefreshToken
  );
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  //handle refresh token error
  // useEffect(() => {
  //   if (isRefreshToken === true) {
  //     localStorage.removeItem("access_token");
  //     message.error(errorRefreshToken);
  //     // dispatch(setRefreshTokenAction({ status: false, message: "" }))
  //     navigate("/login");
  //   }
  // }, [isRefreshToken]);

  return <>{props.children}</>;
};

export default LayoutApp;
