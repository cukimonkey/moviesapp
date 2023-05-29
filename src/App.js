import React from 'react';
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

function App() {

const [movies, setMovies] = useState([]);
const [searchValue, setSearchValue] = useState('');

    return (
        <div className="container-fluid mocie-app">
            
            <div className="row d-flax align-items-center mt-4 mb-4">
                <MovieListHeading 
                    heading="Movies"
                />
                <SearchBox 
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </div>
            <div className="row">
                <MovieList 
                    movies={movies}
                />
            </div>
        </div>
    );
}

export default App; 