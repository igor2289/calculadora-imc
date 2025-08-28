import { useState } from 'react'
import styles from './form.module.css'
import tabela from './images/tabela_imc.png'
const Formulario = () => {

    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [imc, setIMC] = useState(null)
        const CalculaIMC = (e) => {
            e.preventDefault()
            if (altura && peso){
        const alturaNum = parseFloat(altura) / 100
        const pesoNum = parseFloat(peso)
        const valorIMC = (pesoNum/(alturaNum*alturaNum)).toFixed(2);
        setIMC(valorIMC)
     console.log(valorIMC)
        } else {
      setIMC(null);
    }
}


    return (
        <div className="container">
            <form className={styles.form}>
            <label className={styles.label}>Sua altura (em CM)</label>
            <input min= "0" max="200" onChange={(e) => setAltura(e.target.value)} id='altura' type="number" className={styles.input} />
            <label className={styles.label}>Seu peso (em KG)</label>
            <input min= "0" max="300" onChange={(e) => setPeso(e.target.value)} id='peso' className={styles.input} type="number" />
            <button onClick={CalculaIMC} id='botao' type="number" className={styles.button}>CALCULAR</button>
            {imc && <p className={styles.pResultado}>Seu IMC é de: <span className={styles.fontAzul}>{imc}</span></p>}
            <img className={styles.imagem} src={tabela} alt="" />
        </form>
        
        
        </div>
    )
}

export default Formulario