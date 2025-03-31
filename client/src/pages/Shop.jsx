import ShopFilters from "../components/shop/shop-filters/ShopFilters";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import ShopGrid from "../components/shop/shop-grid/ShopGrid";
import ShopPreview from "../components/shop/shop-preview/ShopPreview";
import { useAddToCart, useShop } from "../api/shopApi";
import { useUserContext } from "../contexts/UserContext";
import { useCart } from "../providers/CartProvider";
import ShopCart from "../components/shop/shop-cart/ShopCart";
import { updateCart } from "../utils/updateCart";



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];




export default function Shop() {
  const {
    cancel,
    setPage,
    page,
    lastPage,
    showPreview,
    productId,
    setProductId,
    setShowPreview,
  } = useShop()
  const {id , userLoginHandler} = useUserContext()
  const { addToCart } = useAddToCart(id)


  const addToCartHandler = (data) =>{
    addToCart(id,data);
    const updatedData = updateCart(data);
    userLoginHandler(updatedData)
  }

  const {showCart,setShowCart} = useCart()

  return (
    <>
    {showCart && <ShopCart />}

      <div className="bg-white mt-20">
        <div>
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                Explore Our Shop
              </h1>
              <div className="flex items-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      Sort
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                      />
                    </MenuButton>
                  </div>

                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white ring-1 shadow-2xl ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <MenuItem key={option.name}>
                          <a
                            href={option.href}
                            className={classNames(
                              option.current
                                ? "font-medium text-gray-900"
                                : "text-gray-500",
                              "block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden"
                            )}
                          >
                            {option.name}
                          </a>
                        </MenuItem>
                      ))}
                    </div>
                  </MenuItems>
                </Menu>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pt-6 pb-24">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                <ShopFilters />
            
                <ShopGrid  page={page} setProductId = {setProductId} setShowPreview={setShowPreview}/>  

                {showPreview &&  <ShopPreview   productId={productId}
                    cancel={cancel}
                    addToCart={addToCartHandler}/>}

                </div>
                <div className="flex justify-end items-center space-x-4 mt-4 w-full pr-6 md:justify-end justify-center">
  <button
    className="bg-blue-500 text-white px-6 py-3 text-xl rounded flex items-center"
      disabled={page === 1 ? true : false}
      onClick={() => setPage((oldState) => oldState - 1)}
  >
    <span>{`<`}</span>
  </button>
  <span className="text-gray-700 font-bold text-xl" >
    Page {page} of {lastPage}
  </span>
  <button
    className="bg-blue-500 text-white px-6 py-3 text-xl rounded flex items-center"
    disabled={page === lastPage}
    onClick={() => setPage((oldState) => oldState + 1)}
  >
    <span>{`>`}</span>
  </button>
</div>
            </section>
          </main>
        </div>
      </div>
      
    </>
  );
}
