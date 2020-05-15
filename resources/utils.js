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