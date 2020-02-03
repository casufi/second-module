import React from 'react'
import PropTypes from 'prop-types'
import { Router, Link } from '@reach/router'

import styles from './styles.css'
import Dashboard from './screens/dashboard'
import Home from './screens/home'

function ExampleComponent(props) {
  const { text } = props
  return (
    <div className={styles.test}>
      Example Component: {text}
      <nav>
        <Link to='/'>Home</Link>
        <Link to='dashboard'>Dashboard</Link>
      </nav>
      <Router>
        <Home path='/' />
        <Dashboard path='dashboard' />
      </Router>
    </div>
  )
}

ExampleComponent.propTypes = {
  text: PropTypes.string
}

export default ExampleComponent
window.SecondComponent = ExampleComponent
