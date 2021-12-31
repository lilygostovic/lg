import React from 'react';
import styled from 'styled-components';

// importing components
import Nav from '../sections/Nav';

// importing pictures
import background from '../images/home2.jpg';
import blog from '../images/blog.jpg';
import bpe from '../images/bpe.jpg';


const Main = styled.div`
    font-family: 'Lora', serif;
    overflow-x: hidden;
    background: url(${background}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    overflow-y: scroll;
    scroll-behavior: smooth;
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
const MainBody = styled.div`
    box-shadow: inset 0 0 0 1000px rgba(255,255,255,0.65);
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    /* height: 100vh; */
`;
const Spacing = styled.div`
    padding-top: 200px;
    box-shadow: inset 0 0 0 1000px rgba(255,255,255,0.65);
`;
const IntegratedExternalLink = styled.a`
    color: grey;
    text-decoration: none;

    transition: all 0.3 ease;

    &:hover {
        color: white;
    }
`;
const ProjectDiv = styled.div`
    padding: 0 20% 350px 20%;
    text-align: center;
    display: inline-flex;
`;
const LeftDiv = styled.div`
    padding-right: 5%;
    text-align: left;
    vertical-align: middle;
`;
const RightDiv = styled.div`
    padding-left: 5%;
    text-align: right;
    vertical-align: middle;
`;
const ProjectVisualPic = styled.img`
    object-fit: cover;
    opacity: 0.9;
    height: 400px;
    width: 350px;
    box-shadow: inset 0 0 0 1000px rgba(255,255,255,0.65);
`;
const ProjectTitle = styled.h2`
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    margin: 0;
    padding-top: 30px;
`;
const ProjectDescription = styled.p`
    padding-top: 25px;
    line-height: 25px;
    margin: 0;
`;
const ProjectSkills = styled.p`
    font-weight: 400;
    margin: 0;
    padding-top: 15px;
`;


function scrollToTop() {
    window.scrollTo(0, 0);
}

const Experience = () => {
    // brings to top at each refresh of page
    window.scrollTo(0, 0);

    return (
        <Main>

            <Nav id="top"/>

            {/* header section */}
            <HeaderDiv>
                <HeaderTitle>Portfolio</HeaderTitle>
            </HeaderDiv>

            <Spacing/>

            <MainBody>

                <ProjectDiv>

                    <LeftDiv>

                        <ProjectTitle>Personal Blog</ProjectTitle>

                        <ProjectDescription>
                            A personal <IntegratedExternalLink href='https://lily-gostovic-blog.herokuapp.com' target="_blank">blog</IntegratedExternalLink> created
                            using create-react-app. A passion project created to practice and
                            enhance skills in HTML, CSS, Javascript, and React. This blog houses
                            essays written on a variety of topics, some amateur photography,
                            as well as blog posts on my travels, fitness, and mental health. 
                            Developing this passion project during initial stages of the
                            COVID-19 pandemic in the spring of 2020 taught me the basics of web
                            development, including HTML, CSS and Javascript. The skills I quickly
                            learned in developing the website for my blog allowed me to easily
                            create this website you are reading right now!
                        </ProjectDescription>

                        <ProjectSkills>
                            Javascript, React, Nodejs, HTML, CSS
                        </ProjectSkills>

                    </LeftDiv>

                    <RightDiv>
                        <ProjectVisualPic src={blog}/>
                    </RightDiv>

                </ProjectDiv>

                <ProjectDiv>

                    <LeftDiv>
                        <ProjectVisualPic src={bpe}/>
                    </LeftDiv>

                    <RightDiv>

                        <ProjectTitle>Web Scraper</ProjectTitle>

                        <ProjectDescription>
                            During the Winter 2021 semester and following summer,
                            I worked as a research assistant for professor Daniel Rubenson's research
                            group. Dr. Rubenson is a professor of political science at
                            Ryerson University who researches questions of political participation
                            and political economy in a variety of settings. I developed software
                            for his research group that scrapes data from the internet and neatly
                            parses it into a .csv file. To complete this project, I used Python
                            and the Python HTML parser package BeautifulSoup.
                        </ProjectDescription>

                        <ProjectSkills>
                            Python
                        </ProjectSkills>

                    </RightDiv>

                </ProjectDiv>
            </MainBody>

            {/* <Container>
                <ToTop onClick={scrollToTop}>Back To Top</ToTop>
            </Container> */}

            <Spacing/>
        </Main>
    );
}

export default Experience;
