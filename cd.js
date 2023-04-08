const openingHours = {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  }

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours,
    
  };

console.log(restaurant.openingHours)

if(restaurant.openingHours &&  restaurant.openingHours.mon) {
    console.log(`Restaurant open at ${restaurant.openingHours.mon.open}`)
}

// OPTIONAL CHAINING
// console.log(restaurant.openingHours.mon?.open)
// console.log(restaurant.openingHours?.mon?.open)

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

for(const day of days) {
    
    const open = restaurant.openingHours[day]?.open
    
    console.log(`On ${day}, we are open at ${open ?? 'today we are closed :('}`) 

}




