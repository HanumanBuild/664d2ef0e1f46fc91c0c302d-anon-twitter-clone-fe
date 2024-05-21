import React from 'react';

const TweetList = ({ tweets }) => {
  return (
    <div className="space-y-4">
      {tweets.map((tweet) => (
        <div key={tweet._id} className="p-4 border rounded-md">
          <p>{tweet.content}</p>
          <span className="text-gray-500 text-sm">{new Date(tweet.createdAt).toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
};

export default TweetList;