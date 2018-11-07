import React, { Component } from 'react'

export class Player extends Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <section className="gridContainer padding halfWidth players">
                <span>{this.props.name}</span>
                <span><input type="checkbox" name="solo"/></span>
                <span><input type="checkbox" name="solo"/></span>
                <span><input type="checkbox" name="duo"/></span>
                <span><input type="checkbox" name="trio"/></span>
                <span><input type="checkbox" name="team"/></span>
                <span>{this.props.school}</span>
            </section>
        )
    }
}
