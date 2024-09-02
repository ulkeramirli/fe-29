import React, { useState } from 'react';
import backgroundImage from './assets/images/products.jpg';
import trashImage from "./assets/icons/trash-can.png";

const MyTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const [product, setProduct] = useState([]);

  const addProduct = () => {
      if (inputValue.trim() !== '') {
          setProduct([...product, inputValue.trim()]);
          setInputValue('');
      }
  };

  const deleteIcone = (index) => {
      const newWord = product.filter((_, i) => i !== index);
      setProduct(newWord);
  };

  return (
    <div>
      <img 
        src={backgroundImage} 
        alt="products" 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute top-9 left-1/2 transform -translate-x-1/2 text-white text-6xl font-bold mt-40">
          Products
        </div>
     <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-red-200  border border-gray-300 rounded-lg shadow-lg p-10 w-full max-w-lg">
          <div className="flex flex-row items-center">
            <input className="border border-gray-500 p-3 bg-whiterounded-lg w-full rounded-md"
              type="text" 
              placeholder="Add a new product . . ." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button 
              onClick={addProduct} 
              className="bg-blue-500 ml-3 text-white px-6 py-3 rounded-lg hover:bg-blue-600"> Add </button>
          </div>
          <div className='w-full mt-4'>
            {product.map((word, index) => (
              <div key={index} className="flex items-center justify-between p-2 border border-black bg-white rounded-lg mb-2">
                <span>{word}</span>
                <button 
                  onClick={() => deleteIcone(index)} 
                  className="font-bold ml-3"
                >
                  <img src={trashImage} alt="Delete" className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default MyTodo;


