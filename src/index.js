import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App/App"
import AppError from "./components/AppError/AppError"
import "./index.css"

require("dotenv").config()

ReactDOM.render(
  <AppError>
    <App />
  </AppError>, 
  document.getElementById("root")
)

