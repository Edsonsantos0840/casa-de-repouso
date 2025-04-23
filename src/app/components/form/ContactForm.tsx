'use client';

import { useState, ChangeEvent, FormEvent } from "react";
import { FaUser, FaEnvelope, FaPhone, FaRegCommentDots } from "react-icons/fa";
import emailjs from 'emailjs-com';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus(null);

    if (!formData.nome || !formData.email || !formData.mensagem) {
      setStatus("⚠️ Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus("⚠️ Por favor, insira um e-mail válido.");
      return;
    }

    setLoading(true);

    const templateParams = {
      nome: formData.nome,
      email: formData.email,
      telefone: formData.telefone,
      mensagem: formData.mensagem,
    };

    emailjs
      .send(
        "service_092zaue",
        "template_yrje0me",
        templateParams,
        "irOtK26YzqWiLtyD8"
      )
      .then(() => {
        setStatus("✅ Mensagem enviada com sucesso!");
        setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
      })
      .catch(() => {
        setStatus("❌ Erro ao enviar. Tente novamente mais tarde.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="w-full mb-2 md:w-[90%] lg:w-[40%] lg:mx-auto p-4 lg:bg-textoPrincipal shadow-lg rounded-xl relative">
      <h2 className="text-3xl font-bold text-center drop-shadow-lg mb-6 relative z-30 text-textoPrincipal lg:text-principal">
        Entre em Contato
      </h2>

      {status && (
        <div className="mb-4 text-center text-sm text-white bg-principal2 p-2 rounded">
          {status}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Nome */}
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
            aria-label="Nome"
          />
        </div>

        {/* Email */}
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
            aria-label="Email"
          />
        </div>

        {/* Telefone */}
        <div className="relative">
          <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="Seu Telefone"
            className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Telefone"
          />
        </div>

        {/* Mensagem */}
        <div className="relative">
          <FaRegCommentDots className="absolute left-3 top-3 text-gray-400" />
          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            placeholder="Sua Mensagem"
            className="w-full pl-10 pt-3 pb-3 pr-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            required
            aria-label="Mensagem"
          ></textarea>
        </div>

        {/* Botão */}
        <button
          type="submit"
          className="w-full bg-principal2 text-white p-3 rounded-lg font-semibold hover:text-principal hover:bg-textoPrincipal transition relative z-30 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
}
