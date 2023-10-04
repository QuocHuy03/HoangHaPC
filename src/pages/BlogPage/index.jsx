import React from "react";

import { useQuery } from "@tanstack/react-query";

import Layout from "../../components/Layout";
import { blogService } from "../../services/blog.service";

import { Link } from "react-router-dom";

export default function BlogPage() {
  const { data, isLoading } = useQuery(
    ["blog"],
    () => blogService.fetchAllBlogs(),
    {
      retry: 3,
      retryDelay: 1000,
    }
  );

  return (
    <Layout>
      <div className="article-page article-home-page">
        <div className="art-category-group">
          <a href="/may-khoe-may-dep">Máy Khỏe - Máy Đẹp</a>
          <a href="/tin-cong-nghe">Tin Công Nghệ</a>
          <a href="/review-san-pham">Review Sản Phẩm</a>
          <a href="/benchmarks">Benchmarks</a>
          <a href="/blog">Blog Thủ Thuật</a>
          <a href="/tin-game">Tin Tức Game</a>
          <a href="/wiki">Wiki</a>
          <a href="/tin-khuyen-mai">Tin Khuyến Mãi</a>
        </div>
        <div className="container">
          <div className="row top-article-group">
            <div className="col-8">
              <div>
                <img
                  src="https://hoanghapccdn.com/media/news/62_pc_streamer.jpg"
                  alt=""
                />
                <div class="item-text">
                  <Link
                    to="/tin-tuc/cau-hinh-may-tinh-dung-phim"
                    class="item-title"
                  >
                    17 Cấu Hình Máy Tính Dựng Phim, Render Edit Video Theo Ngân
                    Sách 2023
                  </Link>

                  <p class="item-icon">
                    <i class="icons icon-edit"></i> <span>By Mai Văn Học</span>
                  </p>

                  <p class="item-icon item-time">
                    <i class="icons icon-plan"></i>
                    <span>04-07-2023, 3:16 pm</span>
                  </p>

                  <p class="item-icon">
                    <i class="icons icon-cat"></i>
                    <span>Máy Khỏe - Máy Đẹp</span>
                  </p>

                  <Link
                    to="/tin-tuc/cau-hinh-may-tinh-dung-phim"
                    class="item-btn"
                  >
                    Đọc chi tiết
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="top-box-right-group">
                <p className="title">
                  <span>Tin nổi bật</span>
                </p>
                <div className="top-article-list">
                  {/**list blog */}
                  {data?.map((item) => (
                    <div className="top-art-item">
                      <Link
                        to="/tin-tuc/cau-hinh-may-tinh-choi-game"
                        className="top-art-title"
                      >
                        {item.titleBlog}
                      </Link>
                      <div className="top-art-time">
                        <span>
                          by <b>{item.userBlog}</b>
                        </span>{" "}
                        |<time>{item.createdAt}</time>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="art-box-group">
            <div className="box-title-group">
              <Link to="/tin-tuc/may-khoe-may-dep" className="box-title">
                <h2>Máy Khỏe - Máy Đẹp</h2>
              </Link>
              <div className="cat-child-list"></div>
            </div>
            <div className="article-list-container">
              <div className="art-item">
                <Link
                  to="/tin-tuc/cau-hinh-may-tinh-do-hoa"
                  className="art-img"
                >
                  <img
                    data-src="https://hoanghapccdn.com/media/news/14_pc_do_hoa_hoanghapc_min.jpg"
                    alt="10 Cấu Hình Máy Tính Đồ Họa Theo Ngân Sách✔️"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/14_pc_do_hoa_hoanghapc_min.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Máy Khỏe - Máy Đẹp</span>
                </Link>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>28-08-2023, 10:25 am</time>
                  </p>
                  <Link
                    to="/tin-tuc/cau-hinh-may-tinh-do-hoa"
                    className="art-title"
                  >
                    <h3 className="inherit">
                      10 Cấu Hình Máy Tính Đồ Họa Theo Ngân Sách✔️
                    </h3>
                  </Link>
                  <div className="art-hover">
                    <div className="art-summary">
                      Cấu hình máy tính đồ họa chuyên dụng cho công việc thiết
                      kế đồ họa, làm phim, Render và xử lý các thuật toán AI trí
                      tuệ nhân tạo phù hợp nhất mọi công việc.
                    </div>
                    <Link
                      to="/tin-tuc/cau-hinh-may-tinh-do-hoa"
                      className="art-btn"
                    >
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <a
                  href="/cau-hinh-may-tinh-chay-gia-lap-nox-player"
                  className="art-img"
                >
                  <img
                    data-src="https://hoanghapccdn.com/media/news/18_pc_gia_lap_1.jpg"
                    alt="Cấu Hình Máy Tính Chạy Giả Lập Nox Player, LDPlayer"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/18_pc_gia_lap_1.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Máy Khỏe - Máy Đẹp</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>04-07-2023, 3:17 pm</time>
                  </p>
                  <a
                    href="/cau-hinh-may-tinh-chay-gia-lap-nox-player"
                    className="art-title"
                  >
                    <h3 className="inherit">
                      Cấu Hình Máy Tính Chạy Giả Lập Nox Player, LDPlayer
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Cấu hình máy tính chạy giả lập trên Noxplayer, LD Player,
                      chạy 10 tab, 20 tab, 30 tab giả lập mượt, chơi mọi game
                      mobile giá cực rẻ tại Hoàng Hà PC.
                    </div>
                    <a
                      href="/cau-hinh-may-tinh-chay-gia-lap-nox-player"
                      className="art-btn"
                    >
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <Link
                  to="/tin-tuc/cau-hinh-may-tinh-dung-phim"
                  className="art-img"
                >
                  <img
                    data-src="https://hoanghapccdn.com/media/news/19_10_cau_hinh_6.jpg"
                    alt="17 Cấu Hình Máy Tính Dựng Phim, Render Edit Video Theo Ngân Sách 2023"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/19_10_cau_hinh_6.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Máy Khỏe - Máy Đẹp</span>
                </Link>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>04-07-2023, 3:16 pm</time>
                  </p>
                  <a href="/cau-hinh-may-tinh-dung-phim" className="art-title">
                    <h3 className="inherit">
                      17 Cấu Hình Máy Tính Dựng Phim, Render Edit Video Theo
                      Ngân Sách 2023
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Sức mạnh của bộ máy tính chuyên dụng dành cho làm phim,
                      Render Edit Video sẽ giúp các nhà sản xuất tối ưu hơn về
                      thời gian và nâng cao chất lượng sản phẩm.
                    </div>
                    <a href="/cau-hinh-may-tinh-dung-phim" className="art-btn">
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <a href="/may-tinh-stream" className="art-img">
                  <img
                    data-src="https://hoanghapccdn.com/media/news/62_pc_streamer.jpg"
                    alt="7 Cấu Hình Máy Tính Cho Streamer Livestream Chuyên Nghiệp 2023"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/62_pc_streamer.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Máy Khỏe - Máy Đẹp</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>04-07-2023, 1:57 pm</time>
                  </p>
                  <a href="/may-tinh-stream" className="art-title">
                    <h3 className="inherit">
                      7 Cấu Hình Máy Tính Cho Streamer Livestream Chuyên Nghiệp
                      2023
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Lựa chọn những cấu hình dành cho stream game càng ngày
                      càng phổ biến đối với các game thủ đặc biết là những người
                      muốn kiếm tiền từ những công việc trên.
                    </div>
                    <a href="/may-tinh-stream" className="art-btn">
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <a href="/cau-hinh-may-tinh-choi-game" className="art-img">
                  <img
                    data-src="https://hoanghapccdn.com/media/news/107_9100f_1060__1_.jpg"
                    alt="10 Cấu Hình Máy Tính Chơi Game Hot Nhất 2023"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/107_9100f_1060__1_.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Máy Khỏe - Máy Đẹp</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>04-07-2023, 1:44 pm</time>
                  </p>
                  <a href="/cau-hinh-may-tinh-choi-game" className="art-title">
                    <h3 className="inherit">
                      10 Cấu Hình Máy Tính Chơi Game Hot Nhất 2023
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Hoàng Hà PC xin chia sẻ top những cấu hình game dễ dàng
                      cân đối ngân sách cũng như thoải mái thưởng thức trong thế
                      giới game.
                    </div>
                    <a href="/cau-hinh-may-tinh-choi-game" className="art-btn">
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <a
                  href="/cau-hinh-may-tinh-chay-phan-mem-lumion-chuyen-dung"
                  className="art-img"
                >
                  <img
                    data-src="https://hoanghapccdn.com/media/news/205_case_i9_h500p.JPG"
                    alt="10 Cấu Hình Máy Tính Chạy Lumion✔️Chuyên Dụng"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/205_case_i9_h500p.JPG"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Máy Khỏe - Máy Đẹp</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>04-07-2023, 1:38 pm</time>
                  </p>
                  <Link
                    to="/tin-tuc/cau-hinh-may-tinh-chay-phan-mem-lumion-chuyen-dung"
                    className="art-title"
                  >
                    <h3 className="inherit">
                      10 Cấu Hình Máy Tính Chạy Lumion✔️Chuyên Dụng
                    </h3>
                  </Link>
                  <div className="art-hover">
                    <div className="art-summary">
                      Hoàng Hà PC xin được tư vấn tới anh em các yếu tố lựa chọn
                      xây dựng cấu hình máy tính cho Lumion dựa trên kinh nghiệm
                      cung cấp máy nhiều năm cho anh em Kiến Trúc.
                    </div>
                    <a
                      href="/cau-hinh-may-tinh-chay-phan-mem-lumion-chuyen-dung"
                      className="art-btn"
                    >
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Tin công nghệ */}
          <div className="art-other-box-group">
            <div className="col-8 col-item-left">
              <div className="box-title-group">
                <a href="/tin-cong-nghe" className="box-title">
                  <h2>Tin Công Nghệ</h2>
                </a>
              </div>
            </div>
            <div className="col-8 col-item-left">
              {/**list blog */}
              {data?.map((item) => (
                <div className="art-other-item">
                  <a
                    href="/intel-bo-ten-goi-core-i-tren-cac-dong-chip-moi"
                    className="art-other-img"
                  >
                    <img
                      data-src={`${item.imageBlog}`}
                      alt="Intel bỏ tên gọi Core i5, i7 trên các dòng chip mới"
                      width={1}
                      height={1}
                      className="lazy w-auto h-auto loaded"
                      src={`${item.imageBlog}`}
                      data-was-processed="true"
                    />
                  </a>
                  <div className="art-other-text">
                    <div className="art-other-time-group">
                      <div className="art-other-cat">#Tin Công Nghệ</div>
                      <div className="art-time">
                        <span>
                          by <b>{item.userBlog}</b>
                        </span>{" "}
                        |<time>{item.createdAt}</time>
                      </div>
                    </div>
                    <a
                      href="/intel-bo-ten-goi-core-i-tren-cac-dong-chip-moi"
                      className="art-other-title"
                    >
                      {item.titleBlog}
                    </a>
                    <div className="art-other-summary">{item.contentBlog}</div>
                    <a
                      href="/intel-bo-ten-goi-core-i-tren-cac-dong-chip-moi"
                      className="art-other-btn"
                    >
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-4 col-item-right">
              <div className="art-new-container">
                <p className="box-title">Tin mới nhất</p>
                <div className="box-scroll-group art-new-holder">
                  {data?.map((item) => (
                    <div className="item">
                      <a href="/cau-hinh-may-tinh-do-hoa" className="item-img">
                        <img
                          data-src={`${item.imageBlog}`}
                          alt="10 Cấu Hình Máy Tính Đồ Họa Theo Ngân Sách✔️"
                          width={1}
                          height={1}
                          className="lazy w-auto h-auto loaded"
                          src={`${item.imageBlog}`}
                          data-was-processed="true"
                        />
                        <span className="item-cat">Máy Khỏe - Máy Đẹp</span>
                      </a>
                      <div className="item-text">
                        <a
                          href="/cau-hinh-may-tinh-do-hoa"
                          className="item-title"
                        >
                          {item.titleBlog}
                        </a>
                        <div className="item-time art-time">
                          <span>
                            by <b>{item.userBlog}</b>
                          </span>{" "}
                          |<time>{item.createdAt}</time>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tin khuyến mãi  */}
          <div className="art-other-box-group">
            <div className="col-8 col-item-left">
              <div className="box-title-group">
                <a href="/tin-khuyen-mai" className="box-title">
                  <h2>Tin Khuyến Mãi</h2>
                </a>
              </div>
            </div>
            <div className="col-8 col-item-left">
              {/**list promotion */}
              {promotionData?.map((item) => (
                <div className="art-other-item">
                  <a
                    href={`/tin-tuc/${item.slugPromotion}`}
                    className="art-other-img"
                  >
                    <img
                      data-src={`${item.imagePromotion}`}
                      alt="Chương Trình Khuyến Mãi Giờ Vàng - Giá Sốc Tại Hoàng Hà PC"
                      width={1}
                      height={1}
                      className="lazy w-auto h-auto loaded"
                      src={`${item.imagePromotion}`}
                      data-was-processed="true"
                    />
                  </a>
                  <div className="art-other-text">
                    <div className="art-other-time-group">
                      <div className="art-other-cat">#Tin Khuyến Mãi</div>
                      <div className="art-time">
                        <span>
                          by <b>{item.userPromotion}</b>
                        </span>{" "}
                        |<time>{item.createdAt}</time>
                      </div>
                    </div>
                    <a
                      href={`/tin-tuc/${item.slugPromotion}`}
                      className="art-other-title"
                    >
                      {item.titlePromotion}
                    </a>
                    <div className="art-other-summary">
                      {item.contentPromotion}
                    </div>
                    <a
                      href={`/tin-tuc/${item.slugPromotion}`}
                      className="art-other-btn"
                    >
                      Xem chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="col-4 col-item-right"
              id="js-product-saleoff-container"
            >
              <div className="art-new-container">
                <p className="box-title">Sản Phẩm Khuyến Mãi</p>
                <div
                  className="box-scroll-group p-saleoff-holder position-relative"
                  id="js-product-saleoff-holder"
                >
                  <div className="p-item">
                    <a href="/cpu-intel-core-i9-13900k" className="p-img">
                      <img
                        src="https://hoanghapccdn.com/media/product/250_3547_13900k_sale_t5_2023_l1s.jpg"
                        alt="CPU Intel Core i9-13900K (5.8 GHz, 24 Nhân 32 Luồng, 36M Cache, Raptor Lake)"
                        width={250}
                        height={250}
                      />
                    </a>
                    <div className="p-text">
                      <a href="/cpu-intel-core-i9-13900k" className="p-name">
                        <h3 className="inherit">
                          CPU Intel Core i9-13900K (5.8 GHz, 24 Nhân 32 Luồng,
                          36M Cache, Raptor Lake)
                        </h3>
                      </a>
                      <div className="p-price-group">
                        <span className="p-price">10.690.000 đ</span>
                        <del className="p-old-price">16.800.000 đ</del>
                        <span className="p-discount">(Tiết kiệm: 37%)</span>
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
                          onclick="addProductToCart(3547, 1,'')"
                        />
                      </div>
                    </div>
                    <div className="p-tooltip">
                      <p className="tooltip-title">
                        CPU Intel Core i9-13900K (5.8 GHz, 24 Nhân 32 Luồng, 36M
                        Cache, Raptor Lake)
                      </p>
                      <div className="tooltip-content">
                        <table>
                          <tbody>
                            <tr>
                              <td>Giá bán</td>
                              <td>
                                <span className="tooltip-price">
                                  10.690.000 đ
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>Bảo hành</td>
                              <td>36 Tháng</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="tooltip-content-item">
                          <b className="title">
                            <i className="tooltip-icon icon-doc" /> Thông số sản
                            phẩm
                          </b>
                          <div className="tooltip-content-list">
                            <div className="item">CPU Intel Core i9-13900K</div>
                            <div className="item">Socket: FCLGA1700</div>
                            <div className="item">Số lõi/luồng: 24/32</div>
                            <div className="item">Bộ nhớ đệm: 36 MB</div>
                            <div className="item">
                              Bus ram hỗ trợ: DDR4 3200MHz, DDR5-5600MHz
                            </div>
                            <div className="item">Công suất tiêu thụ: 125W</div>
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
                                ⭐{" "}
                                <span
                                  style={{ color: "#ff0000", fontSize: "12pt" }}
                                >
                                  <strong>
                                    Giá khuyến mãi CPU i9 13900K chỉ còn{" "}
                                    <span
                                      style={{
                                        fontSize: "18pt",
                                        color: "#008000",
                                      }}
                                    >
                                      {" "}
                                      10.690.000đ
                                    </span>{" "}
                                    áp dụng khi build PC tại Hoàng Hà PC
                                  </strong>
                                </span>
                              </p>
                            </div>
                            <div className="item">
                              <p>
                                <span style={{ fontSize: "12pt" }}>
                                  ⭐ Giá bán lẻ CPU i9 13900K là: 12.990.000đ{" "}
                                </span>
                              </p>
                            </div>
                            <div className="item">
                              <p>
                                <span style={{ fontSize: "12pt" }}>
                                  ⭐ LƯU Ý: Chương trình không áp dụng cộng dồn
                                  với các chương trình khác{" "}
                                </span>
                              </p>
                            </div>
                            <div className="item">
                              <p>
                                <span style={{ fontSize: "12pt" }}>
                                  ⭐ Chương trình áp dụng với khách hàng Build
                                  PC có đủ thêm 7 linh kiện sau:&nbsp;
                                  <span>
                                    VGA,TẢN NHIỆT, MAIN, RAM, SSD, NGUỒN , VỎ
                                    CASE
                                  </span>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-item">
                    <a href="/cpu-intel-core-i7-13700kf" className="p-img">
                      <img
                        src="https://hoanghapccdn.com/media/product/250_3593_13700kf_sale_t8_2023_s1.jpg"
                        alt="CPU Intel Core i7-13700KF (5.4GHz, 16 Nhân 24 Luồng, 30M Cache, Raptor Lake)"
                        width={250}
                        height={250}
                      />
                    </a>
                    <div className="p-text">
                      <a href="/cpu-intel-core-i7-13700kf" className="p-name">
                        <h3 className="inherit">
                          CPU Intel Core i7-13700KF (5.4GHz, 16 Nhân 24 Luồng,
                          30M Cache, Raptor Lake)
                        </h3>
                      </a>
                      <div className="p-price-group">
                        <span className="p-price">7.190.000 đ</span>
                        <del className="p-old-price" />
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
                          onclick="addProductToCart(3593, 1,'')"
                        />
                      </div>
                    </div>
                    <div className="p-tooltip">
                      <p className="tooltip-title">
                        CPU Intel Core i7-13700KF (5.4GHz, 16 Nhân 24 Luồng, 30M
                        Cache, Raptor Lake)
                      </p>
                      <div className="tooltip-content">
                        <table>
                          <tbody>
                            <tr>
                              <td>Giá bán</td>
                              <td>
                                <span className="tooltip-price">
                                  7.190.000 đ
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>Bảo hành</td>
                              <td>36 Tháng</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="tooltip-content-item">
                          <b className="title">
                            <i className="tooltip-icon icon-doc" /> Thông số sản
                            phẩm
                          </b>
                          <div className="tooltip-content-list">
                            <div className="item">Socket: FCLGA1700</div>
                            <div className="item">
                              Số lõi - luồng: 16 nhân 24 luồng
                            </div>
                            <div className="item">Bộ nhớ đệm: 30MB</div>
                            <div className="item">
                              Bus ram hỗ trợ: DDR4-3200MHz, DDR5-5600MHz
                            </div>
                            <div className="item">Công suất tiêu thụ: 125W</div>
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
                                ⭐{" "}
                                <span
                                  style={{ color: "#ff0000", fontSize: "12pt" }}
                                >
                                  <strong>
                                    Giá khuyến mãi CPU i7 13700KF chỉ còn{" "}
                                    <span
                                      style={{
                                        fontSize: "18pt",
                                        color: "#008000",
                                      }}
                                    >
                                      {" "}
                                      7.190.000đ
                                    </span>{" "}
                                    áp dụng khi build PC tại Hoàng Hà PC
                                  </strong>
                                </span>
                              </p>
                            </div>
                            <div className="item">
                              <p>
                                <span style={{ fontSize: "12pt" }}>
                                  ⭐ Giá bán lẻ CPU i7 13700KF là: 8.880.000đ{" "}
                                </span>
                              </p>
                            </div>
                            <div className="item">
                              <p>
                                <span style={{ fontSize: "12pt" }}>
                                  ⭐ LƯU Ý: Chương trình không áp dụng cộng dồn
                                  với các chương trình khác{" "}
                                </span>
                              </p>
                            </div>
                            <div className="item">
                              <p>
                                <span style={{ fontSize: "12pt" }}>
                                  ⭐ Chương trình áp dụng với khách hàng Build
                                  PC có đủ thêm 7 linh kiện sau:&nbsp;
                                  <span style={{ fontSize: "12pt" }}>
                                    VGA,TẢN NHIỆT, MAIN, RAM, SSD, NGUỒN , VỎ
                                    CASE
                                  </span>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-item">
                    <a href="/cpu-intel-core-i5-13400" className="p-img">
                      <img
                        src="https://hoanghapccdn.com/media/product/250_3595_core_i5_13400_sale_t7_2023.jpg"
                        alt="CPU Intel Core i5-13400 (Up To 4.60GHz,10 Nhân 16 Luồng,20MB Cache, Raptor Lake)"
                        width={250}
                        height={250}
                      />
                    </a>
                    <div className="p-text">
                      <a href="/cpu-intel-core-i5-13400" className="p-name">
                        <h3 className="inherit">
                          CPU Intel Core i5-13400 (Up To 4.60GHz,10 Nhân 16
                          Luồng,20MB Cache, Raptor Lake)
                        </h3>
                      </a>
                      <div className="p-price-group">
                        <span className="p-price">3.990.000 đ</span>
                        <del className="p-old-price">6.000.000 đ</del>
                        <span className="p-discount">(Tiết kiệm: 34%)</span>
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
                          onclick="addProductToCart(3595, 1,'')"
                        />
                      </div>
                    </div>
                    <div className="p-tooltip">
                      <p className="tooltip-title">
                        CPU Intel Core i5-13400 (Up To 4.60GHz,10 Nhân 16
                        Luồng,20MB Cache, Raptor Lake)
                      </p>
                      <div className="tooltip-content">
                        <table>
                          <tbody>
                            <tr>
                              <td>Giá bán</td>
                              <td>
                                <span className="tooltip-price">
                                  3.990.000 đ
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>Bảo hành</td>
                              <td>36 Tháng</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="tooltip-content-item">
                          <b className="title">
                            <i className="tooltip-icon icon-doc" /> Thông số sản
                            phẩm
                          </b>
                          <div className="tooltip-content-list">
                            <div className="item">CPU Intel Core i5-13400</div>
                            <div className="item">Socket: FCLGA1700</div>
                            <div className="item">Số lõi/luồng: 10/16</div>
                            <div className="item">Bộ nhớ đệm: 20 MB</div>
                            <div className="item">
                              Bus ram hỗ trợ: DDR4 3200MHz, DDR5-4800
                            </div>
                            <div className="item">Mức tiêu thụ điện: 65W</div>
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
                                ⭐{" "}
                                <span
                                  style={{ color: "#ff0000", fontSize: "12pt" }}
                                >
                                  <strong>
                                    Giá khuyến mãi CPU i5 13400 chỉ còn{" "}
                                    <span
                                      style={{
                                        fontSize: "18pt",
                                        color: "#008000",
                                      }}
                                    >
                                      3.990.000đ
                                    </span>{" "}
                                    áp dụng khi build PC tại Hoàng Hà PC
                                  </strong>
                                </span>
                              </p>
                            </div>
                            <div className="item">
                              <p>
                                <span style={{ fontSize: "12pt" }}>
                                  ⭐ Giá bán lẻ CPU i5 13400 là: 4.990.000đ{" "}
                                </span>
                              </p>
                            </div>
                            <div className="item">
                              <p>
                                <span
                                  style={{ fontSize: "12pt" }}
                                  data-mce-mark={1}
                                >
                                  ⭐ LƯU Ý: Chương trình không áp dụng cộng dồn
                                  với các chương trình khác{" "}
                                </span>
                              </p>
                            </div>
                            <div className="item">
                              <p>
                                <span style={{ fontSize: "12pt" }}>
                                  ⭐ Chương trình áp dụng với khách hàng Build
                                  PC có đủ thêm 7 linh kiện sau:&nbsp;
                                  <span style={{ fontSize: "12pt" }}>
                                    VGA,TẢN NHIỆT, MAIN, RAM, SSD, NGUỒN , VỎ
                                    CASE
                                  </span>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-item">
                    <a href="/cpu-intel-core-i9-12900k" className="p-img">
                      <img
                        src="https://hoanghapccdn.com/media/product/250_2906_cpu_intel_core_i9_12900k_sale_t6_2023.jpg"
                        alt="CPU Intel Core i9-12900K (5.20GHz, 16 Nhân 24 Luồng, 30M Cache, Alder Lake)"
                        width={250}
                        height={250}
                      />
                    </a>
                    <div className="p-text">
                      <a href="/cpu-intel-core-i9-12900k" className="p-name">
                        <h3 className="inherit">
                          CPU Intel Core i9-12900K (5.20GHz, 16 Nhân 24 Luồng,
                          30M Cache, Alder Lake)
                        </h3>
                      </a>
                      <div className="p-price-group">
                        <span className="p-price">6.990.000 đ</span>
                        <del className="p-old-price">14.899.000 đ</del>
                        <span className="p-discount">(Tiết kiệm: 54%)</span>
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
                          onclick="addProductToCart(2906, 1,'')"
                        />
                      </div>
                    </div>
                    <div className="p-tooltip">
                      <p className="tooltip-title">
                        CPU Intel Core i9-12900K (5.20GHz, 16 Nhân 24 Luồng, 30M
                        Cache, Alder Lake)
                      </p>
                      <div className="tooltip-content">
                        <table>
                          <tbody>
                            <tr>
                              <td>Giá bán</td>
                              <td>
                                <span className="tooltip-price">
                                  6.990.000 đ
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>Bảo hành</td>
                              <td>36 Tháng</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="tooltip-content-item">
                          <b className="title">
                            <i className="tooltip-icon icon-doc" /> Thông số sản
                            phẩm
                          </b>
                          <div className="tooltip-content-list">
                            <div className="item">CPU Intel Core i9-12900K</div>
                            <div className="item">Socket: FCLGA1700</div>
                            <div className="item">Số lõi/luồng: 16/24</div>
                            <div className="item">Bộ nhớ đệm: 30 MB</div>
                            <div className="item">
                              Bus ram hỗ trợ: DDR4 3200MHz, DDR5-4800
                            </div>
                            <div className="item">Mức tiêu thụ điện: 125W</div>
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
                                ⭐{" "}
                                <span
                                  style={{ color: "#ff0000", fontSize: "12pt" }}
                                >
                                  <strong>
                                    Giá khuyến mãi CPU i9 12900K chỉ còn{" "}
                                    <span
                                      style={{
                                        fontSize: "18pt",
                                        color: "#008000",
                                      }}
                                    >
                                      6.990.000đ
                                    </span>{" "}
                                    áp dụng khi build PC tại Hoàng Hà PC
                                  </strong>
                                </span>
                              </p>
                            </div>
                            <div className="item">
                              <p>
                                <span style={{ fontSize: "12pt" }}>
                                  ⭐ Giá bán lẻ CPU i9 12900K là: 8.890.000đ{" "}
                                </span>
                              </p>
                            </div>
                            <div className="item">
                              <p>
                                <span style={{ fontSize: "12pt" }}>
                                  ⭐ LƯU Ý: Chương trình không áp dụng cộng dồn
                                  với các chương trình khác{" "}
                                </span>
                              </p>
                            </div>
                            <div className="item">
                              <p>
                                <span style={{ fontSize: "12pt" }}>
                                  ⭐ Chương trình áp dụng với khách hàng Build
                                  PC có đủ thêm 7 linh kiện sau:&nbsp;
                                  <span style={{ fontSize: "12pt" }}>
                                    VGA,TẢN NHIỆT, MAIN, RAM, SSD, NGUỒN , VỎ
                                    CASE
                                  </span>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-item">
                    <a href="/cpu-intel-core-i5-12400f" className="p-img">
                      <img
                        src="https://hoanghapccdn.com/media/product/250_2912_cpu_12400f_sale_t7_2023s.jpg"
                        alt="CPU Intel Core i5-12400F (Up To 4.40GHz, 6 Nhân 12 Luồng,18MB Cache, Alder Lake)"
                        width={250}
                        height={250}
                      />
                    </a>
                    <div className="p-text">
                      <a href="/cpu-intel-core-i5-12400f" className="p-name">
                        <h3 className="inherit">
                          CPU Intel Core i5-12400F (Up To 4.40GHz, 6 Nhân 12
                          Luồng,18MB Cache, Alder Lake)
                        </h3>
                      </a>
                      <div className="p-price-group">
                        <span className="p-price">2.980.000 đ</span>
                        <del className="p-old-price">5.099.000 đ</del>
                        <span className="p-discount">(Tiết kiệm: 42%)</span>
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
                          onclick="addProductToCart(2912, 1,'')"
                        />
                      </div>
                    </div>
                    <div className="p-tooltip">
                      <p className="tooltip-title">
                        CPU Intel Core i5-12400F (Up To 4.40GHz, 6 Nhân 12
                        Luồng,18MB Cache, Alder Lake)
                      </p>
                      <div className="tooltip-content">
                        <table>
                          <tbody>
                            <tr>
                              <td>Giá bán</td>
                              <td>
                                <span className="tooltip-price">
                                  2.980.000 đ
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>Bảo hành</td>
                              <td>36 Tháng</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="tooltip-content-item">
                          <b className="title">
                            <i className="tooltip-icon icon-doc" /> Thông số sản
                            phẩm
                          </b>
                          <div className="tooltip-content-list">
                            <div className="item">CPU Intel Core i5-12400F</div>
                            <div className="item">Socket: FCLGA1700</div>
                            <div className="item">Số lõi/luồng: 6/12</div>
                            <div className="item">Bộ nhớ đệm: 18 MB</div>
                            <div className="item">
                              Bus ram hỗ trợ: DDR4 3200MHz, DDR5-4800
                            </div>
                            <div className="item">Mức tiêu thụ điện: 65W</div>
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
                                ⭐{" "}
                                <span
                                  style={{ color: "#ff0000", fontSize: "12pt" }}
                                >
                                  <strong>
                                    Giá khuyến mãi CPU i5 12400F chỉ còn{" "}
                                    <span
                                      style={{
                                        fontSize: "18pt",
                                        color: "#008000",
                                      }}
                                    >
                                      2.980.000đ
                                    </span>{" "}
                                    áp dụng khi build PC tại Hoàng Hà PC
                                  </strong>
                                </span>
                              </p>
                            </div>
                            <div className="item">
                              <p>
                                <span style={{ fontSize: "12pt" }}>
                                  ⭐ Giá bán lẻ CPU i5 12400F là: 3.590.000đ{" "}
                                </span>
                              </p>
                            </div>
                            <div className="item">
                              <p>
                                <span style={{ fontSize: "12pt" }}>
                                  ⭐ LƯU Ý: Chương trình không áp dụng cộng dồn
                                  với các chương trình khác{" "}
                                </span>
                              </p>
                            </div>
                            <div className="item">
                              <p>
                                <span style={{ fontSize: "12pt" }}>
                                  ⭐ Chương trình áp dụng với khách hàng Build
                                  PC có đủ thêm 7 linh kiện sau: VGA,TẢN NHIỆT,
                                  MAIN, RAM, SSD, NGUỒN , VỎ CASE
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-item">
                    <a href="/cpu-intel-core-i7-12700k" className="p-img">
                      <img
                        src="https://hoanghapccdn.com/media/product/250_2905_i7_12700k_sale_t7_2023_s1.jpg"
                        alt="CPU Intel Core i7-12700K (Up To 5.00GHz, 12 Nhân 20 Luồng, 25M Cache, Alder Lake)"
                        width={250}
                        height={250}
                      />
                    </a>
                    <div className="p-text">
                      <a href="/cpu-intel-core-i7-12700k" className="p-name">
                        <h3 className="inherit">
                          CPU Intel Core i7-12700K (Up To 5.00GHz, 12 Nhân 20
                          Luồng, 25M Cache, Alder Lake)
                        </h3>
                      </a>
                      <div className="p-price-group">
                        <span className="p-price">5.290.000 đ</span>
                        <del className="p-old-price">10.499.000 đ</del>
                        <span className="p-discount">(Tiết kiệm: 50%)</span>
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
                          onclick="addProductToCart(2905, 1,'')"
                        />
                      </div>
                    </div>
                    <div className="p-tooltip">
                      <p className="tooltip-title">
                        CPU Intel Core i7-12700K (Up To 5.00GHz, 12 Nhân 20
                        Luồng, 25M Cache, Alder Lake)
                      </p>
                      <div className="tooltip-content">
                        <table>
                          <tbody>
                            <tr>
                              <td>Giá bán</td>
                              <td>
                                <span className="tooltip-price">
                                  5.290.000 đ
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>Bảo hành</td>
                              <td>36 Tháng</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="tooltip-content-item">
                          <b className="title">
                            <i className="tooltip-icon icon-doc" /> Thông số sản
                            phẩm
                          </b>
                          <div className="tooltip-content-list">
                            <div className="item">Socket: FCLGA1700</div>
                            <div className="item">
                              Số lõi - luồng: 12 nhân 20 luồng
                            </div>
                            <div className="item">Bộ nhớ đệm: 25MB</div>
                            <div className="item">
                              Bus ram hỗ trợ: DDR4 3200MHz, DDR5 4800MHz
                            </div>
                            <div className="item">Mức tiêu thụ điện: 125W</div>
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
                                ⭐{" "}
                                <span
                                  style={{ color: "#ff0000", fontSize: "12pt" }}
                                >
                                  <strong>
                                    Giá khuyến mãi CPU i7 12700K chỉ còn{" "}
                                    <span
                                      style={{
                                        fontSize: "18pt",
                                        color: "#008000",
                                      }}
                                    >
                                      5.290.000 đ
                                    </span>{" "}
                                    áp dụng khi build PC tại Hoàng Hà PC
                                  </strong>
                                </span>
                              </p>
                            </div>
                            <div className="item">
                              <p>
                                <span style={{ fontSize: "12pt" }}>
                                  ⭐ Giá bán lẻ CPU i7 12700K là: 6.590.000đ{" "}
                                </span>
                              </p>
                            </div>
                            <div className="item">
                              <p>
                                <span style={{ fontSize: "12pt" }}>
                                  ⭐ LƯU Ý: Chương trình không áp dụng cộng dồn
                                  với các chương trình khác{" "}
                                </span>
                              </p>
                            </div>
                            <div className="item">
                              <p>
                                <span style={{ fontSize: "12pt" }}>
                                  ⭐ Chương trình áp dụng với khách hàng Build
                                  PC có đủ thêm 7 linh kiện sau:&nbsp;
                                  <span>
                                    VGA,TẢN NHIỆT, MAIN, RAM, SSD, NGUỒN , VỎ
                                    CASE
                                  </span>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-item">
                    <a
                      href="/mainboard-gigabyte-z690-aorus-master"
                      className="p-img"
                    >
                      <img
                        src="https://hoanghapccdn.com/media/product/250_2917_hot_z690_aorus_master_1.jpg"
                        alt="Mainboard Gigabyte Z690 AORUS MASTER (Intel Z690, Socket 1700, E-ATX, 4 khe RAM DDR5)"
                        width={250}
                        height={250}
                      />
                    </a>
                    <div className="p-text">
                      <a
                        href="/mainboard-gigabyte-z690-aorus-master"
                        className="p-name"
                      >
                        <h3 className="inherit">
                          Mainboard Gigabyte Z690 AORUS MASTER (Intel Z690,
                          Socket 1700, E-ATX, 4 khe RAM DDR5)
                        </h3>
                      </a>
                      <div className="p-price-group">
                        <span className="p-price">8.600.000 đ</span>
                        <del className="p-old-price">12.490.000 đ</del>
                        <span className="p-discount">(Tiết kiệm: 32%)</span>
                      </div>
                      <div className="p-btn-group">
                        <p>
                          <span style={{ color: "#0DB866" }}>
                            <i className="icons icon-check" /> Còn hàng
                          </span>
                        </p>
                        <a
                          href="javascript:void(0)"
                          className="p-add-cart"
                          onclick="addProductToCart(2917, 1,'')"
                        />
                      </div>
                    </div>
                    <div className="p-tooltip">
                      <p className="tooltip-title">
                        Mainboard Gigabyte Z690 AORUS MASTER (Intel Z690, Socket
                        1700, E-ATX, 4 khe RAM DDR5)
                      </p>
                      <div className="tooltip-content">
                        <table>
                          <tbody>
                            <tr>
                              <td>Giá bán</td>
                              <td>
                                <span className="tooltip-price">
                                  8.600.000 đ
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>Bảo hành</td>
                              <td>36 Tháng</td>
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
                              Mainboard Gigabyte Z690 AORUS MASTER
                            </div>
                            <div className="item">Chuẩn mainboard: E-ATX</div>
                            <div className="item">Socket: 1700</div>
                            <div className="item">Chipset: Z690</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-item">
                    <a href="/cpu-intel-core-i5-13500" className="p-img">
                      <img
                        src="https://hoanghapccdn.com/media/product/250_4020_13500_sale_hot_t6_2023.jpg"
                        alt="CPU Intel Core i5-13500 (Up To 4.8 GHz, 14 Nhân 20 Luồng, 24M Cache, Raptor Lake)"
                        width={250}
                        height={250}
                      />
                    </a>
                    <div className="p-text">
                      <a href="/cpu-intel-core-i5-13500" className="p-name">
                        <h3 className="inherit">
                          CPU Intel Core i5-13500 (Up To 4.8 GHz, 14 Nhân 20
                          Luồng, 24M Cache, Raptor Lake)
                        </h3>
                      </a>
                      <div className="p-price-group">
                        <span className="p-price">4.990.000 đ</span>
                        <del className="p-old-price" />
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
                          onclick="addProductToCart(4020, 1,'')"
                        />
                      </div>
                    </div>
                    <div className="p-tooltip">
                      <p className="tooltip-title">
                        CPU Intel Core i5-13500 (Up To 4.8 GHz, 14 Nhân 20
                        Luồng, 24M Cache, Raptor Lake)
                      </p>
                      <div className="tooltip-content">
                        <table>
                          <tbody>
                            <tr>
                              <td>Giá bán</td>
                              <td>
                                <span className="tooltip-price">
                                  4.990.000 đ
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>Bảo hành</td>
                              <td>36 Tháng</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="tooltip-content-item">
                          <b className="title">
                            <i className="tooltip-icon icon-doc" /> Thông số sản
                            phẩm
                          </b>
                          <div className="tooltip-content-list">
                            <div className="item">Socket: FCLGA1700</div>
                            <div className="item">
                              Số lõi - luồng: 14 nhân 20 luồng
                            </div>
                            <div className="item">Bộ nhớ đệm: 24MB</div>
                            <div className="item">
                              Bus RAM hỗ trợ: DDR4 3200MHz, DDR5 4800MHz
                            </div>
                            <div className="item">TDP: 65W</div>
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
                                ⭐{" "}
                                <span
                                  style={{ color: "#ff0000", fontSize: "12pt" }}
                                >
                                  <strong>
                                    Giá khuyến mãi CPU i5 13500 chỉ còn{" "}
                                    <span
                                      style={{
                                        fontSize: "18pt",
                                        color: "#008000",
                                      }}
                                    >
                                      4.990.000 đ
                                    </span>{" "}
                                    áp dụng khi build PC tại Hoàng Hà PC
                                  </strong>
                                </span>
                              </p>
                            </div>
                            <div className="item">
                              <p>
                                <span style={{ fontSize: "12pt" }}>
                                  ⭐ Giá bán lẻ CPU i5 13500 là: 5.750.000đ{" "}
                                </span>
                              </p>
                            </div>
                            <div className="item">
                              <p>
                                <span style={{ fontSize: "12pt" }}>
                                  ⭐ LƯU Ý: Chương trình không áp dụng cộng dồn
                                  với các chương trình khác{" "}
                                </span>
                              </p>
                            </div>
                            <div className="item">
                              <p>
                                <span style={{ fontSize: "12pt" }}>
                                  ⭐ Chương trình áp dụng với khách hàng Build
                                  PC có đủ thêm 7 linh kiện sau:&nbsp;
                                  <span>
                                    VGA,TẢN NHIỆT, MAIN, RAM, SSD, NGUỒN , VỎ
                                    CASE
                                  </span>
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
          </div>
          <div className="art-video-box art-other-box-group">
            <div className="col-8 col-item-left">
              <div className="art-big-video" id="js-video-holder">
                <iframe
                  src="https://www.youtube.com/embed/kGSYaCyNPvg"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="col-4 col-item-right">
              <div className="video-title-group">
                <a href="/video" className="font-weight-bold">
                  Trending video
                </a>
                <p>
                  <span id="js-video-current">1</span>/
                  <span id="js-video-total">6</span> videos
                </p>
              </div>
              <div className="video-list-holder" id="js-video-list">
                <a
                  href="javascript:void(0)"
                  data-href="https://www.youtube.com/watch?v=kGSYaCyNPvg"
                  data-item={1}
                  className="video-item current"
                >
                  <span className="video-img">
                    <img
                      src="http://img.youtube.com/vi/kGSYaCyNPvg/maxresdefault.jpg"
                      alt="PC Đồ Họa Siêu Khỏe - Đẹp 13900K + VGA RTX 4070"
                      width={120}
                      height={66}
                    />
                  </span>
                  <p className="video-title m-0">
                    <span>PC Đồ Họa Siêu Khỏe - Đẹp 13900K + VGA RTX 4070</span>
                    <span className="js-video-time" />
                  </p>
                </a>
                <a
                  href="javascript:void(0)"
                  data-href="https://www.youtube.com/watch?v=nwkc_lvEJMA"
                  data-item={2}
                  className="video-item"
                >
                  <span className="video-img">
                    <img
                      src="http://img.youtube.com/vi/nwkc_lvEJMA/maxresdefault.jpg"
                      alt="Mini PC White Nhỏ Gọn - Tinh Tế - Hiệu Năng Cao"
                      width={120}
                      height={66}
                    />
                  </span>
                  <p className="video-title m-0">
                    <span>Mini PC White Nhỏ Gọn - Tinh Tế - Hiệu Năng Cao</span>
                    <span className="js-video-time" />
                  </p>
                </a>
                <a
                  href="javascript:void(0)"
                  data-href="https://www.youtube.com/watch?v=08varEBPXwc"
                  data-item={3}
                  className="video-item"
                >
                  <span className="video-img">
                    <img
                      src="http://img.youtube.com/vi/08varEBPXwc/maxresdefault.jpg"
                      alt="PC Full Trắng 5x Triệu Linh Kiện Thế Hệ Mới Hiệu Năng Khủng"
                      width={120}
                      height={66}
                    />
                  </span>
                  <p className="video-title m-0">
                    <span>
                      PC Full Trắng 5x Triệu Linh Kiện Thế Hệ Mới Hiệu Năng
                      Khủng
                    </span>
                    <span className="js-video-time" />
                  </p>
                </a>
                <a
                  href="javascript:void(0)"
                  data-href="https://www.youtube.com/watch?v=QAwiNtcYi3M"
                  data-item={4}
                  className="video-item"
                >
                  <span className="video-img">
                    <img
                      src="http://img.youtube.com/vi/QAwiNtcYi3M/maxresdefault.jpg"
                      alt="Cấu Hình "
                      width={120}
                      height={66}
                    />
                  </span>
                  <p className="video-title m-0">
                    <span>
                      Cấu Hình "Chất Chơi" Với i9-13900K - RTX 3070 Siêu Khỏe!
                    </span>
                    <span className="js-video-time" />
                  </p>
                </a>
                <a
                  href="javascript:void(0)"
                  data-href="https://www.youtube.com/watch?v=TvJQnov_Wjs"
                  data-item={5}
                  className="video-item"
                >
                  <span className="video-img">
                    <img
                      src="http://img.youtube.com/vi/TvJQnov_Wjs/maxresdefault.jpg"
                      alt="PC Gaming Full Trắng Siêu Đẹp Với i7-13700K vs RTX 4070"
                      width={120}
                      height={66}
                    />
                  </span>
                  <p className="video-title m-0">
                    <span>
                      PC Gaming Full Trắng Siêu Đẹp Với i7-13700K vs RTX 4070
                    </span>
                    <span className="js-video-time" />
                  </p>
                </a>
                <a
                  href="javascript:void(0)"
                  data-href="https://www.youtube.com/watch?v=kOAs-q4Qp6k"
                  data-item={6}
                  className="video-item"
                >
                  <span className="video-img">
                    <img
                      src="http://img.youtube.com/vi/kOAs-q4Qp6k/maxresdefault.jpg"
                      alt="Review PC Hơn 50 Triệu Cực Ngầu Full Đen"
                      width={120}
                      height={66}
                    />
                  </span>
                  <p className="video-title m-0">
                    <span>Review PC Hơn 50 Triệu Cực Ngầu Full Đen</span>
                    <span className="js-video-time" />
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* Tiktok */}
        </div>
      </div>
    </Layout>
  );
}
