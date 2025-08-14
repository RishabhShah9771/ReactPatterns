import { useRef, useState } from "react";

export default function SearchAbleList({ items, children, itemKeyFn }) {
  const lastChange = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleChange(event) {
    if (lastChange.current) {
      clearTimeout(lastChange.current);
    }

    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      setSearchTerm(event.target.value);
    }, 500);
    // De-bouncing is technique Where we dont update the state on everykey stroke but where we instead define some timing threshold where we only update after the user stops typing for couple of miliseconds.
  }

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleChange} />
      <ul>
        {searchResults.map((item) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
          // In render props we are passing function in the children so other component where it is called is can return a complex values.
        ))}
      </ul>
    </div>
  );
}
