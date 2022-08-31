import ItemDetail from "../ItemDetail/ItemDetail";
import './productsListing.css';

interface allProductsProps{
    allProducts: never[]
}

const ProductsListing = (allProducts:allProductsProps) => {
    return (
    <div>        
        <div className="menu-grid-container">                
            {allProducts.allProducts.map((item) => (  
                <div className="menu-grid-card">                
                    <ItemDetail item={item} />
                </div>
            ))}
        </div>
    </div>);
}

export default ProductsListing;