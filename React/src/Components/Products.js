import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Product.css'; // Import CSS file for styling
import { useNavigate } from 'react-router';

function Products() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ pname: "", pcost: 0, pqty: 0 });
    const [searchId, setSearchId] = useState("");
    const [searchResult, setSearchResult] = useState(null);
    const [showAddProductFields, setShowAddProductFields] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const navigate = useNavigate()
    useEffect(() => {
      if(localStorage.getItem('role') !=='Sales Admin' && localStorage.getItem('role') !=='Sales Manager')
      navigate('/login');
    },[])

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5231/api/Products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const addProduct = async () => {
        try {
            await axios.post('http://localhost:5231/api/Products', newProduct);
            setNewProduct({ pname: "", pcost: 0, pqty: 0 });
            setShowAddProductFields(false); // Hide add product fields after adding
            fetchData();
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const deleteProduct = async (productId) => {
        try {
            await axios.delete(`http://localhost:5231/api/Products/${productId}`);
            fetchData();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const updateProductCost = async (productId, newCost) => {
        try {
            await axios.put(`http://localhost:5231/api/Products/${productId}?newCost=${newCost}`);
            fetchData();
        } catch (error) {
            console.error('Error updating product cost:', error);
        }
    };

    const searchProductById = async () => {
        try {
            const response = await axios.get(`http://localhost:5231/api/Products/${searchId}`);
            setSearchResult(response.data);
        } catch (error) {
            console.error('Error searching product by ID:', error);
            setSearchResult(null);
        }
    };

    return (
        <div className="products-container">
            <div className="search-add-container">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search Product by ID"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                    />
                    <button onClick={() => searchProductById()}>Search</button>
                    {searchResult && (
                        <div>
                            <h2>Search Result</h2>
                            <p>ID: {searchResult.productId}</p>
                            <p>Name: {searchResult.pname}</p>
                            <p>Cost: ${searchResult.pcost}</p>
                            <p>Quantity: {searchResult.pqty}</p>
                        </div>
                    )}
                </div>
                <div className="add-container">
                    <button onClick={() => setShowAddProductFields(true)}>Add Product</button>
                    {showAddProductFields && (
                        <div className="add-product-fields">
                            <input
                                type="text"
                                placeholder="Product Name"
                                value={newProduct.pname}
                                onChange={(e) => setNewProduct({ ...newProduct, pname: e.target.value })}
                            />
                            <input
                                type="number"
                                placeholder="Product Cost"
                                value={newProduct.pcost}
                                onChange={(e) => setNewProduct({ ...newProduct, pcost: e.target.value })}
                            />
                            <input
                                type="number"
                                placeholder="Product Quantity"
                                value={newProduct.pqty}
                                onChange={(e) => setNewProduct({ ...newProduct, pqty: e.target.value })}
                            />
                            <button className="add-button" onClick={() => addProduct()}>Add</button>
                        </div>
                    )}
                </div>
            </div>
            <h1>Products</h1>
            <table className="products-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.productId}>
                            <td>{product.pname}</td>
                            <td>${product.pcost}</td>
                            <td>{product.pqty}</td>
                            <td>
                                <button className="update-button" onClick={() => updateProductCost(product.productId, prompt("Enter new cost"))}>Update Cost</button>
                                <button className="delete-button" onClick={() => deleteProduct(product.productId)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Products;


