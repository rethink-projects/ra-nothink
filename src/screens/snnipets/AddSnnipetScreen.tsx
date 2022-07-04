import { Buttons } from "../../components";
import styles from "./AddSnnipet.module.css";

import MPEditor from "@uiw/react-md-editor";
import { ChangeEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TypeSnnipet } from "../../types";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

document.documentElement.setAttribute("data-color-mode", "light");

const AddSnnipetScreen = () => {
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState({ hasError: false, message: "" });
  const location = useLocation();
  const { user } = useAuth();
  const { createSnnipet } = useData();

  const navigate = useNavigate();

  const onClickCancel = () => {
    navigate(-1);
  };
  const onClickSave = async () => {
    if (title.length < 10) {
      setError({
        hasError: true,
        message: "O Título precisa de ao menos 10 caracteres.",
      });
      setTitle("");
      return;
    } else if (markdown.length < 20) {
      setError({
        hasError: true,
        message: "O conteúdo do snnipet precisa de ao menos 50 caracteres.",
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
          type="text"
          className={
            error ? styles.add_snnipet_input_error : styles.add_snnipet_input
          }
          value={title}
          placeholder={error ? error.message : "Insira o título para essa nota"}
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
