import { useEffect, useState } from "react";
import axios from "axios";
// import "./app.css";




const Apidatashow = () => {

    const [product, serProduct] = useState([])


    const getProductdata = async () => {
        try {
            const data = await axios.get("https://api.publicapis.org/entries");

            console.log(data.data);
            serProduct(data.data)

        }
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getProductdata()
    }, [])
    return (
        <div>
            <h1>data show</h1>
            {
            product.map((item) => {
                <p>{item.Description}</p>
            })
            }
        </div>
    )
}
export default Apidatashow;


