import { ITableProps } from "@types";
import './Table.css';


const Table = ({ data, columnTitles }: ITableProps) => {

  return (
    <table className="table">
      <thead>
        <tr>
          {Object.keys(columnTitles).map((key, index) => (
            <th className="text-bold text-white table-column table-head" key={index}>{columnTitles[key]}</th>
          ))}
        </tr>
      </thead>
      <tbody className="table-tbody">
        {data.rows.map((row, rowIndex) => (
          <tr className="table-tr" key={rowIndex}>
            {Object.keys(row).map((key, colIndex) => (
              <td className="table-column" key={colIndex}>
                {row.hasOwnProperty(key) ? (row as any)[key] : ""}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
