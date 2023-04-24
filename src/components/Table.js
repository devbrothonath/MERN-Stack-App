// DEPENDENCIES
import * as React from "react";
import { useTable, useFilters, useGlobalFilter,  useSortBy, } from "react-table";
import { GlobalFilter } from "./GlobalFilter";
import { ColumnFilter } from "./ColumnFilter";

// TABLE
export const Table = () => {
  const [user, setUser] = React.useState([
    {
      id: 0,
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      income: "",
      city: "",
      car: "",
      quote: "",
      phone_price: "",
    },
  ]);

// FETCHING DATA FROM LOCALHOST SERVER
  React.useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((res) => res.json())
      .then((jsonRes) => setUser(jsonRes))
  }, [])


  const data = React.useMemo(() => user, [user]);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
        Filter: ColumnFilter,
      },
      {
        Header: "First Name",
        accessor: "first_name",
        Filter: ColumnFilter,
      },
      {
        Header: "Last Name",
        accessor: "last_name",
        Filter: ColumnFilter,
      },
      {
        Header: "Email",
        accessor: "email",
        Filter: ColumnFilter,
      },
      {
        Header: "Gender",
        accessor: "gender",
        Filter: ColumnFilter,
      },
      {
        Header: "Income",
        accessor: "income",
        Filter: ColumnFilter,
      },
      {
        Header: "City",
        accessor: "city",
        Filter: ColumnFilter,
      },
      {
        Header: "Car",
        accessor: "car",
        Filter: ColumnFilter,
      },
      {
        Header: "Quote",
        accessor: "quote",
        Filter: ColumnFilter,
      },
      {
        Header: "Phone Price",
        accessor: "phone_price",
        Filter: ColumnFilter,
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter, } =
    useTable({ columns, data }, useFilters, useGlobalFilter, useSortBy);
    const { globalFilter} = state

  return (
    <>
    <div className="App">
    
      <div className="container">
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                    <span>
                        {column.isSorted ? (column.isSortedDesc ? '🔼' : '🔽') : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default Table;

