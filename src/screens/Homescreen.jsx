import data from "../data"
import { Link } from 'react-router-dom'

export default function Homescreen() {
    return <div>
        <h1>Produkte</h1>
    <div className="products">
    {data.products.map(product => (
      <div className="product" key={product.slug}>
        <Link to={`/product/${product.slug}`}>
          <img src={product.image} alt={product.name} />
        </Link>
        <div className="product-info">
        <Link to={`/product/${product.slug}`}>
          <p>
            {product.name}
            </p>
            </Link>
          <p>
            €{product.preis}
          </p>
          <button>Ich will es haben</button>
          </div>
      </div>
    ))
      }
        </div>
    </div>
}