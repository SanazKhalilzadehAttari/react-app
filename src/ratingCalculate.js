import React, { Component } from 'react';


class RatingCalculate extends Component {
	constructor(props){
		super(props);
	}
  calculate = function(){
    var calculate = [];
    if(this.props.selected !== null){
       for (var i = 0; i < this.props.data.length; i++) {
         var item = [];
       if(this.props.questionId === this.props.data[i].id){
           this.item = this.props.data[i].answers;
           console.log('item',this.item);
       }
          for(var j=0; j< this.item.length; j++){
            var answerItem ='';
            if(this.props.selected === this.item[j].copy){
              console.log('answer',this.item[j]);
            }
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