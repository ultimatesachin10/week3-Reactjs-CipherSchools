import './App.css';
// import AllUserList from './components/AllUserList';
// import Name from './components/Name';
// import SumNumbers from './components/SumNumbers';
// import Test from './Test.js';
// import SignUpForm from './components/SignUpForm';
import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import TaskScreen from './components/TaskScreen';
// import CounterComponent from './components/CounterComponent';
// import Photos from './components/Photos';
import higherOrderComponent from './components/Hoc';
// import SampleRenderProps from './components/SampleRenderProps';
// import I18Component from './components/I18Component';
// import ErrorBoundary from './components/ErrorBoundary';
// const CounterComponent = lazy(() => import('./components/CounterComponent'));

const SampleRenderProps = lazy(() => import("./components/SampleRenderProps"));
const I18Component = lazy(() => import("./components/I18Component"));
const ErrorBoundary = lazy(() => import("./components/ErrorBoundary"));
const CounterComponent = lazy(() => import("./components/CounterComponent"));
const SignUpForm = lazy(() => import("./components/SignUpForm"));
const SumNumbers = lazy(() => import("./components/SumNumbers"));
const TaskScreen = lazy(() => import("./components/TaskScreen"));
const Photos = lazy(() => import("./components/Photos"));


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
  const TestApp = higherOrderComponent(() => {
    return <div>Test App</div>;
  });

  let myFavoriteCharacter = "Iron Man";

  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={"/"} element={<h1>This is on Home Page</h1>} />
        <Route path={"/contact"} element={<h1>This is on Contact Page</h1>} />
        <Route path={"/about"} element={<h1>This is on About Page</h1>} />
        <Route path={"/signup"} element={<SignUpForm/>} >
          <Route path={"sum"} element={<SumNumbers />} />
          </Route>
          <Route path={"/tasks"} element={<TaskScreen/>} />
          <Route path={"/counter"} element={<ErrorBoundary> <CounterComponent/> </ErrorBoundary>} />
          <Route path={"/photos"} element={<Photos name={myFavoriteCharacter}/>} />
          <Route path={"/test"} element={<TestApp/>} />
          <Route path={"/sample"} element={<SampleRenderProps/>} />
          <Route path={"/international"} element={<I18Component/>} />
      </Routes>
      </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
