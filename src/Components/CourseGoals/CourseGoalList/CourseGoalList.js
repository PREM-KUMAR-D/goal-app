import React from "react";
import "./CourseGoalList.css"
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

const CourseGoalList = (props)=>{

    return (
        <ul className="goal-list">
            {
                props.items.map((goal)=>{
                    return(
                        <CourseGoalItem 
                            key={goal.id}
                            id={goal.id}
                            onDeleteItem={props.onDeleteItem}
                        >
                            {goal.text}
                        </CourseGoalItem>
                    )
                })
            }

        </ul>
    )


}


export default CourseGoalList;