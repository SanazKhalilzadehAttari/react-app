import React, { Component } from 'react';


class RatingCalculate extends Component {
	constructor(props){
		super(props);
	}
  calculate = function(){
    var calculateParams = [];
    var rateCloud ;
    var cloudx= 0;
    var cloudflow = 0;
    var cloudventure= 0;
    var cloudsurfer= 0;
    var cloudventure_waterproof= 0;
    var cloudventure_peak= 0;
    var cloudventure_midtop= 0;
    var cloudrush= 0;
    var cloudflash= 0;
    var cloudflyer= 0;
    var cloudcruiser= 0;
    if(this.props.selected !== null){
      var questionNum = this.props.questionId;
      var answers = this.props.data[questionNum].answers;
       for (var i = 0; i <answers.length; i++) {
          if(this.props.selected === answers[i].copy){
            debugger;
            answers[i].ratingIncrease.map((params, i) =>{
              calculateParams.push(params); 
            }) ;
            }
          }
        }
      
    }
	
  render() {
  
    
    return (
      <div>
      {
        this.calculate()
      }
      </div>
    );
  }
}

export default RatingCalculate;