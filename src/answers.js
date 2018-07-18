import React, { Component } from 'react';


class Answers extends Component {
  constructor(props){
    super(props);
    this.state = {
      ratingCalculate : []
    };
    this.handelRadioChange = this.handelRadioChange.bind(this);

  }
  

  handelRadioChange = function(event){

   
    this.props.getData(event.currentTarget.value, event.currentTarget.name);
    this.setState({
      /*nextQuestion: event.currentTarget.value*/
    })
  };
  

  render() {
    return (
      <div className="col-sm-12 clearfix">
          <div className="col-sm-6 floating">
          <label>
           <input className="small-padding-left" type="radio" 
            name={this.props.questionId} onChange={this.handelRadioChange} value={this.props.answers[0].nextQuestion} id={this.props.questionID} />
            {this.props.answers[0].copy.toString()}
           </label>
        </div>
        <div className="col-sm-6 floating">
        <label>
          <input className="small-padding-left" type="radio" 
          name={this.props.questionId} onChange={this.handelRadioChange} value={this.props.answers[1].nextQuestion} id={this.props.questionID}/>
          {this.props.answers[1].copy.toString()}
        </label>

        </div>
          <div>

-          </div>
      </div>
    );
  }
}

export default Answers;

/* <div className="col-sm-12 clearfix">
                      <div className="col-sm-6 floating">
                        <label>
                          <input className="small-padding-left" type="radio" 
                            name={question.id}  value={question.answers[0].nextQuestion}
                             id={question.id} onClick={question.id ,question.answers[0].nextQuestion, question.answers[0].ratingIncrease }/>
                            {question.answers[0].copy}{question.answers[0].nextQuestion}  
                        </label>
                      </div>
                    <div className="col-sm-6 floating">
                    <label>
                          <input className="small-padding-left" type="radio" 
                          name={question.id}  value={question.answers[1].nextQuestion} onClick={question.id , question.answers[1].nextQuestion, question.answers[1].ratingIncrease} id={question.id}/>
                          {question.answers[1].copy}{question.answers[1].nextQuestion}
                        </label>
                    </div>
              </div>   */