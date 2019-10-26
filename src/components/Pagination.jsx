
import { Pagination } from "react-bootstrap"
import {connect} from "react-redux"
import React, { Component } from 'react'

class PaginationBasic extends Component {
    state={
        items : [],
        data:this.props
    }
    render() {
        let items=this.state.items
        for (let number = this.state.data.Start; number <= this.state.data.Start+15; number++) {
                     items.push(
                  <Pagination.Item key={number} active={number===this.state.data.currentPage} onClick={()=>this.props.handleActive(number)}>
                   {number}
                   </Pagination.Item>)  
           
          }
        return (
            <Pagination>
               <Pagination.Prev onClick={()=>this.props.prev()}/>
                
                {this.state.items}
               <Pagination.Next onClick={()=>this.props.next()}/>
            </Pagination>
        )
    }
}

const mapStateToProps=(state)=>{
    return state
    }
    const mapDispatchToProps=(dispatch)=>{
        return{
            prev:()=>dispatch({type:"prev"}),
            next:()=>dispatch({type:"next"})
        }
    }   
   

export default connect(mapStateToProps,mapDispatchToProps)(PaginationBasic )