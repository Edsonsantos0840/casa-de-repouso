'use client';

import { useState, ChangeEvent, FormEvent } from "react";
import { FaUser, FaEnvelope, FaPhone, FaRegCommentDots } from "react-icons/fa";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({ nome: "", email: "", telefone: "", mensagem: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Formulário enviado!");
  };

  return (
    <div className=" w-[40%] mx-auto p-2 bg-textoPrincipal shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold text-center text-textoPrincipal drop-shadow-lg mb-6 relative z-30">Entre em Contato</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Seu Nome"
            className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Seu Email"
            className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="relative">
          <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="Seu Telefone"
            className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative">
          <FaRegCommentDots className="absolute left-3 top-3 text-gray-400" />
          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            placeholder="Sua Mensagem"
            className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-principal2 text-white p-3 rounded-lg font-semibold hover:text-principal hover:bg-textoPrincipal transition relative z-30"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
