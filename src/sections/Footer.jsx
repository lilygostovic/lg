import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

// import images
import githubLogo from '../images/github-logo.png';
import linkedinLogo from '../images/linkedin-logo.png';
import emailLogo from '../images/email-logo.png';

const Main = styled.div`
    font-family: 'Lora', serif;
`;
const LeftSection = styled.ul`
    /* padding-left: 0px 50vw; */
    /* padding: 0vw 20vw; */
    padding: 0;
    margin: 0;
    width: 100%;
    text-align: center;
`;
const RightSection = styled.ul`
    display: inline;
    text-align: center;
    text-transform: lowercase;
    margin: 0;
    padding: 0;
    /* padding: 0vw 20vw; */
    width: 100%;
`;
const ExternalLink = styled.a`
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 13px;
    transition: all 0.5s ease;
    &:hover {
        color: 	black;
    }
`;
const MenuOption = styled.li`
    display: inline-block;
    /* margin: 0px 5px; */
    padding: 20px 10px;

    font-size: 15px;
    color: white;

    transition: all 0.5s ease;
    position: relative;
`;
const Img = styled.img`
    height: 20x;
    width: 20px;
`;
const NavBar = styled.nav`
    position: static;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 10;
    opacity: 0.90;
    box-shadow: 0 2px 5px -2px rgba(240,240,240,0.5);

    background-color: rgb(50,50,50);

    transition: all 0.3s ease;
`;


const Footer = () => {
    return(
        <Main>
            <NavBar>
                <LeftSection>
                    <MenuOption>
                        <ExternalLink href='https://www.linkedin.com/in/lily-gostovic-5b9243204/' target="_blank">
                            <Img src={linkedinLogo}/>
                        </ExternalLink>
                    </MenuOption>
                    <MenuOption>
                        <ExternalLink href='https://github.com/lilygostovic' target="_blank">
                            <Img src={githubLogo}/>
                        </ExternalLink>
                    </MenuOption>
                    <MenuOption>
                        <ExternalLink href='mailto:lily.gostovic@gmail.com' target="_blank">
                            <Img src={emailLogo}/>
                        </ExternalLink>
                    </MenuOption>
                </LeftSection>

                <RightSection>
                    <MenuOption>
                        © 2022 all rights reserved.
                    </MenuOption>
                </RightSection>
            </NavBar>
        </Main>
    );
};

export default Footer;