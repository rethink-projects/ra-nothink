import MDEditor from "@uiw/react-md-editor";
import { ChangeEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DefaultButton from "../../components/ui/DefaultButton/DefaultButton";
import { useAuth } from "../../context/AuthContext";
import { TypeSnnipet } from "../../types";
import styles from "./AddSnnipetScreen.module.css";

document.documentElement.setAttribute("data-color-mode", "light");

function AddSnnipetScreen() {

    const [markdown, setMarkdown] = useState("");
    const [title, setTitle] = useState("");
    const { user } = useAuth();
    const location = useLocation();

    const navigate = useNavigate();

    const onClickCancel = () => {
        navigate(-1);
    }

    const onClickSave = () => {
        const categoryId = location.pathname.replace("/categories/", "").replace("/add-snnipet", "").replace("/", "");

        const body: Partial<TypeSnnipet> = {
            title,
            content: markdown,
            category_id: categoryId,
            owner_id: user.email,
        }
    }

    return (
        <div className={styles.add_snnipet_container}>
            <div className={styles.add_snnipet_inner}>
                <input type="text" className={styles.add_snnipet_input} placeholder="Insira o título para essa nota" onChange={(event: ChangeEvent<HTMLInputElement>) => { setTitle(event.target.value) }} />
                <div className={styles.form_editor}>
                    <MDEditor
                        value={markdown}
                        height={450}
                        className={styles.editor_mds}
                        onChange={(markdown) => setMarkdown(markdown!)}
                        textareaProps={{ placeholder: "Insira o conteudo do snnipet aqui..." }}
                    />
                </div>
                <div className={styles.form_actions}>
                    <DefaultButton hasIcon type="save" text="Salvar" onClick={() => { onClickSave() }} />
                    <DefaultButton hasIcon type="cancel" text="Cancelar" onClick={() => { onClickCancel() }} />

                </div>

            </div>
        </div>
    )
}

export default AddSnnipetScreen