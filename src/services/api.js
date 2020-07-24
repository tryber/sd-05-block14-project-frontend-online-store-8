export function getCategories() {
  // implement here
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  return fetch(proxyurl + url)
  .then((response) => response.json())
  .then((data) => console.log(data));
}

export function getProductsFromCategoryAndQuery(categoryId, query) {
  // implement here
  if (categoryId) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`)
    .then((response) => response.json());
  } else if (query) {
    return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
    .then((response) => response.json());
  } return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((response) => response.json());
}
