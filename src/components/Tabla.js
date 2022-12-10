import React, { useState, useEffect } from "react";

const initialDataBase = {
  product: "",
  info: "",
  id: null,
};

const Tabla = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState({ initialDataBase });

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialDataBase);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.product || !form.info) {
      alert("DATOS INCOMPLETOS");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialDataBase);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="product"
          placeholder="product name"
          onChange={handleChange}
          value={form.product}
        />
        <input
          type="text"
          name="info"
          placeholder="product info"
          onChange={handleChange}
          value={form.info}
        />
        <input type="submit" value="Crear" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default Tabla;
