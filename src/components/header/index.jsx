import styles from "./header.module.css";

const Header = () => {
    return(
            <header className={styles.header}>
                <h1 className={styles.h1}>CALCULE SEU IMC</h1>
                <p className={styles.paragrafo}>Abaixo insira peso, altura e após calculo do valor, confira sua classificação</p>
            </header>
                
    )
}

export default Header