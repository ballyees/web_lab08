import React from 'react'
import image from '../img/dev.jfif'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
        <br/>
        <table align="center">
            <tbody>
                <tr>
                    <td>
                        <div className="container">
                            <div className="card is-centered">
                            <img src={image} className='card-image' alt="..." />
                            <div className="card-content">
                                <h5 className="card-header-title">Developer information</h5>
                                <p>Kittinan Prompao (610610569)</p>
                                <p>This app use Google Firebase as backend.</p>
                                <Link to="/">
                                <h3>
                                    <button type="button" className="button is-info">Home</button>
                                </h3>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}