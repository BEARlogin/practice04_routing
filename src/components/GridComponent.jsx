import { GridRow } from "./GridRow";
import { useEffect, useRef, useState } from "react";

function GridComponent({ records, toggleActiveRow, children, onClickRow }) {
  const [filter, setFilter] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <input
        id="filter"
        type="text"
        placeholder="Search"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        ref={inputRef}
      />
      <table className="table table-condensed">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {records
            .filter((record) => {
              if (filter.length > 0) {
                return (
                  record.firstName
                    .toLowerCase()
                    .includes(filter.toLowerCase()) ||
                  record.lastName.toLowerCase().includes(filter.toLowerCase())
                );
              }
              return record;
            })
            .map((record) => (
              <GridRow
                toggleActive={(value) => {
                  toggleActiveRow(record.id, value);
                }}
                record={record}
                key={record.id}
                onClick={onClickRow}
              />
            ))}
        </tbody>
      </table>
      {children}
    </>
  );
}

export { GridComponent };
