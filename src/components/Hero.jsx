import React from "react";

function Hero() {
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
            <button className="btn bg-secondary-content text-base-200 font-bold w-[45%] hover:text-base-content">
              Our Products
            </button>
          </div>
        </div>
        <div>
          <div className="carousel carousel-center bg-base-300 rounded-2xl max-w-sm h-[400px] space-x-2 p-4">
            <div className="carousel-item">
              <img src="../../public/minimalist.avif" className="rounded-2xl" />
            </div>
            <div className="carousel-item">
              <img src="../../public/photo.jpg" className="rounded-2xl" />
            </div>
            <div className="carousel-item">
              <img src="../../public/livingroom.jpg" className="rounded-2xl" />
            </div>
            <div className="carousel-item">
              <img src="../../public/room1.jpg" className="rounded-2xl" />
            </div>
            <div className="carousel-item">
              <img src="../../public/hall.jpg" className="rounded-2xl" />
            </div>
            <div className="carousel-item">
              <img src="../../public/room2.jpg" className="rounded-2xl" />
            </div>
            <div className="carousel-item">
              <img src="../../public/room3.jpg" className="rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
