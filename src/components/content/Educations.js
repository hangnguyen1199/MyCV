import React, { Component } from 'react'
import Header from '../header'

export default class Educations extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <Header />
                    <div className="card-content">
                        <h6 className="">
                            <strong>EDUCATIONS</strong>
                        </h6>
                        <table className="striped">
                            <thead>
                            <tr>
                                <th>Certificate</th>
                                <th>Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Danang University - University of Education</td>
                                <td>2017 - Present</td>
                                <td>
                                    <a href="https://ued.udn.vn/" target="blank" className="btn green lighten-2">
                                        View
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>B1-Mr.Thu</td>
                                <td>Present</td>
                                <td>
                                    <a href="https://bangcapchungchitoanquoc.com/chung-chi-tieng-anh-a2-b1-b2-khung-chau-au/" target="blank" className="btn green lighten-2">
                                        View
                                    </a>    
                                </td>
                            </tr>
                            <tr>
                                <td>Frecodecamp</td>
                                <td>Present</td>
                                <td>
                                    <a href="https://www.freecodecamp.org/" target="blank" className="btn green lighten-2">
                                        View
                                    </a>    
                                </td>
                            </tr>
                            <tr>
                                <td>An internship at HIFiveplus</td>
                                <td>Current until April 2021</td>
                                <td>
                                    <a href="http://hifiveplus.vn/" target="blank" className="btn green lighten-2">
                                        View
                                    </a>    
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
