import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ExerciseList from './components/ExerciseList'
import EditExercise from './components/EditExercises'
import CreateExercise from './components/CreateExercise'
import CreateUser from './components/CreateUser'


function App() {
  return (
   <BrowserRouter>
   <div className="container">
    <Navbar />
    <Route path="/" exact component={ExerciseList}/>
    <Route path="/edit/:id" exact component={EditExercise}/>
    <Route path="/create" exact component={CreateExercise}/>
    <Route path="/user" exact component={CreateUser}/>
    </div>
   </BrowserRouter>
  );
}

export default App;
