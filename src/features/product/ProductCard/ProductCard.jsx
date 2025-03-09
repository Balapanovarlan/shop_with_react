import ProductCardUI from "../../../components/ui/ProductCard/ProductCardUI"
import { CART, FAV } from "../../../constants/constants";
import { handleAddToCart, handleAddToFavorite } from "../../../utils/cartUtils";

const ProductCard = ({
    cardImage,
    title,
    description,
    price,
    id,
    isInCart = false,
}) => {
    
    return (
        <ProductCardUI
            cardImage={cardImage}
            title={title}
            description={description}
            price={price}
            handleAddToCart={()=> handleAddToCart(id,price, title, cardImage)}
            handleAddToFavorite = {() => handleAddToFavorite(id,price, title, cardImage)}
            isInCart = {isInCart}
        />
    )
}

export default ProductCard