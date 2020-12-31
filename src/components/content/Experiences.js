import React, { Component } from 'react'
import Header from '../header'

export default class Experiences extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <Header />
                    <div className="card-content">
                        <h6>
                            <strong>EXPERIENCES</strong> <hr/>
                        </h6>
                        <div className="row">
                            <div className="col s12 m4">
                                <p className="green lighten-3 white-text center-align">Jan <strong>2017</strong> - March <strong>2021</strong></p>
                            </div>
                            <div className="col s12 m8">
                                <blockquote className ="">
                                    <h6 className="">
                                        <strong>DESIGNER</strong>
                                    </h6>
                                    <p>
                                    I am Hang. I am 21 years old this year from Quang Nam. I am a 4th year student at Danang Pedagogical University. I have a basic knowledge of website design.
                                    </p>
                                </blockquote>
                            </div>
                            <div className="col s12 m4">
                                <p className="green lighten-3 white-text center-align">Jan <strong>2017</strong> - March <strong>2021</strong></p>
                            </div>
                            <div className="col s12 m8">
                               <blockquote>
                                   <h6>
                                       <strong>WEB DEVELOPMENT</strong>
                                   </h6>
                                    <p>
                                    Not much experience in website development but will try to add learning.
                                    I have experience in web design in which I am good at front end and back end, I am a cheerful person with everyone. 
                                    If I work at your company I will do my best
                                    </p>
                               </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
