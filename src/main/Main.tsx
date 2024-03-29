import React, { useEffect, useState } from "react";
import { Product } from "../interfaces/product";
import { Link } from "react-router-dom";

const Main = () => {
  const [products, setProducts] = useState([] as Product[]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://api.microservices-demoapp54321.xyz/admin/api/products"
      );

      const data = await response.json();

      setProducts(data);
    })();
  }, []);

  const like = async (id: number) => {
    await fetch(
      `https://api.microservices-demoapp54321.xyz/main/api/products/${id}/like`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );

    setProducts(
      products.map((p: Product) => {
        if (p.id === id) {
          p.likes++;
        }

        return p;
      })
    );
  };

  return (
    <main role="main">
      <div className="album py-5 bg-light">
        <div className="container">
          <Link to={`/admin/products/`} className="mb-4 btn btn-sm btn-primary">
            To Admin App
          </Link>
          <div className="row">
            {products.map((p: Product) => {
              console.log(p);
              return (
                <div className="col-md-4" key={p.id}>
                  <div className="card mb-4 shadow-sm">
                    <img src={p.image} height="180" />
                    <div className="card-body">
                      <p className="card-text">{p.title}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => like(p.id)}
                          >
                            Like
                          </button>
                        </div>
                        <small className="text-muted">{p.likes} likes</small>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
