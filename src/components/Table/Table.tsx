//import styles from './Table.module.scss'

export const Table = () => {
  return (
    <div className="table-container">
        <table className="responsive-table" id="dataTable">
            <thead>
                <tr>
                    <th className="col-small">
                        <div className="filter-container">
                            <span>Folio</span>
                            <span>⬆️⬇️</span>
                            <input type="text" />
                        </div>
                    </th>
                    <th className="col-medium">
                        <div className="filter-container">
                            <span>Fecha</span>
                            <span>⬆️⬇️</span>                            
                        </div>
                        <input type="text" />
                    </th>
                    <th className="col-large">
                        <div className="filter-container">
                            <span>Producto</span>
                            <span>⬆️⬇️</span>                            
                        </div>
                        <input type="text" />
                    </th>
                    <th className="col-medium">
                        <div className="filter-container">
                            <span>Fecha de Creación</span>
                            <span>⬆️⬇️</span>                            
                        </div>
                        <input type="text" />
                    </th>
                    <th className="col-medium">
                        <div className="filter-container">
                            <span>Fecha de Modificación</span>
                            <span>⬆️⬇️</span>                            
                        </div>
                        <div className="filter-input">
                        <input type="text" />
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>12345678901234567890</td>
                    <td>2025-02-13</td>
                    <td>Producto A <span className="indicator">🔵</span></td>
                    <td>2025-02-10</td>
                    <td>2025-02-12</td>
                </tr>
                <tr>
                    <td>002</td>
                    <td>2025-02-14</td>
                    <td>Producto B <span className="indicator">🟢</span></td>
                    <td>2025-02-11</td>
                    <td>2025-02-13</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
