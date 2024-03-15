"use client";
import styles from "./login.module.css";
import { userTable } from "../data";
import { useEffect, useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Login = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <button onClick={handlePrint}>Imprimir</button>
      <div className="print-header">
        <h1>Detalhes do Usuário</h1>
      </div>
      <div>
        <p>
          <strong>Nome:</strong> João da Silva
        </p>
        <p>
          <strong>Altura:</strong> 1.75m
        </p>
        <p>
          <strong>Telefone:</strong> (11) 99999-9999
        </p>
        {/* Adicione mais informações conforme necessário */}
      </div>
      <style jsx global>{`
        .print-header {
          display: none;
        }
        @media print {
          .print-header {
            display: block;
            text-align: center;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
          }
          h1 {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Login;
