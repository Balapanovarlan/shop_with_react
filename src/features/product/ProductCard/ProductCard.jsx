import ProductCardUI from "../../../components/ui/ProductCard/ProductCardUI"
import { CART } from "../../../constants/constants";

const ProductCard = ({
    cardImage,
    title,
    description,
    price,
    id,
    quantity,
    isInCart = false,
    onAdd,
    onDecrease,
    onDelete,
}) => {
    const getCart = () => {
        const cart = localStorage.getItem(CART);

        return cart ? JSON.parse(cart) : [];
    }

    const handleAddToCart = () => {
        const cart = getCart();

        const product = {
            id,
            price,
            title,
            cardImage,
            quantity: 1,
        }

        const foundedItem = cart.find((item) => item.id === product.id);

        if (foundedItem) {
            foundedItem.quantity += 1;
        } else {
            cart.push(product);
        }

        localStorage.setItem(CART, JSON.stringify(cart));
    }

    return (
        <ProductCardUI
            cardImage={cardImage}
            title={title}
            description={description}
            price={price}
            handleAddToCart={handleAddToCart}
            quantity = {quantity}
            isInCart = {isInCart}
            onAdd = {onAdd}
            onDecrease = {onDecrease}
            onDelete =  {onDelete}
        />
    )
}

export default ProductCard