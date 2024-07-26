import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import validator from "validator";
import emailjs from "@emailjs/browser";

import "./Form.css";

const GoodForm = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_us27zch",
        "template_zan5oyn",
        form.current,
        "nO7s092Ll-1EPtCcl"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    sendEmail(data);
  };

  return (
    <div className="form-container">
      <div className="form-group">
        <label>Nome</label>
        <input
          ref={form}
          className={errors?.name && "input-error"}
          type="text"
          placeholder="Seu nome"
          {...register("name", { required: true })}
        />
        {errors?.name?.type === "required" && (
          <p className="error-message">Nome é obrigatório, preencha o campo</p>
        )}
      </div>

      <div className="form-group">
        <label>E-mail</label>
        <input
          ref={form}
          className={errors?.email && "input-error"}
          type="email"
          name="user-email"
          placeholder="Seu e-mail"
          {...register("email", {
            required: true,
            validate: (value) => validator.isEmail(value),
          })}
        />
        {errors?.email?.type === "required" && (
          <p className="error-message">
            E-mail é obrigatório, preencha o campo
          </p>
        )}
        {errors?.email?.type === "validate" && (
          <p className="error-message">
            Este e-mail é inválido, please por favor preencha o campo com um
            e-mail válido
          </p>
        )}
      </div>

      <div className="form-group">
        <label>Plano</label>
        <select
          ref={form}
          {...register("plano", {
            validate: (value) => {
              return value !== "0";
            },
          })}
          className={errors?.profession && "input-error"}
        >
          <option value="0">Selecione seu plano...</option>
          <option value="basico">Básico</option>
          <option value="avancado">Avançado</option>
          <option value="atleta">Atleta</option>
        </select>

        {errors?.profession?.type === "validate" && (
          <p className="error-message">
            O plano é obrigatório, preencha o campo
          </p>
        )}
      </div>

      <div className="form-group">
        <button onSubmit={sendEmail} onClick={handleSubmit(onSubmit)}>
          Entrar em contato
        </button>
      </div>
    </div>
  );
};

export default GoodForm;
