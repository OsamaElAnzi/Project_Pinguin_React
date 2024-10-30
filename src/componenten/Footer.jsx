import React from "react";

import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box style={{ position: "relative", paddingBottom: "50px" }}>
            <h1
                style={{
                    color: "black",
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
                Project Pinguin
            </h1>
            <FooterContainer style={{ marginBottom: "0px" }}>
                <Row>
                    <Column>
                        <Heading
                            style={{
                                borderBottom: "1px solid black",
                                paddingBottom: "10px",
                                marginBottom: "15px",
                            }}
                        >
                            About Us
                        </Heading>
                        <FooterLink href="#">Aim</FooterLink>
                        <FooterLink href="#">Vision</FooterLink>
                        <FooterLink href="#">Testimonials</FooterLink>
                    </Column>
                    <Column>
                        <Heading
                            style={{
                                borderBottom: "1px solid black",
                                paddingBottom: "10px",
                                marginBottom: "15px",
                            }}
                        >
                            Services
                        </Heading>
                        <FooterLink href="#">Writing</FooterLink>
                        <FooterLink href="#">Internships</FooterLink>
                        <FooterLink href="#">Coding</FooterLink>
                        <FooterLink href="#">Teaching</FooterLink>
                    </Column>
                    <Column>
                        <Heading
                            style={{
                                borderBottom: "1px solid black",
                                paddingBottom: "10px",
                                marginBottom: "15px",
                            }}
                        >
                            Contact Us
                        </Heading>
                        <FooterLink href="#">Osama EL Anzi</FooterLink>
                        <FooterLink href="#">Tarik Ezzafzafie</FooterLink>
                        <FooterLink href="#">Taha Karaman</FooterLink>
                        <FooterLink href="#">Zaid El Fellali</FooterLink>
                    </Column>
                    <Column>
                        <Heading
                            style={{
                                borderBottom: "1px solid black",
                                paddingBottom: "10px",
                                marginBottom: "15px",
                            }}
                        >
                            Social Media
                        </Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
            <div
                style={{
                    width: "100%",
                    borderTop: "1px solid black",
                    margin: "0",
                    position: "absolute",
                    left: 0,
                }}
            ></div>
            <div
                style={{
                    textAlign: "center",
                    backgroundColor: "lightgray",
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: "30px",
                }}
            >
                © 2024 Project Pinguin. All rights reserved.
            </div>
        </Box>
    );
};

export default Footer;
