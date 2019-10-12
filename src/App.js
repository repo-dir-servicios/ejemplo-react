import React from 'react';

import Normalize from 'react-normalize';

import logo from './logo.svg';  
import './App.css';
import HeaderMain from './components/HeaderMain/HeaderMain';
import Card from './components/Card/Card';


const contents = [
  {
    title:"Titulo 1",
    image:"http://unsplash.it/300/200",
    url:"http://google.com"
  },
  {
    title:"Titulo 2",
    image:"http://unsplash.it/300/300",
    url:"http://amazon.com"
  },
  {
    title:"Titulo 3",
    image:"http://unsplash.it/300/500",
    url:"http://wikipedia.org"
  },
  {
    title:"Un nuevo titulo",
    image:"http://unsplash.it/300/150",
    url:"http://wikipedia.org"
  }
]


// const renderCards = contents.map(
//   cadaContenido => <Card
//     title={cadaContenido.title}
//     image={cadaContenido.image}
//     url={cadaContenido.url}
//   />
// )

const renderCards = contents.map(
  (cadaContenido,indice) => (
    <Card
      key={ 'card_' + indice }
      {...cadaContenido}
    />
  )
)


function App() {
  return (
    <div className="App">
      <Normalize/>
      <HeaderMain/>

      <main>
        
        { renderCards }

      </main>
    </div>
  );
}

export default App;
