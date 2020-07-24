export async function getCategories() {
  // implement here
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  return await fetch(url)
  .then(response => response.json());
}
  
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // implement here
  if(categoryId) {
  return await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`)
  .then((response) => response.json()); 

  } else if(query) {
  return await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
  .then((response) => response.json());
  
  } else {
  return await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
  .then((response) => response.json());
  }
}
