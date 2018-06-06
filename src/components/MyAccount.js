import React from 'react';
import Tasks from './Tasks.js';
import AdminButton from './AdminButton.js';
import UserSearch from './UserSearch.js'
import '../styles/Admin.css';


class MyAccount extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userName: '',
      message: '',
    }
  }
  componentDidMount(){
    this.setState(({
      userName: 'Admin',
      message: 'I hope you are having a great day!'
    }))
  }
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
                    Hello, {this.state.userName}.
                  </h1>
                  <h2 className="subtitle">
                    {this.state.message}
                  </h2>
                </div>
              </div>
            </section>
            <section className="info-tiles">
              <div className="tile is-ancestor has-text-centered extra-space">
                <AdminButton message="My Balance" />
                <AdminButton message="My Listings" />
                <AdminButton message="My Favorites" />
                <AdminButton message="Change Password" />
              </div>
            </section>
            <div className="columns">
              <div className="column is-6">
              <Tasks />
            </div>
            <UserSearch />
          </div>
        </div>
      </div>
    </div>
  </div>
    )
  }
}

export default MyAccount
