import React from "react"
import {navigate} from 'gatsby'
import Header from "../components/Header"

const Test = () => (
  <div>
    <Header title="header of our test page"></Header>
    <h1>This is a test page1</h1>
    <h1>This is a test page2</h1>
    <button onClick={()=> navigate("/")}>Navigate to Homepage</button>
  </div>
)

export default Test
