import React, { ChangeEvent, useState } from "react";
import { GeneralButton } from "../../components";
import styles from "./AddSnnipetScreen.module.css";
import MDEditor from "@uiw/react-md-editor";
import { useLocation, useNavigate } from "react-router-dom";
import { TypeSnnipet } from "../../types";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

export const AddSnnipetScreen = () => {
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState({ hasError: false, message: "" });
  const { createSnnipet, isCreating } = useData();
  const { user } = useAuth();

  const onClickCancel = () => {
    navigate(-1);
  };

  const onClickSave = async () => {
    if (title.length < 10) {
      setError({
        hasError: true,
        message: "Título precisa de mais que 10 caracteres.",
      });
      setTitle("");
      return;
    }

    const categoryId = location.pathname
      .replace("/categories/", "")
      .replace("/add-snnipet", "")
      .replace("/", "");

    const body: Partial<TypeSnnipet> = {
      title,
      content: markdown,
      category_id: categoryId,
      owner_id: user.email,
    };
    await createSnnipet(body);
    navigate(-1);
  };

  return (
    <div className={styles.add_snnipet_container}>
      <div className={styles.add_snnipet_inner}>
        <input
          value={title}
          type="text"
          className={
            error.hasError
              ? styles.add_snnipet_input_error
              : styles.add_snnipet_input
          }
          placeholder={
            error.hasError ? error.message : "Insira o título para esta nota"
          }
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setTitle(event.target.value);
          }}
        />
        <div className={styles.form_editor}>
          <MDEditor
            value={markdown}
            height={450}
            className={styles.form_editor_mde}
            onChange={(markdown) => setMarkdown(markdown!)}
            textareaProps={{
              placeholder: "insira o conteúdo do snnipet aqui...",
            }}
          />
        </div>
        <div className={styles.form_actions}>
          <GeneralButton
            hasIcon={true}
            type="save"
            onClick={onClickSave}
            text={isCreating ? "Criando Snnipet" : "Salvar"}
            height="34px"
          />
          <GeneralButton
            hasIcon={true}
            type="cancel"
            onClick={onClickCancel}
            text="Cancelar"
            height="34px"
          />
        </div>
      </div>
    </div>
  );
};
