import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import './App.css'
import { Hello } from './hello'
import logo from './logo.svg'
import { Split } from './split'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Sample React App</h1>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/hello">Hello</Link>
                </li>
                <li>
                  <Link to="/split">Split</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <Switch>
          <Route path="/hello" component={Hello} />
          <Route path="/split" component={Split} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
