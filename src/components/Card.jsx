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
    <div className='shadow border dark:border-slate-500 hover:shadow-md duration-150 '>
      <div className='m-auto w-fit py-4 smx:pt-2 smx:px-2'>
        <img src={cover} alt='Cover' width={200} height={250} />
      </div>
      <div className='grid grid-cols-4'>
        <h2 className='text-lg text-center font-bold col-span-4 py-2'>{title}</h2>
        <h3 className='font-semibold col-span-2 pl-2 pb-2 smx:text-sm'>{author}</h3>
        <h4 className='text-end text-sm col-span-2 pr-2 pb-2'>{year}</h4>
        <p className='text-sm text-gray-700 dark:text-gray-300 col-span-4 px-2 smx:mb-3 h-20'>
          {description}
        </p>
        <div className='flex justify-evenly col-span-2 items-center sm:pr-8 py-3 bg-gray-100 dark:bg-slate-700'>
          <MdThumbUp
            className='w-6 h-6 hover:text-blue-500 duration-150 cursor-pointer'
            onClick={modLikes}
            style={like !== likes ? { color: "rgb(59 130 246)" } : ""}
          />
          <MdThumbDown
            className='w-6 h-6 hover:text-red-500 duration-150 cursor-pointer'
            onClick={modDislikes}
            style={dislike ? { color: "rgb(239 68 68)" } : ""}
          />
        </div>
        <div className='text-end pr-2 py-3 col-span-2 bg-slate-100 dark:bg-slate-700 text-blue-800 dark:text-blue-300 '>
          {like !== 0 ? (like === 1 ? `${like} Like` : `${like} Likes`) : "No likes"}
        </div>
      </div>
    </div>
  );
};

export default Card;
