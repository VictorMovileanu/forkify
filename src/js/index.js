// DOCS: http://forkify-api.herokuapp.com/

import Search from './models/Search';

const search = new Search('pizza');
console.log(search);
search.getResults();