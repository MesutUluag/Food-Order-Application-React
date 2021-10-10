import {useReducer} from "react";
import CartContext from './cart-context';

const defaultCartState ={
    items:[],
    totalAmount: 0
};

const cartReducer = (state, action) =>{
    if (action.type === 'ADD'){
        const updatedTotalAmount = state.totalAmount + action.item.price*action.item.amount;

        const existingCartItemsIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemsIndex];
        let updatedItems;

        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemsIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }
        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount
        };
    }
    return defaultCartState;
}

// provides data for all components
const CartProvider= props =>{
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item =>{
        dispatchCartAction({type:'ADD', item:item});
    };
    const removeItemFromCartHandler = id =>{
        dispatchCartAction({type:'REMOVE', id: id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;