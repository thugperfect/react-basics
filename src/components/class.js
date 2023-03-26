import { Component } from "react"
class Classname extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    inc(){
       this.setState({
        count:this.state.count+1
    }) 
    }
    
    
    render(){
        return(
            <div>
            <h1>count : {this.state.count}</h1>
            <button onClick={() => this.inc()}>count+</button>
            </div>
        )
    }

}
export default Classname;