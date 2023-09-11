import React from "react";
import Layout from "../../components/Layout";
import "./style.css";
import Carousel from "../../components/Carousel";
import { bannerImages } from "../../constants/image";

export default function HomePage() {
  return (
    <Layout>
      <div className="container hover-img">
        <div className="home-banner-group">
          <div className="home-slider-group">
            <Carousel images={bannerImages}/>
          </div>
          <div className="home-right-slider">
            <a href="/ad.php?id=356">
              <img
                data-src="https://hoanghapccdn.com/media/banner/06_May3dca01fbcc0d2dedb63414b1a724da44.jpg"
                alt="Banner-356"
                width={291}
                height={192}
                className="lazy w-100 h-auto loaded"
                src="https://hoanghapccdn.com/media/banner/06_May3dca01fbcc0d2dedb63414b1a724da44.jpg"
                data-was-processed="true"
              />
            </a>
            <a href="/ad.php?id=357">
              <img
                data-src="https://hoanghapccdn.com/media/banner/06_Mayacfff74402f7721746873163801a89da.jpg"
                alt="Banner-357"
                width={291}
                height={192}
                className="lazy w-100 h-auto loaded"
                src="https://hoanghapccdn.com/media/banner/06_Mayacfff74402f7721746873163801a89da.jpg"
                data-was-processed="true"
              />
            </a>
          </div>
          <div className="home-under-slider">
            <a href="/ad.php?id=358">
              <img
                data-src="https://hoanghapccdn.com/media/banner/06_Mayf1bab4b1b3d2fae328a3752b1bed384c.jpg"
                alt="Banner-358"
                width={291}
                height={192}
                className="lazy w-100 h-auto loaded"
                src="https://hoanghapccdn.com/media/banner/06_Mayf1bab4b1b3d2fae328a3752b1bed384c.jpg"
                data-was-processed="true"
              />
            </a>
            <a href="/ad.php?id=359">
              <img
                data-src="https://hoanghapccdn.com/media/banner/06_Maycde013c5a2a13b7bbbd8ab98855df26a.jpg"
                alt="Banner-359"
                width={291}
                height={192}
                className="lazy w-100 h-auto loaded"
                src="https://hoanghapccdn.com/media/banner/06_Maycde013c5a2a13b7bbbd8ab98855df26a.jpg"
                data-was-processed="true"
              />
            </a>
            <a href="/ad.php?id=360">
              <img
                data-src="https://hoanghapccdn.com/media/banner/06_May3f9665b3057fed984fd53e553bfe91fe.jpg"
                alt="Banner-360"
                width={416}
                height={275}
                className="lazy w-100 h-auto loaded"
                src="https://hoanghapccdn.com/media/banner/06_May3f9665b3057fed984fd53e553bfe91fe.jpg"
                data-was-processed="true"
              />
            </a>
          </div>
        </div>
        <div className="home-under-block-slider">
          <a href="/ad.php?id=361">
            <img
              data-src="https://hoanghapccdn.com/media/banner/06_May11c6c57fd2c0606f2047dcca9cd3b6c7.jpg"
              alt="Banner-361"
              width={291}
              height={192}
              className="lazy w-auto h-auto loaded"
              src="https://hoanghapccdn.com/media/banner/06_May11c6c57fd2c0606f2047dcca9cd3b6c7.jpg"
              data-was-processed="true"
            />
          </a>
          <a href="/ad.php?id=362">
            <img
              data-src="https://hoanghapccdn.com/media/banner/06_May4a9212f78477332ec343f7014ecafb46.jpg"
              alt="Banner-362"
              width={291}
              height={192}
              className="lazy w-auto h-auto loaded"
              src="https://hoanghapccdn.com/media/banner/06_May4a9212f78477332ec343f7014ecafb46.jpg"
              data-was-processed="true"
            />
          </a>
          <a href="/ad.php?id=363">
            <img
              data-src="https://hoanghapccdn.com/media/banner/06_May997f4b9fd515178899599ee6cc4dc994.jpg"
              alt="Banner-363"
              width={291}
              height={192}
              className="lazy w-auto h-auto loaded"
              src="https://hoanghapccdn.com/media/banner/06_May997f4b9fd515178899599ee6cc4dc994.jpg"
              data-was-processed="true"
            />
          </a>
          <a href="/ad.php?id=364">
            <img
              data-src="https://hoanghapccdn.com/media/banner/06_Maycd559e2e6634e0f8b38f02ce4e0f9363.jpg"
              alt="Banner-364"
              width={291}
              height={192}
              className="lazy w-auto h-auto loaded"
              src="https://hoanghapccdn.com/media/banner/06_Maycd559e2e6634e0f8b38f02ce4e0f9363.jpg"
              data-was-processed="true"
            />
          </a>
        </div>
      </div>
    </Layout>
  );
}
