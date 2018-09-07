import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Bsod = styled.section`
  position: fixed;
  top: 0; 
  right: 0; 
  bottom: 0;
  left: 0;
  padding: 50px;
  color: #fff; 
  background: #0100ab;
  font-family: 'Inconsolata', monospace;
`;

class BsodScreen extends Component {
  componentDidMount() {
    const sound = new Audio("https://www.myinstants.com/media/sounds/erro.mp3");
    sound.play();
  }
  
  render() {
    return (
      <Bsod>
        <p>A problem has been detected and Windows has been shut down to prevent damage to your computer.</p>
        <p>If this is the first time you've seen this stop error screen, restart your computer. if this screen appears again, follow these steps:</p>
        <p>Check to make sure any new hardware or software is properly installed. I this is a new installation, ask your hardware or software manufacturer for and Windows updates you might need.</p>
        <p>If problems continue, disable or remove any newly installed hardware or software. Disable BIOS memory options such as caching or shadowing. If you need to use Safe Mode to remove or disable components, restart your computer, press F8 to select Advanced Startup Options, and then select Safe Mode.</p>
        <p>Technical information:</p>
        <p>*** STOP: 0x000000FE (0x00000008, 0x000000006, 0x00000009, 0x847075cc)</p>
        <p>(New BSOD)</p>
        <p>:( Your PC ran into a problem and needs to restart. We're just collecting some error info, and then we'll restart for you. (45% complete)</p>
        <p>You can search for the error online: HAL_INITALIZATION_FAILED</p>
      </Bsod>
    );
  }
}

export default BsodScreen;