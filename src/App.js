import "./App.scss";
import { Nav } from "./components/nav/nav";
import { Card, CardContent } from "./components/card/card";
import { HashRouter, Switch, Route, useRouteMatch } from "react-router-dom";
import { ProductListView } from "./views/productListView";
import { ProductDetailsView } from "./views/productDetailsView";
import { NewProductView } from "./views/newProductView";

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
      <HashRouter basename="/">
        {/* <Switch> */}
        <Route exact path="/">
          {" "}
          <Card link={`${process.env.PUBLIC_URL}/#/products/`}>
            <CardContent>See products here</CardContent>
          </Card>
          <Card link={`${process.env.PUBLIC_URL}/#/newproduct/`}>
            <CardContent>Add products here</CardContent>
          </Card>
        </Route>

        <Route path="/products" component={ProductListViewHash}></Route>
        <Route path="/product/:id" component={ProductDetailsViewHash}></Route>
        <Route path="/newproduct" component={NewProductViewHash}></Route>
        
        {/* </Switch> */}
      </HashRouter>
    </div>
  );
}

const ProductListViewHash = () => (
  <div>
    <ProductListView />
  </div>
);
const ProductDetailsViewHash = () => (
  <div>
    <ProductDetailsView />
  </div>
);
const NewProductViewHash = () => (
  <div>
    <NewProductView />
  </div>
);
export default App;
