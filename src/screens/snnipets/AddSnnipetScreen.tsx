import React, { ChangeEvent, useState } from "react";
import MDEitor from "@uiw/react-md-editor";
import { useLocation, useNavigate } from "react-router-dom";

// Styles
import styles from "./AddSnnipetScreen.module.css";

// Components
import { Button } from "../../components";

// Types
import { TypeSnnipet } from "../../types";

// Context
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

document.documentElement.setAttribute("data-color-mode", "light");

const AddSnnipetScreen = () => {
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState({
    hasError: false,
    message: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const { createSnnipet, isCreating } = useData();

  const onClickSave = async () => {
    if (title.length < 10) {
      setError({
        hasError: true,
        message: "Título precisa ser amior que 10 caracteres.",
      });
      setTitle("");
      return;
    }

    const category_id = location.pathname
      .replace("/categories/", "")
      .replace("/add-snnipet", "")
      .replace("/", "");

    const body: Partial<TypeSnnipet> = {
      title,
      content: markdown,
      category_id,
      owner_id: user.email,
    };

    await createSnnipet(body);

    navigate(-1);
  };

  const onClickCancel = () => {
    navigate(-1);
  };

  return (
    <div className={styles.add_snnipet_container}>
      <div className={styles.add_snnipet_inner}>
        <input
          type="text"
          className={
            error.hasError
              ? styles.add_snnipet_input_error
              : styles.add_snnipet_input
          }
          value={title}
          placeholder={
            error.hasError ? error.message : "Insira o título para essa nota"
          }
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setTitle(event.target.value);
          }}
        />

        <div className={styles.form_editor}>
          <MDEitor
            value={markdown}
            height={450}
            className={styles.form_editor_mde}
            onChange={(markdown) => {
              setMarkdown(markdown!);
            }}
            textareaProps={{
              placeholder: "Insira o conteúdo do snnipet aqui...",
            }}
          />
        </div>
        <div className={styles.form_actions}>
          <Button
            onClick={onClickSave}
            text={isCreating ? "Criando Snnipet" : "Salvar"}
            type="lime"
            icon="save"
          />
          <Button
            onClick={onClickCancel}
            text="Cancelar"
            type="light"
            icon="cancel"
          />
        </div>
      </div>
    </div>
  );
};

export default AddSnnipetScreen;
