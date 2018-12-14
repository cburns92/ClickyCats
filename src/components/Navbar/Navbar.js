import React from 'react';

const titleStyle = {
    margin: 'auto auto auto 5%',
    float: 'left',
    fontSize: '50px'
}

const scoreStyle = {
    margin: 'auto 5% auto auto',
    float: 'right',
}

const headerStyle = {
    margin: 'auto',
    height: '10vh',
    background: 'black',
    color: 'white'
}

const Navbar = props => (
    <h1 style={headerStyle}>
        <span style={titleStyle}>Clicky Cats!</span>
        <span style={scoreStyle}>Current Score: {props.score} | High Score: {props.high}</span>               
    </h1>
)


export default Navbar;