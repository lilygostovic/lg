import React from 'react';
import styled from 'styled-components';

// importing components
import Nav from '../sections/Nav';

// importing pictures
import background from '../images/ooc1.jpg';
import rugby from '../images/rugby1.jpg';
import sew from '../images/sew.jpg';
import ski from '../images/ski1.jpg';


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
`;
const ProjectTitle = styled.h2`
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    margin: 0;
    padding-top: 40px;
`;
const ProjectDescription = styled.p`
    padding-top: 25px;
    line-height: 25px;
    margin: 0;
`;


const Experience = () => {
    // brings to top at each refresh of page
    window.scrollTo(0, 0);

    return (
        <Main>

            <Nav id="top"/>

            <HeaderDiv>
                <HeaderTitle>Out Of Class</HeaderTitle>
            </HeaderDiv>

            <Spacing/>

            <MainBody>

                <ProjectDiv>

                    <LeftDiv>

                        <ProjectTitle>Martlet Rugby</ProjectTitle>

                        <ProjectDescription>
                            I started playing rugby in the eleventh grade. After my first season
                            of high school rugby, I knew it was a sport for me and quickly joined a club
                            team, the Toronto Nomads. I played for the Nomads for the rest of high school
                            and still return to volunteer with the club whenever possible. I now play for the McGill Women's Varsity Rugby team. Representing McGill as a
                            member of Martlet Rugby has offered me the opportunity to not only grow
                            as a player, but also as a student, friend, and teammate. The
                            demanding training schedule and mental rigor of the sport has forced me to
                            strengthen my time-management skills, and organization, as well as my
                            resillience and perserverance.
                        </ProjectDescription>

                    </LeftDiv>

                    <RightDiv>
                        <ProjectVisualPic src={rugby}/>
                    </RightDiv>

                </ProjectDiv>

                <ProjectDiv>

                    <LeftDiv>
                        <ProjectVisualPic src={sew}/>
                    </LeftDiv>

                    <RightDiv>

                        <ProjectTitle>Sewing For the Environment</ProjectTitle>

                        <ProjectDescription>
                            During the long days of the initial COVID-19 lockdowns in Toronto I found
                            myself looking for new ways to fill endless days. After finding an old
                            sewing machine while cleaning out old storage rooms, I decided to learn to sew. 
                            I slowly taught myself everything there is to know about sewing, from the basics
                            to fancy hem lines. Having the ability to
                            alter clothes has given me the opportunity to shop primarily second-hand,
                            allowing me to virtually eliminate my contributions to fast fashion. This not only
                            reduced my carbon footprint immensely, but also allowed me to stop supporting a
                            corrupt industry.

                        </ProjectDescription>

                    </RightDiv>

                </ProjectDiv>

                <ProjectDiv>

                    <LeftDiv>
                        <ProjectTitle>Downhill Skiing</ProjectTitle>

                        <ProjectDescription>
                            Skiing may have to be my favourite hobby of all. I have been skiing since I was
                            three years old, having spent every Saturday and Sunday since then at the ski hill,
                            either in lessons, training, or coaching. I raced competitively for four years, then
                            coached young racers for another two. Skiing has always held a very special place
                            in my heart, always being a way to escape reality, spend time outside, and make me
                            actually look forward to long, cold winters! Although I am not currently racing or
                            coaching due to how time demanding being a student athlete is, I hope to reconnect
                            this part of my life one day.
                        </ProjectDescription>
                    </LeftDiv>

                    <RightDiv>
                        <ProjectVisualPic src={ski}/>
                    </RightDiv>

                </ProjectDiv>
            </MainBody>
        </Main>
    );
}

export default Experience;
