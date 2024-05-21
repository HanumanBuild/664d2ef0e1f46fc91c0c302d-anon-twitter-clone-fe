// Import necessary modules
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TweetInput from './components/TweetInput';
import TweetList from './components/TweetList';
import './App.css';

// Define the App component
function App() {
  const [tweets, setTweets] = useState([]);

  // Function to fetch tweets from the backend
  const fetchTweets = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_ANON_TWITTER_CLONE_BE_URL}/tweets`);
      setTweets(response.data);
    } catch (error) {
      console.error('Error fetching tweets:', error);
    }
  };

  // Fetch tweets when the component mounts
  useEffect(() => {
    fetchTweets();
  }, []);

  // Render the component
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline mb-4">Anon Twitter Clone</h1>
      <TweetInput fetchTweets={fetchTweets} />
      <TweetList tweets={tweets} />
    </div>
  );
}

// Export the App component
export default App;