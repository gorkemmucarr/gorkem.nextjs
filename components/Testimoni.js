import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "EKSO'dan 5 Milyon Tl'lik Yatırım",
      image: "/assets/suttozu.png",
      testimoni:
        "2009 Yılında, Antalya’da faaliyetine başlayan EKSO, 1500 m2 kapalı alanda üretimini gerçekleştirerek, çevreyi koruma bilinciyle çalışmalarını sürdürmektedir. Peynir altı suyu ve Süt tozu ürünlerine olan talebin artmasıyla beraber, EKSO için kapasite artışı zorunluluk haline gelmiş, ve bunun için çalışmalara başlanmıştır.2012’nin son aylarında başlayan yatırımların sürmesi planlanmaktadır. Yatırım sonucunda 1.500m2 kapalı alandan 3.500m2 alana çıkarak 5 milyon TL’lik yatırım yapmayı hedefliyor.Hali hazırda günde 25 ton toz üretme kapasitesine sahip olan EKSO, yatırım sonucu kapasitesini tam 3 katına çıkartabilecek.Yatırım sonucu sadece kapasite artışı ile kalmayacak, aynı zamanda katma değeri yüksek başka ürünleri de portföyüne katarak ilerleyebilecek."
    },
    {
      name: "EKSO Ürün Portföyüne Yeni Bir Ürün Daha Ekledi",
      image: "/assets/cikolata.png",
      testimoni:
        "Antalya Organize Sanayi Bölgesinde, 2009 yılında faaliyete başlamış olan EKSO, Ekici Peynir’in üretimi sonucu açığa çıkan ve içerisinde bulunan laktik asit sebebiyle kısa sürede asitlenip çevreye oldukça zarar veren atıkların, ekonomiye tekrardan kazanılması amacıyla kurulmuştu.EKSO çevre ve doğaya önem veren bir yaklaşımla üretim yapan, çevreyi ve toplum sağlığını korumayı kendisine ilke edinen bir işletmedir.Şimdilik sadece Yağsız süt tozu üretimini gerçekleştiren Ekso, ilerleyen dönemlerde planladığı yatırımlarla çeşitliliğini arttırmayı hedeflemektedir.Süt tozu havayla temas etmediği müddetçe aylarca bozulmadan saklanabilir. İçerisine su katarak kullanmak, hatta bebeklere bile vermek mümkündür."

    },
    {
      name: "EKSO Çalışmaları Hızlandırdı",
      image: "/assets/suttozu2.png",
      
      testimoni:
        "Antalya Organize Sanayi Bölgesinde, 2009 yılında faaliyete başlamış olan EKSO, Ekici Peynir’in üretimi sonucu açığa çıkan ve içerisinde bulunan laktik asit sebebiyle kısa sürede asitlenip çevreye oldukça zarar veren atıkların, ekonomiye tekrardan kazanılması amacıyla kurulmuştu.Şuan sadece Ekici Peynir’den çıkan atık peynir altı suyun doğaya yeniden kazandırılması için çalışan EKSO, bulunduğu bölgede yer alan başka işletmelerin peyniraltı suyunu değerlendirmek üzere çalışmalara başladı. Bugün, bölgesindeki diğer süt ve süt ürünleri üreten işletmelerle anlaşarak, doğaya attıkları peynir altı sularını, özel tanklar ile toparlıyor ve Organize Sanayi Bölgesinde bulunan işletmesinde üretim hattına dahil ediyor"

    },
    {
      name: "Örnek haber 4",
      image: "/assets/eksologo.png",
      testimoni: "Örnek haber 4"
    }
    
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
        
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
  
  
};

export default Testimoni;
