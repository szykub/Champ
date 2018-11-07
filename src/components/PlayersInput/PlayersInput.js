import React, { Component } from 'react';

import "./PlayersInput.css";
import { Player } from "../Player/Player";


export class PlayersInput extends Component{
    constructor(props){
        super(props)

        this.state = {
            player: '',
            school: this.props.schools[0].value,
            playersArray: [],
        }
    }

    handleNameInput = e => {
        this.setState({
            player: e.target.value
        })
    }

    handleSchoolSelect = e => {
        this.setState({
            school: e.target.value
        })
    }

    addPlayer = () => {
        let player = {
            name: this.state.player,
            school: this.state.school,
        }
        this.setState(prevState => ({
            playersArray: [...prevState.playersArray, player]
        }))
    }

    render(){
        return(
            <React.Fragment>
                <section className="topBar padding halfWidth">
                    <div className="gridContainer">
                        <span>Imię i Nazwisko</span>
                        <span>Solo M</span>
                        <span>Solo D</span>
                        <span>Duo</span>
                        <span>Trio</span>
                        <span>Team</span>
                        <span>Uczelnia</span>
                    </div>
                </section>
                {
                    this.state.playersArray.map(item => {
                        return <Player name={item.name} school={item.school}/>
                    })
                }
                <section className="addPlayer padding halfWidth">
                    <input className="input" placeholder="Imię i Nazwisko" onChange={this.handleNameInput} value={this.state.player}/>
                    <select className="select" value={this.state.school} onChange={this.handleSchoolSelect}>
                        {
                            this.props.schools.map(item => 
                                <option value={item.value}>{item.value}</option>
                            )
                        }                    
                    </select>
                    <button className="button" onClick={this.addPlayer}>Dodaj</button>
                </section>
            </React.Fragment>
        )
    }
}