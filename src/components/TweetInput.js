import React, { useState } from 'react';
import axios from 'axios';

// Define the TweetInput component
const TweetInput = ({ fetchTweets }) => {
  const [tweet, setTweet] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (tweet.trim()) {
      try {
        // Post the tweet to the backend
        await axios.post(`${process.env.REACT_APP_ANON_TWITTER_CLONE_BE_URL}/tweets`, { content: tweet });
        setTweet('');
        fetchTweets();
      } catch (error) {
        console.error('Error posting tweet:', error);
      }
    }
  };

  // Render the form
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        className="w-full p-2 border rounded-md"
        placeholder="What's happening?"
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
      />
      <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
        Tweet
      </button>
    </form>
  );
};

// Export the TweetInput component
export default TweetInput;