import React, { Component } from 'react';
import Cell from './Cell';

class Row extends Component {

    renderCell(i, elem, id){
        if(i !== 0){
            return  <Cell key={i} cell={elem} id={id} fetch={this.props.table} text={this.props.cells[elem]}/> 
        } else {
            return <td key={i}>{this.props.cells[elem]}</td>
        }
    }
   
    render() {
        
        let cells;
        if(this.props.cells){
            cells = Object.keys(this.props.cells).map((elem, i, _arr)=>{
                
                if (this.props.isBody){
                    return(
                        this.renderCell(i, elem, this.props.cells.id)
                    )
                } else {
                    return(
                        <th key={i}>
                            {elem}
                        </th>
                    );
                }
                
            });
        }
        return (
            <tr>
                {cells || null}
            </tr>
        );
    }
}

export default Row;
