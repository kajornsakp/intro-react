import React, {Component} from 'react'

class Header extends Component{
  constructor(){
    super();
    this.onClick = this.onClick.bind(this)
    this.state = {
      name: 0
    }
  }
  onClick(){

    this.setState({name: this.state.name +1})
  }

  render(){
    return (
      <button onClick={this.onClick}>{this.state.name}</button>

    )

  }
}

export default Header
