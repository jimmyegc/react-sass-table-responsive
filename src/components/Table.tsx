import React, { useState } from "react";
import styles from "./Table.module.scss";

const Table = ({ size = "medium" }) => {
  const [sortColumn, setSortColumn] = useState("folio");
  const [sortOrder, setSortOrder] = useState("asc");

  const data = [
    { folio: 1, fecha: "2024-01-01", descripcion: "Item 1", producto: "A", fechaCreacion: "2024-01-01", fechaActualizacion: "2024-02-01", fechaMovimiento: "2024-02-10" },
    { folio: 2, fecha: "2024-01-02", descripcion: "Item 2", producto: "B", fechaCreacion: "2024-01-02", fechaActualizacion: "2024-02-02", fechaMovimiento: "2024-02-11" },
    // Agrega más datos...
  ];

  const handleSort = (column) => {
    setSortOrder(sortColumn === column && sortOrder === "asc" ? "desc" : "asc");
    setSortColumn(column);
  };

  return (
    <table className={`${styles.table} ${styles[size]}`}>
      <thead>
        <tr>
          <th onClick={() => handleSort("folio")}>
            Folio {sortColumn === "folio" && (sortOrder === "asc" ? "🔼" : "🔽")}
          </th>
          <th>Fecha</th>
          <th>Descripción</th>
          <th>Producto</th>
          <th>Fecha Creación</th>
          <th>Fecha Actualización</th>
          <th>Último Movimiento</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.folio}>
            <td>{item.folio}</td>
            <td>{item.fecha}</td>
            <td>{item.descripcion}</td>
            <td>{item.producto}</td>
            <td>{item.fechaCreacion}</td>
            <td>{item.fechaActualizacion}</td>
            <td>{item.fechaMovimiento}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
