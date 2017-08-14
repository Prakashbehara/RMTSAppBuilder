import * as React from 'react';
 

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import {
  Table,
  TableBody,
 
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export interface TableHeaderProp{
  
 
}

export interface TableHeaderState{
  
}

export class DataTableHeader extends React.Component<TableHeaderProp, TableHeaderState> {
  props : TableHeaderProp; 
  state : TableHeaderState;
  constructor(props : TableHeaderProp){
    super(props); 
}


render() {
  



    return (     
       
    <Paper zDepth={2}>

        <Table>
    
    <TableBody displayRowCheckbox={false}>
      <TableRow >
        <TableRowColumn  style={{
      height : '20px'
    }} ><TextField hintText="Name" /></TableRowColumn>
        <TableRowColumn><TextField hintText="Roll Number" /></TableRowColumn>
        <TableRowColumn><TextField hintText="Age" /></TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn><TextField hintText="Policy" /></TableRowColumn>
        <TableRowColumn><TextField hintText="Plan code" /></TableRowColumn>
        <TableRowColumn><RaisedButton label="Search" primary={true} /></TableRowColumn>
      </TableRow>
     
    </TableBody>
  </Table>





    
    </Paper>
    );
  }
}
export default DataTableHeader;
