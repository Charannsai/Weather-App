import React from 'react';

function Modal({ message, onClose }) {
  return (
    <div className=" text-center text-black fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-red-600">Error</h2>
        <p className='font-semibold'>{message}</p>
        <button 
          onClick={onClose} 
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-white hover:text-red-500 hover:font-bold hover:border transition "
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
