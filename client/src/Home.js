import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import NavBar from "./NavBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PacmanLoader } from "react-spinners"; // Import loading spinner from a library

const Home = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://flashcardsserver.onrender.com/get";
        const response = await axios.get(url);
        console.log("Data from server:", response.data); // Debugging: Check data received
        setCards(response.data); // Update state with fetched data
        setLoading(false); // Update loading state once data is fetched
      } catch (error) {
        console.error("Error fetching cards:", error);
        toast.warning("Error fetching cards. Please try again later."); // Alert user about error
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchData();
  }, []);

  return (
    <center>
      <NavBar />
      <div className="flex flex-col items-center">
        <ToastContainer/>
        <h1 className="text-3xl font-bold my-4">Study Effectively With Flash Cards</h1>
        <p>(Click on any card to reveal its answer)</p>
        {loading ? ( // Conditional rendering based on loading state
          <div className="mt-8">
            <PacmanLoader color="#4A90E2" size={25} loading={loading} /> {/* Example of PacmanLoader */}
            <p className="text-gray-600 mt-4">Loading flashcards...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.length > 0 ? (
              cards.map((e, index) => (
                <Card key={index} Question={e.Question} Answer={e.Answer} />
              ))
            ) : (
              <p className="text-center text-gray-600 mt-8">No flashcards available. Please add some cards.</p>
            )}
          </div>
        )}
      </div>
    </center>
  );
};

export default Home;
