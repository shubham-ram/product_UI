import gifUrl from "../img/Spinner.gif"
import styles from "./Loader.module.css";

const Loader = () =>{
    return <img className={styles.loading} src={gifUrl} alt="loading"/>
}

export default Loader;