import React, {useState, useEffect} from 'react';
import s from './App.css';
import Header from './components/HomePage/Header/Header';
import SearchString from './components/HomePage/SearchString/SearchString';
import Cards from './components/HomePage/Cards/Cards';
import Pagination from './components/HomePage/Pagination/Pagination';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardsInfo from './components/HomePage/Cards/CardsInfo/CardsInfo';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<CardsInfo />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

const HomePage = ()  => {

  let [pageNumber, setPageNumber] = useState(1) 
  let [fetchedData, updateFetchedData] = useState([]) 
  let [search, setSearch] = useState("")


  let {info, results} = fetchedData

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`

  useEffect (()=>{

    (async function(){
      let data = await fetch(api).then(res=>res.json())
      updateFetchedData(data)
    }) ()

  }, [api])

  return (
      <div className={s.App}>
        
        <Header />
        <SearchString setPageNumber={setPageNumber} setSearch={ setSearch } />
        <Cards page="/" results={ results } /> 
        <Pagination info={ info } pageNumber={ pageNumber } setPageNumber={ setPageNumber } />

      </div>
  );
}

export default App;
