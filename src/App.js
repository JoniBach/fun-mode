import "./App.css";
import { Nav } from "./components/nav/nav";
import { Card, CardMedia } from "./components/card/card";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProductListView } from "./views/productListView";
import { ProductDetailsView } from "./views/productDetailsView";

function App() {
  return (
    <div>
      <Nav
        title="FUN-MODE"
        secretMenu={<h3>fun-mode</h3>}
        hamburgerMenu={
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
            <li>Option 4</li>
            <li>Option 5</li>
          </ul>
        }
      ></Nav>
      <Router>
        <Switch>
          <Route exact path="/">
            <Card link="/products">
              <CardMedia>See products here</CardMedia>
            </Card>
          </Route>
          <Route path="/products">
            <ProductListView />
          </Route>
          <Route path="/product/:id">
            <ProductDetailsView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
