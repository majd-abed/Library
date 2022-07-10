import React, { useState } from "react";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
const Card = ({ cover, title, author, year, description, likes }) => {
  const [like, setLike] = useState(likes);
  const [dislike, setDislike] = useState(0);
  const modLikes = () => {
    if (like === likes) setLike(like + 1);
    else setLike(likes);
    setDislike(0);
  };
  const modDislikes = () => {
    setDislike(1 - dislike);
    setLike(likes);
  };

  return (
    <div className='shadow border hover:shadow-md duration-150 '>
      <div className='m-auto w-fit py-4'>
        <img src={cover} alt='Cover' width={200} height={250} />
      </div>
      <div className='grid grid-cols-2'>
        <h2 className='text-lg text-center font-bold col-span-2 py-2'>{title}</h2>
        <h3 className='font-semibold pl-2 pb-2'>{author}</h3>
        <h4 className='text-end text-sm pr-2 pb-2'>{year}</h4>
        <p className='text-sm text-gray-700 col-span-2 px-2 smx:mb-2 h-20'>
          {description}
        </p>
        <div className='flex justify-evenly items-center pr-8 py-3 bg-gray-100'>
          <MdThumbUp
            className='w-6 h-6 hover:text-blue-500 duration-150 cursor-pointer'
            onClick={modLikes}
            style={like !== likes ? { color: "#6c6cf2" } : ""}
          />
          <MdThumbDown
            className='w-6 h-6 hover:text-red-700 duration-150 cursor-pointer'
            onClick={modDislikes}
            style={dislike ? { color: "#d52424" } : ""}
          />
        </div>
        <div className='text-end pr-4 py-3 bg-slate-100 text-blue-800 '>
          {like !== 0 ? (like === 1 ? `${like} Like` : `${like} Likes`) : "No likes"}
        </div>
      </div>
    </div>
  );
};

export default Card;
