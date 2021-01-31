import React, { useState } from 'react';
import { products } from "../products";

export const NewProductsContext = React.createContext();

export const NewProductsProvider = (props) => {
const [newProducts, setNewProducts] = useState(products);

        return (
            <NewProductsContext.Provider value={[newProducts, setNewProducts]}>
                {props.children}
            </NewProductsContext.Provider>
        );

}
