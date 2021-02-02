import "./App.scss";
import { Nav } from "./components/nav/nav";
import { Card, CardContent } from "./components/card/card";
import {
  HashRouter,
  Switch,
  Route,
  useRouteMatch,
  Link,
} from "react-router-dom";
import { ProductListView } from "./views/productListView";
import { ProductDetailsView } from "./views/productDetailsView";
import { NewProductView } from "./views/newProductView";
import {
  OptionsList,
  OptionsListItem,
} from "./components/optionsList/optionsList";

const routes = [
  { text: "Home", link: `/` },
  { text: "Products", link: `/products/` },
  { text: "Create Listing", link: `/newproduct/` },
];

console.log(document.getElementById("close-hamburger-menu"))

function App() {
  return (
    <div>
      <div className='background'/>
      <HashRouter basename="/">
        <Nav
          title="FUN-MODE"
          secretMenu={<h3>fun-mode</h3>}
          hamburgerMenu={
            <OptionsList>
              {routes.map((d, i) => (
                <Link to={d.link} onClick={() => document.getElementById("close-hamburger-menu").click()} style={{textDecoration: 'none'}}>
                  <OptionsListItem>{d.text}</OptionsListItem>
                </Link>
              ))}
            </OptionsList>
          }
        ></Nav>
        {/* <Switch> */}
        <Route exact path="/">
          {" "}
          {/* <Card link={`${process.env.PUBLIC_URL}/#/products/`}>
            <CardContent>See products here</CardContent>
          </Card>
          <Card link={`${process.env.PUBLIC_URL}/#/newproduct/`}>
            <CardContent>Add products here</CardContent>
          </Card> */}
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
