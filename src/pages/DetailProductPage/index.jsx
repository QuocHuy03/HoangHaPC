import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import SliderImages from "../../components/SliderImages";
import { imageProduct } from "../../constants/imageProduct";
import { Rating } from "react-simple-star-rating";
import Carousel from "../../components/Carousel";
import { bannerImages } from "../../constants/image";
import { SwiperSlide } from "swiper/react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { productService } from "../../services/product.service";
import { formatPrice } from "./../../utils/fomatPrice";

export default function DetailProductPage() {
  const [isSeeMore, setIsSeeMore] = useState(true);
  const [isReview, setIsReview] = useState(true);
  const [rating, setRating] = useState(0);
  const toggleSeeMore = () => {
    setIsSeeMore(!isSeeMore);
  };
  const toggleReview = () => {
    setIsReview(!isReview);
  };
  const handleRating = (rate) => {
    setRating(rate);
  };

  const { slug } = useParams();
  const [isSlug, setSlug] = useState(null);
  useEffect(() => {
    if (slug) {
      setSlug(slug);
    }
  }, [slug]);
  // console.log("slug : ", isSlug);

  const { data, isLoading } = useQuery({
    queryKey: ["edit-product", isSlug],
    queryFn: () => productService.fetchProductBySlug(isSlug),
    staleTime: 500,
    enabled: !!isSlug,
  });
  
  const { data: isProduct, isloading: loadingProduct } = useQuery(
    ["product"],
    () => productService.fetchAllProducts(),
    {
      retry: 3,
      retryDelay: 1000,
    }
  );
  return (
    <Layout>
      <div className="global-breadcrumb">
        <div className="container">
          <ol
            itemScope
            itemType="http://schema.org/BreadcrumbList"
            className="ul clearfix"
          >
            <li
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/ListItem"
            >
              <a href="/" itemProp="item" className="nopad-l">
                <span itemProp="name">Trang chủ</span>
              </a>
              <meta itemProp="position" content={1} />
            </li>
            <li
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/ListItem"
            >
              <a href="/pc-workstation" itemProp="item">
                <span itemProp="name">PC Thiết Kế Đồ Họa 3D</span>
              </a>
              <meta itemProp="position" content={2} />
            </li>
            <li
              itemProp="itemListElement"
              itemScope
              itemType="http://schema.org/ListItem"
            >
              <a href="/hhpc-3d-lumion" itemProp="item">
                <span itemProp="name">HHPC 3D Lumion</span>
              </a>
              <meta itemProp="position" content={3} />
            </li>
          </ol>
        </div>
      </div>
      <div className="product-detail-page container">
        <div className="pd-box-group pd-info-container d-flex flex-wrap">
          <h1 className="pd-name w-100">{data?.nameProduct}</h1>
          <div className="pd-left-group">
            <SliderImages loop={true} images={data?.images} navigation={true} />
          </div>
          <div className="pd-middle-group text-14">
            <div className="pd-info-rating d-flex flex-wrap">
              <p>
                Đánh giá:
                <a
                  href="javascript:void(0)"
                  onclick='$("body,html").animate({ scrollTop: $("#pd-comment").offset().top - 100},800);'
                >
                  <i className="icon-star star-5" />{" "}
                  <span className="blue-2">1</span>
                </a>
              </p>
              <p>
                Bình luận: <span className="blue-2">1</span>
              </p>
              <p>
                Lượt xem: <span className="blue-2">7.986</span>
              </p>
            </div>
            <div className="pd-summary-group">
              <b className="text-16 d-block font-700">Thông số sản phẩm</b>
              <div
                className="pd-summary-list"
                dangerouslySetInnerHTML={{
                  __html: data?.contentProduct,
                }}
              ></div>
            </div>
            <div className="pd-price-group">
              <span className="pd-price">
                {formatPrice(data?.price_has_dropped)} đ
              </span>
              <del className="pd-old-price">
                {formatPrice(data?.initial_price)} đ{" "}
              </del>
              <span className="pd-price-off">
                Tiết kiệm{" "}
                {formatPrice(data?.initial_price - data?.price_has_dropped)} đ
              </span>
              <span className="pd-warranty">Bảo hành 36 tháng</span>
            </div>
            <div className="pd-offer-group">
              <p className="title">
                <i className="icons icon-gift" />
                Quà tặng và ưu đãi kèm theo
              </p>
              <div className="pd-offer-list">
                <div className="item">
                  <p>
                    <span
                      style={{ color: "#ff0000", fontSize: "12pt" }}
                      dangerouslySetInnerHTML={{
                        __html: data?.presentProduct,
                      }}
                    ></span>
                  </p>
                </div>
              </div>
            </div>
            <div className="pd-btn-group d-flex flex-wrap">
              <a
                href="javascript:void(0)"
                className="pd-btn-buyNow"
                onclick="addProductToCart(3738, 1,'/cart')"
              >
                <b>MUA NGAY</b>
                <span>Giao hàng tận nơi nhanh chóng</span>
              </a>
              <a
                href="javascript:void(0)"
                className="pd-btn-add-product"
                onclick="addProductToCart(3738, 1,'')"
              >
                <b>THÊM VÀO GIỎ HÀNG</b>
                <span>Thêm vào giỏ để chọn tiếp</span>
              </a>
              <a
                href="/huong-dan-mua-tra-gop"
                target="_blank"
                className="pd-btn-payinstall"
              >
                <b>MUA TRẢ GÓP</b>
                <span>Thủ tục đơn giản</span>
              </a>
            </div>
          </div>
          <div className="pd-right-group">
            <div className="box-static-item">
              <p className="box-title">Sản phẩm còn hàng tại</p>
              <div className="static-text box-address-list">
                <div>
                  <b>Showroom Miền Bắc:</b>
                  <a
                    href="https://goo.gl/maps/56ARHjWKoVhpWBCF6"
                    target="_blank"
                    rel="nofollow"
                  >
                    41 Khúc Thừa Dụ, Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội
                  </a>
                  <a
                    href="https://g.page/hoanghapc?share"
                    target="_blank"
                    rel="nofollow"
                  >
                    94E-94F Đường Láng, Phường Ngã Tư Sở, Quận Đống Đa, Hà Nội
                  </a>
                </div>
                <div>
                  <b>Showroom Miền Trung:</b>
                  <a
                    href="https://goo.gl/maps/1HQrD6mdf4VMYccs6"
                    target="_blank"
                    rel="nofollow"
                  >
                    72 Lê Lợi, Thành Phố Vinh, Nghệ An
                  </a>
                </div>
                <div>
                  <b>Showroom Miền Nam:</b>
                  <a
                    href="https://g.page/hoanghapchcm?share"
                    target="_blank"
                    rel="nofollow"
                  >
                    260 Lý Thường Kiệt, Phường 14, Quận 10, Hồ Chí Minh
                  </a>
                </div>
                <i>
                  Chú ý: Sản phẩm có thể điều chuyển kho theo yêu cầu của quý
                  khách.
                </i>
              </div>
            </div>
            <div className="box-static-item">
              <p className="box-title">Yên Tâm Mua Sắm Tại HoangHaPC</p>
              <div className="static-text static-text-list">
                <p className="item">Đội ngũ kỹ thuật tư vấn chuyên sâu</p>
                <p className="item">Thanh toán thuận tiện</p>
                <p className="item">Sản phẩm 100% chính hãng</p>
                <p className="item">Bảo hành 1 đổi 1 tại nơi sử dụng</p>
                <p className="item">Giá cạnh tranh nhất thị trường</p>
              </div>
            </div>
            <div className="box-static-item">
              <p className="box-title">Liên Hệ Với Kinh Doanh Online</p>
              <div className="static-text static-hotline-list">
                <div className="item">
                  <i className="icons icon-phone" />
                  <p className="text">
                    Hotline Hà Nội: <span className="red">0969.123.666</span>
                  </p>
                </div>
                <div className="item">
                  <i className="icons icon-phone" />
                  <p className="text">
                    Hotline Vinh, Nghệ An:{" "}
                    <span className="red">0988.163.666</span>
                  </p>
                </div>
                <div className="item">
                  <i className="icons icon-phone" />
                  <p className="text">
                    Hotline Hồ Chí Minh:{" "}
                    <span className="red">0968.123.666</span>
                  </p>
                </div>
                <div className="item">
                  <i className="icons icon-phone" />
                  <p className="text">
                    Hotline Bảo Hành: <span className="red">1900.6100</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="box-static-item box-qr-code">
              <p>
                Tham gia Cộng đồng "Cẩm Nang Build PC - Đồ Họa, Render, Giả Lập"
                để theo dõi thường xuyên ưu đãi dành riêng cho thành viên
              </p>
              <img
                src="https://hoanghapc.vn/media/lib/17-10-2022/qr-hoang-ha-pc-nhom.png"
                alt="QR Tham gia nhóm Cẩm nang Build PC"
              />
            </div>
          </div>
        </div>
        {/* Detail Product Page */}
        <div className="row product-detail-row">
          <div className="col-8">
            <div className="pd-box-group js-static-container">
              <h2 className="box-title">Đánh giá {data?.nameProduct}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data?.descriptionProduct,
                }}
                className={
                  isSeeMore
                    ? "pd-content-holder js-static-content bg-content"
                    : "pd-content-holder js-static-content"
                }
                style={isSeeMore ? { height: 550 } : { height: "auto" }}
              ></div>
              <div className="btn-html-content">
                <a
                  onClick={toggleSeeMore}
                  className="js-showmore-button content-button"
                  style={{ display: "block", cursor: "pointer" }}
                >
                  {isSeeMore ? (
                    <div
                      style={{
                        color: "#1988EC",
                      }}
                    >
                      Xem thêm{" "}
                      <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </div>
                  ) : (
                    <div style={{ color: "#1988EC" }}>
                      Thu gọn{" "}
                      <i className="fas fa-angle-up" aria-hidden="true"></i>
                    </div>
                  )}
                </a>
              </div>
            </div>
            <div className="pd-box-group" id="pd-comment">
              <p className="box-title border-0">Đánh giá nhận xét</p>
              <div className="pd-content-holder">
                <div className="box-produc-review clearfix content-detail-read">
                  <div className="box-review-content">
                    <div className="review-all-rate">
                      <div className="rate-rar">
                        <div className="num">5</div>
                        <div className="icons-star-rar">
                          <img
                            src="https://i.imgur.com/Fz8kCVx.png"
                            alt="rate"
                          />
                        </div>
                      </div>
                      <div className="tt-rar">1 Đánh giá</div>
                    </div>
                    <div className="rate-review-center">
                      <ul className="ul">
                        <li>
                          <span className="blue">
                            5 <i className="fa fa-star" aria-hidden="true" />
                          </span>
                          <div className="line-rating">
                            <span
                              className="percent percent5"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <span className="total-rv">1 Đánh giá</span>
                        </li>
                        <li>
                          <span className="blue">
                            4 <i className="fa fa-star" aria-hidden="true" />
                          </span>
                          <div className="line-rating">
                            <span
                              className="percent percent4"
                              style={{ width: "0%" }}
                            />
                          </div>
                          <span className="total-rv">0 Đánh giá</span>
                        </li>
                        <li>
                          <span className="blue">
                            3 <i className="fa fa-star" aria-hidden="true" />
                          </span>
                          <div className="line-rating">
                            <span
                              className="percent percent3"
                              style={{ width: "0%" }}
                            />
                          </div>
                          <span className="total-rv">0 Đánh giá</span>
                        </li>
                        <li>
                          <span className="blue">
                            2 <i className="fa fa-star" aria-hidden="true" />
                          </span>
                          <div className="line-rating">
                            <span
                              className="percent percent2"
                              style={{ width: "0%" }}
                            />
                          </div>
                          <span className="total-rv">0 Đánh giá</span>
                        </li>
                        <li>
                          <span className="blue">
                            1 <i className="fa fa-star" aria-hidden="true" />
                          </span>
                          <div className="line-rating">
                            <span
                              className="percent percent1"
                              style={{ width: "0%" }}
                            />
                          </div>
                          <span className="total-rv">0 Đánh giá</span>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="rate-riview-right"
                      onClick={toggleReview}
                      style={{ cursor: "pointer" }}
                    >
                      <a className="show-form-review">
                        {isReview ? "Gửi đánh giá" : "Đóng gói"}
                      </a>
                    </div>
                    <div
                      className="form-review"
                      style={
                        isReview ? { display: "none" } : { display: "block" }
                      }
                    >
                      <form>
                        <div className="star-rank">
                          <span style={{ float: "left" }}>
                            Chọn đánh giá của bạn
                          </span>
                          <div
                            className="rating-comment"
                            style={{ float: "left", marginLeft: 20 }}
                            id="select-rate-pro"
                          >
                            <Rating
                              size={20}
                              onClick={handleRating}
                              initialValue={rating}
                            />
                          </div>
                          <span id="star_tip" style={{ display: "inline" }}>
                            Quá tuyệt vời
                          </span>
                        </div>
                        <div className="form-review-left">
                          <textarea
                            name="user_post[content]"
                            id="review_reply_content_0"
                            cols={30}
                            rows={10}
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-review-right">
                          <input
                            type="text"
                            id="review_reply_name_0"
                            placeholder="Họ tên*"
                          />
                          <input
                            type="text"
                            id="review_reply_tel_0"
                            placeholder="Số điện thoại*"
                          />
                          <input
                            type="text"
                            id="review_reply_email_0"
                            placeholder="Email*"
                          />
                          <input
                            type="submit"
                            id="submit-review"
                            defaultValue="Gửi đánh giá"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="box-review-list">
                    <div className="item">
                      <div className="name-date">
                        <b>Nguyễn Tiến Minh</b> | Ngày 18-10-2022, 10:49 am
                      </div>
                      <div className="content d-flex align-items-center">
                        <span className="star-rate-review icon-star star-5" />
                        <span className="txt">sản phẩm lần này ổn áp nhỉ</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-produc-comment bg-w content-detail-read clearfix">
                  <div className="form-comment">
                    <textarea
                      id="comment_reply_content_0"
                      name="user_post[content]"
                      placeholder="Mời bạn để lại bình luận..."
                      defaultValue={""}
                    />
                    <div className="send-comment clearfix">
                      <a
                        href="https://hoanghapc.vn/chinh-sach-quy-dinh-chung"
                        className="qd-cmt"
                        target="_blank"
                      >
                        Quy định đăng bình luận
                      </a>
                      <a
                        className="btn-send-form-cmt"
                        href="javascript:void(0)"
                        onclick="reviewReply('comment','',0)"
                      >
                        Gửi bình luận
                      </a>
                    </div>
                  </div>
                  <div className="comment-list clearfix"></div>
                  <div id="newCommentBox" style={{ display: "none" }}>
                    <div className="comment-box-container">
                      <div className="title">
                        Nhập thông tin
                        <a
                          href="javascript:closeCommentBox();"
                          className="back-btn"
                        >
                          <i className="fa fa-arrow-left" aria-hidden="true" />
                        </a>
                      </div>
                      <div className="form-wrap">
                        <input
                          type="hidden"
                          name="user_post[item_type]"
                          defaultValue="product"
                          id="item_type_2020"
                        />
                        <input
                          type="hidden"
                          name="user_post[item_id]"
                          defaultValue={3738}
                          id="item_id_2020"
                        />
                        <input
                          type="hidden"
                          name="user_post[item_title]"
                          defaultValue="HHPC 3D LUMION i9 13900K | 64G DDR5 | NVIDIA RTX 4090 24GB"
                          id="item_item_title_2020"
                        />
                        <input
                          type="hidden"
                          name="user_post[rate]"
                          defaultValue={0}
                          id="item_rate_2020"
                        />
                        <input
                          type="hidden"
                          name="user_post[title]"
                          defaultValue="HHPC 3D LUMION i9 13900K | 64G DDR5 | NVIDIA RTX 4090 24GB"
                        />
                        <div className="sex">
                          <label>
                            <span className="radio">
                              <input
                                type="radio"
                                defaultValue="Anh"
                                name="sex"
                                defaultChecked
                              />
                              <span className="icon" />
                            </span>{" "}
                            Anh
                          </label>
                          <label>
                            <span className="radio">
                              <input
                                type="radio"
                                defaultValue="chị"
                                name="sex"
                              />
                              <span className="icon" />
                            </span>{" "}
                            chị
                          </label>
                        </div>
                        <input
                          type="text"
                          placeholder="Họ tên (bắt buộc)"
                          id="comment_box_name"
                        />
                        <input
                          type="text"
                          placeholder="Email (để nhận phản hồi qua mail)"
                          id="comment_box_email"
                        />
                        <input
                          type="text"
                          placeholder="Số điện thoại (để nhận phản hồi )"
                          id="comment_box_tel"
                        />
                        <button type="submit" onclick id="change-submit-2020">
                          {" "}
                          Cập nhật
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div
              className="pd-box-group"
              dangerouslySetInnerHTML={{
                __html: data?.specificationsProduct,
              }}
            ></div>

            <div className="pd-box-group">
              <p className="box-title mb-0">Tin tức mới nhất</p>
              <div className="pd-art-group">
                <div className="item">
                  <a href="/cau-hinh-may-tinh-do-hoa" className="item-img">
                    <img
                      data-src="https://hoanghapccdn.com/media/news/14_pc_do_hoa_hoanghapc_min.jpg"
                      alt="10 Cấu Hình Máy Tính Đồ Họa Theo Ngân Sách✔️"
                      width={352}
                      height={235}
                      className="lazy w-auto h-auto loaded"
                      src="https://hoanghapccdn.com/media/news/14_pc_do_hoa_hoanghapc_min.jpg"
                      data-was-processed="true"
                    />
                  </a>
                  <div className="item-text">
                    <a href="/cau-hinh-may-tinh-do-hoa" className="item-title">
                      10 Cấu Hình Máy Tính Đồ Họa Theo Ngân Sách✔️
                    </a>
                    <div className="item-summary">
                      Cấu hình máy tính đồ họa chuyên dụng cho công việc thiết
                      kế đồ họa, làm phim, Render và xử lý các thuật toán AI trí
                      tuệ nhân tạo phù hợp nhất mọi công ...
                    </div>
                  </div>
                </div>
                <div className="item">
                  <a
                    href="/cau-hinh-may-tinh-chay-gia-lap-nox-player"
                    className="item-img"
                  >
                    <img
                      data-src="https://hoanghapccdn.com/media/news/18_pc_gia_lap_1.jpg"
                      alt="Cấu Hình Máy Tính Chạy Giả Lập Nox Player, LDPlayer"
                      width={352}
                      height={235}
                      className="lazy w-auto h-auto loaded"
                      src="https://hoanghapccdn.com/media/news/18_pc_gia_lap_1.jpg"
                      data-was-processed="true"
                    />
                  </a>
                  <div className="item-text">
                    <a
                      href="/cau-hinh-may-tinh-chay-gia-lap-nox-player"
                      className="item-title"
                    >
                      Cấu Hình Máy Tính Chạy Giả Lập Nox Player, LDPlayer
                    </a>
                    <div className="item-summary">
                      Cấu hình máy tính chạy giả lập trên Noxplayer, LD Player,
                      chạy 10 tab, 20 tab, 30 tab giả lập mượt, chơi mọi game
                      mobile giá cực rẻ tại Hoàng Hà PC.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pd-product-related-group">
          <div className="pd-box-title">
            <a
              href="javascript:void(0)"
              className="js-box-title active"
              data-id="js-pd-related"
            >
              Sản phẩm tương tự
            </a>
            <a
              href="javascript:void(0)"
              className="js-box-title"
              data-id="js-history"
            >
              Sản phẩm đã xem
            </a>
          </div>
          <div
            className="p-container js-product"
            id="js-pd-related"
            style={{ minHeight: 432 }}
          >
            {/* slide sản phẩm  */}
            <Carousel
              spaceBetween={12}
              delay={4000}
              navigation={false}
              pagination={false}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
            >
              {isProduct?.map((item) => (
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
                    <Link
                        to={`/product/${item.slugProduct}`}
                        className="p-name"
                      >
                        <h3 className="inherit">{item.nameProduct}</h3>
                      </Link>
                      <div className="p-price-group">
                      <span className="p-price">{formatPrice(item.initial_price)}đ</span>
                        <del className="p-old-price">
                          {formatPrice(item.price_has_dropped)} đ
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
          <div
            className="p-container js-product d-none"
            id="js-history"
            style={{ minHeight: 432 }}
          >
            <div className="owl-carousel owl-theme custom-nav owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(0px, 0px, 0px)",
                    transition: "all 0s ease 0s",
                  }}
                >
                  <div className="owl-item">
                    <div className="p-item">
                      <a
                        href="/hhpc-3d-lumion-i9-13900k-64g-nvidia-rtx-4090-24gb"
                        className="p-img"
                      >
                        <img
                          src="https://hoanghapccdn.com/media/product/250_3738_i9_13900k_4090_1.jpg"
                          alt="HHPC 3D LUMION i9 13900K | 64G DDR5 | NVIDIA RTX 4090 24GB"
                          width={250}
                          height={250}
                        />
                      </a>
                      <div className="p-text">
                        <a
                          href="/hhpc-3d-lumion-i9-13900k-64g-nvidia-rtx-4090-24gb"
                          className="p-name"
                        >
                          <h3 className="inherit">
                            HHPC 3D LUMION i9 13900K | 64G DDR5 | NVIDIA RTX
                            4090 24GB
                          </h3>
                        </a>
                        <div className="p-price-group">
                          <span className="p-price">80.850.000 đ</span>
                          <del className="p-old-price">89.000.000 đ</del>
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
                            onclick="addProductToCart(3738, 1,'')"
                          />
                        </div>
                      </div>
                      <div className="p-tooltip">
                        <p className="tooltip-title">
                          HHPC 3D LUMION i9 13900K | 64G DDR5 | NVIDIA RTX 4090
                          24GB
                        </p>
                        <div className="tooltip-content">
                          <table>
                            <tbody>
                              <tr>
                                <td>Giá bán</td>
                                <td>
                                  <span className="tooltip-price">
                                    80.850.000 đ
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
                                CPU : INTEL CORE i9 13900K up 5.8GHz | 24 CORE |
                                32 THREAD
                              </div>
                              <div className="item">
                                RAM : DDR5 64GB 5200 MHz (2x32G)
                              </div>
                              <div className="item">
                                VGA : NVIDIA GEFORCE RTX 4090 24G GDDR6X
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
                  </div>
                </div>
              </div>
              <div className="owl-nav disabled">
                <button type="button" role="presentation" className="owl-prev">
                  <i className="arrow" />
                </button>
                <button type="button" role="presentation" className="owl-next">
                  <i className="arrow arrow-right" />
                </button>
              </div>
              <div className="owl-dots disabled" />
              <div className="owl-thumbs" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
