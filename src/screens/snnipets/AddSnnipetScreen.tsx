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

document.documentElement.setAttribute("data-color-mode", "light");

const AddSnnipetScreen = () => {
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const onClickSave = () => {
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
  };

  const onClickCancel = () => {
    navigate(-1);
  };

  return (
    <div className={styles.add_snnipet_container}>
      <div className={styles.add_snnipet_inner}>
        <input
          type="text"
          value={title}
          className={styles.add_snnipet_input}
          placeholder="Insira o título para essa nota"
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
          <Button onClick={onClickSave} text="Salvar" type="lime" icon="save" />
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
