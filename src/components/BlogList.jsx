import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React, { useState, useMemo, useCallback } from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [data, setData] = useState(blogs.posts.slice(
    (currentPage - 1) * rowsPerPage,
    rowsPerPage * currentPage
  ));

  const updateRowsPerPage = (newRowsPerPage) => {
    setCurrentPage(1);
    setRowsPerPage(parseInt(newRowsPerPage));
    updateData(1,newRowsPerPage);
  };

  const updatePage = (newPage) => {
    setCurrentPage(newPage);
    updateData(newPage,rowsPerPage);
  };

  const updateData = (page, rowsPerPage) => {
    setData(blogs.posts.slice(
      (page - 1) * rowsPerPage,
      rowsPerPage * page
    ));
  };

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSize={rowsPerPage}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {data.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
