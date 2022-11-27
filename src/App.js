import './App.css';
import './color-constants.css'
import React from "react";
import BinaryTreeFunc from "./components/BinaryTree";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";

export default function App() {

    // BinaryTreeFunc()
  return (
      <BrowserRouter>
          <AppRouter/>
      </BrowserRouter>
  )
}
