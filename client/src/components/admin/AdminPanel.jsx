import React, { useState } from 'react';
import { Link } from 'react-router';
import { useDeleteProduct, useProducts } from '../../api/productApi';
import IsSureModal from '../util/is-sure-modal/IsSureModal';

const AdminPanel = () => {

    const {products,setProducts} = useProducts()
    const [deleteProductId,setDeleteProductid] = useState("");

    const {setShowModal , showModal , deleteProduct ,cancel} = useDeleteProduct();




    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', image: 'https://via.placeholder.com/50' },
        { id: 2, name: 'Jane Doe', image: 'https://via.placeholder.com/50' },
    ]);
    // const [products, setProducts] = useState([
    //     { id: 1, name: 'Laptop', price: 1000, image: 'https://via.placeholder.com/100' },
    //     { id: 2, name: 'Phone', price: 500, image: 'https://via.placeholder.com/100' },
    // ]);

    const [challenges, setChallenges] = useState([
        { id: 1, title: 'Code a To-Do App', image: 'https://via.placeholder.com/100' },
        { id: 2, title: 'Solve 10 Algorithm Questions', image: 'https://via.placeholder.com/100' },
    ]);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', image: '' });
    const [editingProduct, setEditingProduct] = useState(null);

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

 
    const handleEditProduct = (id) => {
        const product = products.find(product => product.id === id);
        setEditingProduct(product);
    };

    const handleSaveProduct = () => {
        setProducts(products.map(product =>
            product.id === editingProduct.id ? editingProduct : product
        ));
        setEditingProduct(null);
    };

    const handleCreateProduct = () => {
        const newProd = { id: Date.now(), ...newProduct };
        setProducts([...products, newProd]);
        setNewProduct({ name: '', price: '', image: '' });
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8 mt-20">
            <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>



            {/* Users Section */}
            <div className="bg-white rounded shadow p-4 mb-8">
                <h2 className="text-xl font-semibold mb-2">Users</h2>
                <ul className="space-y-2">
                    {users.map(user => (
                        <li key={user.id} className="flex items-center justify-between bg-gray-200 p-2 rounded">
                            <div className="flex items-center space-x-4">
                                <img src={user.image} alt={user.name} className="w-12 h-12 rounded" />
                                <span>{user.name}</span>
                            </div>
                            <button 
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                                onClick={() => deleteUser(user.id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {showModal && <IsSureModal cancel={cancel} 
            deleteFunc={()=>
                {
                    deleteProduct(deleteProductId)
                    console.log(products.filter(p => p._id != deleteProductId))
                    setProducts([...products.filter(p => p._id != deleteProductId)])
            }} 
            navigatePath={'/fitzone/admin'} 
            text={'Delete Product'}
            preText={'Are you sure you want to delete this product?'}

            />}
            
            
            <div className="bg-white rounded shadow p-4">
    <h2 className="text-xl font-semibold mb-2">Products</h2>

    {/* Table Headers */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 bg-gray-300 p-2 rounded font-semibold text-gray-700">
        <div>Name</div>
        <div>Price</div>
        <div className="hidden sm:block">Stock</div>
        <div className="hidden md:block">Date Created</div>
        <div className="hidden md:block">Image</div>
        <div className='hidden md:block'>Actions</div>
    </div>

    {/* Table Rows */}
    <ul className="space-y-2 mb-4">
        {products?.map((product) => 
            <li
                key={product._id}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center bg-gray-200 p-2 rounded"
            >
                {/* Product Name */}
                <div className="font-bold">{product.name}</div>

                {/* Product Price */}
                <div className="font-bold">${product.price}</div>

                {/* Product Stock */}
                <div className="hidden sm:block font-bold">{product.stock}</div>

                {/* Date Created */}
                <div className="hidden md:block font-bold">
                    {new Date(product.createdAt).toLocaleDateString()}
                </div>

                {/* Product Image */}
                <div className=" md:block">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 rounded"
                    />
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                    <Link
                    to={`/fitzone/product/edit/${product._id}`}
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-700"
                    >
                        Edit
                    </Link>
                    <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                        onClick={() => {
                            setDeleteProductid(product._id)
                            setShowModal(!showModal)
                        }
                        }
                    >
                        Delete
                    </button>
                </div>
            </li>
             )}
    
    </ul>

    {/* Add Product Link */}
    <div className="text-right">
        <Link
            to={'/fitzone/add-product'}
            className="text-blue-500 hover:underline"
        >
            Add Product
        </Link>
    </div>

</div>
            
          
          

             

            <div className="bg-white rounded shadow p-4 mb-8 mt-5">
                <h2 className="text-xl font-semibold mb-2">Challenges</h2>
                <ul className="space-y-2 mb-4">
                    {challenges.map(challenge => (
                        <li key={challenge.id} className="flex items-center justify-between bg-gray-200 p-2 rounded">
                            <div className="flex items-center space-x-4">
                                <img src={challenge.image} alt={challenge.title} className="w-16 h-16 rounded" />
                                <span>{challenge.title}</span>
                            </div>
                            <div className="flex space-x-2">
                                <button 
                                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-700"

                                >
                                    Edit
                                </button>
                                <button 
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                                   
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                </div>

                <div className="bg-white rounded shadow p-4 mb-8 mt-5">
                <h2 className="text-xl font-semibold mb-2">Posts</h2>
                <ul className="space-y-2 mb-4">
                    {challenges.map(challenge => (
                        <li key={challenge.id} className="flex items-center justify-between bg-gray-200 p-2 rounded">
                            <div className="flex items-center space-x-4">
                                <img src={challenge.image} alt={challenge.title} className="w-16 h-16 rounded" />
                                <span>{challenge.title}</span>
                            </div>
                            <div className="flex space-x-2">
                                <button 
                                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-700"

                                >
                                    Edit
                                </button>
                                <button 
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                                   
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                </div>
        </div>
    );
};

export default AdminPanel;
