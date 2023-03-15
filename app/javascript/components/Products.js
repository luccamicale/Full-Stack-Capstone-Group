import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHomes } from "../redux/home/Home";
import { cancelProduct } from "../redux/detail/Detail";
import { updateStatus } from "../redux/detail/Detail";
import '../styles/Products.css';

function Products() {
  const products = useSelector((state) => state.homes);
  const status = products.status;
  const cancelStatus = useSelector((state) => state.product.cancelStatus);
  const dispatch = useDispatch();
  const [successMsg, setSuccess] = useState(false);

console.log(`Cancel status = ${cancelStatus}`)
  useEffect(() => {
    if (cancelStatus === "fulfilled") {
      console.log(`Cancel status fulfilled = ${cancelStatus}`);
      setSuccess(true);
      dispatch(fetchHomes());
      setTimeout(() => {
        setSuccess(false);
        dispatch(updateStatus(""));
      }, 1000);
    }
  }, [cancelStatus, dispatch]);

  useEffect(() => {
    dispatch(fetchHomes());
  }, [dispatch]);

  return (
    <div className="products-container">
      {successMsg && (
        <p style={{ color: "green" }}> Product canceled successfully! </p>
      )}

      {cancelStatus === "rejected" && (
        <p style={{ color: "red" }}>Something went wrong, please try again </p>
      )}

      <h2 className="products-delete-title">My Products</h2>
       {(cancelStatus === 'pending') && <span class="cancel-loader"></span>}
      <table>
        <tr>
          <th>Product name</th>
          <th>Price</th>
          <th>description</th>
          <th>Actions</th>
        </tr>
        {products.map((product) => (
          <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
              {product.description.length > 10
                ? product.description.substring(0, 9) + "..."
                : product.description}
            </td>
            <td>
              <button
                type="button"
                className="btn-delete-product"
                onClick={() => dispatch(cancelProduct(product.id))}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Products;
