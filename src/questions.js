import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import Answers from './answers'
import RatingCalculate from './ratingCalculate'


class Questions extends Component {
  constructor(props){
    super(props);
    this.state ={
     selectedItem : [0],
     questionSelected : 0
    };
    this.getData = this.getData.bind(this);
  }

  getData = function(val, id){
    //console.log(val);
    this.setState({
      selectedItem : val,
      questionSelected : id
    });
  };

/* I dont know how to get this value inside this render file*/
  render() {
    return(
      <div>
        {
           this.props.questions.map((question, i) =>{
             return (
              <div>
                  {
                    <div>
                      <div>
                        <div key={i} >
                          <span>
                          {question.copy}     
                          </span>
                        </div>
                      </div>
                      <div>
                        <Answers answers={question.answers} questionId={question.id} getData = {this.getData}/>
                      </div>
                    </div>
                  }
                  
              </div>
              
              );
         })

           
    }
      <div>              
          <RatingCalculate questionId={this.state.questionSelected} data={this.props.questions} selected={this.state.selectedItem}/>
      </div>     
    </div>
    
  );
}
}
export default Questions;