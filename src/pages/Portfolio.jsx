import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// importing components
import Nav from '../sections/Nav';

// importing pictures
import background from '../images/portfolio.jpg';
import blog from '../images/blog.jpg';
import blogImg from '../images/blog.jpg';
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
`;
const Spacing = styled.div`
    padding-top: 200px;
    box-shadow: inset 0 0 0 1000px rgba(255,255,255,0.65);
`;
const ProjectBackground = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
`;
const ProjectDiv = styled.div`
    padding-bottom: 300px;
`;
const ProjectHeader = styled.h3`
    position: absolute;
    display: none;
    
    top: 5%;
    left: 10%;

    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    color: white;
    font-size: 20px;
`;
const ProjectDescription = styled.p`
    position: absolute;
    display: none;
    margin: 0;

    left: 10%;
    right: 10%;
    top: 20%;
    
    line-height: 25px;
    color: white;
`;
const ProjectSkills = styled.p`
    position: absolute;
    display: none;
    margin: 0;

    left: 10%;
    right: 10%;
    top: 70%;

    font-weight: 400;
    color: white;
`;
const ProjectBackgroundContainer = styled.div`
    margin: auto; // centers div
    
    position: relative;

    height: 30vw;
    width: 50vw;

    transition: all 0.3s ease;
    &:hover{
        ${ProjectBackground} {
            opacity: 25%;
        }
        ${ProjectHeader} {
            display: inline;
        }
        ${ProjectDescription}{
            display: inline;
        }
        ${ProjectSkills}{
            display: inline;
        }
        background-color: rgb(0,0,0);
        transform: scale(1.05);
    }
`;
const ExternalLink = styled.a`
  text-decoration: none;
`;
const IntegratedLink = styled.a`
    text-decoration: none;
    color: white;
    
    transition: all 0.3s ease;
    &:hover{
        color: grey;
    }
`;

function scrollToTop() {
    window.scrollTo(0, 0);
}

const Experience = () => {
    // brings to top at each refresh of page
    scrollToTop();

    return (
        <Main>

            <Nav id="top"/>

            <HeaderDiv>
                <HeaderTitle>Portfolio</HeaderTitle>
            </HeaderDiv>

            <Spacing/>

            <MainBody>
                <ProjectDiv>
                    <ExternalLink href={'https://github.com/lilygostovic/blog'} target="_blank">
                        <ProjectBackgroundContainer>
                            <ProjectBackground src={blogImg} />
                            <ProjectHeader>
                                <IntegratedLink href={'https://lily-gostovic-blog.herokuapp.com'} target="_blank">Lily's Diaries</IntegratedLink>
                            </ProjectHeader>
                            <ProjectDescription>
                                A personal blog using create-react-app. A passion project created to
                                practice and enhance skills in HTML, CSS, Javascript, and React. This
                                blog houses essays written on a variety of topics, some amateur
                                photography, as well as blog posts on my travels, fitness, and mental
                                health. Developing this passion project during initial stages of the
                                COVID-19 pandemic in the spring of 2020 taught me the basics of web
                                development, including HTML, CSS and Javascript. The skills I quickly
                                learned in developing the website for my blog allowed me to easily
                                create this website you are reading right now!
                            </ProjectDescription>
                            <ProjectSkills>
                                Javascript, React, Nodejs, HTML, CSS
                            </ProjectSkills>
                        </ProjectBackgroundContainer>
                    </ExternalLink>
                </ProjectDiv>
                <ProjectDiv>
                    <ExternalLink href={'https://github.com/lilygostovic/bpe'} target="_blank">
                        <ProjectBackgroundContainer>
                            <ProjectBackground src={bpe} />
                            <ProjectHeader>Web Scraper</ProjectHeader>
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
                        </ProjectBackgroundContainer>
                    </ExternalLink>
                </ProjectDiv>
            </MainBody>
        </Main>
    );
}

export default Experience;
