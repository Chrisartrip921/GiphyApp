import GifFinder from './components/GifFInder'
import './App.css';
 //http://api.giphy.com/v1/gifs/trending?api_key=g25nBHy2WQJRvUjil4QWVNdHBBEfeYEH      <--- Trending Search
 //http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=g25nBHy2WQJRvUjil4QWVNdHBBEfeYEH      <---
function App() {
  return (
    <div className="App">
      <GifFinder />
    </div>
  );
}

export default App;
