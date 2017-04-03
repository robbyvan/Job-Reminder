import React from 'react'

import Menu from './Menu.js'
import JobCount from './../containers/JobCount.js'

require('./../../stylesheets/app.scss')

const App = () => {
  return (
    <div className="app-container">
        <Menu />
        <h1 className="app-name">Job Application Reminder</h1>

        <div className="page-content">
          <JobCount />  
        </div>

    </div>
  );
}

export default App

