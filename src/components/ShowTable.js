import React, { useState, useEffect } from "react";
import _ from "lodash";
import Rows from "./Rows";
import "./CSS files/ShowTable.css";

const ShowTable = (props) => {
  const namewiseGroups = _.groupBy(props.data, "name");
  const groupsList = Object.entries(namewiseGroups);

  const [searchWord, setSearchWord] = useState("");
  const [groupsToDisplay, setGroupsToDisplay] = useState(groupsList);

  const searchHandler = (event) => {
    setSearchWord(event.target.value.toLowerCase());
  };

  useEffect(() => {
    if (searchWord) {
      const searchedGroupsList = groupsList.filter((productGroup) =>
        productGroup[0].toLowerCase().includes(searchWord)
      );
      setGroupsToDisplay(searchedGroupsList);
    }
  }, [searchWord]);

  return (
    <div className="total-table">
      {props.data.length !== 0 && (
        <div className="search">
          <input
            className="form-control rounded"
            type="text"
            onChange={searchHandler}
            placeholder="Search for Products"
          />
        </div>
      )}

      {searchWord && (
          <Rows groupsList={groupsToDisplay} />
      )}

      {searchWord && groupsToDisplay.length === 0 && (
        <h2 className="no-products">No products Found</h2>
      )}

      {!searchWord && <Rows groupsList={groupsList} />}
    </div>
  );
};

export default ShowTable;
