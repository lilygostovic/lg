import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.div`
    font-family: 'Lora', serif;
`;
const LeftLinks = styled.ul`
    color: white;
    padding: 0px 15px;
    margin: 0;
    text-transform: lowercase;
    
`;
const RightLinks = styled.ul`
    display: inline;
    text-align: right;
    text-transform: lowercase;
    margin: 0;
    padding: 0px 15px;
`;
const Dropdown = styled.ul`
    margin: 0;
    padding: 0;
    display: none;
    text-align: center;
    width: 100%;
    position: absolute;
    left: 0%;
    top: 100%;
    box-shadow: 0 2px 5px -2px rgba(240,240,240,0.5);
`;
const MyLink = styled(Link)`
    text-decoration: none;
    color: white;
    text-transform: lowercase;
    transition: all 0.5s ease;
    &.active {
        color: black;
        font-weight: 0;
    }
    &:hover {
        color: black;
    }
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
    margin: 0px 5px;
    padding: 20px 15px;
    font-size: 15px;
    transition: all 0.5s ease;
    position: relative;

    &:hover {
        color: black;
        font-weight: 0;
        ${Dropdown} {
            display: block;
        }
    }
`;
const SectionHeader = styled.p`
    margin: 0; padding: 0;
`;
const Logo = styled.h1`
    margin: 0; padding: 0;
    font-family:'Montserrat', sans-serif;
    color: white;
`;
const NavBar = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 10;
    opacity: 0.90;
    box-shadow: 0 2px 5px -2px rgba(240,240,240,0.5);

    background-color: rgba(0,0,0,0.05);

    transition: all 0.3s ease;
    
    :hover {
        background-color: rgba(0,0,0,0.3);
        ${SectionHeader}, ${MyLink}, ${ExternalLink} {
            color: rgba(255,255,255,0.5);
            :hover {
                color: black;
            }
        }

    }
`;


const Nav = () => {
    //checking the current path to see if on a page in nav
    const isHome = useRouteMatch({path:'/', exact:true});
    const isPortfolio = useRouteMatch({path:'/portfolio', exact:true});
    const isSkills = useRouteMatch({path:'/skills', exact:true});
    const isOutOfClass = useRouteMatch({path:'/out-of-class', exact:true});


    return(
        <Main>
            <NavBar>
                <LeftLinks>
                    <MenuOption>
                        <MyLink className={isHome?"active":""} to="/">
                            <Logo>LGosto</Logo>
                        </MyLink>
                    </MenuOption>

                    <MenuOption><MyLink className={isPortfolio?"active":""} to="/portfolio">Portfolio</MyLink></MenuOption>

                    <MenuOption><MyLink className={isOutOfClass?"active":""} to="/out-of-class">Out Of Class</MyLink></MenuOption>
                    
                </LeftLinks>

                <RightLinks>
                    <MenuOption>
                        <ExternalLink href='https://www.linkedin.com/feed/' target="_blank">LinkedIn</ExternalLink>
                    </MenuOption>
                    <MenuOption>
                        <ExternalLink href='https://github.com/lilygostovic' target="_blank">Github</ExternalLink>
                    </MenuOption>
                    <MenuOption>
                        <ExternalLink href='mailto:lily.gostovic@gmail.com' target="_blank">Get In Touch</ExternalLink>
                    </MenuOption>
                </RightLinks>
            </NavBar>
        </Main>
    );
};

export default Nav;