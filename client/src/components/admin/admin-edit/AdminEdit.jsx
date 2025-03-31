import {useNavigate, useParams } from "react-router"
import { useEditProduct, useProduct } from "../../../api/productApi"
import SelectElement from "../../challanges/create-challange/SelectElement";
import { selectionCategoryOptions } from "../../../utils/selectionData";


export default function AdminEdit(){
    const {id} = useParams()
    const navigate = useNavigate()
    
    const {dataState , handleDataOnChange , editProduct} = useEditProduct(id);
    

    const editProductHanlder = async (formData) =>{
        const data = Object.fromEntries(formData);
        await editProduct(data)
        navigate('/fitzone/admin')
    }

    return(
        <>
         <div className="min-h-screen bg-gray-100 p-8 mt-20">
        <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
        <form
          className="bg-white p-6 rounded shadow-md space-y-4"
          action={editProductHanlder}
        >
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="border w-full px-3 py-2 rounded"
              value={dataState.name}
              onChange={handleDataOnChange}
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              name="description"
              className="border w-full px-3 py-2 rounded"
              value={dataState.description}
              onChange={handleDataOnChange}
            />
          </div>
            <SelectElement  options={selectionCategoryOptions} value={dataState.category} onChangeHandler={handleDataOnChange}/>
          <div>
            <label className="block font-semibold mb-1">Price</label>
            <input
              type="number"
              name="price"
              className="border w-full px-3 py-2 rounded"
              value={dataState.price}
              onChange={handleDataOnChange}
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Stock</label>
            <input
              type="number"
              name="stock"
              className="border w-full px-3 py-2 rounded"
              value={dataState.stock}
              onChange={handleDataOnChange}
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Image URL</label>
            <input
              type="text"
              name="image"
              className="border w-full px-3 py-2 rounded"
              value={dataState.image}
              onChange={handleDataOnChange}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Edit Product
          </button>
        </form>
      </div>
        
        </>
    )
}