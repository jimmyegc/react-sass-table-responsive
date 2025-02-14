import React, { useState } from "react";
import styles from "./Table.module.scss";

export const TableResponsive = ({ data, columns, maxWidth = "100%" }) => {
  const [sortColumn, setSortColumn] = useState("folio");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (colKey) => {
    if (sortColumn === colKey) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(colKey);
      setSortOrder("asc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortOrder === "asc" ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className={styles.tableContainer} style={{ maxWidth }}>
      <table className={styles.responsiveTable}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} className={styles.tableHeader} onClick={() => handleSort(col.key)}>
                {col.label} {sortColumn === col.key ? (sortOrder === "asc" ? "▲" : "▼") : ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr key={rowIndex} className={styles.tableRow}>
              {columns.map((col) => (
                <td key={col.key} className={styles.tableCell}>
                  {col.key === "checkbox" ? <input type="checkbox" /> : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
