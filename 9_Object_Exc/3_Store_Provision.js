function solve(stock, delivery) {
    const store = {};

    // Populate the store object from the stock array
    for (let i = 0; i < stock.length; i += 2) {
        const product = stock[i];
        const quantity = Number(stock[i + 1]);
        store[product] = quantity;
    }

    // Update the store object with quantities from the delivery array
    for (let i = 0; i < delivery.length; i += 2) {
        const product = delivery[i];
        const quantity = Number(delivery[i + 1]);

        // If the product does not exist in the store, initialize its quantity to 0 before adding
        if (!store[product]) {
            store[product] = 0;
        }
        store[product] += quantity;
    }

    // Log the final quantities of each product
    for (const product in store) {
        console.log(`${product} -> ${store[product]}`);
    }
}

function fancySolve(stock, delivery) {
    const getProducts = (list) => {
        const products = {};
        // Iterate through the list parameter instead of the global stock array
        for (let i = 0; i < list.length; i += 2) {
            const product = list[i];
            const quantity = Number(list[i + 1]);

            if (!products[product]) {
                products[product] = 0;
            }

            products[product] += quantity;
        }
        return products;
    };

    // Correctly concatenating stock and delivery and then processing them
    // const store = getProducts(stock.concat(delivery));
    const store=getProducts([...stock, ...delivery]);

    Object.keys(store).forEach(product => console.log(`${product} -> ${store[product]}`));
}




fancySolve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )