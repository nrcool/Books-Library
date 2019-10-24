
import { Pagination } from "react-bootstrap"

import React, { Component } from 'react'

export default class PaginationBasic extends Component {
    state={
        active: false,
        totalNumber:20,
        items : []
    }
    handleActive=(num)=>{ 
        this.setState({
            active:true
        },()=>{
            let item=this.state.items
            console.log(item[num])
          
        })
       
       
    }
    render() {
        console.log(this.state.items)
        let items=this.state.items
        for (let number = 1; number <= this.state.totalNumber; number++) {
            items.push(
                  <Pagination.Item key={number} active={this.state.active} onClick={()=>this.handleActive(number)}>
                  {number}
                   </Pagination.Item>,
              )
          }
        return (
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                {this.state.items}
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        )
    }
}



    