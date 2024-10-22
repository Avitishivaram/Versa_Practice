import React,{Component} from 'react';
import ReactDOM from 'react-dom/client';
import '../App';


// const root=ReactDOM.createRoot(document.getElementById('root'));
class Example extends Component{
  render(){
    return(
      <div className="app">
        <h1>This is class component</h1>

      </div>
    );
  }
}



export default Example;