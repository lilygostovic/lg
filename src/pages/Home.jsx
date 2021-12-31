import React from 'react';
import styled from 'styled-components';
import { Link, useRouteMatch } from 'react-router-dom';

// importing components
import Nav from '../sections/Nav';

// importing pictures
import background from '../images/home3.jpg';


const Main = styled.div`
    font-family: 'Lora', serif;
    overflow-x: hidden;
    background: url(${background}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`;
const HeaderDiv = styled.div`
    position: relative;
    height: 125vh;
`;
const HeaderTitle = styled.h1`
    color: white;
    font-size: 50px;
    letter-spacing: 12px;

    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    text-shadow: 0px 0px 12px rgba(0,0,0,0.5);

    text-align: center;
    position: absolute;
    top: 33%;
    width: 100%;
`;
const HeaderSubtitle = styled.h2`
    color: white;
    font-size: 15px;
    letter-spacing: 7px;

    text-align: center;
    position: absolute;
    top: 44%;
    width: 100%;
    
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
`;
const TextBody = styled.div`
    box-shadow: inset 0 0 0 1000px rgba(255,255,255,0.65);
    /* height: 100vh; */
`;
const Spacing = styled.div`
    padding-top: 200px;
    box-shadow: inset 0 0 0 1000px rgba(255,255,255,0.65);
`;
const BodyParagraph = styled.p`
    margin: 0;
    padding: 15px 30%;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    line-height: 25px;
`;
const MyLink = styled(Link)`
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    color: black;
    text-decoration: none;
    padding: 18px 30px;
    font-size: 12px;
    text-transform: uppercase;

    border: 1px solid black;
    background-color: rgba(0,0,0,0);

    transition: all 0.3s ease;
    
    &:hover {
        color: white;
        border: 1px solid white;
    }
`;
const IntegratedLink = styled(Link)`
    color: grey;
    text-decoration: none;

    transition: all 0.3 ease;

    &:hover {
        color: white;
    }
`;
const IntegratedExternalLink = styled.a`
    color: grey;
    text-decoration: none;

    transition: all 0.3 ease;

    &:hover {
        color: white;
    }
`;
const Container = styled.div`
    width: 100%;
    text-align: center;
    box-shadow: inset 0 0 0 1000px rgba(255,255,255,0.65);
    padding-top: 40px;
`;

function scrollToTop() {
    window.scrollTo(0, 0);
}

const Home = () => {
    // brings to top at each refresh of page
    scrollToTop();

    return (
        <Main>

            <Nav/>
            
            {/* header section */}
            <HeaderDiv>
                <HeaderTitle>Lily Gostovic</HeaderTitle>
                <HeaderSubtitle>Student | Aspiring Engineer | Athlete</HeaderSubtitle>
            </HeaderDiv>

            <Spacing/>

            <TextBody>
                <BodyParagraph>
                    I am a hard-working, motivated, second year computer science student at
                    McGill University with an interest in web development and a passion for
                    learning new skills. I also enjoy skiing and playing rugby in my
                    spare time, but you can discover more about my extracurricular
                    interests <IntegratedLink to="/out-of-class">here</IntegratedLink>.
                </BodyParagraph>

                <BodyParagraph>
                    Currently in my second year at McGill, I have good understand of many
                    core programming concepts and have ample experience in a variety
                    of programming languages. With almost five years of experience
                    working with Java and two with Python, Javascript, and React, I
                    have been able to create and contribute to a variety of real-world
                    projects. 
                </BodyParagraph>

                <BodyParagraph>
                    My first major project was to develop a website using Javascript,
                    React, and Nodejs to house my blog. Next, I worked for professor Daniel
                    Rubenson's research group to develop software to scrape data from the
                    web and parse it into a neat .csv file. Finally, my most recent major
                    project is this website, developed using the skills learned while
                    developing the website for my blog.
                </BodyParagraph>

                <BodyParagraph>
                    To read more about my major projects, please check out my portfolio, linked below.
                </BodyParagraph>
            </TextBody>

            <Container>
                <MyLink to="/portfolio">Portfolio</MyLink>
            </Container>

            <Spacing/>
        </Main>
    );
}

export default Home;
