import React from "react";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import HomePage from "./views/HomePage";
import './App.css'
import Shoes from "./componenets/shoes";
import Allshoes from "./views/allshoes";
import Adidas from "./views/Adidas";
import Mainshoes from "./views/Mainshoes";
import Yeezy from "./views/Yeezy";
import Electronics from "./views/Electronics";
import Search from "./views/Search";


function App() {

  const shoelist = [
    'adidas-yeezy-boost-350-v2-bone',
    'nike-air-force-1-low-white-07',
    'air-jordan-12-retro-playoffs-2022',
    'adidas-yeezy-slide-ochre',
    'air-jordan-3-retro-cardinal-red'];

  const eleclist =[
    'nintendo-switch-oled-hegskaaaa-white',
    'apple-airpods-pro-with-magsafe-charging-case-mlwk3am-a',
    'sony-ps5-playstation-5-blu-ray-edition-console-white',
    'finalmouse-starlight-12-phantom-wireless-mouse-medium',
    'kanye-west-donda-stem-player-1016'
  ]
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <HomePage shoelist={shoelist} eleclist={eleclist}/>
        </Route>
        <Route exact path='/shoe/:urlKey'>
          <Shoes/>
        </Route>
        <Route exact path='/allshoes/nike'>
          <Allshoes/>
        </Route>
        <Route exact path='/allshoes/adidas'>
          <Adidas/>
        </Route>
        <Route exact path='/shoes'>
          <Mainshoes/>
        </Route>
        <Route exact path='/allshoes/yeezy'>
          <Yeezy/>
        </Route>
        <Route exact path='/electronics'>
          <Electronics/>
        </Route>
        <Route exact path='/search/:id'>
          <Search/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
