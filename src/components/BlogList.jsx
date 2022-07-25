import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React, { useState } from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const currentPaginationData = blogs.posts.slice(
    (currentPage - 1) * rowsPerPage,
    rowsPerPage * currentPage
  );

  const updateRowsPerPage = (newRowsPerPage) => {
    setRowsPerPage(parseInt(newRowsPerPage));
    if (currentPage > blogs.posts.length / newRowsPerPage) {
      setCurrentPage(Math.ceil(blogs.posts.length / newRowsPerPage));
    }
  };
  const updatePage = (newPage) => {
    setCurrentPage(newPage);
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
        {currentPaginationData.map((blog) => (
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
