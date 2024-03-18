"use client";
import styles from "./login.module.css";
import { userTable } from "../data";
import { useEffect, useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import Button from "../ui/buttons/buttons";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    processCity: "",
    processClient: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const newUser = {
      id: userTable.length + 1,
      ...formData,
    };

    userTable.push(newUser);

    // Opcional: você pode salvar os dados atualizados de volta ao arquivo JSON
    // Aqui está um exemplo de como você pode fazer isso:
    // fetch('/updateUserData', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ userTable })
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Erro ao salvar dados:', error));
  };

  return (
    <div>
      <h2>Formulário de Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Contato:
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Cidade do Processo:
          <input
            type="text"
            name="processCity"
            value={formData.processCity}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Cliente do Processo:
          <input
            type="text"
            name="processClient"
            value={formData.processClient}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Categoria:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};
export default Login;
