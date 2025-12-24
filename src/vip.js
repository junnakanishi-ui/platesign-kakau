import React, { useState } from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function Vip() {
  const [Loading, setLoading] = useState(false);
  return (
    <div class="App">
      <div className="max-w-2xl mb-10 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="bg-white max-w-2xl mx-auto py-4 px-4  lg:max-w-7xl lg:px-8">
          <div className="flex justify-between items-center">
            <span className="font-bold text-xl">
              <img className="w-full" src="logo.jpg" alt="logo" />
            </span>

            <span className="flex font-bold text-xl">
              <img className="w-full px-2" src="discount.jpg" alt="logo" />
              <img className="w-full" src="save.jpg" alt="logo" />
            </span>
          </div>
        </div>
        <div class="p-3 bg-gray-50">
          <p class="text-2xl m-1">Exclusive Discounts</p>
          <div className="row">
            <div className="column">
              <div class="p-4 bg-grad-2 h-30  text-white rounded-lg">
                <span className="text-4xl">10</span>
                <h1 className="text-1xl">Your discounts</h1>
              </div>
            </div>
            <div className="column">
              <div className="p-4 bg-grad-1 h-30  text-white rounded-lg">
                <span className="text-4xl">9</span>
                <h1 className="text-1xl">Brands</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div class="flex justify-between center m-3 p-5">
            <FontAwesomeIcon icon={faInstagram} size="1x" />
            <FontAwesomeIcon icon={faFacebook} size="1x" />
            <FontAwesomeIcon icon={faTwitter} size="1x" />
          </div>
        </div>
      </div>
    </div>
  );
}
