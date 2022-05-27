import "./Card.css";
import img from "./imageCard/imageBrand.png";
const Card = () => {
    return (
        <div class="row">
            <div class="column">
                <div class="card">
                    <h3>Product Name</h3>
                    <img src={img} height="200px" alt="brand"/>
                    <p>Brand</p>
                    <p>Price</p>
                </div>
            </div>

            <div class="column">
                <div class="card">
                    <h3>Product Name</h3>
                    <img src={img} height="200px" alt="brand"/>
                    <p>Brand</p>
                    <p>Price</p>
                </div>
            </div>
            
            <div class="column">
                <div class="card">
                    <h3>Product Name</h3>
                    <img src={img} height="200px" alt="brand"/>
                    <p>Brand</p>
                    <p>Price</p>
                </div>
            </div>
            
            <div class="column">
                <div class="card">
                    <h3>Product Name</h3>
                    <img src={img} height="200px" alt="brand"/>
                    <p>Brand</p>
                    <p>Price</p>
                </div>
            </div>
        </div>
    )
}

export default Card;