import React, { ChangeEvent, useState } from "react";
import { GeneralButton } from "../../components";
import styles from "./AddSnnipetScreen.module.css";
import MDEditor from "@uiw/react-md-editor";
import { useNavigate } from "react-router-dom";

export const AddSnnipetScreen = () => {
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const onClickCancel = () => {
    navigate(-1);
  };

  const onClickSave = () => {}

  return (
    <div className={styles.add_snnipet_container}>
      <div className={styles.add_snnipet_inner}>
        <input
          type="text"
          className={styles.add_snnipet_input}
          placeholder="Insira o título para esta nota"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setTitle(event.target.value)
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
          <GeneralButton onClick={() => {}} text="Salvar" />
          <GeneralButton onClick={onClickCancel} text="Cancelar" />
        </div>
      </div>
    </div>
  );
};
