import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import MeditationNavbar from './MeditationNavbar';
import './meditation.css';

export default function Meditation() {
    const container = {
        height: '100 %',
    };

    const title = {
        color: '#2E6888',
        fontWeight: 'bolder',
    };

    const body = {
        color: '#2E6888',
    };

    return (
        <Fragment>
            <MeditationNavbar />
            <Container
                style={container}
                className='hero-wrapper d-flex flex-column'
                fluid>
                <h1 style={title} className='pt-5'>
                    Mindfulness Meditation
                </h1>
                <p style={body} className='pt-3'>
                    Mindfulness can: help relieve stress, treat heart disease,
                    <br />
                    lower blood pressure, reduce chronic pain, improve sleep,
                    <br />
                    and alleviate gastrointestinal difficulties. <br />
                    <strong>Mindfulness improves mental health.</strong>
                </p>
            </Container>
        </Fragment>
    );
}
