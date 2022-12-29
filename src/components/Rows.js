import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Row from "./Row";
import "./CSS files/Rows.css";

const Rows = (props) => {
  const data = props.groupsList;
  const [currentItems, setCurrentItems] = useState();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <div className="current-items">
        {data.length !== 0 && (
          <table className="table table-striped mb-0">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Batch</th>
                <th>Stock</th>
                <th>Deal</th>
                <th>Free</th>
                <th>Mrp</th>
                <th>Rate</th>
                <th>Expiry</th>
              </tr>
              {currentItems !== undefined &&
                currentItems.map((itm) => {
                  return <Row key={itm[0]} item={itm} />;
                })}
            </tbody>
          </table>
        )}
      </div>
      <ReactPaginate
        breakLabel="...."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
};
export default Rows;
