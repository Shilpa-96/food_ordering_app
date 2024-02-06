import React, { useState } from "react";

import { RiSearchLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { dataActions } from "../../store/datastore/dataSlics";
import "./search-sort-food.css";

export default function SearchSortFood() {
  const [query, setQuery] = useState("");
  const [option, setOption] = useState("Deafult");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    dispatch(dataActions.searchedData(e.target.value));
  };
  const handleSorting = (e) => {
    setOption(e.target.value);
    dispatch(dataActions.sortedData(e.target.value.toLowerCase()));
  };
  return (
    <>
      <div className="search-food">
        <input
          type="text"
          placeholder="Search foods here ..."
          value={query}
          onChange={handleChange}
        />
        <RiSearchLine className="search-icon" />
      </div>
      <div className="sort-food">
        <select onChange={handleSorting} defaultValue={option}>
          <option value="Default">Default</option>
          <option value="Alphabetically, Z-A">Alphabetically, Z-A</option>
          <option value="Alphabetically, A-Z">Alphabetically, A-Z</option>
          <option value="Price low-high">Price low-high</option>
          <option value="Price high-low">Price high-low</option>
        </select>
      </div>
    </>
  );
}
