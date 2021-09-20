import React,{useState} from "react";
import ToDoInput from "./components/ToDoGoals/ToDoInput/ToDoInput";
import ToDoList from "./components/ToDoGoals/ToDoList/ToDoList";
import Card from "./components/UI/Card/Card";
import "./App.css";

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'finish section 1', id: 'g1' },
    { text: 'read story about history', id: 'g2' }
  ]);
  const addGoalHandler =(enteredText)=>{
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals,{ text: enteredText, id: Math.random().toString() }];
      return updatedGoals;
    });
  }
const deleteItemHandler=(goalId)=>{
  setCourseGoals(prevGoals => {
    const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
    return updatedGoals;
  });
};

let content = (
  <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
);

if (courseGoals.length > 0) {
  content = (
    <ToDoList items={courseGoals} onDeleteItem={deleteItemHandler} />

  );
}
  return (
    <div >
      <h1 className="tilte">To Do Website</h1>
      <Card className="App">
        <ToDoInput onAddGoal={addGoalHandler}></ToDoInput>
        {content}
      </Card>
    </div>
  );
}

export default App;
