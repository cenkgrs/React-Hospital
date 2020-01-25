import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

<Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Index} exact />
      <Route path="/docs" component={Docs} exact />
      <Route path="/about" component={About} exact />
    </Switch>
  </BrowserRouter>
</Provider>;
