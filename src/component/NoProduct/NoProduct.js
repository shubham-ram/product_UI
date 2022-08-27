import styles from "./NoProduct.module.css"
import imgSrc from "../img/noProduct.jpg"

const NoProduct = () => {
    return <>
        <div className={styles.noproduct}>
            <img  className={styles.noproduct_img} src={imgSrc}/>
            <div className={styles.noproduct_info}>
                No products yet
            </div>
        </div>

    </>
}

export default NoProduct;