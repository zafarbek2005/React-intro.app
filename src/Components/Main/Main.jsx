import { FaQuestion } from "react-icons/fa"; 
import { IoLogoBuffer } from "react-icons/io"; 
import { SiAdguard } from "react-icons/si"; 
import { BsHeadset } from "react-icons/bs"; 
import React, { useRef, useState } from 'react';
import './Main.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const Main = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;
  
    const prepend2 = () => {
      swiperRef.prependSlide([
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      ]);
    };
  
    const prepend = () => {
      swiperRef.prependSlide(
        '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
      );
    };
  
    const append = () => {
      swiperRef.appendSlide(
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
      );
    };
  
    const append2 = () => {
      swiperRef.appendSlide([
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
        '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      ]);
    };
  return (
  <main>
    <section className='conteiner'>
            
    <Swiper
       autoplay={{
        delay: 250,
        disableOnInteraction: false,
      }}
      loop={true}
    pagination={{
      type: 'progressbar',
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="mySwiper"
  >

    <SwiperSlide><img src="https://healthornaments.com/wp-content/uploads/2024/02/xiomi-14-ultra.png" alt="" /></SwiperSlide>
    <SwiperSlide><img src="https://www.shutterstock.com/image-photo/xiomi-redmi-note-10-black-260nw-1880765971.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Xiaomi_Mi_Car_M1_Entwurf_Heck44.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/6CF2/production/_116809872_0c722a8b-cc01-4d0d-83b0-9c60c7f9c0ae.jpg" alt="" /></SwiperSlide>
   
  
  </Swiper>
    </section>

    <section>
        <div className="wrapper">
            <h3>Featured Products</h3>
            <div className="lins">
                <p>Latest Flagship</p>
                <p>Stay on Trend</p>
                <p>Latest Audivisuals</p>
                <p>Livestyle Componions</p>
            </div>

            <div className="imgs">
                <img src="https://i02.appmifile.com/433_operator_global/29/04/2024/8fdc88f7f4cee227e255330d138ed72f.jpg?thumb=1&w=660&f=webp&q=85" alt="" />
                <img src="https://w0.peakpx.com/wallpaper/298/291/HD-wallpaper-mi-xiomi.jpg" alt="" />
                <img src="https://i02.appmifile.com/976_operatorx_operatorx_opx/23/02/2024/c4866f7bdd20c6ed7acf6082417dd340.png?thumb=1&w=300&f=webp&q=85" alt="" />
                <img src="https://s1.cdn.autoevolution.com/images/news/gallery/xiaomi-car-looks-like-its-out-for-tesla-blood-in-these-renderings_4.jpg" alt="" />
            </div>
        </div>

        <div className="main-bt">
     
        <Swiper
        autoplay={{
            delay: 250,
            disableOnInteraction: false,
          }}
          loop={true}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper2 conteiner"
      >
        <SwiperSlide><img src="https://9554770e.rocketcdn.me/wp-content/uploads/2024/02/Xiaomi-14-Pro-officially-confirmed-to-be-not-launched-globally.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJJQ78JliXvd6IP_DXId9B9X04_7gQFw7VdnGi5BdCGg&s" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://9554770e.rocketcdn.me/wp-content/uploads/2024/02/Xiaomi-14-Pro-officially-confirmed-to-be-not-launched-globally.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBBurgpj7WnhoG2SCDG_dxaqOLarqm7NxvEmPTuDqXHQ&s" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjkAtJ9Cf8H83vCnWmQmdWvB93VT6cmn5vAhiA3uzw7Q&s" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8gChVUWAvTlbeZO29WEF1IQo0zoRHE1Y-vwGM6DJdw&s" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8gChVUWAvTlbeZO29WEF1IQo0zoRHE1Y-vwGM6DJdw&s" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8gChVUWAvTlbeZO29WEF1IQo0zoRHE1Y-vwGM6DJdw&s" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwNUNR2yVAepCLhou0IURsp5ksEewzfEkvfg&s" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://articles-img.sftcdn.net/t_article_cover_l/auto-mapping-folder/sites/3/2023/12/Xiaomu-SUV7-caracteristicas-1.jpg" alt="" /></SwiperSlide>
      
      </Swiper>

        </div>
    </section>

    <section>
        <h2>Xiaomi Support</h2>

        <div className="cards">

            <div className="card">
                <h6><BsHeadset /></h6>
                <h3>Customer Support</h3>
                <p>Contact us via live-chat, email, and phone call</p>
            </div>
            <div className="card">
                <h6><SiAdguard /></h6>
                <h3>Warranty</h3>
                <p>Contact us via live-chat, email, and phone call</p>
            </div>
            <div className="card">
                <h6><IoLogoBuffer /></h6>
                <h3>User Guides</h3>
                <p>Contact us via live-chat, email, and phone call</p>
            </div>
            <div className="card">
                <h6><FaQuestion /></h6>
                <h3>FAQ</h3>
                <p>Contact us via live-chat, email, and phone call</p>
            </div>

        </div>
    </section>
  </main>

  )
}

export default Main