import React from 'react';
import Task from './Task.js'

class Tasks extends React.Component {
  render(){
    return(
      <div className="card events-card">
         <header className="card-header">
            <p className="card-header-title">
               Tasks
            </p>
            <a href="#" className="card-header-icon" aria-label="more options">
            <span className="icon">
            <i className="fa fa-angle-down" aria-hidden="true"></i>
            </span>
            </a>
         </header>
         <div className="card-table">
            <div className="content">
            <table className="table is-fullwidth is-striped">
               <tbody>
                  <Task />
                  <Task />
                  <Task />
               </tbody>
            </table>
            </div>
         </div>

      </div>

    )
  }
}

export default Tasks
