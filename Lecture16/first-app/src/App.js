import './App.css';
// import AllUserList from './components/AllUserList';
// import Name from './components/Name';
import SumNumbers from './components/SumNumbers';
// import Test from './Test.js';
import SignUpForm from './components/SignUpForm';
import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskScreen from './components/TaskScreen';
import CounterComponent from './components/CounterComponent';
// function App() {
//   return (
//     <div className="App">
//       {/* <Test key={1}/> */}
//       {/* <AllUserList/> */}
//       {/* <Name/> */}
//       {/* <h1>This is App Component</h1> */}
//       {/* <SumNumbers /> */}
//       {/* <SignUpForm/> */}
//     </div>
//   );
// }

const App =() => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={"/"} element={<h1>This is on Home Page</h1>} />
        <Route path={"/contact"} element={<h1>This is on Contact Page</h1>} />
        <Route path={"/about"} element={<h1>This is on About Page</h1>} />
        <Route path={"/signup"} element={<SignUpForm/>} >
          <Route path={"sum"} element={<SumNumbers />} />
          </Route>
          <Route path={"/tasks"} element={<TaskScreen/>} />
          <Route path={"/counter"} element={<CounterComponent/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
