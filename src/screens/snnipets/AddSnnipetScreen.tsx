import React, { ChangeEvent, useState } from "react";
import { GeneralButton } from "../../components";
import styles from "./AddSnnipetScreen.module.css";
import MDEditor from "@uiw/react-md-editor";
import { useLocation, useNavigate } from "react-router-dom";
import { TypeSnnipet } from "../../types";
import { useAuth } from "../../context/AuthContext";

export const AddSnnipetScreen = () => {
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const {user} = useAuth();

  const onClickCancel = () => {
    navigate(-1);
  };

  const onClickSave = () => {
    const categoryId = location.pathname
      .replace("/categories/", "")
      .replace("/add-snnipet", "")
      .replace("/", "");

    const body: Partial<TypeSnnipet> = {
      title,
      content: markdown,
      category_id: categoryId,
      owner_id: user.email
    };
  };

  return (
    <div className={styles.add_snnipet_container}>
      <div className={styles.add_snnipet_inner}>
        <input
          type="text"
          className={styles.add_snnipet_input}
          placeholder="Insira o título para esta nota"
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
            onClick={() => {}}
            text="Salvar"
          />
          <GeneralButton
            hasIcon={true}
            type="cancel"
            onClick={onClickCancel}
            text="Cancelar"
          />
        </div>
      </div>
    </div>
  );
};
