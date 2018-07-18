import React, { Component } from 'react';
import './App.css';
import data from './data';
import Questions from './questions';




class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      shoes:[],
      questions:[]
    };

  }
  componentWillMount(){
    //this.state.shoes.push(data.shoes);
    
   this.setState(data);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className = "col-sm-12">
            <form>
              <Questions questions = {this.state.questions}/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
