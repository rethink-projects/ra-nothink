import MDEditor from "@uiw/react-md-editor";
import { setDefaultResultOrder } from "dns";
import { ChangeEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DefaultButton from "../../components/ui/DefaultButton/DefaultButton";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";
import { TypeSnnipet } from "../../types";
import styles from "./AddSnnipetScreen.module.css";

document.documentElement.setAttribute("data-color-mode", "light");

function AddSnnipetScreen() {

    const [markdown, setMarkdown] = useState("");
    const [title, setTitle] = useState("");
    const [error, setError] = useState({ hasError: false, message: "" })
    const { user } = useAuth();
    const location = useLocation();
    const { createSnnipet, isCreating } = useData();

    const navigate = useNavigate();

    const onClickCancel = () => {
        navigate(-1);
    }

    const onClickSave = async () => {
        if (title.length < 5) {
            setError({ hasError: true, message: "Titulo precisa ter pelo menos 5 caracteres." });
            setTitle("");
            return;
        }

        const categoryId = location.pathname.replace("/categories/", "").replace("/add-snnipet", "").replace("/", "");

        const body: Partial<TypeSnnipet> = {
            title,
            content: markdown,
            category_id: categoryId,
            owner_id: user.email,
        }
        await createSnnipet(body);
        navigate(-1);
    }

    return (
        <div className={styles.add_snnipet_container}>
            <div className={styles.add_snnipet_inner}>
                <input value={title} type="text" className={error.hasError ? styles.add_snnipet_input_error : styles.add_snnipet_input} placeholder={error.hasError ? error.message : "Insira o título para essa nota"} onChange={(event: ChangeEvent<HTMLInputElement>) => { setTitle(event.target.value) }} />
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
                    <DefaultButton hasIcon type="save" text={isCreating ? "Criando Snnipet" : "Salvar"} onClick={() => { onClickSave() }} />
                    <DefaultButton hasIcon type="cancel" text="Cancelar" onClick={() => { onClickCancel() }} />

                </div>

            </div>
        </div>
    )
}

export default AddSnnipetScreen