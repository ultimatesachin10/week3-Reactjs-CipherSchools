// import React from "react";
import React, {Component} from "react";
import "./test.css";

// const Test = () => {
//     return (
//         <div>
//             <h1 id="testId">Hello, I am Ultimate Sachin</h1>
//         </div>
//     );
// };

class Test extends Component {
    state = {
        isLoggedIn: false
    };
    
    render() {
        return (
            <div>
                {!this.state.isLoggedIn ? (
                  <h1>You are not Logged In!</h1> 
                ) : (
                  <h1>Congratulations, you are logged in!</h1>
            )}
            <button onClick={(e) => this.setState({ isLoggedIn: !this.state.isLoggedIn })}>Login!</button>
            </div>
        );
    }
}


export default Test;