import { ReactNode } from "react";
import FooterMain from "./FooterMain";
import Head from "./Head";
import HeaderMain from "./HeaderMain";

import './style.css'

interface IProps {
  children: ReactNode,
}

function PageMain(props: IProps) {
  return (
    <>
      <Head />
      <div className="c-page_main-content-all">
        <HeaderMain />
        <div className="c-page_main-content">
          {props.children}
        </div>
        <FooterMain />
      </div>
    </>
  )
}

export default PageMain;