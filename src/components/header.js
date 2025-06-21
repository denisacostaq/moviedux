import React from 'react';
import '../styles.css'

export default function Header() {
    const base = process.env.PUBLIC_URL || '';
    return (
        <div className='header'>
            <img
              className='logo'
              src={`${base}/logo.png`}
              alt='moviedux'
            />
            <h2 className='app-subtitle'>It's time for popcorn! Find your next movie here.</h2>
        </div>
    )
}