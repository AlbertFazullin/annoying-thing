import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import SettingsIcon from '@material-ui/icons/Settings';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import styled from 'styled-components';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};
const Navigation = styled.div`
  padding: 20px;
`;

class Menu extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  onMouseOverHandler = () => {
    const sides = ['top', 'right', 'bottom', 'left'];
    const index = Math.floor((Math.random() * 3));
    const side = sides[index];
    this.setState({
      'top': false,
      'left': false,
      'bottom': false,
      'right': false,
      [side]: true });
    console.log(this.state);
  }

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    );

    return (
      <Navigation>
        <Button onClick={this.toggleDrawer('right', true)} >
          <SettingsIcon />
        </Button>
        <Drawer 
          anchor="right" 
          open={this.state.right} 
          onClose={this.toggleDrawer('right', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
            onMouseOver={this.onMouseOverHandler.bind()}
          >
            {sideList}
          </div>
        </Drawer>
      </Navigation>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);
