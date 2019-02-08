import React, { Component } from 'react';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="mainHeader">
                    <section className="headerButton">Zawody</section>
                    <section className="headerButton">Zawodnicy</section>
                    <section className="headerButton">Solistki</section>
                    <section className="headerButton">Soliści</section>
                    <section className="headerButton">Pary</section>
                    <section className="headerButton">Trójki</section>
                    <section className="headerButton">Klasyfikacja uczelniana</section>
                    <section className="headerButton import">Importuj zawody</section>
                </header>
            </div>
        );
    }
}

export default App;