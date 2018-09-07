import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import BsodScreen from './BsodScreen'
import Menu from './Menu'

const styles = {
  root: {
    flexGrow: 1,
  },
};

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
          <LinearProgress variant="determinate" value={this.state.completed} />
        }

        <Menu />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
