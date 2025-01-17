import React from "react"
import Footer from "./footer"
import Nav from "./nav"

type LayoutProps = {
    noMargin?: boolean;
    children?: React.ReactElement;
}

const LayoutDisplay = (props: LayoutProps) => {
    return (
        <div>
            <Nav />
            {props.children}
            <Footer noMargin={props.noMargin} />
        </div>
    )
}

export default LayoutDisplay;