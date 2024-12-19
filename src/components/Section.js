// use client;
import React from 'react'
import styled from 'styled-components'
import Wave from './Wave'

const SectionGroup =  styled.div`
    background: url(${props =>props.image});
    height: 720px;
    background-size: cover;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;
`
const SectionLogo = styled.img`
    align-self: end
    width: 128px;
    margin: 0 auto;

    @media (max-width: 720px){
        transform: scale(80%);
    }
`

const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    margin: 0 40px;
    grid-grap: 20px;
    grid-template-rows: auto 100%;

    @media (max-width: 720px){
        grid-template-columns: 1fr
        text-align: center;
    }
`

const SectionText = styled.p`
    color: rgba(255,255,255,0.7);
    aign-self: right;

    @media (maxwidth: 720px){
        font-size: 16
    }

`
const SectionTitle = styled.h3`
    font-size: 60px;
    margin: 0;
    line-height: 1.2;
    color: rgba(255,255,255,0.8);   
    align-self: left;

    @media (maxwidth: 720px){
        font-size: 48px
    }
`

const WaveBottom = styled.div`
    ${'' /* margin: 0px; */}
    position: absolute;
    ${'' /* self-align: bottom; */}
    width: 100%;
    ${'' /* height: 100%; */}
    bottom: -8px;
`
const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -8px;
    transform: rotate(180deg);
`

const Section = props => (
        
        <SectionGroup image={props.image}>
            {/* <WaveTop> <Wave /> </WaveTop> */}
            <WaveBottom> <Wave /> </WaveBottom>
            <WaveTop> <Wave /> </WaveTop>
            <SectionLogo src={props.logo}></SectionLogo>
            <SectionTitleGroup>
                    <SectionTitle> {props.title}</SectionTitle>
                    <SectionText> {props.text}</SectionText>
            </SectionTitleGroup>
            {/* <Wave /> */}
        </SectionGroup>
        
)

export default Section