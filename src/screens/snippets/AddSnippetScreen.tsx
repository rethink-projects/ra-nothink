import React, { ChangeEvent, useState } from "react";
import MDEditor from "@uiw/react-md-editor";

import Button from "../../components/common/Button/Button";
import styles from "./AddSnippetScreen.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { TypeSnippet } from "../../types";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

document.documentElement.setAttribute("data-color-mode", "light");

function AddSnippetScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { createSnippet, isCreating } = useData();
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
    if (title.length < 5) {
      setError({
        hasError: true,
        message: "Titulo ter mais que 5 caracteres.",
      });
      setTitle("");
      return;
    }
    const categoryId = location.pathname
      .replace("/categories/", "")
      .replace("/add-snippet", "")
      .replace("/", "");

    const body: Partial<TypeSnippet> = {
      title,
      content: markdown,
      category_id: categoryId,
      owner_id: user.email,
    };
    await createSnippet(body);
    navigate(-1);
  };

  return (
    <div className={styles.add_snippet_container}>
      <div className={styles.add_snippet_inner}>
        <input
          value={title}
          type="text"
          onBlur={() => {
            setError({ hasError: false, message: "" });
          }}
          className={
            error.hasError
              ? styles.add_snippet_input_error
              : styles.add_snippet_input
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
              placeholder: "Insira o conteudo do snippet aqui...",
            }}
          />
        </div>
        <div className={styles.form_actions}>
          <Button
            hasIcon
            type="save"
            onClick={onClickSave}
            text={isCreating ? "Criando Snippet" : "Salvar"}
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

export default AddSnippetScreen;
