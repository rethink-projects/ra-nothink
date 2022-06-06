import React from 'react'
import Images from '../../../../assets';
import { Divider, IconButton } from '../../../../components';
import { TypeProvider } from '../../../../types';

// Styles
import styles from "./Form.module.css";

type FormParams = {
    onLogin: (type: TypeProvider) => void;
}

function Form({ onLogin }: FormParams) {
    return (
        <div className={styles.form_conatiner}>
            <div className={styles.form_inner}>
                <div className={styles.form_social}>
                    <img className={styles.form_social_icon} src={Images.icons.linkedin} alt="Linkedin Social Rethink" />
                    <img className={styles.form_social_icon} src={Images.icons.instagram} alt="Instagram Social Rethink" />
                </div>
                <div className={styles.form_texts}>
                    <img className={styles.form_texts_logo} src={Images.logo.default} alt="Logo Nothink" />
                    <p className={styles.form_texts_main}>Escolha sua forma de login</p>
                </div>
                <div className={styles.form_actions}>
                    <IconButton type="google" onClick={() => onLogin("google")} />
                    <Divider />
                    <IconButton type="github" onClick={() => onLogin("github")} />
                </div>
            </div>
        </div>
    )
}

export default Form