import React from "react";
import styled from "styled-components";
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { loadCardFB } from "./redux/modules/word";

import MyWord from './MyWord';
import Add from './Add';
import Detail from './Detail';

import {db} from './firebase'
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'


function App() {
  const [list, setList] = React.useState([
    {word: 'hi', explanation:'안녕', example:'hi, there'}
  ])

  const dispatch = useDispatch();

  React.useEffect(() => {
    // console.log(db);
    dispatch(loadCardFB());
  }, [])

  return (
    <div className="App">
      <Container>
        <Title>COLLECT <br /> YOUR WORDS</Title>

        <Switch>
          <Route path='/' exact>
            <MyWord list={list}/>
          </Route>
          
          <Route path='/add'>
            <Add />
          </Route>

          <Route path='/detail/:index'>
            <Detail />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

const Container = styled.div`
  border: 1px solid #ddd;
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 5px; 
  text-align:center;
`
const Title = styled.h1`
  font-style: italic;
`

export default App;
