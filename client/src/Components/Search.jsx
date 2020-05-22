import React from 'react'
// import './Search.css'

export default function Search(products) {
  const handleChange = (e) => {
    products.onChange(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search"
          onChange={handleChange}
          className="Search"
        />
      </form>
    </div>
  );
}