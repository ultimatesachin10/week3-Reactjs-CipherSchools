import React, {useState} from "react";
// import React, { Component } from "react";

// const UserDetails = (props) => {
//     // let user = props.user;
//     let { user } = props;
//     return (
//         <div>
//             <h3>{user.name}</h3>
//             <h5>Email: {user.email}<br/>
//             Phone Number : {user.phoneNumber}
//             </h5>

//         </div>
//     );
// };


const UserDetails = ({ user = {} }) => {
    const [h1Text, setH1Text] = useState("This is Demo Component");
    return (
        <div>
            <h3>{user.name}</h3>
            <h5>Email: {user.email}<br/>
            Phone Number : {user.phoneNumber}
            </h5>
            <h1>{h1Text}</h1>
            <button onClick={(e) => {setH1Text("This is Ultimate Sachin");}}>Click Me</button>
        </div>
    );
};

// class UserDetails extends Component {
//     user = this.props.user;
//     render() {
//         return (
//         <div>
//             <h3>{this.user.name}</h3>
//             <h5>Email: {this.user.email}<br/>
//             Phone Number : {this.user.phoneNumber}
//             </h5>
//         </div>
//         );
//     }
// }

export default UserDetails;