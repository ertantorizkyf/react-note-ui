import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./Views/Home"
import Note from "./Views/Note"

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>

        <Header />

        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/note/:id">
              <Note />
            </Route>
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
