import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Global Mobility Manager</title>
        <meta property="og:title" content="Global Mobility Manager" />
      </Helmet>
    </div>
  )
}

export default Home
