import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./pages/dashboard/Dashboard.page";
import { AddTicket } from "./pages/new-ticket/AddTicket.Page";
import { Entry } from "./pages/entry/Entry.page";
import { TicketLists } from "./pages/ticket-list/TicketLists.page";
import { Ticket } from "./pages/ticket/Ticket.page";
import { PrivateRoute } from "./components/private-route/PrivateRoute.comp";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Entry />
          </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/add-ticket">
              <AddTicket />
            </PrivateRoute>
            <PrivateRoute path="/tickets">
              <TicketLists />
            </PrivateRoute>
            <PrivateRoute path="/ticket/:tId">
              <Ticket />
            </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
