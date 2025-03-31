import { useState , useEffect } from "react";
import { fetchApi } from "../utils/requester";
import { useFormState } from "../hooks/FormStateHook";

const baseUrl = 'http://localhost:3030';


export const useProducts = (currPage) => {
  const [products, setProducts] = useState([]);
 

  useEffect(() => {
    (async () => {
      const result = await fetchApi.get(`http://localhost:3030/products`,{
        'Content-Type':'applciation/json'
      },{
        page:currPage,limit:9
      });
      setProducts(result);
    })();
  },[currPage]);

  return {
    products,
    setProducts
  };
};

export const useAllProducts = () => {
  const [products, setProducts] = useState([]);
 

  useEffect(() => {
    (async () => {
      const result = await fetchApi.get(`http://localhost:3030/all-products`,{
        'Content-Type':'applciation/json'
      });
      setProducts(result);
    })();
  },[]);

  return {
    products,
    setProducts
  };
};


  export const useProduct = (id) => {
    const [product, setProduct] = useState({});
  
    useEffect(() => {
      (async () => {
        const result = await fetchApi.get(baseUrl + `/products/${id}`,{'Content-Type':'application/json'});
        setProduct(result);
      })();
    }, [id]);
  
    return {
      product,
    };
  };
  




export const useCreateProduct = () => {
  const createProduct = (data) => {
    fetchApi.post(baseUrl + "/create-product", data, {
      "Content-Type": "application/json",
    });
  };

  return {
    createProduct,
  };
};



export const useEditProduct = (id) => {

    
    const {dataState ,handleDataOnChange,SetDataState} = useFormState({
      name: "",
      description: "",
      category: "",
      price: 0,
      stock: 0,
      image:""
    })

     useEffect(()=>{
                (async()=>{
                  const res = await fetchApi.get(baseUrl + `/products/${id}`,{'Content-Type':'application/json'})
                  SetDataState(res);
                })()
            },[id])
  


    const editProduct = (data) => {
         fetchApi.put(baseUrl + `/product/${id}`, data, {
            "Content-Type": "application/json",
          });
    };
  
    return {
      editProduct,
      dataState,
      handleDataOnChange
    };
};


export const useDeleteProduct = () =>{
  const [showModal,setShowModal] = useState(false);

  const cancel = () =>{
    setShowModal(!showModal);
  }


  const deleteProduct = (id) =>{
    fetchApi.del(baseUrl + `/product/${id}`);
    setShowModal(!showModal);
  }

  return {deleteProduct ,cancel , showModal , setShowModal}
}

export const useMostBuyingProducts = () =>{
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    (async () => {
      const result = await fetchApi.get(baseUrl + '/most-sell-products/',{'Content-Type':'application/json'});
      setProducts(result);
    })();
  },[]);

  return {
    products,
    setProducts
  };
}