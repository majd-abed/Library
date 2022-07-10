import React, { useState, useEffect } from "react";
import Container from "./Container";
import { useGlobal } from "../context/context";
import { books } from "../data";
const Filters = () => {
  const [genreVal, setGenreVal] = useState("all");
  const [searchVal, setSearchVal] = useState("");
  const { data, setData } = useGlobal();
  const updateData = (e) => {
    setData(data);
    let searchText = e.target.value;
    let searchName = e.target.name;
    if (searchName === "genre") {
      switch (searchText) {
        case "romance":
          setGenreVal("romance");
          break;
        case "fiction":
          setGenreVal("fiction");
          break;
        case "novel":
          setGenreVal("novel");
          break;
        default:
          setGenreVal("all");
          break;
      }
    } else setSearchVal(searchText);
  };
  const tempGenreData = books.filter((book) => {
    if (genreVal === "all") return book;
    return book.genre === genreVal;
  });
  const tempSearchData = tempGenreData.filter((book) => {
    if (!searchVal) return book;
    return (
      book.title.toLowerCase().includes(searchVal) ||
      book.author.toLowerCase().includes(searchVal) ||
      book.description.toLowerCase().includes(searchVal)
    );
  });
  useEffect(() => {
    setData(tempSearchData);
  }, [genreVal, searchVal]);

  return (
    <div className="dark:bg-slate-900 dark:text-gray-100 py-4">
      <Container>
        <fieldset className='flex smx:flex-col mdx:ml-4 justify-evenly border-2  dark:border-slate-500  w-fit'>
          <legend className='ml-2 text-2xl'>Filters</legend>
          {/* Genre select */}
          <div className='py-2 px-4'>
            <label htmlFor='sort'>Genre:</label>
            <select
              name='genre'
              onChange={updateData}
              className='bg-transparent font-semibold pl-1 focus:outline-none cursor-pointer'>
              <option value='all' className="text-black">all</option>
              <option value='novel' className="text-black">Novel</option>
              <option value='fiction' className="text-black">Fiction</option>
              <option value='romance' className="text-black">Romance</option>
            </select>
          </div>
          {/*end of Genre select */}
          {/* search input */}
          <div className='py-2 px-4 text-black'>
            <input
              type='text'
              name='text'
              onChange={updateData}
              placeholder='Search'
              className='outline-none border rounded-sm bg-white px-2 focus:border-gray-400 w-44'
            />
          </div>
          {/* end of search input */}
        </fieldset>
      </Container>
    </div>
  );
};
export default Filters;
