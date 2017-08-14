import * as React from 'react';
 
import {DataTable} from './DataTable';
import {DataTableHeader} from './DataTableHeader';

export interface TableFilterProp{
 inputTableData : Array<any>; 
}

export interface TableFilterState{
  tableData : Array<any>;
  deleteButton : boolean;
  modifyButton : boolean;
  selectedRows : Array<number>; 
}

class DataTableFilter extends React.Component<TableFilterProp, TableFilterState> {
  props : TableFilterProp; 
  state : TableFilterState = {tableData : this.props.inputTableData , 
     deleteButton : true , modifyButton : true , selectedRows : []};
  
  constructor(props : TableFilterProp){
    super(props); 
    this.dataTableHandler = this.dataTableHandler.bind(this);
    this.addData = this.addData.bind(this);
    this.modifyData = this.modifyData.bind(this);
    this.deleteData = this.deleteData.bind(this);
  }

dataTableHandler(rowNumber : any  ) { 
        if(rowNumber == 'all'){
            this.setState( {modifyButton : false , deleteButton : false} );      
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
                    row.selected = false;
                });
                rowNumber.forEach(index => {
                    this.state.tableData[index].selected = true;         
                });
            }
            this.setState({ tableData: this.state.tableData } );          
        }
}

addData (){
    var data = this.state.tableData;
    data.push({name: 'Raja', status: 'Babu'});
    this.setState({tableData : data});
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
                gridHandler = {this.dataTableHandler} addDataHandler = {this.addData} deleteDataHandler = {this.deleteData}
                modifyDataHandler = {this.modifyData} deleteButtonStatus = {this.state.deleteButton} 
                modifyButtonStatus = {this.state.modifyButton}/>
        </div>
    );
  }
}

export default DataTableFilter;
