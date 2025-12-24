import React, { useState } from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default function Pdp1() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-5 px-4 sm:py-5u sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex justify-between items-center mb-5">
            <span className="text-xl">
              <Link to="/catalog">
                <img className="w-full" src="back.jpg" alt="back" />
              </Link>
            </span>

            <span className="flex text-xl">
              <img className="w-full px-2" src="discount.jpg" alt="logo" />
              <img className="w-full" src="save.jpg" alt="logo" />
            </span>
          </div>

          {showModal ? (
            <>
              <div className="flex blurred justify-center items-center backdrop-blur-md overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
                <div className="relative w-auto my-4 backdrop-blur-md mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg backdrop-blur-md relative flex flex-col w-full bg-white">
                    <div className="flex items-start justify-between backdrop-blur-md px-5 pt-5 border-solid rounded-t ">
                      <h3 className="text-1xl">Luxome</h3>
                      <button
                        className="bg-transparent border-0 items-center float-right"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="opacity-7 h-6 w-6 text-xl block py-0 rounded-full">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22.0234 20L32.2773 7.77734C32.4492 7.57422 32.3046 7.26562 32.039 7.26562H28.9218C28.7382 7.26562 28.5624 7.34766 28.4414 7.48828L19.9843 17.5703L11.5273 7.48828C11.4101 7.34766 11.2343 7.26562 11.0468 7.26562H7.92963C7.66401 7.26562 7.51948 7.57422 7.69135 7.77734L17.9453 20L7.69135 32.2227C7.65285 32.2679 7.62815 32.3233 7.62018 32.3822C7.61222 32.4411 7.62132 32.501 7.64641 32.5549C7.67149 32.6088 7.71152 32.6543 7.76172 32.6862C7.81192 32.718 7.8702 32.7347 7.92963 32.7344H11.0468C11.2304 32.7344 11.4062 32.6523 11.5273 32.5117L19.9843 22.4297L28.4414 32.5117C28.5585 32.6523 28.7343 32.7344 28.9218 32.7344H32.039C32.3046 32.7344 32.4492 32.4258 32.2773 32.2227L22.0234 20Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>

                    <div className="p-2 flex-auto items-center">
                      <form className="rounded px-4 py-2 w-full">
                        <img
                          alt="imag"
                          src="https://cdn.shopify.com/s/files/1/0026/5178/3237/products/charcoalBB-4_1080x.png?v=1640930452"
                          className="w-full h-24 lg:h-1/2 object-center object-cover rounded-lg group-hover:opacity-75"
                        />

                        <div className="text-sm drop-shadow-md pt-2">
                          <button className="border shadow-md border-dashed w-full border-5 p-2 mb-2">
                            GLIMPSE-KPI101
                          </button>
                        </div>
                        <h1 className="text-1xl py-2 text-gray-500">
                          Where should we send your code
                        </h1>
                        <label className="block text-black text-sm mb-1">
                          Phone Number
                        </label>

                        <input
                          placeholder="1024437278"
                          className="bg-gray-200 appearance-none rounded w-full py-2 px-3 text-black mb-2"
                        />
                        <label className="block text-black text-sm mb-1">
                          Email Id
                        </label>

                        <input
                          placeholder="example@email.com"
                          className="bg-gray-200 appearance-none rounded w-full py-2 px-3 text-black mb-2"
                        />
                      </form>
                    </div>
                    <div className="flex items-center justify-end p-6 border-solid border-blueGray-200 rounded-b">
                      <button
                        className="border-sec rounded background-transparent px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Send code
                      </button>
                      <button
                        className="text-white blue-navy  text-sm px-6 py-3 rounded shadow  mr-1 mb-1"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Send for all items
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}

          <div className="container1 w-full aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img
              alt="imag"
              src="https://cdn.shopify.com/s/files/1/0026/5178/3237/products/charcoalBB-4_1080x.png?v=1640930452"
              className="w-full h-64 lg:h-1/2 object-center object-cover group-hover:opacity-75"
            />
          </div>
          <h1 className="text-2xl py-2">Luxome Lightweight Blanket</h1>
          <p className="text-sm py-2">
            With a thinner profile than a traditional comforter, this perfectly
            soft & breathable quilted blanket will keep you comfortable all year
            round. The naturally thermal-regulating bamboo viscose fabric and
            fill is perfect for hot sleepers, while still providing adequate
            warmth in the cooler months.
          </p>
          <div className="mb-1 text-2xl font-medium flex">
            $330
            <span className="line-through px-2 text-gray-500">$350</span>
          </div>

          <div className="border-b"></div>

          <h1 className="text-1xl text-gray-500 py-2">OFFERS</h1>

          <div className="flex justify-between items-center">
            <span className="text-sm">Copy & Use code to get 20%</span>

            <div className="pt-2 flex text-sm drop-shadow-md">
              <button className="border shadow-md border-dashed border-5 p-3">
                GLIMPSE-KPI101
              </button>
            </div>
          </div>

          <div className="pt-2 flex justify-between items-center">
            <span className="text-sm lg:text-1xl">
              Use code to get 25% off site wide
            </span>

            <div className="flex text-sm">
              <button className="border shadow-md border-dashed border-5 p-3">
                GLIMPSE-KPI101
              </button>
            </div>
          </div>

          <div className="border-b pt-5"></div>

          <h1 className="text-1xl text-gray-500 py-2">MORE PRODUCTS</h1>

          <div className="flex fixed1 bg-white shadow-top pt-3 max-w-2xl mx-auto px-4  lg:max-w-7xl lg:px-8">
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="mx-2 w-1/2 text-lg items-center justify-center h-12 rounded-lg border-sec outline-none focus:outline-none"
            >
              Save for later
            </button>
            <button className="mx-2 w-1/2 text-lg h-12 rounded-lg blue-navy text-white outline-none focus:outline-none">
              Buy Now ->
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
