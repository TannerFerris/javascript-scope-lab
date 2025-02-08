const burgers = ['Hamburger', 'Cheeseburger'];
const fearturedDrink = 'Strawberry Milkshake';

function addBurger() {
    const newBurger = 'Flatburger';
    burgers.push(newBurger);

    if(newBurger == 'Flatburger') {
        const anothernewBurger = 'Maple Bacon Burger';
        burgers.push(anothernewBurger);
    }
    
}

function changeFeaturedDrink() {
    fearturedDrink = 'The JavaShake';
}

