import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const InputPost = () => {
  const [postText, setPostText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleImageSave = () => {
    setIsDialogOpen(false);
  };

  const handlePostUpload = async () => {
    if (!postText || !imageUrl) {
      toast.error('Both text and image URL are required to post.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/v1/post', {
        post_text:postText,
        post_url:imageUrl
      }, {
        headers: {
          'Authorization': "Bearer " + localStorage.getItem('token'),
        },
      });

      if (response.data) {
        toast.success('Post added successfully!');
        setTimeout(() => window.location.reload(), 2000);
      } else {
        console.error('Unexpected response:', response);
      }
    } catch (error) {
      console.error('Error uploading post:', error);
      toast.error('An error occurred while posting. Please try again.');
    }
  };

  return (
    <div className="mr-4 p-4 border rounded shadow">
      <div className="flex gap-3 items-center mb-4">
        <img
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          alt="Avatar"
          className="rounded-full w-10 h-10"
        />
        <input
          type="text"
          id="post-text"
          placeholder="What's Happening..?"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="flex justify-between">
        <button onClick={() => setIsDialogOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Photo
        </button>
        <button onClick={handlePostUpload} className="bg-green-500 text-white px-4 py-2 rounded">
          Post
        </button>
      </div>
      {isDialogOpen && (
        <div className="mt-4 p-4 border rounded">
          <h3>Enter Photo Link</h3>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Enter image URL"
            className="border p-2 rounded w-full mt-2"
          />
          <div className="flex justify-end gap-3 mt-4">
            <button onClick={() => setIsDialogOpen(false)} className="bg-gray-500 text-white px-4 py-2 rounded">
              Cancel
            </button>
            <button onClick={handleImageSave} className="bg-blue-500 text-white px-4 py-2 rounded">
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputPost;
