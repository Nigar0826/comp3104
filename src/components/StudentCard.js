import React from "react";

const StudentCard = ({ student }) => {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>Age: {student.age}</p>
      <p>Major: {student.major}</p>
    </div>
  );
};

export default StudentCard;
