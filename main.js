import React,{Component} from 'react';
import {render} from 'react-dom'
import Header from './Header';
import Widget from './Widget';
class App extends Component{

  onclick(){
    this.items += {id:3,name:'D',age:20};
  }
  render(){
    const items = [{
      id : 0,
      name : 'A',
      age : 10

    },{
      id : 1,
      name : 'B',
      age : 15
    },{
      id : 2,
      name : 'C',
      age : 15
    }

  ];


    return (
      <div>
        <h1>Hello World</h1>
        <Widget name = "kajornsak" surname ="peerapathananont"></Widget>
        <button onClick = {this.onclick}></button>
        <Header />
        {
          items.map((item) =>{
            return <div key={item.id}>{item.name} : {item.age}</div>
          })

        }
      </div>
    )
  }
}






var appName = document.getElementById('app');
render(<App />,appName);
