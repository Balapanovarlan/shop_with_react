import { CART, FAV } from "../constants/constants";

export const updateLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const handleAddProduct = (cart, setCart, id) => {
    const updatedCart = cart.map(item => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    updateLocalStorage(CART, updatedCart);
};

export const handleDecreaseProduct = (cart, setCart, id) => {
    const updatedCart = cart.map(item => 
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    ).filter(item => item.quantity > 0);

    setCart(updatedCart);
    updateLocalStorage(CART, updatedCart);
};

export const handleDeleteFromCart = (cart, setCart, id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    updateLocalStorage(CART, updatedCart);
};

export const handleDeleteFromFav = (fav, setFav, id) => {
    const updatedFav = fav.filter(item => item.id !== id);
    setFav(updatedFav);
    updateLocalStorage(FAV, updatedFav);
};


export  const handleAddToCart = (id, price, title, cardImage) => {
    const cart = JSON.parse(localStorage.getItem(CART)) || [];

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


export const handleAddToFavorite = (id, price, title, cardImage)=>{
    const fav = JSON.parse(localStorage.getItem(FAV)) || [];
    const product = {
        id,
        price,
        title,
        cardImage,
    }
    const foundeditem = fav.find((item)=>item.id === product.id);
    if (foundeditem) {
        return
    } else{
        fav.push(product);
    }
    localStorage.setItem(FAV, JSON.stringify(fav));
}