import React from "react";
import {ListGroupItem, ListGroup} from "reactstrap";

const Footer = () => {
    return (
        <div className="footer pl-4 pl-5">
            <div className={"wd-centered"}>
                <div className={"row"}>
                    <div className={"col-2"}></div>
                    <div className={"col"}>
                        <h5>About Us</h5>
                        <ListGroup>
                            <ListGroupItem action tag="a" className={"bg-dark"} href="/privacy">
                                <span className={"wd-font-white"}>Privacy Policy</span>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                    <div className={"col"}>
                        <h5>Meet the Team</h5>
                        <ListGroup>
                            <ListGroupItem action tag="button" className={"bg-dark"}>
                                <span className={"wd-font-white"}>Chloe Strandwold</span>
                            </ListGroupItem>
                            <ListGroupItem action tag="button" className={"bg-dark"}>
                                <span className={"wd-font-white"}>Sheryl Deakin</span>
                            </ListGroupItem>
                            <ListGroupItem action tag="button" className={"bg-dark"}>
                                <span className={"wd-font-white"}>Jessica Luo</span>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                    <div className={"col-2"}></div>
                </div>
            </div>

        </div>
    );
};
export default Footer;
