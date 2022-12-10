import React, { useState } from "react";
import Tabla from "./Tabla";
import TableData from "./TableData";
const dataBase = [
  { id: 1, product: "a", info: "description x" },
  { id: 2, product: "b", info: "description x" },
  { id: 3, product: "c", info: "description x" },
  { id: 4, product: "d", info: "description x" },
  { id: 5, product: "e", info: "description x" },
];

const ContainerApp = () => {
  const [db, setDb] = useState(dataBase);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };
  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };
  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };
  

  return (
    <div>
      <h2>Productos</h2>
      <Tabla
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <TableData
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </div>
  );
};

export default ContainerApp;
