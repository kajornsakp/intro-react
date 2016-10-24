import React , {Component} from 'react';

class Widget extends Component{

  render(){
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.surname}</p>
      </div>
    )
  }
}

export default Widget
