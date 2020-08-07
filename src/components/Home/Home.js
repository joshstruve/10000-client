import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <Header />
                    <div className='hero'>
                        <h1>It Only Takes 10,000 Hours</h1>
                        <div className='hero-text'>
                        <p>Practicing for 10,000 hours can make you an expert at almost anything. 10000 helps you manage the skills that you want to learn and track the time you’ve spent learning.</p>
                        </div>
                        <Link to='/login'>
                        <button className='button-home'>Get Started</button>
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}