import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

let curDate=new Date();//Date(2020,5,5,14) year,month,date,hours
curDate=curDate.getHours();
let greet='';
const cssStyle={ };

if(curDate>=1 && curDate<12){
  greet='Good Morning';
  cssStyle.color ='green';
}else if(curDate>=12 && curDate<20){
  greet='Good Afternoon';
  cssStyle.color ='orange';
}else{
  greet='Good Night';
  cssStyle.color ='black';
}

ReactDOM.render(
  //<React.StrictMode>
   // <App />
 // </React.StrictMode>,
 <>
    <div>
        <h1>Hello Ma'am,<span style={cssStyle}>{greet}</span></h1>
    </div>
  </>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
