import Panel from "./components/Panel/Panel";
import ContactForm from "./components/ContactForm/ContactForm";
import Container from "./components/Container/Container";
import Filter from "./components/Filter";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./index.css";

function App() {
  return (
    <>
      <Router>
        <header>
          <Container>
            <Panel title="The Phonebook" />
          </Container>
        </header>
        <Switch>
          <Route path="/" exact render={(props) => <Filter {...props} />} />
          <Route
            path="/form"
            exact
            render={(props) => <ContactForm {...props} />}
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
