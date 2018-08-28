import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { Navbar as ReactNavbar } from 'reactstrap';
// import logoReact from "../images/logo-react-heart.png";
// import HeaderAbout from '../components/headerabout';
// import gravatarRebecca from "../images/gravatar.jpg";
// import diamante from "../images/diamante.jpg";
// import yogaflow from "../images/yogaflow.jpg";
// import travel from "../images/travel.jpg";
// import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
// import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'

// const DivStyle = styled.div`
//   background-color: #efefef;
//   padding: 30px 0px 0px 0px;
// `

const NameStyle = styled.p`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 30px;
  display: block;
  color: rgb(0, 0, 0);
  line-height: 10px;
  text-align: center;
  vertical-align: baseline;
  word-wrap: break-word;
  padding: 0px 0px 0px 0px;
`
const TitleStyle = styled.p`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 20px;
  display: block;
  color: rgb(0, 0, 0);
  line-height: 10px;
  text-align: center;
  vertical-align: baseline;
  word-wrap: break-word;
  padding: 5px 0px 0px 0px;
`
const NormalText = styled.p`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 18px;
  display: block;
  font-color: rgb(0, 0, 0);
  line-height: 10 px;
  text-align: justify;
  vertical-align: baseline;
  word-wrap: break-word;
`

const BoxAbout = () => (
  <div>
    <Jumbotron fluid>
      <Container>
        <Row>
          <Col xs="12">
            <Row>
              <Col xs="12">
                <NameStyle> About me</NameStyle>
                <TitleStyle> A (non) Tech Girl!</TitleStyle>
              </Col>
            </Row>
            <Row>
              <Col xs="2"/>
              <Col xs="8">

                <Row>
                <NormalText>
                Hello! I&#39;m Rebecca, but you can call me just Reby - my family and close friends gave me this nickname. I&#39;m a Brazilian girl who lives in the world. 🇧🇷 🌎
                </NormalText>
                </Row>

                <Row>
                <NormalText>
                My degree is in Business with International Trade, but when I finished an MBA, I had the opportunity to work in an IT company, where... hummm... I FOUND MY PLACE! Yes, I really love technology!
                </NormalText>
                </Row>

                <Row>
                <NormalText>
                After a sabbatical period, I decided that I would like to use the internet in my favor, to learn ReactJS and work as a web developer!
                My website title is "A (non) Tech Girl" because I wanna show that&#39;s everyone can do a shift in their career and learn something new!
                If you want to know more about my professional life, welcome <a href="#">here</a>.
                </NormalText>
                </Row>

                <Row>
                <NormalText>
                Nice to meet you! ☺️
                </NormalText>
                </Row>

              </Col>
              <Col xs="2" />
            </Row>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
    <hr />
  </div>
);

export default BoxAbout;
