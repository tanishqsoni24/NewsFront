import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newsbox from './components/Newsbox';

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <Newsbox/>
      </>
    )
  }
}