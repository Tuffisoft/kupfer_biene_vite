import data from "./data";

export default function App() {

  return (
    <div>
      <header>
        <a href="/"><img className="headerLogo" src='./logo.png'></img></a>
      </header>
      <main>
        <h1>Produkte</h1>
        <div className="products">
        {data.products.map(product => (
          <div className="product" key={product.slug}>
            <a href={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </a>
            <div className="product-info">
            <a href={`/product/${product.slug}`}>
              <p>
                {product.name}
                </p>
                </a>
              <p>
                €{product.preis}
              </p>
              <button>Ich will es haben</button>
              </div>
          </div>
        ))
          }
          </div>
      </main>
    </div>
  )
}


