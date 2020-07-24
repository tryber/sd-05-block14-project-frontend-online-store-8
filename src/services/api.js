export async function getCategories() {
  // implement here
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  return fetch(url)
  .then((response) => response.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
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
