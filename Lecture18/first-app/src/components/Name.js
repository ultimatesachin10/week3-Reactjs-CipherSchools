import React, { Component } from "react";
// import React, { useState } from "react";

// class Name extends Component {
//     state = { name : "Sachin" };

//     setNmae(name){
//         this.setState({...this.state, name})
//     }

//     render() {
//         return (
//             <>
//             <h1>The name is: {this.state.name}</h1>
//             <button onClick={() => this.setNmae("Ultimate Sachin")}>Click Me</button>
//             </>
//         );
//     }
// }

// class Name extends Component {
//     state = { name : "Sachin" };

//     constructor(props) {
//         super(props);
//         this.setNmae = this.setNmae.bind(this);
//     }

//     setNmae(e){
//         this.setState({...this.state, name : "Ultimate Sachin"})
//     }

//     render() {
//         return (
//             <>
//             <h1>The name is: {this.state.name}</h1>
//             <button onClick={this.setNmae}>Click Me</button>
//             </>
//         );
//     }
// }

// const Name = () => {
//     const [state, setState] = useState({ name: "Sachin" });

//     let setName = (e) => {
//         setState({ ...state, name : "Ultimate Sachin"});
//     };

//     return (
//         <>
//         <h1>The name is: {state.name}</h1>
//         <button onClick={setName}>Clcik Me</button>
//         </>
//     );
// };


class Name extends Component {
    state = { name : "Sachin" };

    setNmae = (name) => {
        this.setState({...this.state, name})
    };

    testHandlers =() => {
        console.log("testHandlers");
    }

    render() {
        return (
            <>
            <h1>The name is: {this.state.name}</h1>
            <button onClick={ () => { 
                this.setNmae("Ultimate Sachin");
                this.testHandlers();
            }}
            >Click Me</button>
            </>
        );
    }
}

export default Name;