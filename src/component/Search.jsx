import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
const apiKey = "9302d034eb5b4c65a68f4e3b80e2c4a8";

export default function Search({ food, setFood }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`
      );
      const data = await res.json();
      setFood(data.results);
      console.log(data.results)
      console.log("..");
      console.log(food);
    }
    fetchData();
  }, [query]);
  return (
    <div className="flex justify-center p-4 mt-28">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-1/3 border border-t-0 border-collapse border-black border-x-0 focus:outline-none active:outline-none"
      />
      <FaSearch />
    </div>
  );
}
