import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import NavBar from "./NavBar";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateCard = () => {
  let [newquestion, setNewQuestion] = useState("");
  let [newanswer, setNewAnswer] = useState("");
  const [oldquestion, setOldQuestion] = useState("");
  const [oldanswer, setOldAnswer] = useState("");

  const hQue = (event) => { setNewQuestion(event.target.value) };
  const hAns = (event) => { setNewAnswer(event.target.value) };

  const rQue = useRef();
  const rAns = useRef();

  const loc = useLocation();

  useEffect(()=>{
    setOldQuestion(loc.state.Question);
    setOldAnswer(loc.state.Answer);
 },[])
 
 const nav = useNavigate();

  const update = (event) => {
    event.preventDefault();
    if (newquestion.trim() === "") {
      newquestion = oldquestion;
    }

    if (newanswer.trim() === "") {
      newanswer = oldanswer
    }
    let data = { oldquestion,oldanswer, newquestion, newanswer };
    let url = "https://flashcardsserver.onrender.com/update";
    axios.put(url, data)
      .then(res => {
        toast.success("Card Updated, visit Home Page");
        nav('/')
      })
      .catch(err => console.log("Issue: " + err));
  };

  return (
    <>
      <NavBar />
      <div className="mx-auto max-w-md p-4 bg-white shadow-lg rounded-lg mt-20">
        <h1 className="text-3xl font-bold mb-4 text-center">Update Card</h1>
        <ToastContainer />
        <form onSubmit={update} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder={oldquestion}
              onChange={hQue}
              ref={rQue}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder={oldanswer}
              onChange={hAns}
              ref={rAns}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Update Card
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateCard;
