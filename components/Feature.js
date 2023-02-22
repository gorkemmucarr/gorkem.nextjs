import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";



const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

        <motion.div className="flex flex-col items-start justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            Hakkımızda
          </h3>
          <p className="my-2 text-black-500">
          Antalya Organize Sanayi Bölgesinde, 2004 yılında temelleri atılmış olan Ekso Süt, yine aynı bölgede faaliyetini sürdüren Ekici Peynir’in kardeş kuruluşudur. Şirketin kurulma sebebi, Ekici Peynir’in üretimi sonucu açığa çıkan ve içerisinde bulunan asit sebebiyle çevreye oldukça zararlı olan peynir altı suyunun tekrardan doğaya kazandırılmasıdır.
          Temeli atıldıktan sonra 5 yıl boyunca süren kurulum ve AR-GE çalışmaları sonucunda, 2009 yılında faaliyetine başlayarak, düzenli olarak çalışan bir işletme haline gelmiştir.
          Faaliyete başlanılan ilk yıllarda sadece peynir altı suyunu işleyerek toz haline getirmekteydi. Bugün yapmış olduğu yatırımlarla peynir altı suyunun yanında süt de işleyerek süt tozu üretimini de gerçekleştirmektedir. Günde 25 ton peynir altı suyu tozu (PAST) ve 20 ton da süt tozu üretme kapasitesine sahip olan Ekso Süt, yatırımlarına ara vermeden devam ederek kapasitesini arttırmayı hedeflemektedir.
          Son teknolojinin tüm imkanlarını etkin bir şekilde kullanan Ekso Süt, çevreyi ve toplum sağlığını korumayı kendisine ilke edinen bir işletmedir. Şu anda sadece Ekici Peynir’den çıkan atık suyun doğaya yeniden kazandırılması için çalışan Ekso Süt, ilerleyen zamanlarda bulunduğu bölgede bulunan tüm işletmelerdeki atıkları doğaya kazandırma misyonuyla hareket etmektedir.
          </p>
          
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
