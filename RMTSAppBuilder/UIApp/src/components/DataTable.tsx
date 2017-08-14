import * as React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'; 
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

export interface TableProp{
 inputTableData : Array<any>;
 
 gridHandler : any;
 addDataHandler : any;
 modifyDataHandler : any;
 deleteDataHandler : any;

 modifyButtonStatus : boolean;
 deleteButtonStatus : boolean;

}

export interface TableState{
  open : boolean;
}



export class DataTable extends React.Component<TableProp, TableState> {
  props : TableProp; 
  state : TableState ;
  constructor(props : TableProp){
    super(props); 
  }

  render() {
    var style = {
             margin: 12            
    };


    return (
    <Paper zDepth={2} >
    <RaisedButton label="Add" primary={true} style={style} onClick={this.props.addDataHandler}   />
    <RaisedButton label="Modify" secondary={true} onClick = {this.props.modifyDataHandler} disabled = {this.props.modifyButtonStatus} />
    <RaisedButton label="Delete"  style={style} onClick = {this.props.deleteDataHandler}  
         disabled = {this.props.deleteButtonStatus}/>

    <Table multiSelectable={true} onRowSelection={this.props.gridHandler} >
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody deselectOnClickaway = {false} displayRowCheckbox = {true} preScanRows={false}>
      {this.props.inputTableData.map( (row, index) => (
              <TableRow key={index} selected = {row.selected} >
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
              </TableRow>
              ))}

    </TableBody>
  </Table>

  </Paper>
 
    );
  }
}

export default DataTable;
