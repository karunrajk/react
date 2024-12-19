// use client;

import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell';
// import Cell from '../components/Cell'
import styled from 'styled-components';


const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  color: #94A4BA;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2,auto);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px ){

    grid-template-colums: repeat(1,1fr);

  }

`

const IndexPage = () => (
  <div>
    <div className='Hero'>
      <div className='HeroGroup'> 

      <h1>Hi people</h1>
      <p>Welcome to <br /> the best site hahahahah.</p>
      <p>Now go build something great. Random text random text random text random text random text random text random text.</p>
      <Link to="/page-2/">just click here already</Link>
      <div className='Logos'>
        <img src={require("../images/logo-sketch.png")} width="50px"/>
        <img src={require("../images/logo-framer.png")} width="50px"/>
        <img src={require("../images/logo-react.png")} width="50px"/>
        <img src={require("../images/logo-figma.png")} width="50px"/>
        <img src={require("../images/logo-studio.png")} width="50px"/>
        <img src={require("../images/logo-swift.png")} width="50px"/>
      </div>
      {/* <svg width="100%" height="172" viewBox="0 0 2560 172" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="white">
        <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z; M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z;M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z; M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z"/>      
        </path>
      </svg> */}
      <Wave> </Wave>
      </div>
    </div>
    <div className='Cards'>
      <h2>11 new courses hahaha</h2>
      <div className='CardGroup'>
          <Card 
          title= "Wooahh...."
          text= "Hmmm random text here"
          image = {require('../images/wallpaper.jpg')}/>
          <Card 
          title= "Barcelona"
          text= "Champions of World"
          image = {require('../images/wallpaper2.jpg')}/>
          <Card 
          title= "React course"
          text= "Very random"
          image = {require('../images/wallpaper3.jpg')}/>
          <Card 
          title= "Rescript course."
          text= "Fischer random"
          image = {require('../images/wallpaper4.jpg')}/>
          <Card 
          title= "Delete this course"
          text= "what is the point?"
          image = {require('../images/wallpaper3.jpg')}/>
          <Card 
          title= "Random course"
          text= "no wayyy"
          image = {require('../images/wallpaper2.jpg')}/>
          <Card 
          title= "Test Course"
          text= "Exit here"
          image = {require('../images/wallpaper.jpg')}/>
          <Card 
          title= "Course course"
          text= "Enter here"
          image = {require('../images/wallpaper3.jpg')}/>
          <Card 
          title= "Testing."
          text= "Htesing"
          image = {require('../images/wallpaper2.jpg')}/>
       </div>
    </div>
    <div> 
      <Section 
        image={require('../images/wallpaper2.jpg')}
        logo={require('../images/logo-react.png')}
        title={"Random title"}
        text={"Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify." }
        />
    </div>
    {/* <Cell 
        title = {"title"}
        image = {require('../images/wallpaper3.jpg')} /> */}

      <SectionCaption> "12 Sections- or is it really 12???"</SectionCaption>
      <SectionCellGroup> 
          {staticdata.cells.map(cell =>(
          
          <Cell 
            title = {cell.title}
            image = {cell.image} />

          ))}      
      </SectionCellGroup>
  </div>
)

export default IndexPage
