import * as React from 'react';
 
import {DataTable} from './DataTable';
import {DataTableHeader} from './DataTableHeader';
import {AddDataDialog} from './AddDataDialog';
import TextField from 'material-ui/TextField';

import { 
  TableHeaderColumn
} from 'material-ui/Table'; 
var Client = require('node-rest-client').Client;
var client = new Client();

export interface TableFilterProp{
 inputTableData : Array<any>; 
}

export interface TableFilterState{
  tableData : Array<any>;
  headerData : Array<any>;
  deleteButton : boolean;
  modifyButton : boolean;
  selectedRows : Array<number>; 
  openAddDialog : boolean;
  dialogComponents : Array<any>;
}

class DataTableFilter extends React.Component<TableFilterProp, TableFilterState> {
  props : TableFilterProp; 
  state : TableFilterState = {tableData : this.props.inputTableData , 
     deleteButton : true , modifyButton : true , selectedRows : [] , headerData : [], 
     openAddDialog : false, dialogComponents : []};  
  constructor(props : TableFilterProp){
    super(props); 
    this.dataTableHandler = this.dataTableHandler.bind(this);
    this.addData = this.addData.bind(this);
    this.modifyData = this.modifyData.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.parseData = this.parseData.bind(this);
    this.closeAddDataDialog = this.closeAddDataDialog.bind(this);
    this.onBlurValue = this.onBlurValue.bind(this);
  }

  parseData(data1 :any , response : any) {
     // parsed response body as js object
     var headerData1= Object.keys(data1[0]).splice(1).map((element, index, array)=> {           
            return <TableHeaderColumn> {element} </TableHeaderColumn>;
     });
     this.setState ( {tableData: data1 , headerData : headerData1});
  };

  componentDidMount() {    
    // registering remote methods 
    client.registerMethod("jsonMethod", "http://localhost:3001/tasks", "GET");
    var req = client.methods.jsonMethod(this.parseData);
        req.on('error', function (err: any ) {
          alert('error ');
            console.log('request error', err);
        });
  }

onBlurValue(event: object){
    alert('onBlurValue' + event);
}
dataTableHandler(rowNumber : any  ) { 
        if(rowNumber == 'all'){
            this.setState( {modifyButton : true , deleteButton : true} );      
        }else if(rowNumber == 'none'){
            this.setState( {modifyButton : true , deleteButton : true} );
        }else{
            if (rowNumber instanceof Array ){ 
                //Preserving the selected rows in the state
                this.setState ({selectedRows : rowNumber}); 
                if(rowNumber.length == 1  ){
                    this.setState( { deleteButton : false} );
                }else{
                    this.setState( { deleteButton : true} );
                }    
               if(rowNumber.length == 1  ){
                    this.setState( { modifyButton : false} );
                } else{
                    this.setState( { modifyButton : true} );
                } 
                this.state.tableData.map( (row, index) => {
                    row.selected = 0;
                });
                rowNumber.forEach(index => {
                    this.state.tableData[index].selected = 1;         
                });
            }
            this.setState({ tableData: this.state.tableData } );          
        }
}

addData (){
    var dialogComponents = Object.keys(this.state.tableData[0]).splice(1).map((element, index, array)=> {           
            return <tr><td><TextField id={element} hintText={element} onBlur={this.onBlurValue}  ></TextField></td></tr>;
     });
     this.setState({openAddDialog : true , dialogComponents : dialogComponents});
    /*var data = this.state.tableData;
    data.push({Name: 'Raja', City: 'Westborough', State : 'MA'});
    this.setState({tableData : data});*/
}

closeAddDataDialog(){
    this.setState({openAddDialog : false});
}

modifyData (){
    alert('modify Data'+this.state.selectedRows);
}


deleteData (){
    this.state.selectedRows.forEach(index =>{
        this.state.tableData.splice(index,1);
    });
    this.setState({ tableData : this.state.tableData , selectedRows : [] , deleteButton : true});
}
  render() {
      return (     
        <div> 
            <DataTableHeader />
            <br />
            <DataTable 
                inputTableData={this.state.tableData}  
                headerData = {this.state.headerData}
                gridHandler = {this.dataTableHandler} addDataHandler = {this.addData} deleteDataHandler = {this.deleteData}
                modifyDataHandler = {this.modifyData} deleteButtonStatus = {this.state.deleteButton} 
                modifyButtonStatus = {this.state.modifyButton}/>
            <AddDataDialog open={this.state.openAddDialog} 
                formData = {this.state.dialogComponents}
                handler={this.closeAddDataDialog}></AddDataDialog>
        </div>
    );
  }
}

export default DataTableFilter;
