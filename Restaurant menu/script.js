const dishes = {
    'pear-orange': {
        image: 'Images/pear-and-orange.jpg',
        title: 'Pear & Orange',
        time: '20 min',
        price: '$25.00',
        description: 'As a rule, pancakes are served for breakfast with various sweet sauces, chocolate, berries, maple syrup. Pancakes were a very popular breakfast only in the USA and Canada, but now pancakes enjoy breakfast all over the world.'
    },
    'meat-mushrooms': {
        image: 'Images/Beef-and-Mushroom.jpg',
        title: 'Meat & Mushrooms',
        time: '30 min',
        price: '$37.00',
        description: 'A delicious combination of meat and mushrooms served with a variety of sauces and sides.'
    },
    'egg-bread': {
        image: 'Images/Egg-Bread.jpg',
        title: 'Egg & Bread',
        time: '10 min',
        price: '$25.00',
        description: 'A simple and classic breakfast dish featuring eggs and bread, perfect for a quick meal.'
    },
    'sweet-pancake': {
        image: 'Images/Pancake.jpg',
        title: 'Sweet pancake',
        time: '10 min',
        price: '$13.00',
        description: 'A delightful sweet pancake served with syrup and berries.'
    }
    // Add more dishes here
};

function showDetails(dishId) {
    const dish = dishes[dishId];
    document.getElementById('dish-image').src = dish.image;
    document.getElementById('dish-title').innerText = dish.title;
    document.getElementById('dish-time').innerText = dish.time;
    document.getElementById('dish-price').innerText = dish.price;
    document.getElementById('dish-description').innerText = dish.description;
    document.getElementById('dish-details').style.display = 'flex';
}

function closeDetails() {
    document.getElementById('dish-details').style.display = 'none';
}
