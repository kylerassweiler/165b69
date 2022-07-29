import PropTypes from "prop-types";

export const DOTS = "...";

function usePagination(props) {
  /*
    This hook returns an array of page numbers surrounding the provided currentPage
    with the first page and last page apended to the array. It follows the following
    logic:
   
    - Current page always have 2 siblings (refer to screenshots below)
    - Ellipses should be inserted if the first page or the last page is not a sibling of the current page
    - First and last page must always be displayed
    - Current page is 1, and it has 2 sibling options next to it. Ellipses before the last page.
    - In the middle of the pagination, with one sibling before and after. Ellipses after page 1 and before the last page.
    - Second last page, one sibling before and after (the last page is the same page as the next page). Ellipses after page 1.
    - No ellipses when there is only one page available.
  */
  const { currentPage, totalCount, pageSize } = props;
  const lastPage = Math.ceil(totalCount / pageSize);
  const pagination = [1];
  if (currentPage > 1 && currentPage < lastPage) {
    if (currentPage - 1 !== 1) {
      pagination.push(DOTS);
      pagination.push(currentPage - 1);
    }
    pagination.push(currentPage);
    if (currentPage + 1 !== lastPage) {
      pagination.push(currentPage + 1);
      pagination.push(DOTS);
    }
  } else if (currentPage === 1 && lastPage > 3) {
    pagination.push(currentPage + 1);
    pagination.push(currentPage + 2);
    pagination.push(DOTS);
  } else if (currentPage === lastPage && lastPage > 3) {
    pagination.push(DOTS);
    pagination.push(currentPage - 2);
    pagination.push(currentPage - 1);
  }
  if (lastPage > 1) {
    pagination.push(lastPage);
  }
  return pagination;
}

usePagination.propTypes = {
  props: PropTypes.object,
};

export default usePagination;
