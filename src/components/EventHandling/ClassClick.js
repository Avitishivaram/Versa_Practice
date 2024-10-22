import React,{Component} from 'react'
class ClassClick extends Component{
    clickHandler(){
        console.log('Button clicked in class component!');
        alert('Button clicked in class component!');
    }
    render(){
        return(
            <>
            <h2>This is ClassClick EventHandling in React</h2>
            <button onClick={this.clickHandler}>Click me</button>
            </>
        )
    }
}
export default ClassClick