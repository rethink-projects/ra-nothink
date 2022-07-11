import React, { ChangeEvent, useState } from "react";
import MDEditor from "@uiw/react-md-editor";

import Button from "../../components/ui/Button/Button";
import styles from "./AddSnnipetScreen.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { TypeSnnipet } from "../../types";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

document.documentElement.setAttribute("data-color-mode", "light");

function AddSnnipetScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { createSnnnipet, isCreating } = useData();
  const { user } = useAuth();
  const [error, setError] = useState({
    hasError: false,
    message: "",
  });
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");

  const onClickCancel = () => {
    navigate(-1);
  };

  const onClickSave = async () => {
    if (title.length < 10) {
      setError({
        hasError: true,
        message: "Titulo precisar ser maior que 10 caracteres.",
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
    await createSnnnipet(body);
    navigate(-1);
  };

  return (
    <div className={styles.add_snnipet_container}>
      <div className={styles.add_snnipet_inner}>
        <input
          value={title}
          type="text"
          onBlur={() => {
            setError({ hasError: false, message: "" });
          }}
          className={
            error.hasError
              ? styles.add_snnipet_input_error
              : styles.add_snnipet_input
          }
          placeholder={
            error.hasError ? error.message : "Insira o título para essa nota"
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
              placeholder: "Insira o conteudo do snnipet aqui...",
            }}
          />
        </div>
        <div className={styles.form_actions}>
          <Button
            hasIcon
            type="save"
            onClick={onClickSave}
            text={isCreating ? "Criando Snnipet" : "Salvar"}
          />
          <Button
            hasIcon
            type="cancel"
            onClick={onClickCancel}
            text="Cancelar"
          />
        </div>
      </div>
    </div>
  );
}

export default AddSnnipetScreen;