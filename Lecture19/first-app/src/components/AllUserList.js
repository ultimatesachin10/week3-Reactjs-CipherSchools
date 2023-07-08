// import React, {useState} from "react";
import React, { Component } from "react";
import UserDetails from "./UserDetails";
import Test from "./Test";

// const AllUserList = () => {
//     let allUsers = [
//     { name: "John", email: "john@example.com", phoneNumber: "+91-9876543210"},
//     { name: "Sachin", email: "sachinmishra285@gmail.com", phoneNumber: "+91-1234567890"},
//     { name: "Shreyus", email: "shreyus@gmail.com", phoneNumber: "+91-9876543210"},
//     { name: "UltimateSachin", email: "ultimatesachin@gmail.com", phoneNumber: "+91-7643256790"},
//    ];

// class AllUserList extends React.Component {
//     state = {
//         name : "Sachin Mishra",
//     };
//     // allUsers : [
//     //     { name: "John", email: "john@example.com", phoneNumber: "+91-9876543210"},
//     //     { name: "Sachin", email: "sachinmishra285@gmail.com", phoneNumber: "+91-1234567890"},
//     //     { name: "Shreyus", email: "shreyus@gmail.com", phoneNumber: "+91-9876543210"},
//     //     { name: "UltimateSachin", email: "ultimatesachin@gmail.com", phoneNumber: "+91-7643256790"},
//     //    ],

//     allUsers = [
//         { name: "John", email: "john@example.com", phoneNumber: "+91-9876543210"},
//         { name: "Sachin", email: "sachinmishra285@gmail.com", phoneNumber: "+91-1234567890"},
//         { name: "Shreyus", email: "shreyus@gmail.com", phoneNumber: "+91-9876543210"},
//         { name: "UltimateSachin", email: "ultimatesachin@gmail.com", phoneNumber: "+91-7643256790"},
//        ];

// //    let array = allUsers.map((user, index) => (
// //     <UserDetails key={index} user={user} />
// //    ));

// //    let array = [
// //    <UserDetails user={allUsers[0]}/>,
// //    <UserDetails user={allUsers[1]}/>,
// //    <UserDetails user={allUsers[2]}/>,
// //    <UserDetails user={allUsers[3]}/>,
// // ];
// render(){
//     setTimeout(() =>{
//         this.setState({name: "Ultimate Sachin"});
//     },15000);
//    return (
//     <div>
//         <h1>The Name is {this.state.name}</h1>
//         {/* <UserDetails user={allUsers[0]}/>
//         <UserDetails user={allUsers[1]}/>
//         <UserDetails user={allUsers[2]}/>
//         <UserDetails user={allUsers[3]}/> */}
//         {/* {array} */}
//         {this.allUsers.map((user,index) =>(
//             <UserDetails key={index} user={user}/>
//         ))}
//     </div>
//    );
//   }
// }

// const AllUserList = () => {
//    const [state, setState] = useState({name : "Sachin"});

//    return <h1>The Name is {state.name}</h1>;
// };


// const AllUserList = () => {
//     const [state, setState] = useState({
//         name : "Sachin", });
//     let allUsers = [
//     { name: "John", email: "john@example.com", phoneNumber: "+91-9876543210"},
//     { name: "Sachin", email: "sachinmishra285@gmail.com", phoneNumber: "+91-1234567890"},
//     { name: "Shreyus", email: "shreyus@gmail.com", phoneNumber: "+91-9876543210"},
//     { name: "UltimateSachin", email: "ultimatesachin@gmail.com", phoneNumber: "+91-7643256790"},
//    ];
   
//    let setStateName = (name) => {
//     setState({ ...state, name });
//    };

//    return (
//     <div>
//         {/* <h1>The Name is {state.name}</h1> */}
//         <Test name={state.name} setName={setStateName} />
//         {allUsers.map((user,index) => (
//         <UserDetails key={index} user={user}/>
//         ))}
//     </div>
//    );
// };

class AllUserList extends Component {
    state = {
        name: "Ultimate Sachin",
    };

    componentDidMount() {
        console.log("All user list was mounted!");
    };

    

    setStateName = (name) => {
        this.setState({ ...this.state, name });
    };
    allUsers = [
    { name: "John", email: "john@example.com", phoneNumber: "+91-9876543210"},
    { name: "Sachin", email: "sachinmishra285@gmail.com", phoneNumber: "+91-1234567890"},
    { name: "Shreyus", email: "shreyus@gmail.com", phoneNumber: "+91-9876543210"},
    { name: "UltimateSachin", email: "ultimatesachin@gmail.com", phoneNumber: "+91-7643256790"},
   ];

    render() {
        return (
            <div>
                <Test name= {this.state.name} setName={this.setStateName}/>
                {this.allUsers.map((user, index) => (
                    <UserDetails key={index} user={user}/>
                    ))}
            </div>
        );
    };
};

export default AllUserList;