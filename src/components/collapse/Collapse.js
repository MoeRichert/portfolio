import React, { Component } from 'react';
import "./Collapse.css";

class Collapsible extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: true
        }
        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(e){
        this.setState({open: !this.state.open})
    }

    componentDidUpdate(){
        
    }

    render() {
      return (<div>
        <div onClick={(e)=>this.togglePanel(e)} className='headerdiv'>
            {this.props.title}</div>
        {this.state.open ? (
            <div className='content'>
                {this.props.children}
            </div>
            ) : null}
      </div>);
    }
  }
  
  export default Collapsible;