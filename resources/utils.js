export const processRestarauntData = (data) => {
    const finishedData = [...data];
    finishedData.map((restaraunt) => {
        restaraunt.genre = restaraunt.genre.split(',');
    });
    return finishedData;
};

export const sortRestaraunts = (restaraunts, sortType) => {
    let sortedCopy = restaraunts ? [...restaraunts] : [];
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

export const getAllGenres = (restaraunts) => {
    if (!restaraunts) return;
    const allGenres = new Set();
    // Map over each genre array of each restaraunt
    restaraunts.map((r) => r.genre.map((genre) => allGenres.add(genre)));
    return [...allGenres];
};
