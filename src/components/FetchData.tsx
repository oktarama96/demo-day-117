import { useFetchData } from "../tools";

interface Product {
  id: number;
  title: string;
  description: string;
  stock: number;
}

interface FetchResponseData {
  products: Product[];
}

const FetchData = () => {
  const { data, loading } = useFetchData<FetchResponseData>(
    "https://dummyjson.com/products"
  );

  return (
    <div
      style={{
        width: "800px",
      }}
    >
      <h1>Products</h1>

      {loading ? <p>Loading...</p> : <></>}

      {data ? (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid black",
            textAlign: "center",
            fontSize: "16px",
          }}
          border={1}
        >
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Stock</th>
            </tr>
          </thead>

          <tbody>
            {data.products.map((product: Product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FetchData;
