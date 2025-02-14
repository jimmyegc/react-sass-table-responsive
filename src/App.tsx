import React, { useEffect, useState } from "react";
import "./styles/global.scss";
import { TableResponsive } from "./components/TableResponsive/TableResponsive";
import { Table } from "./components/Table/Table";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import "./styles/global.scss";
import "./styles/_themes.scss";

const columns = [
  { key: "checkbox", label: "✔" },
  { key: "folio", label: "Folio" },
  { key: "fecha", label: "Fecha" },
  { key: "descripcion", label: "Descripción" },
  { key: "producto", label: "Producto" },
  { key: "fecha_creacion", label: "Fecha Creación" },
  { key: "fecha_actualizacion", label: "Fecha Actualización" },
  { key: "fecha_ultimo_movimiento", label: "Último Movimiento" },
];

const data = [
  { folio: 101, fecha: "2024-02-01", descripcion: "Compra", producto: "Laptop", fecha_creacion: "2024-01-01", fecha_actualizacion: "2024-01-15", fecha_ultimo_movimiento: "2024-01-30" },
  { folio: 102, fecha: "2024-02-02", descripcion: "Venta", producto: "Mouse", fecha_creacion: "2024-01-02", fecha_actualizacion: "2024-01-16", fecha_ultimo_movimiento: "2024-01-31" },
  { folio: 103, fecha: "2024-02-03", descripcion: "Cambio", producto: "Teclado", fecha_creacion: "2024-01-03", fecha_actualizacion: "2024-01-17", fecha_ultimo_movimiento: "2024-02-01" },
  { folio: 104, fecha: "2024-02-04", descripcion: "Reembolso", producto: "Monitor", fecha_creacion: "2024-01-04", fecha_actualizacion: "2024-01-18", fecha_ultimo_movimiento: "2024-02-02" },
  { folio: 105, fecha: "2024-02-05", descripcion: "Compra", producto: "Impresora", fecha_creacion: "2024-01-05", fecha_actualizacion: "2024-01-19", fecha_ultimo_movimiento: "2024-02-03" },
  { folio: 106, fecha: "2024-02-06", descripcion: "Venta", producto: "Tablet", fecha_creacion: "2024-01-06", fecha_actualizacion: "2024-01-20", fecha_ultimo_movimiento: "2024-02-04" },
  { folio: 107, fecha: "2024-02-07", descripcion: "Cambio", producto: "Celular", fecha_creacion: "2024-01-07", fecha_actualizacion: "2024-01-21", fecha_ultimo_movimiento: "2024-02-05" },
  { folio: 108, fecha: "2024-02-08", descripcion: "Reembolso", producto: "Cámara", fecha_creacion: "2024-01-08", fecha_actualizacion: "2024-01-22", fecha_ultimo_movimiento: "2024-02-06" },
  { folio: 109, fecha: "2024-02-09", descripcion: "Compra", producto: "Smartwatch", fecha_creacion: "2024-01-09", fecha_actualizacion: "2024-01-23", fecha_ultimo_movimiento: "2024-02-07" },
  { folio: 110, fecha: "2024-02-10", descripcion: "Venta", producto: "Consola", fecha_creacion: "2024-01-10", fecha_actualizacion: "2024-01-24", fecha_ultimo_movimiento: "2024-02-08" },
];
function App() {
  const [theme, setTheme] = useState("light");

  // Cambiar la clase del <body> al cambiar el tema
  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  return (
    <div className={theme}>      
      <Table />

      <div className="app-container">
      <h1>Modo {theme === "light" ? "Claro" : "Oscuro"}</h1>
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
      </div>
      {/* <Table size="small" />
      <Table size="medium" />
      <Table size="large" />
      
      <div>
        <h1>Tabla Responsiva</h1>
        <TableResponsive data={data} columns={columns} maxWidth="80%" />
    </div> */}
    </div>
  );
}

export default App;
