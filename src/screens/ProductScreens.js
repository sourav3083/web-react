import React, { useEffect, useState } from "react";
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../api/productsApi";

export default function ProductScreen() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Load products from API
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  // Add or update
  const handleSubmit = async () => {
    if (!name.trim()) return;

    if (editingId) {
      await updateProduct(editingId, { title: name });
      alert("Product updated");
    } else {
      await addProduct({ title: name });
      alert("Product added");
    }

    setName("");
    setEditingId(null);
    loadProducts();
  };

  // Edit
  const handleEdit = (product) => {
    setName(product.title);
    setEditingId(product.id);
  };

  // Delete
  const handleDelete = async (id) => {
    await deleteProduct(id);
    alert("Product deleted");
    loadProducts();
  };

  return (
    <div style={styles.container}>
      <h2>Products (API + Axios)</h2>

      <div style={styles.inputRow}>
        <input
          type="text"
          placeholder="Enter product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleSubmit} style={styles.addBtn}>
          {editingId ? "Update" : "Add"}
        </button>
      </div>

      <ul style={styles.list}>
        {products.map((p) => (
          <li key={p.id} style={styles.item}>
            {p.title}

            <div>
              <button style={styles.edit} onClick={() => handleEdit(p)}>
                Edit
              </button>

              <button style={styles.delete} onClick={() => handleDelete(p.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: { width: "500px", margin: "40px auto" },
  inputRow: { display: "flex", gap: "10px" },
  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  addBtn: {
    padding: "10px 20px",
    background: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
  list: { marginTop: "20px", listStyle: "none", padding: 0 },
  item: {
    padding: "10px",
    marginBottom: "10px",
    background: "#f2f2f2",
    display: "flex",
    justifyContent: "space-between",
    borderRadius: "5px",
  },
  edit: {
    marginRight: "10px",
    background: "orange",
    border: "none",
    padding: "5px 10px",
    color: "white",
    borderRadius: "5px",
  },
  delete: {
    background: "red",
    border: "none",
    padding: "5px 10px",
    color: "white",
    borderRadius: "5px",
  },
};

