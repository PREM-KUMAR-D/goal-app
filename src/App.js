import React,{useState} from "react";
import "./App.css";
import CourseGoalList from "./Components/CourseGoals/CourseGoalList/CourseGoalList";


const  App= ()=> {

  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);


  let content = (
    <p style ={{ textAlign:"center"}}> No Goals found.
    Maybe add one? </p>
  );

  // if(courseGoals.length > 0){
  //   content = (
  //     <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler}/>
  //   )
  // }





  return <div>Learn React</div>;
}

export default App;
