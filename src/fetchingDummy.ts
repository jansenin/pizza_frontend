import Pizza from "./types/Pizza";
import Ingredient from "./types/Ingredient";
import {Order, OrderItem, OrderStatus} from "./types/Order";

export async function fetchUnfulfilledOrdersDummy(url: string): Promise<Order[]> {
    await new Promise((resolve, reject) => {
        setTimeout(resolve, 1000)
    })
    return [
        new Order(1, OrderStatus.InProcess, [
            new OrderItem(
                new Pizza("/logo192.png", "Name1", 1, 100, [
                    new Ingredient("Помидор))", 1),
                    new Ingredient("Салатик))", 2),
                    new Ingredient("Тесто))", 3)
                ]), 1
            )
        ]),
        new Order(2, OrderStatus.InProcess, [
            new OrderItem(
                new Pizza("/logo192.png", "Name1", 1, 100, [
                    new Ingredient("Помидор))", 1),
                    new Ingredient("Салатик))", 2),
                    new Ingredient("Тесто))", 3)
                ]), 2
            ),
            new OrderItem(
                new Pizza("/logo192.png", "Name2", 2, 150, [
                    new Ingredient("Помидор))", 1),
                    new Ingredient("Салатик))", 2),
                    new Ingredient("Тесто))", 3)
                ]), 1
            )
        ]),
        new Order(3, OrderStatus.Completed, [
            new OrderItem(
                new Pizza("/logo192.png", "Name1", 1, 100, [
                    new Ingredient("Помидор))", 1),
                    new Ingredient("Салатик))", 2),
                    new Ingredient("Тесто))", 3)
                ]), 1
            )
        ]),
        new Order(4, OrderStatus.Completed, [
            new OrderItem(
                new Pizza("/logo192.png", "Name1", 1, 100, [
                    new Ingredient("Помидор))", 1),
                    new Ingredient("Салатик))", 2),
                    new Ingredient("Тесто))", 3)
                ]), 3
            ),
            new OrderItem(
                new Pizza("/logo192.png", "Name2", 2, 150, [
                    new Ingredient("Помидор))", 1),
                    new Ingredient("Салатик))", 2),
                    new Ingredient("Тесто))", 3)
                ]), 1
            )
        ]),
        new Order(5, OrderStatus.Rejected, [
            new OrderItem(
                new Pizza("/logo192.png", "Name1", 1, 100, [
                    new Ingredient("Помидор))", 1),
                    new Ingredient("Салатик))", 2),
                    new Ingredient("Тесто))", 3)
                ]), 1
            )
        ]),
        new Order(10, OrderStatus.Rejected, [
            new OrderItem(
                new Pizza("/logo192.png", "Name1", 1, 100, [
                    new Ingredient("Помидор))", 1),
                    new Ingredient("Салатик))", 2),
                    new Ingredient("Тесто))", 3)
                ]), 2
            ),
            new OrderItem(
                new Pizza("/logo192.png", "Name2", 2, 150, [
                    new Ingredient("Помидор))", 1),
                    new Ingredient("Салатик))", 2),
                    new Ingredient("Тесто))", 3)
                ]), 1
            )
        ])
    ]
}

export async function fetchPizzasDummy(url: string): Promise<Pizza[]> {
    await new Promise((resolve, _) => {
        setTimeout(resolve, 1000)
    })
    return [
        new Pizza("https://dodopizza-a.akamaihd.net/static/Img/Products/ca66c9253b1b47ed851ed5fb6e4c53ed_366x366.webp", "Пицца из половинок", 1, 2500, [
            new Ingredient("Помидор", 1),
            new Ingredient("Колбаса", 2),
            new Ingredient("Тесто", 3),
            new Ingredient("Картошка", 4),
            new Ingredient("Сыр", 5)
        ]),
        new Pizza("https://dodopizza-a.akamaihd.net/static/Img/Products/0a496a3d8b87415dbc3d3647ff8f3db8_366x366.webp", "Пицца Карбонара", 2, 1790, [
            new Ingredient("Помидор", 1),
            new Ingredient("Колбаса", 2),
            new Ingredient("Тесто", 3),
            new Ingredient("Бекон", 6),
            new Ingredient("Сыр", 5)
        ]),
        new Pizza("https://dodopizza-a.akamaihd.net/static/Img/Products/52dbe108268645729540c44a60f21b8a_366x366.webp", "Мясной микс", 4, 2290, [
            new Ingredient("Помидор", 1),
            new Ingredient("Колбаса", 2),
            new Ingredient("Тесто", 3),
            new Ingredient("Бекон", 6),
            new Ingredient("Курица", 7),
            new Ingredient("Сыр", 5)
        ]),
        new Pizza("https://dodopizza-a.akamaihd.net/static/Img/Products/70834e6311c0483493bf2279dbc1718d_366x366.webp", "Пепперони", 5, 1390, [
            new Ingredient("Помидор", 1),
            new Ingredient("Колбаса", 2),
            new Ingredient("Тесто", 3),
            new Ingredient("Сыр", 5)
        ])
    ]
}
