import React from 'react';
import ReactDOM from 'react-dom';
import MainPresenter from './MainPresenter';
import MainModel from './mainModel';
import useModelProperty from './customHook';
import './index.css';
import './Main.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import SignIn from './Signin';
import SignUp from './SignUp'
import ButtonBases from './ChangeGame';
import SignInSide from './MainScreen';
import Game2 from './Game2';
import Game22 from './Game22';
import Game23 from './Game23';
import Top from './Top'
import Game3 from './Game3';
import Game32 from './Game32';
import Game33 from './Game33';
import SimpleDialog2 from './dialog2';
const myModel = new MainModel();
console.log(myModel);

ReactDOM.render(
  <BrowserRouter>
    
      
  <Routes>
   
  <Route path="/" element={<SignInSide/>} />
  <Route path="/signin" element={<SignIn/>} />
  <Route path="/signup" element={<SignUp/>} />
  <Route path="change" element={<ButtonBases />} /> 
   <Route path="game" element={<MainPresenter model={myModel} />} /> 
   <Route path="game2" element={<Game2 model={myModel}/>} /> 
   <Route path="/game22" element={<Game22 model={myModel}/>} /> 
   <Route path="/game23" element={<Game23 model={myModel}/>} /> 
   <Route path="/game3" element={<Game3 model={myModel} />} /> 
   <Route path="/game32" element={<Game32 model={myModel}/>} /> 
   <Route path="/game33" element={<Game33 model={myModel}/>} /> 
   <Route path="/top" element={<Top />} /> 
   <Route path="/dial" element={<SimpleDialog2 />} /> 
  </Routes>

</BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
