import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./footerStyles";

const Footer = () => {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="/privacy">Privacy Policy</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">Chloe Strandwold</FooterLink>
                        <FooterLink href="#">Sheryl Deakin</FooterLink>
                        <FooterLink href="#">Jessica Luo</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f"/>
                            <span style={{marginLeft: "10px"}}>
				Facebook
				</span>

                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram"/>
                            <span style={{marginLeft: "10px"}}>
				Instagram
				</span>

                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter"/>
                            <span style={{marginLeft: "10px"}}>
				Twitter
				</span>

                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube"/>
                            <span style={{marginLeft: "10px"}}>
				Youtube
				</span>

                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;
