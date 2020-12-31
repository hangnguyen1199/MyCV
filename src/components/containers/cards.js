import React, { Component } from 'react'
import Img from '../../assets/CV_Hang.jpg'
export default class Card extends Component {
    render() {
        return (

            <div className="card" style={{width: '80%'}}>
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator"  src={Img} />
            </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">Nguyen Thi Hang<i className="material-icons right">more_vert</i></span>
                        <p><a href="https://i.topcv.vn/hangthinguyen?ref=3525057">Download CV</a></p>
                    </div>
                    <div className="card-reveal">
                        <span class="card-title grey-text text-darken-4">Information<i className="material-icons right">close</i></span>
                        <p>As a person who loves to travel, loves animals. Hard-working, eager to learn, good at thinking.I love reading programmer books that help me learn a lot of knowledge, broaden my horizons as well as help me understand more deeply the subject that I follow.</p>
                    </div>
            </div>
            
        )
    }
}
