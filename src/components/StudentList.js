import React from "react";
import StudentCard from "./StudentCard";

const StudentList = ({ students }) => {
  return (
    <div>
      <h2>Student List</h2>
      {students.length > 0 ? (
        students.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))
      ) : (
        <p>No students added yet</p>
      )}
    </div>
  );
};

export default StudentList;
