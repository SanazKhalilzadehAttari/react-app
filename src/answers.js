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

    this.props.getData(event.currentTarget.value, event.currentTarget.name,event.currentTarget.id);
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
            name={this.props.questionId} onChange={this.handelRadioChange} value={this.props.answers[0].nextQuestion} id={this.props.answers[0].copy} />
            {this.props.answers[0].copy.toString()}
           </label>
        </div>
        <div className="col-sm-6 floating">
        <label>
          <input className="small-padding-left" type="radio" 
          name={this.props.questionId} onChange={this.handelRadioChange} value={this.props.answers[1].nextQuestion} id={this.props.answers[1].copy}/>
          {this.props.answers[1].copy.toString()}
        </label>

        </div>
          <div>

         </div>
      </div>
    );
  }
}

export default Answers;