import React, {useState} from 'react';
import * as api from '../service/api';
function ItemList() {

  const [value, setValue] = useState('');
  
  
    return (
      <div>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="search" />
        <p className="search-text" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <span>{value}</span>
      </div>
    );
}

export default ItemList;
