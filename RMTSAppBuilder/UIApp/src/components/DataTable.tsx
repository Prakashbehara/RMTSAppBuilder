import * as React from 'react';
import {
  Table,
  TableBody,
  TableHeader,  
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'; 
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

export interface TableProp{
 inputTableData : Array<any>;
 headerData : Array<any>;
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
       {this.props.headerData}
      </TableRow>
    </TableHeader>
    <TableBody deselectOnClickaway = {false} displayRowCheckbox = {true} preScanRows={true}>
      {
          this.props.inputTableData.map( (p : any) => {
            var items = Object.keys(p)     
            .filter(k => k !== 'selected' )
            .map(k => {
              return (                
                  <TableRowColumn key={p.id + k}>{p[k]}</TableRowColumn>
              )
            });
            return (
              <TableRow key={p.id} selected={p.selected == 1} >
                {items}
              </TableRow>
            );
          })  
      }
    </TableBody>
  </Table>
  </Paper> 
    );
  }
}
export default DataTable;
