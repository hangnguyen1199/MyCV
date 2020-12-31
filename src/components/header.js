import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
export default class Header extends Component {
    render() {
        return (
            <>
                <nav style={{ backgroundColor: '#0040FF' }}>
                    <div className="container">
                    <div class="nav-wrapper">
                        <Link to='/' className='brand-logo' style={{color: 'while'}}>JOB APPLICATION</Link>
                        <ul className='sidenav' id='side-nav'>
                            <li>
                                <Link to='/' >
                                    <i className="fas fa-home" ></i>Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/experiences">
                                    <i className="fas fa-id-badge"></i>Experiences
                                </Link>
                            </li>
                            <li>
                                <Link to="/educations">
                                    <i className="fas fa-graduation-cap"></i>Educations
                                </Link>
                            </li>
                            
                        </ul>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li>
                                <Link to='/'>
                                    <i className="fas fa-home"></i> Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/experiences'>
                                    <i className="fas fa-id-badge"></i> Experiences
                            </Link>
                            </li>
                            <li>
                                <Link to='/educations'>
                                    <i className="fas fa-graduation-cap"></i> Educations
                            </Link>
                            </li>
                            
                        </ul>
                    </div>

                    </div>
                </nav>
            </>
        )
    }
}
