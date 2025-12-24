import React from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default function Discounts() {
  const products = [
    {
      id: 1,
      name: "Pillow Guy Bamboo Bath & Hand Towel",
      href: "#",
      price: "$124",
      st: "$145",
      reviews: "5.0",
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0026/5178/3237/products/minky-minky-grey-rc-2_1080x.png?v=1640931533"
    },
    {
      id: 2,
      name: "Lyric Massager",
      href: "#",
      price: "$150",
      st: "$180",
      reviews: "4.5",
      imageSrc:
        "https://glimpse-public-images.s3.us-east-2.amazonaws.com/Lyric+Terracotta+SOLO+Undocked.jpg"
    },
    {
      id: 3,
      name: "Bella notte sheet collection",
      href: "#",
      price: "$89",
      st: "$85",
      reviews: "4.5",
      imageSrc:
        "https://cdn.shopify.com/s/files/1/1829/6041/products/Bria-Cotton-Sateen-Fitted-Sheet-White-1_large.png?v=1641220301"
    },
    {
      id: 4,
      name: "Hypervolt go",
      href: "#",
      price: "$225",
      st: "$295",
      reviews: "4.5",
      imageSrc:
        "https://images.ctfassets.net/sa0xzxw55dr7/6DvPKSRuXGsPs6618Ypjov/11632283f2372bea3e2c544839f03b96/hypervolt-go-final-thumbnail.jpg"
    }
  ];

  const products1 = [
    {
      id: 1,
      name: "Luxome Bed Sheets",
      href: "#",
      price: "$124",
      st: "$145",
      reviews: "5.0",
      imageSrc:
        "https://www.leisureopportunities.co.uk/images/2020/HIGH346125_638445_675041.jpg"
    },
    {
      id: 2,
      name: "Lyric Massager",
      href: "#",
      price: "$150",
      st: "$180",
      reviews: "4.5",
      imageSrc:
        "https://img.imageboss.me/pillowguy/cdn/s/files/1/1496/9422/products/Down_white-min_1400x.jpg?v=1535364557"
    },
    {
      id: 3,
      name: "Bella notte sheet collection",
      href: "#",
      price: "$89",
      st: "$85",
      reviews: "4.5",
      imageSrc:
        "https://cdn11.bigcommerce.com/s-j8lceuq/images/stencil/1280x1280/products/634/3343/eddie-bauer-eddie-bauer-liquiloft-230-tc-quilted-microfiber-gel-pillow-twin-pack__40873.1617198476.jpg?c=2"
    },
    {
      id: 4,
      name: "Hypervolt go",
      href: "#",
      price: "$225",
      st: "$295",
      reviews: "4.5",
      imageSrc:
        "https://api.tryfi.com/images/ecommerce/series2/yellow_collar_1.png"
    }
  ];
  return (
    <div className="App">
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-5 px-2 sm:py-5u sm:px-6 lg:max-w-7xl lg:px-8">
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

          <h2 className="text-1xl m-4">
            Claim Exclusive Discounts for products around you
          </h2>
          <div className="row">
            <div className="column">
              <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                  <div key={product.id} href={product.href} className="group">
                    <div className="container1 w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg-top overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-32 object-center object-cover group-hover:opacity-75"
                      />
                      <span>
                        <i className="fas overlay">
                          <svg
                            width="56"
                            height="56"
                            viewBox="0 0 56 56"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g filter="url(#filter0_bd_800_5964)">
                              <rect
                                x="10"
                                y="10"
                                width="35.409"
                                height="35.409"
                                rx="17.7045"
                                fill="black"
                                fill-opacity="0.56"
                                shape-rendering="crispEdges"
                              />
                              <path
                                d="M21.9678 21.9669C21.9678 21.5322 22.1405 21.1152 22.4479 20.8078C22.7553 20.5003 23.1723 20.3276 23.6071 20.3276H31.8036C32.2384 20.3276 32.6553 20.5003 32.9628 20.8078C33.2702 21.1152 33.4429 21.5322 33.4429 21.9669V35.0814L27.7053 32.2126L21.9678 35.0814V21.9669Z"
                                stroke="white"
                                stroke-width="1.96717"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                            <defs>
                              <filter
                                id="filter0_bd_800_5964"
                                x="2.13133"
                                y="2.13133"
                                width="51.1465"
                                height="51.1465"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                              >
                                <feFlood
                                  flood-opacity="0"
                                  result="BackgroundImageFix"
                                />
                                <feGaussianBlur
                                  in="BackgroundImage"
                                  stdDeviation="3.93433"
                                />
                                <feComposite
                                  in2="SourceAlpha"
                                  operator="in"
                                  result="effect1_backgroundBlur_800_5964"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  result="hardAlpha"
                                />
                                <feOffset />
                                <feGaussianBlur stdDeviation="0.983584" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                />
                                <feBlend
                                  mode="normal"
                                  in2="effect1_backgroundBlur_800_5964"
                                  result="effect2_dropShadow_800_5964"
                                />
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="effect2_dropShadow_800_5964"
                                  result="shape"
                                />
                              </filter>
                            </defs>
                          </svg>
                        </i>
                      </span>
                    </div>

                    <div className="bg-neutral-100 mb-2 rounded-lg-down">
                      <div className="flex justify-between px-3">
                        <div className="mt-2">
                          <h3 className="text-sm text-gray-700">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            ></span>
                            {product.name}
                          </h3>
                        </div>
                      </div>

                      <p className="mb-1 text-lg font-medium px-3">
                        {product.price}{" "}
                        <span className="line-through text-gray-500">
                          {product.st}
                        </span>
                      </p>

                      <div className="flex justify-between blue-navy text-white p-1 py-2 rounded-lg-down">
                        <span className="inline-flex items-center text-xs font-medium text-white">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clipRule="evenodd"
                              d="M7.89348 2.06656C8.28256 1.70631 8.86337 1.20117 9.60738 1.20117C10.3514 1.20117 10.9322 1.70631 11.3213 2.06656C11.4089 2.14767 11.4872 2.22237 11.5615 2.29315C11.681 2.4071 11.7899 2.51097 11.9095 2.61499C12.0916 2.77321 12.2364 2.87415 12.3592 2.92811C12.5009 2.98349 12.6877 3.01778 12.9329 3.03722C13.1024 3.05066 13.2672 3.05546 13.4475 3.0607C13.5414 3.06343 13.6395 3.06628 13.7447 3.07054C14.2696 3.09182 15.0376 3.14027 15.556 3.65872C16.0745 4.17717 16.1229 4.94511 16.1442 5.47002C16.1485 5.57517 16.1513 5.67326 16.1541 5.76717C16.1593 5.94738 16.1641 6.11232 16.1776 6.28188C16.197 6.52699 16.2313 6.71384 16.2867 6.85555C16.3406 6.97834 16.4416 7.12317 16.5998 7.30522C16.7038 7.42489 16.8076 7.53375 16.9216 7.65324C16.9924 7.72745 17.067 7.80581 17.1482 7.89348C17.5084 8.28256 18.0136 8.86337 18.0136 9.60738C18.0136 10.3514 17.5084 10.9322 17.1482 11.3213C17.0671 11.4088 16.9925 11.4872 16.9217 11.5613C16.8078 11.6809 16.7038 11.7899 16.5998 11.9095C16.4416 12.0916 16.3406 12.2364 16.2867 12.3592C16.2313 12.5009 16.197 12.6878 16.1776 12.9329C16.1641 13.1024 16.1593 13.2672 16.1541 13.4475C16.1513 13.5414 16.1485 13.6396 16.1442 13.7447C16.1229 14.2696 16.0745 15.0376 15.556 15.556C15.0376 16.0745 14.2696 16.1229 13.7447 16.1442C13.6396 16.1485 13.5415 16.1513 13.4476 16.1541C13.2674 16.1593 13.1024 16.1641 12.9329 16.1776C12.6878 16.197 12.5009 16.2313 12.3592 16.2867C12.2364 16.3406 12.0916 16.4416 11.9095 16.5998C11.7899 16.7038 11.681 16.8076 11.5615 16.9216C11.4873 16.9923 11.4088 17.0671 11.3213 17.1482C10.9322 17.5084 10.3514 18.0136 9.60738 18.0136C8.86337 18.0136 8.28256 17.5084 7.89348 17.1482C7.80581 17.067 7.72745 16.9924 7.65324 16.9216C7.53375 16.8076 7.42489 16.7038 7.30522 16.5998C7.12317 16.4416 6.97834 16.3406 6.85555 16.2867C6.71384 16.2313 6.52699 16.197 6.28188 16.1776C6.11232 16.1641 5.94753 16.1593 5.76731 16.1541C5.67341 16.1513 5.57517 16.1485 5.47002 16.1442C4.94511 16.1229 4.17717 16.0745 3.65872 15.556C3.14027 15.0376 3.09182 14.2696 3.07054 13.7447C3.06628 13.6395 3.06343 13.5414 3.0607 13.4475C3.05546 13.2672 3.05066 13.1024 3.03722 12.9329C3.01778 12.6877 2.98349 12.5009 2.92811 12.3592C2.87415 12.2364 2.77321 12.0916 2.61499 11.9095C2.51097 11.7899 2.40718 11.681 2.29323 11.5615C2.22248 11.4874 2.14763 11.4088 2.06656 11.3213C1.70631 10.9322 1.20117 10.3514 1.20117 9.60738C1.20117 8.86337 1.70631 8.28256 2.06656 7.89348C2.1477 7.80581 2.22242 7.72745 2.29322 7.65324C2.40717 7.53375 2.51097 7.42489 2.61499 7.30522C2.77321 7.12317 2.87416 6.97834 2.92811 6.85555C2.98349 6.7139 3.01778 6.52699 3.03722 6.28188C3.05066 6.11232 3.05546 5.94753 3.0607 5.76731C3.06343 5.67338 3.06628 5.57521 3.07054 5.47002C3.09182 4.94511 3.14027 4.17717 3.65872 3.65872C4.17717 3.14027 4.94511 3.09182 5.47002 3.07054C5.57521 3.06628 5.67334 3.06343 5.76727 3.0607C5.94749 3.05546 6.11232 3.05066 6.28188 3.03722C6.52699 3.01778 6.7139 2.98349 6.85555 2.92811C6.97834 2.87416 7.12317 2.77321 7.30522 2.61499C7.42489 2.51097 7.53369 2.40719 7.65324 2.29324C7.72745 2.22244 7.80581 2.1477 7.89348 2.06656ZM11.8891 7.56587C12.0881 7.3006 12.0343 6.92424 11.769 6.72525C11.5037 6.52626 11.1273 6.58006 10.9284 6.84534L7.3257 11.6489C7.12671 11.9142 7.18051 12.2905 7.44578 12.4895C7.71106 12.6885 8.08742 12.6347 8.28641 12.3694L11.8891 7.56587ZM10.2078 11.4087C10.2078 10.7455 10.7455 10.2078 11.4087 10.2078C12.072 10.2078 12.6096 10.7455 12.6096 11.4087C12.6096 12.072 12.072 12.6096 11.4087 12.6096C10.7455 12.6096 10.2078 12.072 10.2078 11.4087ZM7.80605 6.60516C7.1428 6.60516 6.60516 7.1428 6.60516 7.80605C6.60516 8.4693 7.1428 9.00694 7.80605 9.00694C8.4693 9.00694 9.00694 8.4693 9.00694 7.80605C9.00694 7.1428 8.4693 6.60516 7.80605 6.60516Z"
                              fill="#fff"
                            />
                          </svg>
                          20% OFF
                        </span>
                        <span className="text-xs rounded-lg-down">
                          Buy Now ->
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="column">
              <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products1.map((product) => (
                  <div key={product.id} href={product.href} className="group">
                    <div className="container1 w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg-top overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-32 object-center object-cover group-hover:opacity-75"
                      />
                      <span>
                        <i className="fas overlay">
                          <svg
                            width="56"
                            height="56"
                            viewBox="0 0 56 56"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g filter="url(#filter0_bd_800_5964)">
                              <rect
                                x="10"
                                y="10"
                                width="35.409"
                                height="35.409"
                                rx="17.7045"
                                fill="black"
                                fill-opacity="0.56"
                                shape-rendering="crispEdges"
                              />
                              <path
                                d="M21.9678 21.9669C21.9678 21.5322 22.1405 21.1152 22.4479 20.8078C22.7553 20.5003 23.1723 20.3276 23.6071 20.3276H31.8036C32.2384 20.3276 32.6553 20.5003 32.9628 20.8078C33.2702 21.1152 33.4429 21.5322 33.4429 21.9669V35.0814L27.7053 32.2126L21.9678 35.0814V21.9669Z"
                                stroke="white"
                                stroke-width="1.96717"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </g>
                            <defs>
                              <filter
                                id="filter0_bd_800_5964"
                                x="2.13133"
                                y="2.13133"
                                width="51.1465"
                                height="51.1465"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                              >
                                <feFlood
                                  flood-opacity="0"
                                  result="BackgroundImageFix"
                                />
                                <feGaussianBlur
                                  in="BackgroundImage"
                                  stdDeviation="3.93433"
                                />
                                <feComposite
                                  in2="SourceAlpha"
                                  operator="in"
                                  result="effect1_backgroundBlur_800_5964"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  result="hardAlpha"
                                />
                                <feOffset />
                                <feGaussianBlur stdDeviation="0.983584" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                />
                                <feBlend
                                  mode="normal"
                                  in2="effect1_backgroundBlur_800_5964"
                                  result="effect2_dropShadow_800_5964"
                                />
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="effect2_dropShadow_800_5964"
                                  result="shape"
                                />
                              </filter>
                            </defs>
                          </svg>
                        </i>
                      </span>
                    </div>

                    <div className="bg-neutral-100 px-3 mb-2 rounded-lg-down">
                      <div className="flex justify-between">
                        <div className="mt-2">
                          <h3 className="text-sm text-gray-700">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            ></span>
                            {product.name}
                          </h3>
                        </div>
                      </div>

                      <p className="mb-1 text-lg font-medium">
                        {product.price}{" "}
                        <span className="line-through text-gray-500">
                          {product.st}
                        </span>
                      </p>

                      <span className="inline-flex items-center text-sm font-medium mb-2">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clipRule="evenodd"
                            d="M7.89348 2.06656C8.28256 1.70631 8.86337 1.20117 9.60738 1.20117C10.3514 1.20117 10.9322 1.70631 11.3213 2.06656C11.4089 2.14767 11.4872 2.22237 11.5615 2.29315C11.681 2.4071 11.7899 2.51097 11.9095 2.61499C12.0916 2.77321 12.2364 2.87415 12.3592 2.92811C12.5009 2.98349 12.6877 3.01778 12.9329 3.03722C13.1024 3.05066 13.2672 3.05546 13.4475 3.0607C13.5414 3.06343 13.6395 3.06628 13.7447 3.07054C14.2696 3.09182 15.0376 3.14027 15.556 3.65872C16.0745 4.17717 16.1229 4.94511 16.1442 5.47002C16.1485 5.57517 16.1513 5.67326 16.1541 5.76717C16.1593 5.94738 16.1641 6.11232 16.1776 6.28188C16.197 6.52699 16.2313 6.71384 16.2867 6.85555C16.3406 6.97834 16.4416 7.12317 16.5998 7.30522C16.7038 7.42489 16.8076 7.53375 16.9216 7.65324C16.9924 7.72745 17.067 7.80581 17.1482 7.89348C17.5084 8.28256 18.0136 8.86337 18.0136 9.60738C18.0136 10.3514 17.5084 10.9322 17.1482 11.3213C17.0671 11.4088 16.9925 11.4872 16.9217 11.5613C16.8078 11.6809 16.7038 11.7899 16.5998 11.9095C16.4416 12.0916 16.3406 12.2364 16.2867 12.3592C16.2313 12.5009 16.197 12.6878 16.1776 12.9329C16.1641 13.1024 16.1593 13.2672 16.1541 13.4475C16.1513 13.5414 16.1485 13.6396 16.1442 13.7447C16.1229 14.2696 16.0745 15.0376 15.556 15.556C15.0376 16.0745 14.2696 16.1229 13.7447 16.1442C13.6396 16.1485 13.5415 16.1513 13.4476 16.1541C13.2674 16.1593 13.1024 16.1641 12.9329 16.1776C12.6878 16.197 12.5009 16.2313 12.3592 16.2867C12.2364 16.3406 12.0916 16.4416 11.9095 16.5998C11.7899 16.7038 11.681 16.8076 11.5615 16.9216C11.4873 16.9923 11.4088 17.0671 11.3213 17.1482C10.9322 17.5084 10.3514 18.0136 9.60738 18.0136C8.86337 18.0136 8.28256 17.5084 7.89348 17.1482C7.80581 17.067 7.72745 16.9924 7.65324 16.9216C7.53375 16.8076 7.42489 16.7038 7.30522 16.5998C7.12317 16.4416 6.97834 16.3406 6.85555 16.2867C6.71384 16.2313 6.52699 16.197 6.28188 16.1776C6.11232 16.1641 5.94753 16.1593 5.76731 16.1541C5.67341 16.1513 5.57517 16.1485 5.47002 16.1442C4.94511 16.1229 4.17717 16.0745 3.65872 15.556C3.14027 15.0376 3.09182 14.2696 3.07054 13.7447C3.06628 13.6395 3.06343 13.5414 3.0607 13.4475C3.05546 13.2672 3.05066 13.1024 3.03722 12.9329C3.01778 12.6877 2.98349 12.5009 2.92811 12.3592C2.87415 12.2364 2.77321 12.0916 2.61499 11.9095C2.51097 11.7899 2.40718 11.681 2.29323 11.5615C2.22248 11.4874 2.14763 11.4088 2.06656 11.3213C1.70631 10.9322 1.20117 10.3514 1.20117 9.60738C1.20117 8.86337 1.70631 8.28256 2.06656 7.89348C2.1477 7.80581 2.22242 7.72745 2.29322 7.65324C2.40717 7.53375 2.51097 7.42489 2.61499 7.30522C2.77321 7.12317 2.87416 6.97834 2.92811 6.85555C2.98349 6.7139 3.01778 6.52699 3.03722 6.28188C3.05066 6.11232 3.05546 5.94753 3.0607 5.76731C3.06343 5.67338 3.06628 5.57521 3.07054 5.47002C3.09182 4.94511 3.14027 4.17717 3.65872 3.65872C4.17717 3.14027 4.94511 3.09182 5.47002 3.07054C5.57521 3.06628 5.67334 3.06343 5.76727 3.0607C5.94749 3.05546 6.11232 3.05066 6.28188 3.03722C6.52699 3.01778 6.7139 2.98349 6.85555 2.92811C6.97834 2.87416 7.12317 2.77321 7.30522 2.61499C7.42489 2.51097 7.53369 2.40719 7.65324 2.29324C7.72745 2.22244 7.80581 2.1477 7.89348 2.06656ZM11.8891 7.56587C12.0881 7.3006 12.0343 6.92424 11.769 6.72525C11.5037 6.52626 11.1273 6.58006 10.9284 6.84534L7.3257 11.6489C7.12671 11.9142 7.18051 12.2905 7.44578 12.4895C7.71106 12.6885 8.08742 12.6347 8.28641 12.3694L11.8891 7.56587ZM10.2078 11.4087C10.2078 10.7455 10.7455 10.2078 11.4087 10.2078C12.072 10.2078 12.6096 10.7455 12.6096 11.4087C12.6096 12.072 12.072 12.6096 11.4087 12.6096C10.7455 12.6096 10.2078 12.072 10.2078 11.4087ZM7.80605 6.60516C7.1428 6.60516 6.60516 7.1428 6.60516 7.80605C6.60516 8.4693 7.1428 9.00694 7.80605 9.00694C8.4693 9.00694 9.00694 8.4693 9.00694 7.80605C9.00694 7.1428 8.4693 6.60516 7.80605 6.60516Z"
                            fill="#202037"
                          />
                        </svg>
                        20% OFF
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
