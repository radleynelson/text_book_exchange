import React from 'react';

class Task extends React.Component{
  render(){
    return(
      <tr>
         <td width="5%"></td>
         <td>Confirm purchase</td>
         <td><a className="button is-small is-primary" href="#">Approve</a></td>
      </tr>
    )
  }
}

export default Task;
