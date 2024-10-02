import React, { useState } from "react";

const StudentForm = ({ addStudent }) => {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    major: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (student.name && student.age && student.major) {
      addStudent(student);
      setStudent({ name: "", age: "", major: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={student.age}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Major:</label>
        <input
          type="text"
          name="major"
          value={student.major}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
