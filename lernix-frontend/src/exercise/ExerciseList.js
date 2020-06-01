import React from "react";
import Exercise from "./Exercise";

const ExerciseList = ({ exercises, error }) => {
  return (
    <div>
      {exercises.length > 0 ? (
        <div className="exercise-list">
          {exercises.map((exercise) => (
            <Exercise type={exercise.type} exam={exercise.exerciseForExam.examName} key={exercise.id} />
          ))}
        </div>
      ) : (
        <h3>{error || "Keine Aufgaben verfügbar"}</h3>
      )}
    </div>
  );
};

export default ExerciseList;
