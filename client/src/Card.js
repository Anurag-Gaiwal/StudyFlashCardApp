import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Card = ({ Question, Answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleDelete = async (event) => {
    event.stopPropagation();
    try {
      const url = "https://flashcardsserver.onrender.com/delete";
      const data = { question: Question, answer: Answer };
      await axios.delete(url, { data });
      window.location.reload();
    } catch (err) {
      toast.info("issue: " + err);
    }
  };

  const nav = useNavigate();
	const handleUpdate = (rno,name,marks) => {
		nav("/update",{state:{Question,Answer}});

	}

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 cursor-pointer transform transition-transform duration-500 hover:shadow-2xl">
      <div className="p-6" onClick={handleCardClick}>
      <ToastContainer/>
        <h2 className="font-bold text-xl mb-2">{Question}</h2>
        {isFlipped && (
          <div className="mt-4">
            <h2 className="text-gray-700">Answer: {Answer}</h2>
          </div>
        )}
      </div>
      <div className="flex justify-around mt-4 pb-4 px-6">
        <button onClick={handleUpdate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Update
        </button>
        <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
