import "./App.css";
import { Nav } from "./components/nav/nav";
import { Card, CardMedia } from "./components/card/card";
import {ProductList, ProductListItem} from './components/list/list'
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
      <Card
        hiddenContent={
          <div>
            <div>hi</div>
            <div>how are ya?</div>
            <div>come an av some toast!</div>
          </div>
        }
        p={10}
      >
        <CardMedia src="https://api.time.com/wp-content/uploads/2016/03/national-puppy-day.jpg" />
        <CardMedia  >
          hi
        </CardMedia>
      </Card>
      <ProductList>
        <ProductListItem 
        src="https://images.fineartamerica.com/images-medium-large-5/a-basket-of-puppies-susan-schmitz.jpg" 
        >
          <h5>Product title</h5>
          <h2>Subtitle</h2>
          <p>details</p>
        </ProductListItem>
      </ProductList>
    </div>
  );
}

export default App;
