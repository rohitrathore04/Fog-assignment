
import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";
import React, { useState } from "react";

const Home = () => {
  const items = useSelector((store) => store.items);
  const [filter, setFilter] = useState("");

  // Get unique companies for dropdown
  const companies = Array.from(new Set(items.map(item => item.company)));

  // Filter items by selected company
  const filteredItems = filter
    ? items.filter(item => item.company === filter)
    : items;

  return (
    <main>
      <div style={{ margin: "24px 0", textAlign: "center" }}>
        <label htmlFor="company-filter" style={{ marginRight: 8 }}>Filter by Company:</label>
        <select
          id="company-filter"
          value={filter}
          onChange={e => setFilter(e.target.value)}
          style={{ padding: "6px 12px", borderRadius: 6 }}
        >
          <option value="">All</option>
          {companies.map(company => (
            <option key={company} value={company}>{company}</option>
          ))}
        </select>
      </div>
      <div className="items-container">
        {filteredItems.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default Home;
