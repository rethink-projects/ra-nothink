import { Buttons } from "../../components";
import styles from "./AddSnnipet.module.css";

import MPEditor from "@uiw/react-md-editor";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

document.documentElement.setAttribute("data-color-mode", "light");

const AddSnnipetScreen = () => {
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  const onClickCancel = () => {
    navigate(-1);
  };
  const onClickSave = () => {
    console.log({ title, markdown });
  };

  return (
    <div className={styles.add_snnipet_container}>
      <div className={styles.add_snnipet_inner}>
        <input
          type="text"
          className={styles.add_snnipet_input}
          placeholder="Insira o título para essa nota"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <div className={styles.form_editor}>
          <MPEditor
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
          <Buttons
            size="medium"
            color="detail"
            text="Salvar"
            image="check"
            onClick={onClickSave}
          />
          <Buttons
            size="medium"
            color="light"
            text="Cancelar"
            image="cancel"
            onClick={onClickCancel}
          />
        </div>
      </div>
    </div>
  );
};

export default AddSnnipetScreen;
