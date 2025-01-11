import { HiArrowLeft } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";
import css from "./BackLink.module.css";

export const BackLink = ({ children }) => {
  const location = useLocation();
  
  const backLink = useRef(location.state?.from ?? '/movies');

  return (
    <Link to={backLink.current} className={css.link}>
      <HiArrowLeft className={css.icon} />
      <span>{children}</span>
    </Link>
  );
};
