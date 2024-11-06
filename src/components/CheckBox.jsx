import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckBox() {
  const [isChecked, setIsChecked] = useState(false);
  const navigation=useNavigate() 

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    navigation("/form")
};

  return (
    <div className="inline-flex items-center space-x-3">
      <label className="flex items-center">
        <input
          type="checkbox"
          className={`appearance-none w-6 h-6 border-2 rounded-md 
            ${isChecked ? 'bg-blue-600 border-blue-600' : 'bg-gray-100 border-gray-300'} 
            checked:bg-blue-600 checked:border-blue-600 focus:outline-none`}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </label>
    </div>
  );
}

export default CheckBox;