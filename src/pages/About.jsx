import React from "react";
import "./About.module.css";

const About = () => {
    return (
        <div className="contact-container">
            <div
                style={{
                    width: 1440,
                    height: 1087,
                    position: "relative",
                    background: "white",
                }}
            >
                <div
                    style={{
                        width: 1440,
                        height: 215,
                        left: 0,
                        top: 0,
                        position: "absolute",
                        background: "black",
                    }}
                />
                <div
                    style={{
                        width: 113,
                        height: 56,
                        left: 1261,
                        top: 132,
                        position: "absolute",
                    }}
                >
                    <div
                        style={{
                            width: 113,
                            height: 56,
                            left: 0,
                            top: 0,
                            position: "absolute",
                            background: "white",
                            borderRadius: 20,
                        }}
                    />
                    <div
                        style={{
                            left: 33,
                            top: 18,
                            position: "absolute",
                            textAlign: "center",
                            color: "black",
                            fontSize: 16,
                            fontFamily: "Urbanist",
                            fontWeight: "700",
                            textTransform: "uppercase",
                            wordWrap: "break-word",
                        }}
                    >
                        Login
                    </div>
                </div>
                {/* Rest of the HTML structure goes here */}
            </div>
        </div>
    );
};

export default About;
