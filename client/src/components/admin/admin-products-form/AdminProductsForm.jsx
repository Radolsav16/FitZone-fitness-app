import { useNavigate } from "react-router-dom";
import { useCreateProduct } from "../../../api/productApi";

import { selectionCategoryOptions } from "../../../utils/selectionData";
import SelectElement from "../../util/SelectElement";

export default function AdminProductsForm() {
  const navigate = useNavigate();
  const { createProduct } = useCreateProduct();

  const addProductHanlder = async (formData) => {
    const data = Object.fromEntries(formData);

    await createProduct(data);

    navigate("/fitzone/admin");
  };
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8 mt-20">
        <h1 className="text-2xl font-bold mb-4">Add Product</h1>
        <form
          className="bg-white p-6 rounded shadow-md space-y-4"
          action={addProductHanlder}
        >
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="border w-full px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              name="description"
              className="border w-full px-3 py-2 rounded"
            />
          </div>

          <SelectElement options={selectionCategoryOptions} name={"category"} />

          <div>
            <label className="block font-semibold mb-1">Price</label>
            <input
              type="number"
              name="price"
              className="border w-full px-3 py-2 rounded"
              step="0.01"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Stock</label>
            <input
              type="number"
              name="stock"
              className="border w-full px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Image URL</label>
            <input
              type="text"
              name="image"
              className="border w-full px-3 py-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Product
          </button>
        </form>
      </div>
    </>
  );
}
