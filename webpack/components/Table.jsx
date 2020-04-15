import React, { useEffect } from "react";
import * as api from "./api.js";

const Table = props => {
  const { variant } = props;

  // Holds the state value of records
  const [rows, setRows] = useState([]);

  // RefObj to map the variant keyword to the Airtable name and the columns to show
  const refObj = {
    wishlistTable: { name: "Wishlist", columns: ["Name", "Contact"] }
  };

  // Side effect will run once on mounting, call the API and store the response in the rows value
  useEffect(() => {
    api.getAirtable(refObj[variant]).then(data => {
      setRows(data);
    });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          {refObj[variant].columns.map(column => {
            return <td>{column}</td>;
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map(row => {
          return (
            <tr>
              {refObj[variant].columns.map(column => {
                return <td>{rows.fields[column]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
