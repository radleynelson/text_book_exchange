import React from 'react';

class AdminButton extends React.Component{
  render(){
    return(
      <div className="tile is-parent">
         <article className="tile is-child box">
            <p className="title">{this.props.message}</p>
         </article>
      </div>
    )
  }
}

export default AdminButton
