import React, { useState } from "react";
import { useGlobal } from "../context/context";
import Card from "./Card";
import { Container } from "./";
import Pagination from "react-js-pagination";
const BooksSection = () => {
  const { data } = useGlobal();
  const [page, setPage] = useState(1);
  const handlePageChange = (p) => {
    setPage(p);
  };
  return (
    <div className='my-10'>
      <Container>
        <div className='grid grid-cols-3 lgx:grid-cols-2 mdx:grid-cols-1 gap-6 px-20 mb-10 '>
          {data.length ? (
            data.slice((page - 1) * 5, page * 5).map((book) => {
              return <Card key={book.id} {...book} />;
            })
          ) : (
            <div className='text-3xl font-semibold h-[calc(100vh_-_25.8rem)]'>
              Oops! there is no results for your search.
            </div>
          )}
        </div>
        <Pagination
          hideFirstLastPages={true}
          innerClass='flex justify-center'
          itemClass={
            Math.ceil(data.length / 5) > 1
              ? "w-12 h-10 flex justify-center items-center text-lg font-semibold border hover:bg-gray-300 duration-200"
              : "hidden"
          }
          prevPageText={"<"}
          nextPageText={">"}
          activeClass='bg-gray-200 font-bold'
          activePage={page}
          itemsCountPerPage={5}
          totalItemsCount={data.length}
          pageRangeDisplayed={Math.ceil(data.length / 5)}
          onChange={handlePageChange}
        />
      </Container>
    </div>
  );
};

export default BooksSection;
