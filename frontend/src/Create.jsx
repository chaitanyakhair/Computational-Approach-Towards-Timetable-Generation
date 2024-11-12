// src/Create.jsx
import React, { useState } from 'react';
import InputGroup from './InputGroup';

const Create = () => {
  const [classYear, setClassYear] = useState('');
  const [lecturesEveryday, setLecturesEveryday] = useState();
  const [numberOfTeachers, setNumberOfTeachers] = useState();
  const [numberOfSubjects, setNumberOfSubjects] = useState();
  const [numberOfClassrooms, setNumberOfClassrooms] = useState();

  const handleNext = () => {
    // Handle the next button click
    console.log('Next button clicked');
    window.location.reload(); // Refresh the page
  };

  const handleGenerate = () => {
    // Handle the generate time table button click
    console.log('Generate Time Table button clicked');
    window.location.reload(); // Refresh the page
  };

  return (
    <div className="flex-grow p-6">
      <h1 className="text-2xl font-semibold mb-4">Create New TimeTable</h1>
      <hr className="mb-4" />

      <div className="flex items-center mb-4">
        <label className="mr-4 text-lg font-medium">Class Year:</label>
        <input
          type="text"
          value={classYear}
          onChange={(e) => setClassYear(e.target.value)}
          className="border border-gray-800 p-2 rounded w-32"
        />
      </div>

      <InputGroup
        label="Lectures everyday:"
        value={lecturesEveryday}
        setValue={setLecturesEveryday}
        id="lecturesEveryday"
        createInputs={(count) =>
          Array.from({ length: count }).map((_, i) => (
            <div key={i} className="flex mb-4 items-center">
              <label className="mr-2">Start:</label>
              <input type="time" className="border p-2 rounded w-24" />
              <label className="ml-4 mr-2">End:</label>
              <input type="time" className="border p-2 rounded w-24" />
            </div>
          ))
        }
      />

      <InputGroup
        label="Number of Teachers:"
        value={numberOfTeachers}
        setValue={setNumberOfTeachers}
        id="numberOfTeachers"
        createInputs={(count) =>
          Array.from({ length: count }).map((_, i) => (
            <div key={i} className="flex mb-4 items-center">
              <label className="mr-2">Name:</label>
              <input type="text" className="border p-2 rounded w-full" />
              <label className="ml-4 mr-2">Subject:</label>
              <input type="text" className="border p-2 rounded w-full" />
            </div>
          ))
        }
      />

      <InputGroup
        label="Number of Subjects:"
        value={numberOfSubjects}
        setValue={setNumberOfSubjects}
        id="numberOfSubjects"
        createInputs={(count) =>
          Array.from({ length: count }).map((_, i) => (
            <div key={i} className="flex mb-4 items-center">
              <label className="mr-2">Subject:</label>
              <input type="text" className="border p-2 rounded w-full" />
              <label className="ml-4 mr-2">Hours:</label>
              <input type="number" min="1" max="10" className="border p-2 rounded w-24" />
            </div>
          ))
        }
      />

      <InputGroup
        label="Number of Classrooms:"
        value={numberOfClassrooms}
        setValue={setNumberOfClassrooms}
        id="numberOfClassrooms"
        createInputs={(count) => Array.from({ length: count }).map((_, i) => (
          <div key={i} className="flex mb-4 items-center">
            <label className="mr-2">Classroom {i + 1}:</label>
            <input type="text" className="border p-2 rounded w-full" />
          </div>
        ))}
      />

      <div className="flex justify-end space-x-4 mt-4">
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Next
        </button>
        <button
          onClick={handleGenerate}
          className="bg-green-500 text-white p-2 rounded"
        >
          Generate Time Table
        </button>
      </div>
    </div>
  );
};

export default Create;