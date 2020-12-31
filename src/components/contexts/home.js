import React, { Component } from 'react'
import Footer from '../footer'
import Header from '../header'
import Card from '../containers/cards'
import About from '../containers/about'
import Career from '../containers/career'
import Skill from '../containers/skills'
import Experience from '../containers/Language'
export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="card">
                    <Header />
                    <div className="row">
                        <div className="col s4">
                            <Card />
                        </div>
                        <div className="col s8">
                            <About />
                        </div>
                        <div className="col s12">
                            <Career />
                        </div>
                        <div className="col s12">
                            <Skill />
                        </div>
                        <div className="col s12">
                            <Experience />
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}
