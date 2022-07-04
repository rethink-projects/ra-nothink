import React, { ChangeEvent, useState } from "react";
import MDEditor from "@uiw/react-md-editor";

import Button from "../../components/common/button/Button";
import styles from "./AddSnnipetScreen.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { TypeSnnipet } from "../../types";
import { useAuth } from "../../context/AuthContext";

document.documentElement.setAttribute("data-color-mode", "light");

function AddSnnipetScreen() {
    const [markdown, setMarkdown] = useState("");
    const [title, setTitle] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const {user} = useAuth();

    const onClickCancel = () => {
        navigate(-1);
    }

    const onClickSave = () => {
        const categoryId = location.pathname.replace("/categories/", "").replace("/add-snnipet","").replace("/","");
        const body: Partial<TypeSnnipet> ={
            title,
            content: markdown,
            category_id: categoryId,
            owner_id: user.email,
        }
        console.log({body});
    }


  return (
    <div className={styles.add_snnipet_container}>
      <div className={styles.add_snnipet_inner}>
        <input
          type="text"
          className={styles.add_snnipet_input}
          placeholder="Insira o título para essa nota"
          onChange={(event:ChangeEvent<HTMLInputElement>) => {
            setTitle(event.target.value);
          }}
        />
        <div className={styles.form_editor}>
          <MDEditor
            value={markdown}
            height={450}
            className={styles.form_editor_mde}
            onChange={(markdown) => setMarkdown(markdown!)}
            textareaProps={{placeholder:"insira o conteudo do snnipet aqui...",}}
          />
        </div>
        <div className={styles.form_actions}>
          <Button onClick={onClickSave} text="Salvar" size="mid" icon="save" />
          <Button onClick={onClickCancel} text="Cancelar" size="mid" color="light" icon="cancel" />
        </div>
      </div>
    </div>
  );
}

export default AddSnnipetScreen;