import React from 'react';
import { Container } from 'react-bulma-components/full';
import { Heading } from 'react-bulma-components/full';
import { Section } from 'react-bulma-components/full';
import Tasks from './Tasks.js';
import '../styles/Admin.css';


class MyAccount extends React.Component{
  render(){
    return(
      <div>
      <div className="container">
 <div className="columns">
    <div className="column is-12">
       <section className="hero is-info welcome is-small">
          <div className="hero-body">
             <div className="container">
                <h1 className="title">
                   Hello, Admin.
                </h1>
                <h2 className="subtitle">
                   I hope you are having a great day!
                </h2>
             </div>
          </div>
       </section>
       <section className="info-tiles">
          <div className="tile is-ancestor has-text-centered extra-space">
             <div className="tile is-parent">
                <article className="tile is-child box">
                   <p className="title">My Listings</p>
                </article>
             </div>
             <div className="tile is-parent">
                <article className="tile is-child box">
                   <p className="title">My Favorites</p>
                </article>
             </div>
             <div className="tile is-parent">
                <article className="tile is-child box">
                   <p className="title">Change Password</p>
                </article>
             </div>
             <div className="tile is-parent">
                <article className="tile is-child box">
                   <p className="title">Test</p>
                </article>
             </div>
          </div>
       </section>
       <div className="columns">
          <div className="column is-6">
             <Tasks />
          </div>
          <div className="column is-6">
             
             <div className="card">
                <header className="card-header">
                   <p className="card-header-title">
                      User Search
                   </p>
                   <a href="#" className="card-header-icon" aria-label="more options">
                   <span className="icon">
                   <i className="fa fa-angle-down" aria-hidden="true"></i>
                   </span>
                   </a>
                </header>
                <div className="card-content">
                   <div className="content">
                      <div className="control has-icons-left has-icons-right">
                         <input className="input is-large" type="text" placeholder=""></input>
                         <span className="icon is-medium is-left">
                         <i className="fa fa-search"></i>
                         </span>
                         <span className="icon is-medium is-right">
                         <i className="fa fa-check"></i>
                         </span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </div>
</div>
      </div>
    )
  }
}

export default MyAccount
