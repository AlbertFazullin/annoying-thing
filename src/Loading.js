import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import BsodScreen from './bsodScreen';
import Menu from './Menu';
import styled from 'styled-components';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const ProgressBar = styled.div`
  z-index: 2000;
 position: relative;
`;

class App extends Component {
  timer = null;

  state = {
    completed: 0,
    bsod: false,
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    if (completed > 99.5) {
      this.setState({ completed: 0, bsod: true });
    } else {
      const step = (100 - completed) / 100;
      const diff = (Math.random() * 3 + 7) * step;
      this.setState({ completed: Math.min(completed + diff, 100) });
    }
  };

  render() {
    const { classes } = this.props;
    const sound = new Audio(this.url);
    return (
      <div>
        { this.state.bsod?
          <BsodScreen />
          :
          <ProgressBar>
            <LinearProgress variant="determinate" value={this.state.completed} />
            <Menu />
          </ProgressBar>
        }
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
