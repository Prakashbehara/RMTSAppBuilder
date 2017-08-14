import * as React from 'react';



import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import DataTableFilter from './DataTableFilter';
import Paper from 'material-ui/Paper';

const SelectableList = makeSelectable(List);

import '../App.css';

export interface IMasterProp{

}

export interface IMasterState{
  open : boolean;
}

const Logged = (
  <IconMenu
   
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

class Master extends React.Component<IMasterProp, IMasterState> {
  props : IMasterProp;
  state : IMasterState ={open : false};
  constructor(){
    super();
    this.setState ( {open: false});
    this.handleTouchTap = this.handleTouchTap.bind(this);
  }

  componentDidMount() {
      alert('componentDidMount' );      
  }

  componentWillUnmount() {
    alert('componentWillUnmount ');
  }

handleTouchTap() {
   this.setState({open: !this.state.open});
}

  render() { 

const tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
    selected : false,
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
    selected : false,
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
    selected : false,
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
    selected : false,
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
    selected : false,
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
    selected : false,
  },
  {
      name: 'Adam Moore',
      status: 'Employed',
      selected : false,
    },
  ];

    var bodyStyle = {
             "margin-left" : "0%" 
            
    };

    return (


     <Paper>

           <AppBar  title="My App" onLeftIconButtonTouchTap={this.handleTouchTap}  
                        onTitleTouchTap={this.handleTouchTap} 
                        iconElementRight={ Logged }  
                        iconClassNameRight="muidocs-icon-navigation-expand-more"  >
            </AppBar>
           <Drawer open={this.state.open}   width={'15%'}  >
              <AppBar title="My App"   showMenuIconButton = {false} onTitleTouchTap={this.handleTouchTap} />
              <MenuItem>Menu Item</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
              <SelectableList
                  value={location.pathname}
                  
               >
                  <ListItem
                    primaryText="Jungle"
                    primaryTogglesNestedList={true}
                    nestedItems={[
                      <ListItem primaryText="Aanimals" value="/get-started/required-knowledge" />,
                      <ListItem primaryText="Birds" value="/get-started/installation" />,  
                      <ListItem primaryText="Birds1" value="/get-started/installation" />,                       
                    ]}
                  />
              </SelectableList>

             </Drawer>

             <Paper id="pandu"  style={bodyStyle}>
                    <DataTableFilter inputTableData={tableData}  />

             </Paper>
           
     </Paper>
    );
  }
}

export default Master;
