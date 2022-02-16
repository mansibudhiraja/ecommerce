import { useContext } from "react";
import { Store } from "../store";

function CartScreen() {
    const {state} = useContext(Store);
    const {cart} = state;

    return (
    <div>
        {
            cart.cartItems.map(item => {
                <p>
                    {item}
                </p>
            })
        }
    </div>
            )
}

export default CartScreen