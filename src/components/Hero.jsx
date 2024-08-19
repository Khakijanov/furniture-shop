import React from "react";
import { Link } from "react-router-dom";
import img1 from "../img/hall.jpg";
import img2 from "../img/room3.jpg";
import img3 from "../img/livingroom.jpg";
import img4 from "../img/minimalist.avif";
import img5 from "../img/photo.jpg";
import img6 from "../img/room1.jpg";
import img7 from "../img/room2.jpg";
function Hero() {
  const imgs = [img1, img2, img3, img4, img5, img6, img7];
  return (
    <div className="mt-2 bg-base-200 py-8">
      <div className="Mycontainer flex items-start justify-between">
        <div className="flex flex-col  gap-10">
          <h1 className="text-[50px] font-semibold max-w-[500px]">
            We are changing the way people{" "}
            <span className="text-secondary-content font-pacifico font-normal">
              shop
            </span>
          </h1>
          <p className="max-w-[400px]">
            Zamonaviylik va klassik dizayn uyg'unligida yaratilgan mebellarimiz
            bilan uyingizga nafislik va qulaylik olib keling. Har bir mahsulot
            mukammal tarzda tayyorlangan.
          </p>
          <div className="w-full">
            <Link
              to={"/ourproducts"}
              className="btn bg-secondary-content text-base-200 font-bold w-[45%] hover:text-base-content"
            >
              Our Products
            </Link>
          </div>
        </div>
        <div>
          <div className="carousel carousel-center bg-base-300 rounded-2xl max-w-sm h-[400px] space-x-2 p-4">
            {imgs.map((img) => {
              return (
                <div className="carousel-item">
                  <img src={img} className="rounded-2xl" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
