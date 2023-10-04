import "./style.css";
import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import { useQuery } from "@tanstack/react-query";
import Carousel from "../../components/Carousel";
import Layout from "../../components/Layout";
import { bannerImages } from "../../constants/image";
import { productService } from "../../services/product.service";
import { Link, useNavigate } from "react-router-dom";
import {
  calculateDiscountPercentage,
  formatPrice,
} from "../../utils/fomatPrice";
import Loading from "../../components/Loading";

export default function HomePage() {
  const { data, isloading } = useQuery(
    ["product"],
    () => productService.fetchAllProducts(),
    {
      retry: 3,
      retryDelay: 1000,
    }
  );

  return (
    <Layout>
      {/* Banner */}
      <div className="container hover-img">
        <div className="home-banner-group">
          <div className="home-slider-group">
            <Carousel delay={4000} navigation={false} pagination={false}>
              {bannerImages?.map((item) => (
                <SwiperSlide key={item.id}>
                  <img
                    data-src={item.image}
                    alt={item.name}
                    width={291}
                    height={192}
                    className="lazy w-100 h-auto loaded"
                    src={item.image}
                    data-was-processed="true"
                  />
                </SwiperSlide>
              ))}
            </Carousel>
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
      {/* Top Bán PC */}
      <div
        className="home-collection-group"
        data-bg="url(https://i.imgur.com/QvdPH94.png)"
        data-was-processed="true"
        style={{
          backgroundImage: 'url("https://i.imgur.com/QvdPH94.png")',
        }}
      >
        <div className="container">
          {/* tab */}
          <div
            className="home-collection-title loaded"
            id="js-home-collection-title"
          >
            <a
              href="/collection/top-pc-ban-chay"
              data-id={3}
              className="current"
            >
              <b>TOP PC BÁN CHẠY</b>
              <span>Nhất năm 2023</span>
            </a>
            <a href="/collection/top-pc-khung" data-id={4}>
              <b>TOP PC CỰC KHỦNG</b>
              <span>Dành cho dân đồ họa</span>
            </a>
            <a href="/collection/giai-nhiet-pc" data-id={5}>
              <b>GIẢI NHIỆT PC</b>
              <span>Nâng cao hiệu suất</span>
            </a>
            <a href="/collection/man-hinh-do-hoa" data-id={6}>
              <b>MÀN HÌNH ĐỒ HỌA</b>
              <span>Nhiều ưu đãi hấp dẫn</span>
            </a>
            <a href="/collection/goc-thanh-ly" data-id={7}>
              <b>GÓC THANH LÝ</b>
              <span>Xả hàng không lợi nhuận</span>
            </a>
          </div>
          {/* san pham */}
          <div
            className="p-container"
            style={{
              marginTop: "25px",
            }}
          >
            {isloading ? (
              <Loading />
            ) : (
              <Carousel
                delay={4000}
                navigation={false}
                pagination={false}
                slidesPerView={5}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                }}
              >
                {data?.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="p-item">
                      <Link
                        to={`/product/${item.slugProduct}`}
                        className="p-img"
                      >
                        <img
                          src={`${item.images[0].imagePath}`}
                          alt={item.nameProduct}
                          width={250}
                          height={250}
                        />
                      </Link>
                      <div className="p-text">
                        <Link
                          to={`/product/${item.slugProduct}`}
                          className="p-name"
                        >
                          <h3 className="inherit">{item.nameProduct}</h3>
                        </Link>
                        <div className="p-price-group">
                          <span className="p-price">
                            {formatPrice(item.initial_price)}đ
                          </span>
                          <del className="p-old-price">
                            {formatPrice(item.price_has_dropped)} đ
                          </del>
                          <span className="p-discount">
                            (Tiết kiệm:{" "}
                            {calculateDiscountPercentage(
                              item?.initial_price,
                              item?.price_has_dropped
                            )}
                            )
                          </span>
                        </div>
                        <div className="p-btn-group">
                          <p>
                            <span style={{ color: "#0DB866" }}>
                              <i className="icons icon-check" /> Còn hàng
                            </span>
                            <span style={{ color: "#A3A3A3" }}>
                              <i className="icons icon-gift" /> Quà tặng
                            </span>
                          </p>
                          <a
                            href="javascript:void(0)"
                            className="p-add-cart"
                            onclick="addProductToCart(3792, 1,'')"
                          />
                        </div>
                      </div>
                      <div className="p-tooltip">
                        <p className="tooltip-title">
                          HHPC 3D i5 13600K | 32G | NVIDIA RTX 3060 12G
                        </p>
                        <div className="tooltip-content">
                          <table>
                            <tbody>
                              <tr>
                                <td>Giá bán</td>
                                <td>
                                  <span className="tooltip-price">
                                    23.950.000 đ
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Bảo hành</td>
                                <td>36 tháng</td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="tooltip-content-item">
                            <b className="title">
                              <i className="tooltip-icon icon-doc" /> Thông số
                              sản phẩm
                            </b>
                            <div className="tooltip-content-list">
                              <div className="item">
                                CPU : INTEL CORE i5 13600K up 5.1GHz | 14 CORE |
                                20 THREAD
                              </div>
                              <div className="item">
                                RAM : 32GB DDR4 3600 MHz (2x16G)
                              </div>
                              <div className="item">
                                VGA : MANLI RTX 3060 12GB GDDR6
                              </div>
                            </div>
                          </div>
                          <div className="tooltip-content-item">
                            <b className="title">
                              <i className="tooltip-icon icon-gift" /> Chương
                              trình khuyến mãi
                            </b>
                            <div className="tooltip-content-list">
                              <div className="item">
                                <p>
                                  <span
                                    style={{
                                      color: "#ff0000",
                                      fontSize: "12pt",
                                    }}
                                  >
                                    <strong>
                                      ƯU ĐÃI KHI MUA KÈM PC TẠI HOÀNG HÀ PC
                                    </strong>
                                  </span>
                                </p>
                              </div>
                              <div className="item">
                                <p>
                                  <span style={{ fontSize: "12pt" }}>
                                    ⭐ Tặng ngay{" "}
                                    <span
                                      style={{
                                        fontSize: "13pt",
                                        color: "#ff0000",
                                      }}
                                    >
                                      <strong>
                                        bộ phím chuột và bàn di chuột + 5 mét
                                        dây mạng
                                      </strong>
                                    </span>{" "}
                                    khi mua cấu hình PC trên{" "}
                                  </span>
                                </p>
                              </div>
                              <div className="item">
                                <p>
                                  <span style={{ fontSize: "12pt" }}>
                                    ⭐ Giảm ngay{" "}
                                    <strong>
                                      <span style={{ color: "#ff0000" }}>
                                        100.000đ
                                      </span>
                                    </strong>{" "}
                                    khi mua thêm{" "}
                                    <span style={{ color: "#ff0000" }}>
                                      <strong>
                                        <a
                                          style={{ color: "#ff0000" }}
                                          href="/man-hinh-may-tinh"
                                        >
                                          Màn Hình Máy Tính
                                        </a>
                                      </strong>
                                    </span>
                                    .
                                  </span>
                                </p>
                              </div>
                              <div className="item">
                                <p>
                                  <span style={{ fontSize: "12pt" }}>
                                    ⭐ Giảm ngay{" "}
                                    <strong>
                                      <span style={{ color: "#ff0000" }}>
                                        200.000đ
                                      </span>
                                    </strong>{" "}
                                    khi mua thêm{" "}
                                    <strong>
                                      <span style={{ color: "#ff0000" }}>
                                        <a
                                          style={{ color: "#ff0000" }}
                                          href="/ram-bo-nho-trong"
                                        >
                                          RAM
                                        </a>
                                      </span>
                                    </strong>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Carousel>
            )}
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{
          padding: "0 12px",
        }}
      >
        <div className="home-box-group js-product-container loaded">
          <div className="box-title-group">
            <h2 className="box-title">PC Thiết Kế Đồ Họa 3D</h2>
            <div className="box-cat-list">
              <a href="/hhpc-3d-lumion" title="HHPC 3D Lumion">
                <h3>HHPC 3D Lumion</h3>
              </a>
              <a href="/hhpc-3d" title="HHPC 3D">
                <h3>HHPC 3D</h3>
              </a>
              <a href="/pc-workstation" className="font-600">
                Xem tất cả
              </a>
            </div>
          </div>
          <div className="p-container" id="js-product-1">
            <Carousel
              delay={4000}
              navigation={false}
              pagination={false}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
            >
              {data?.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="p-item">
                    <Link to={`/product/${item.slugProduct}`} className="p-img">
                      <img
                        src={`${item.images[0].imagePath}`}
                        alt="HHPC 3D i5 13600K | 32G | NVIDIA RTX 3060 12G"
                        width={250}
                        height={250}
                      />
                    </Link>
                    <div className="p-text">
                      <a
                        href="/hhpc-3d-lumion-i5-13600k-32g-nvidia-rtx-3060-12g"
                        className="p-name"
                      >
                        <h3 className="inherit">
                          HHPC 3D i5 13600K | 32G | NVIDIA RTX 3060 12G
                        </h3>
                      </a>
                      <div className="p-price-group">
                        <span className="p-price">23.950.000 đ</span>
                        <del className="p-old-price">26.500.000 đ</del>
                        <span className="p-discount">(Tiết kiệm: 10%)</span>
                      </div>
                      <div className="p-btn-group">
                        <p>
                          <span style={{ color: "#0DB866" }}>
                            <i className="icons icon-check" /> Còn hàng
                          </span>
                          <span style={{ color: "#A3A3A3" }}>
                            <i className="icons icon-gift" /> Quà tặng
                          </span>
                        </p>
                        <a
                          href="javascript:void(0)"
                          className="p-add-cart"
                          onclick="addProductToCart(3792, 1,'')"
                        />
                      </div>
                    </div>
                    <div className="p-tooltip">
                      <p className="tooltip-title">
                        HHPC 3D i5 13600K | 32G | NVIDIA RTX 3060 12G
                      </p>
                      <div className="tooltip-content">
                        <table>
                          <tbody>
                            <tr>
                              <td>Giá bán</td>
                              <td>
                                <span className="tooltip-price">
                                  23.950.000 đ
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>Bảo hành</td>
                              <td>36 tháng</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="tooltip-content-item">
                          <b className="title">
                            <i className="tooltip-icon icon-doc" /> Thông số sản
                            phẩm
                          </b>
                          <div className="tooltip-content-list">
                            <div className="item">
                              CPU : INTEL CORE i5 13600K up 5.1GHz | 14 CORE |
                              20 THREAD
                            </div>
                            <div className="item">
                              RAM : 32GB DDR4 3600 MHz (2x16G)
                            </div>
                            <div className="item">
                              VGA : MANLI RTX 3060 12GB GDDR6
                            </div>
                          </div>
                        </div>
                        <div className="tooltip-content-item">
                          <b className="title">
                            <i className="tooltip-icon icon-gift" /> Chương
                            trình khuyến mãi
                          </b>
                          <div className="tooltip-content-list">
                            <div className="item">
                              <p>
                                <span
                                  style={{
                                    color: "#ff0000",
                                    fontSize: "12pt",
                                  }}
                                >
                                  <strong>
                                    ƯU ĐÃI KHI MUA KÈM PC TẠI HOÀNG HÀ PC
                                  </strong>
                                </span>
                              </p>
                            </div>
                            <div className="item">
                              <p>
                                <span style={{ fontSize: "12pt" }}>
                                  ⭐ Tặng ngay{" "}
                                  <span
                                    style={{
                                      fontSize: "13pt",
                                      color: "#ff0000",
                                    }}
                                  >
                                    <strong>
                                      bộ phím chuột và bàn di chuột + 5 mét dây
                                      mạng
                                    </strong>
                                  </span>{" "}
                                  khi mua cấu hình PC trên{" "}
                                </span>
                              </p>
                            </div>
                            <div className="item">
                              <p>
                                <span style={{ fontSize: "12pt" }}>
                                  ⭐ Giảm ngay{" "}
                                  <strong>
                                    <span style={{ color: "#ff0000" }}>
                                      100.000đ
                                    </span>
                                  </strong>{" "}
                                  khi mua thêm{" "}
                                  <span style={{ color: "#ff0000" }}>
                                    <strong>
                                      <a
                                        style={{ color: "#ff0000" }}
                                        href="/man-hinh-may-tinh"
                                      >
                                        Màn Hình Máy Tính
                                      </a>
                                    </strong>
                                  </span>
                                  .
                                </span>
                              </p>
                            </div>
                            <div className="item">
                              <p>
                                <span style={{ fontSize: "12pt" }}>
                                  ⭐ Giảm ngay{" "}
                                  <strong>
                                    <span style={{ color: "#ff0000" }}>
                                      200.000đ
                                    </span>
                                  </strong>{" "}
                                  khi mua thêm{" "}
                                  <strong>
                                    <span style={{ color: "#ff0000" }}>
                                      <a
                                        style={{ color: "#ff0000" }}
                                        href="/ram-bo-nho-trong"
                                      >
                                        RAM
                                      </a>
                                    </span>
                                  </strong>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Carousel>
          </div>
        </div>

        <div classname="container" style={{ backgroundColor: "#eee" }}>
          <div
            className="home-box-group js-product-container loaded"
            data-id={1}
            style={{
              padding: "0 20px 24px",
              marginRight: "38px",
              marginLeft: "38px",
            }}
          >
            <div className="box-title-group">
              <h2 className="box-title">PC Thiết Kế Đồ Họa 3D</h2>
              <div className="box-cat-list">
                <a href="/hhpc-3d-lumion" title="HHPC 3D Lumion">
                  <h3>HHPC 3D Lumion</h3>
                </a>
                <a href="/hhpc-3d" title="HHPC 3D">
                  <h3>HHPC 3D</h3>
                </a>
                <a href="/pc-workstation" className="font-600">
                  Xem tất cả
                </a>
              </div>
            </div>
            <div
              className="p-container"
              id="js-collection-holder"
              style={{
                marginTop: "25px",
              }}
            >
              <Carousel
                delay={4000}
                spaceBetween={12}
                navigation={false}
                pagination={false}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
              >
                {data?.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="p-item">
                      <a href={`${item.slugProduct}`} className="p-img">
                        <img
                          src={`${item.images[0].imagePath}`}
                          alt="HHPC 3D i5 13600K | 32G | NVIDIA RTX 3060 12G"
                          width={250}
                          height={250}
                        />
                      </a>
                      <div className="p-text">
                        <a href={`${item.slugProduct}`} className="p-name">
                          <h3 className="inherit">{item.nameProduct}</h3>
                        </a>
                        <div className="p-price-group">
                          <span className="p-price">
                            {item.price_has_dropped}
                          </span>
                          <del className="p-old-price">
                            {item.initial_price}
                          </del>
                          <span className="p-discount">(Tiết kiệm: 10%)</span>
                        </div>
                        <div className="p-btn-group">
                          <p>
                            <span style={{ color: "#0DB866" }}>
                              <i className="icons icon-check" /> Còn hàng
                            </span>
                            <span style={{ color: "#A3A3A3" }}>
                              <i className="icons icon-gift" /> Quà tặng
                            </span>
                          </p>
                          <a
                            href="javascript:void(0)"
                            className="p-add-cart"
                            onclick="addProductToCart(3792, 1,'')"
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Carousel>
            </div>
          </div>
          <div
            className="home-box-group js-product-container loaded"
            data-id={91}
            style={{
              padding: "0 20px 24px",
              marginRight: "38px",
              marginLeft: "38px",
            }}
          >
            <div className="box-title-group">
              <h2 className="box-title">PC Render, Edit Video</h2>
              <div className="box-cat-list">
                <a href="/hhpc-adobe" title="HHPC Adobe">
                  <h3>HHPC Adobe</h3>
                </a>
                <a
                  href="/hhpc-workstation-render-edit-video"
                  className="font-600"
                >
                  Xem tất cả
                </a>
              </div>
            </div>
            <div
              className="p-container"
              id="js-collection-holder"
              style={{
                marginTop: "25px",
              }}
            >
              <Carousel
                delay={4000}
                spaceBetween={12}
                navigation={false}
                pagination={false}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
              >
                {data?.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="p-item">
                      <a href={`${item.slugProduct}`} className="p-img">
                        <img
                          src={`${item.images[0].imagePath}`}
                          alt="HHPC 3D i5 13600K | 32G | NVIDIA RTX 3060 12G"
                          width={250}
                          height={250}
                        />
                      </a>
                      <div className="p-text">
                        <a href={`${item.slugProduct}`} className="p-name">
                          <h3 className="inherit">{item.nameProduct}</h3>
                        </a>
                        <div className="p-price-group">
                          <span className="p-price">
                            {item.price_has_dropped}
                          </span>
                          <del className="p-old-price">
                            {item.initial_price}
                          </del>
                          <span className="p-discount">(Tiết kiệm: 10%)</span>
                        </div>
                        <div className="p-btn-group">
                          <p>
                            <span style={{ color: "#0DB866" }}>
                              <i className="icons icon-check" /> Còn hàng
                            </span>
                            <span style={{ color: "#A3A3A3" }}>
                              <i className="icons icon-gift" /> Quà tặng
                            </span>
                          </p>
                          <a
                            href="javascript:void(0)"
                            className="p-add-cart"
                            onclick="addProductToCart(3792, 1,'')"
                          />
                        </div>
                      </div>
                      <div className="p-tooltip">
                        <p className="tooltip-title">
                          HHPC 3D i5 13600K | 32G | NVIDIA RTX 3060 12G
                        </p>
                        <div className="tooltip-content">
                          <table>
                            <tbody>
                              <tr>
                                <td>Giá bán</td>
                                <td>
                                  <span className="tooltip-price">
                                    23.950.000 đ
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Bảo hành</td>
                                <td>36 tháng</td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="tooltip-content-item">
                            <b className="title">
                              <i className="tooltip-icon icon-doc" /> Thông số
                              sản phẩm
                            </b>
                            <div className="tooltip-content-list">
                              <div className="item">
                                CPU : INTEL CORE i5 13600K up 5.1GHz | 14 CORE |
                                20 THREAD
                              </div>
                              <div className="item">
                                RAM : 32GB DDR4 3600 MHz (2x16G)
                              </div>
                              <div className="item">
                                VGA : MANLI RTX 3060 12GB GDDR6
                              </div>
                            </div>
                          </div>
                          <div className="tooltip-content-item">
                            <b className="title">
                              <i className="tooltip-icon icon-gift" /> Chương
                              trình khuyến mãi
                            </b>
                            <div className="tooltip-content-list">
                              <div className="item">
                                <p>
                                  <span
                                    style={{
                                      color: "#ff0000",
                                      fontSize: "12pt",
                                    }}
                                  >
                                    <strong>
                                      ƯU ĐÃI KHI MUA KÈM PC TẠI HOÀNG HÀ PC
                                    </strong>
                                  </span>
                                </p>
                              </div>
                              <div className="item">
                                <p>
                                  <span style={{ fontSize: "12pt" }}>
                                    ⭐ Tặng ngay{" "}
                                    <span
                                      style={{
                                        fontSize: "13pt",
                                        color: "#ff0000",
                                      }}
                                    >
                                      <strong>
                                        bộ phím chuột và bàn di chuột + 5 mét
                                        dây mạng
                                      </strong>
                                    </span>{" "}
                                    khi mua cấu hình PC trên{" "}
                                  </span>
                                </p>
                              </div>
                              <div className="item">
                                <p>
                                  <span style={{ fontSize: "12pt" }}>
                                    ⭐ Giảm ngay{" "}
                                    <strong>
                                      <span style={{ color: "#ff0000" }}>
                                        100.000đ
                                      </span>
                                    </strong>{" "}
                                    khi mua thêm{" "}
                                    <span style={{ color: "#ff0000" }}>
                                      <strong>
                                        <a
                                          style={{ color: "#ff0000" }}
                                          href="/man-hinh-may-tinh"
                                        >
                                          Màn Hình Máy Tính
                                        </a>
                                      </strong>
                                    </span>
                                    .
                                  </span>
                                </p>
                              </div>
                              <div className="item">
                                <p>
                                  <span style={{ fontSize: "12pt" }}>
                                    ⭐ Giảm ngay{" "}
                                    <strong>
                                      <span style={{ color: "#ff0000" }}>
                                        200.000đ
                                      </span>
                                    </strong>{" "}
                                    khi mua thêm{" "}
                                    <strong>
                                      <span style={{ color: "#ff0000" }}>
                                        <a
                                          style={{ color: "#ff0000" }}
                                          href="/ram-bo-nho-trong"
                                        >
                                          RAM
                                        </a>
                                      </span>
                                    </strong>
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
