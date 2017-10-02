import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCwcoMEcoYOdppeh54uLkLKjcBrU5RAULk';


// Create a new component. This component should produce some html.

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this compnent generated html and put it in the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
