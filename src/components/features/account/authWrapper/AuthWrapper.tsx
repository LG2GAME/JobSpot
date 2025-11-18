import type { ReactNode } from "react";
import * as style from "./authWrapper.css";

interface AuthWrapperProps {
  children: ReactNode;
}

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  return (
    <section className={style.authWrapper}>
      <div className={style.authContent}>{children}</div>
      <div className={style.authVisual}></div>
    </section>
  );
};

export default AuthWrapper;
