import React from 'react';
import './styles/App.css';
import Header from "./Header";
import ListElements from "./ListElements";
import {Routes, Route} from "react-router-dom";
import Category from "./Category";
import Element from "./Element";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Routes>
            <Route path="/recipe/:id" element={<Element cat_or_recipe="recipe"/>} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/" element={<ListElements cat_or_recipe="cat"/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
