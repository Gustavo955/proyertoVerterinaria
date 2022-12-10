import React from "react";

const TableRow = ({ el, deleteData, setDataToEdit }) => {
  let {product, info, id} = el;

  return (
    <tr>
      <td>{product}</td>
      <td>{info}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Edith</button>
        <button onClick={() => deleteData(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
