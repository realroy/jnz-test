import { useState } from 'react'
import Router from 'next/router'

import styles from "./SearchForm.module.css";

export const SearchForm = () => {
  const [q, setQ] = useState("")
  const handleChange = ({ target: { value } }) => {
    setQ(value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    Router.push(`/Jenosize/restaurants?q=${encodeURIComponent(q)}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Search</label>
      <div className={styles["input-container"]}>
        <input
          className={styles["input"]}
          id="search"
          type="text"
          onChange={handleChange}
          value={q}
          placeholder="Search"
        />
        <span className={styles["icon"]} type="submit">
          &#8981;
        </span>
      </div>
    </form>
  );
};
