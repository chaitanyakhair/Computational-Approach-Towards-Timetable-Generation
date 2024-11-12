import React from 'react';

const InputGroup = ({ label, value, setValue, id, createInputs }) => {
  const handleInputChange = (e) => {
    setValue(parseInt(e.target.value) || 0);
  };

  return (
    <div className="mb-6">
      {/* Label and input aligned on the same line */}
      <div className="flex items-center mb-2">
        <label htmlFor={id} className="mr-4 text-lg font-medium">{label}</label>
        <input
          type="number"
          id={id}
          min="1"
          max="10"
          value={value}
          onChange={handleInputChange}
          className="border border-gray-800 p-2 rounded w-32"
        />
      </div>

      {/* Dynamically generated input fields */}
      <div className="space-y-4">
        {createInputs(value)}
      </div>
    </div>
  );
};

export default InputGroup;
