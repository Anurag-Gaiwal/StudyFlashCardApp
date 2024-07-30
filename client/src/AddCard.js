import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import NavBar from "./NavBar";


const AddCard = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const hQue = (event) => { setQuestion(event.target.value) };
  const hAns = (event) => { setAnswer(event.target.value) };

  const rQue = useRef();
  const rAns = useRef();

  const server = process.env.REACT_APP_SERVER_URL;

  const add = (event) => {
    event.preventDefault();
    if (question.trim() === "") {
      toast.warning("Question cannot be empty");
      setQuestion("");
      rQue.current.focus();
      return;
    }

    if (answer.trim() === "") {
      toast.warning("Answer cannot be empty");
      setAnswer("");
      rAns.current.focus();
      return;
    }

    let data = { question, answer };
    let url = "https://flashcardsserver.onrender.com/save";
    axios.post(url, data)
      .then(res => {
        toast.success("Card Added, visit Home Page");
        setQuestion("");
        setAnswer("");
      })
      .catch(err => console.log("Issue: " + err));
  };

  return (
    <>
      <NavBar />
      <div className="mx-auto max-w-md p-4 bg-white shadow-lg rounded-lg mt-20">
        <h1 className="text-3xl font-bold mb-4 text-center">Add Card</h1>
        <ToastContainer />
        <form onSubmit={add} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Enter Question"
              onChange={hQue}
              ref={rQue}
              value={question}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Answer"
              onChange={hAns}
              ref={rAns}
              value={answer}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Add Card
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCard;
