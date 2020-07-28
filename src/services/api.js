export function getCategories() {
  // implement here
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  return fetch(url)
  .then((response) => response.json())
  .then((data) => data);
}

export function getProductsFromCategoryAndQuery(categoryId, query) {
  // implement here
  let url = '';
  if (categoryId && !query) {
    url = (`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  }
  if (query && !categoryId) {
    url = (`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  }

  if (categoryId && query) {
  url = (`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  }
  return fetch(url).then((response) => response.json());
}
