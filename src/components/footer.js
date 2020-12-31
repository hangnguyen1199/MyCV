import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <footer style={{ backgroundColor: '#0040FF' }}>

                    <div className="card-content">
                        <h6 className="mt-button">
                            <strong>CONTACT ME</strong>
                        </h6>
                        <table className="striped">
                            <thead>
                                <tr>
                                    <th>Address mail</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>nthang1811@gmail.com</td>
                                    <td>
                                        <a
                                            target="blank"
                                            href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=CllgCKCJDtpDcPnpczfvVmVppCXvjsMKvbzZqqvmFLPJMsXwdJPQcNcMXVqgMRGhcvrCGMqtjWL" className="btn green lighten-2 ">
                                            Enter send mail
                                                                </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </footer>
            </div>
        )
    }
}
