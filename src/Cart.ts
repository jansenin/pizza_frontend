import Pizza from "./types/Pizza";
import {cartPrefix} from "./localStoragePrefixes";

class CartItem {
    pizza: Pizza;
    count: number;


    constructor(pizza: Pizza, count: number) {
        this.pizza = pizza;
        this.count = count;
    }
}

export default class Cart {
    private static getKey(pizza: Pizza): string {
        return `${cartPrefix}${pizza.id}`
    }

    static hasPizza(pizza: Pizza): boolean {
        return localStorage.getItem(this.getKey(pizza)) !== null
    }

    static getCartItem(pizza: Pizza): CartItem {
        return JSON.parse(localStorage.getItem(this.getKey(pizza)) as string);
    }

    static setCartItem(cartItem: CartItem): void {
        localStorage.setItem(this.getKey(cartItem.pizza), JSON.stringify(cartItem))
    }

    static addPizza(pizza: Pizza, count: number = 1): void {
        if (this.hasPizza(pizza)) {
            let cartItem: CartItem = this.getCartItem(pizza)
            cartItem.count += count
            this.setCartItem(cartItem)
        } else {
            this.setCartItem(new CartItem(pizza, count))
        }
    }

    static removePizzaIfCan(pizza: Pizza, count: number = 1): void {
        if (this.hasPizza(pizza)) {
            let cartItem: CartItem = this.getCartItem(pizza)
            cartItem.count = Math.max(0, cartItem.count - count)

            if (cartItem.count !== 0) {
                this.setCartItem(cartItem)
            } else {
                this.removeFromLocalStorage(pizza)
            }
        }
    }

    private static removeFromLocalStorage(pizza: Pizza): void {
        localStorage.removeItem(this.getKey(pizza))
    }

    static countOf(pizza: Pizza): number {
        return this.hasPizza(pizza) ? this.getCartItem(pizza).count : 0
    }

    private static getAllKeys(): Array<string> {
        let result: Array<string> = []
        for (let i = 0; i < localStorage.length; i++) {
            let key: string = localStorage.key(i) as string
            if (key.startsWith(cartPrefix)) {
                result.push(key)
            }
        }
        return result
    }

    static clear(): void {
        for (let key in this.getAllKeys()) {
            localStorage.removeItem(key);
        }
    }

    static getAllPizzas(): Array<Pizza> {
        let result: Array<Pizza> = []
        for(let key of this.getAllKeys()) {
            result.push(JSON.parse(localStorage.getItem(key) as string).pizza)
        }
        return result
    }
}
