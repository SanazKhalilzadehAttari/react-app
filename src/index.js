import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/*import {Rating} from './Rating';*/
import {Questions} from './questions';
import {Answers} from './answers';
import {RatingCalculate} from './ratingCalculate';
import registerServiceWorker from './registerServiceWorker';
import bootstrap from 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
