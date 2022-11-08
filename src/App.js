import './App.css';
import './color-constants.css'
import React from "react";
import Display from "./components/Display";
import BinaryTreeFunc from "./components/BinaryTree";

export default function App() {

    BinaryTreeFunc()
  return (
      <div className='render-app'>
        <Display/>
      </div>
  )
}
