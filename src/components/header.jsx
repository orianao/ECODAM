import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
    background: white !important;
    height: 100vh;
    margin-top: 40px;
`;

const Intro = styled.div`
    position: relative;
    text-align: center;
    padding: 40px 0;
`;

const LogoImage = styled.img`
    width: 600px;
    
    @media (max-width: 768px) {
        width: 70%;
    }
`;

const LiveConference = styled.a`
    position: fixed;
    bottom: 8%;
    background-color: white !important;
    left: 50%;
    transform: translateX(-50%);
    color: #337ab7;
    white-space: nowrap;
    font-size: 1.375em;
    padding: 10px 20px;
    border-radius: 25px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
`;

export const Header = ({title, paragraph}) => {
  return (
    <HeaderContainer id="home">
      <Intro>
        <div className="container">
          <div className="intro-text">
            <LogoImage src={process.env.PUBLIC_URL + "/img/logos/logo.png"} alt="logo"/>
            <h1 style={{
              fontSize: "3em",
              color: "black",
              padding: "40px",
            }}>
              {title ? title : "Loading"}
            </h1>
            <p style={{
              fontSize: "1em",
              color: "black",
              fontWeight: "bolder"
            }}>{paragraph ? paragraph : "Loading"}</p>
            <a
              href="https://www.bitdefender.ro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img width={100} src={process.env.PUBLIC_URL + "/img/logos/bitdefender_logo.png"}
                   alt="bitdefender_logo"></img>
            </a>

            <a
              href="https://www.hotelunirea.ro/ro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img width={100} src={process.env.PUBLIC_URL + "/img/logos/hotel_unirea_icon.jpg"}
                   alt="bitdefender_logo"></img>
            </a>

            <LiveConference
              href="https://uaic.webex.com/uaic/j.php?MTID=m727ccd449192e92e9872458086344d9a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Live Conference
            </LiveConference>
          </div>
        </div>
      </Intro>
    </HeaderContainer>
  );
};
