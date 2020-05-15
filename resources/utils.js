export const processRestaurantData = (data) => {
    const finishedData = [...data];
    finishedData.map((restaurant) => {
        restaurant.genre = restaurant.genre.split(',');
    });
    return finishedData;
};

export const sortRestaurants = (restaurants, sortType) => {
    let sortedCopy = restaurants ? [...restaurants] : [];
    switch (sortType) {
        case 'NAME_ASC':
            sortedCopy = sortedCopy.sort((a, b) => {
                return a.name < b.name ? -1 : 1;
            });
            break;
        case 'NAME_DESC':
            sortedCopy = sortedCopy.sort((a, b) => {
                return a.name > b.name ? -1 : 1;
            });
            break;
        case 'CITY_ASC':
            sortedCopy = sortedCopy.sort((a, b) => {
                return a.city < b.city ? -1 : 1;
            });
            break;
        case 'CITY_DESC':
            sortedCopy = sortedCopy.sort((a, b) => {
                return a.city > b.city ? -1 : 1;
            });
            break;
        case 'STATE_ASC':
            sortedCopy = sortedCopy.sort((a, b) => {
                return a.state < b.state ? -1 : 1;
            });
            break;
        case 'STATE_DESC':
            sortedCopy = sortedCopy.sort((a, b) => {
                return a.state > b.state ? -1 : 1;
            });
            break;
    }
    return sortedCopy;
};

export const getAllGenres = (restaurants) => {
    if (!restaurants) return;
    const allGenres = new Set();
    // Map over each genre array of each restaurant
    restaurants.map((r) => r.genre.map((genre) => allGenres.add(genre)));
    return [...allGenres];
};
