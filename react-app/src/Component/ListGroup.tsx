import { useState } from "react";

function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London"];
  let selectedIndex = 0;
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const arr = useState(-1);
  arr[0]; //variable
  arr[1]; //updater function

  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No item Found</p>;
      </>
    );
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p> No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              selectedIndex = index;
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
