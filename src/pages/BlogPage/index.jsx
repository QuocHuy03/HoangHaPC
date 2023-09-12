import React from "react";
import Layout from "../../components/Layout";

export default function BlogPage() {
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
                  <a href="/cau-hinh-may-tinh-dung-phim" class="item-title">
                    17 Cấu Hình Máy Tính Dựng Phim, Render Edit Video Theo Ngân
                    Sách 2023
                  </a>

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

                  <a href="/cau-hinh-may-tinh-dung-phim" class="item-btn">
                    Đọc chi tiết
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="top-box-right-group">
                <p className="title">
                  <span>Tin nổi bật</span>
                </p>
                <div className="top-article-list">
                  <div className="top-art-item">
                    <a
                      href="/cau-hinh-may-tinh-choi-game"
                      className="top-art-img"
                    >
                      <img
                        data-src="https://hoanghapccdn.com/media/news/107_9100f_1060__1_.jpg"
                        alt="10 Cấu Hình Máy Tính Chơi Game Hot Nhất 2023"
                        width={1}
                        height={1}
                        className="lazy w-auto h-auto loaded"
                        src="https://hoanghapccdn.com/media/news/107_9100f_1060__1_.jpg"
                        data-was-processed="true"
                      />
                      <span className="top-cat">Máy Khỏe - Máy Đẹp</span>
                    </a>
                    <div className="top-art-text">
                      <a
                        href="/cau-hinh-may-tinh-choi-game"
                        className="top-art-title"
                      >
                        10 Cấu Hình Máy Tính Chơi Game Hot Nhất 2023
                      </a>
                      <div className="top-art-time">
                        <span>
                          by <b>Mai Văn Học</b>
                        </span>{" "}
                        |<time>04-07-2023, 1:44 pm</time>
                      </div>
                    </div>
                  </div>
                  <div className="top-art-item">
                    <a
                      href="/cau-hinh-may-tinh-chay-phan-mem-lumion-chuyen-dung"
                      className="top-art-img"
                    >
                      <img
                        data-src="https://hoanghapccdn.com/media/news/205_case_i9_h500p.JPG"
                        alt="10 Cấu Hình Máy Tính Chạy Lumion✔️Chuyên Dụng"
                        width={1}
                        height={1}
                        className="lazy w-auto h-auto loaded"
                        src="https://hoanghapccdn.com/media/news/205_case_i9_h500p.JPG"
                        data-was-processed="true"
                      />
                      <span className="top-cat">Máy Khỏe - Máy Đẹp</span>
                    </a>
                    <div className="top-art-text">
                      <a
                        href="/cau-hinh-may-tinh-chay-phan-mem-lumion-chuyen-dung"
                        className="top-art-title"
                      >
                        10 Cấu Hình Máy Tính Chạy Lumion✔️Chuyên Dụng
                      </a>
                      <div className="top-art-time">
                        <span>
                          by <b>Mai Văn Học</b>
                        </span>{" "}
                        |<time>04-07-2023, 1:38 pm</time>
                      </div>
                    </div>
                  </div>
                  <div className="top-art-item">
                    <a
                      href="/cau-hinh-may-tinh-render-farm"
                      className="top-art-img"
                    >
                      <img
                        data-src="https://hoanghapccdn.com/media/news/279____nh_deepcool.jpg"
                        alt="10 Cấu Hình Máy Tính Chuyên Render Farm"
                        width={1}
                        height={1}
                        className="lazy w-auto h-auto loaded"
                        src="https://hoanghapccdn.com/media/news/279____nh_deepcool.jpg"
                        data-was-processed="true"
                      />
                      <span className="top-cat">Máy Khỏe - Máy Đẹp</span>
                    </a>
                    <div className="top-art-text">
                      <a
                        href="/cau-hinh-may-tinh-render-farm"
                        className="top-art-title"
                      >
                        10 Cấu Hình Máy Tính Chuyên Render Farm
                      </a>
                      <div className="top-art-time">
                        <span>
                          by <b>Mai Văn Học</b>
                        </span>{" "}
                        |<time>30-06-2023, 3:39 pm</time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="art-box-group">
            <div className="box-title-group">
              <a href="/may-khoe-may-dep" className="box-title">
                <h2>Máy Khỏe - Máy Đẹp</h2>
              </a>
              <div className="cat-child-list"></div>
            </div>
            <div className="article-list-container">
              <div className="art-item">
                <a href="/cau-hinh-may-tinh-do-hoa" className="art-img">
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
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>28-08-2023, 10:25 am</time>
                  </p>
                  <a href="/cau-hinh-may-tinh-do-hoa" className="art-title">
                    <h3 className="inherit">
                      10 Cấu Hình Máy Tính Đồ Họa Theo Ngân Sách✔️
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Cấu hình máy tính đồ họa chuyên dụng cho công việc thiết
                      kế đồ họa, làm phim, Render và xử lý các thuật toán AI trí
                      tuệ nhân tạo phù hợp nhất mọi công việc.
                    </div>
                    <a href="/cau-hinh-may-tinh-do-hoa" className="art-btn">
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
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
                <a href="/cau-hinh-may-tinh-dung-phim" className="art-img">
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
                </a>
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
                  <a
                    href="/cau-hinh-may-tinh-chay-phan-mem-lumion-chuyen-dung"
                    className="art-title"
                  >
                    <h3 className="inherit">
                      10 Cấu Hình Máy Tính Chạy Lumion✔️Chuyên Dụng
                    </h3>
                  </a>
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
              <div className="art-other-item">
                <a
                  href="/intel-bo-ten-goi-core-i-tren-cac-dong-chip-moi"
                  className="art-other-img"
                >
                  <img
                    data-src="https://hoanghapccdn.com/media/news/1234_intel_bo_ten_goi_core_i_series_h2.jpg"
                    alt="Intel bỏ tên gọi Core i5, i7 trên các dòng chip mới"
                    width={1}
                    height={1}
                    className="lazy w-auto h-auto loaded"
                    src="https://hoanghapccdn.com/media/news/1234_intel_bo_ten_goi_core_i_series_h2.jpg"
                    data-was-processed="true"
                  />
                </a>
                <div className="art-other-text">
                  <div className="art-other-time-group">
                    <div className="art-other-cat">#Tin Công Nghệ</div>
                    <div className="art-time">
                      <span>
                        by <b>Mai Văn Học</b>
                      </span>{" "}
                      |<time>23-05-2023, 8:58 am</time>
                    </div>
                  </div>
                  <a
                    href="/intel-bo-ten-goi-core-i-tren-cac-dong-chip-moi"
                    className="art-other-title"
                  >
                    Intel bỏ tên gọi Core i5, i7 trên các dòng chip mới
                  </a>
                  <div className="art-other-summary">
                    Sau 15 năm sử dụng Core i series để đặt tên cho các bCPU,
                    Intel quyết định thay đổi tên gọi cho các CPU thế hệ 14
                    Meteor Lake với tên gọi mới Core Ultra.
                  </div>
                  <a
                    href="/intel-bo-ten-goi-core-i-tren-cac-dong-chip-moi"
                    className="art-other-btn"
                  >
                    Đọc chi tiết{" "}
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="art-other-item">
                <a
                  href="/huy-phien-ban-12gb-rtx-4080-cua-nvidia-se-chi-co-ban-16gb"
                  className="art-other-img"
                >
                  <img
                    data-src="https://hoanghapccdn.com/media/news/1177_rtx_4080_12gb_bi_huy_1.png"
                    alt="Hủy phiên bản 12GB, RTX 4080 của NVIDIA sẽ chỉ có bản 16GB"
                    width={1}
                    height={1}
                    className="lazy w-auto h-auto loaded"
                    src="https://hoanghapccdn.com/media/news/1177_rtx_4080_12gb_bi_huy_1.png"
                    data-was-processed="true"
                  />
                </a>
                <div className="art-other-text">
                  <div className="art-other-time-group">
                    <div className="art-other-cat">#Tin Công Nghệ</div>
                    <div className="art-time">
                      <span>
                        by <b>Mai Văn Học</b>
                      </span>{" "}
                      |<time>04-07-2023, 3:35 pm</time>
                    </div>
                  </div>
                  <a
                    href="/huy-phien-ban-12gb-rtx-4080-cua-nvidia-se-chi-co-ban-16gb"
                    className="art-other-title"
                  >
                    Hủy phiên bản 12GB, RTX 4080 của NVIDIA sẽ chỉ có bản 16GB
                  </a>
                  <div className="art-other-summary">
                    NVIDIA đã gấp rút yêu cầu các đối tác của họ ngừng cung cấp
                    sản phẩm 12GB và sẽ chỉ mở bán phiên bản 16GB. Hãy cùng
                    Hoàng Hà PC tìm hiểu trong bài viết này nhé.
                  </div>
                  <a
                    href="/huy-phien-ban-12gb-rtx-4080-cua-nvidia-se-chi-co-ban-16gb"
                    className="art-other-btn"
                  >
                    Đọc chi tiết{" "}
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="art-other-item">
                <a
                  href="/gigabyte-gioi-thieu-card-do-hoa-geforce-rtx-4090-aorus-va-gaming"
                  className="art-other-img"
                >
                  <img
                    data-src="https://hoanghapccdn.com/media/news/1173_ava.jpg"
                    alt="Gigabyte giới thiệu card đồ họa GeForce RTX 4090 AORUS và GAMING"
                    width={1}
                    height={1}
                    className="lazy w-auto h-auto loaded"
                    src="https://hoanghapccdn.com/media/news/1173_ava.jpg"
                    data-was-processed="true"
                  />
                </a>
                <div className="art-other-text">
                  <div className="art-other-time-group">
                    <div className="art-other-cat">#Tin Công Nghệ</div>
                    <div className="art-time">
                      <span>
                        by <b>Mai Văn Học</b>
                      </span>{" "}
                      |<time>04-07-2023, 3:40 pm</time>
                    </div>
                  </div>
                  <a
                    href="/gigabyte-gioi-thieu-card-do-hoa-geforce-rtx-4090-aorus-va-gaming"
                    className="art-other-title"
                  >
                    Gigabyte giới thiệu card đồ họa GeForce RTX 4090 AORUS và
                    GAMING
                  </a>
                  <div className="art-other-summary">
                    Gigabyte đã tung ra các card đồ họa AORUS với thiết kế nâng
                    cấp và các tính năng được cải tiến, mang đến cho các game
                    thủ chuyên nghiệp.
                  </div>
                  <a
                    href="/gigabyte-gioi-thieu-card-do-hoa-geforce-rtx-4090-aorus-va-gaming"
                    className="art-other-btn"
                  >
                    Đọc chi tiết{" "}
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="art-other-item">
                <a
                  href="/inno3d-cong-bo-lineup-gpu-geforce-rtx-4090-4080"
                  className="art-other-img"
                >
                  <img
                    data-src="https://hoanghapccdn.com/media/news/1172_ava.webp"
                    alt="Inno3D công bố lineup GPU GeForce RTX 4090/4080"
                    width={1}
                    height={1}
                    className="lazy w-auto h-auto loaded"
                    src="https://hoanghapccdn.com/media/news/1172_ava.webp"
                    data-was-processed="true"
                  />
                </a>
                <div className="art-other-text">
                  <div className="art-other-time-group">
                    <div className="art-other-cat">#Tin Công Nghệ</div>
                    <div className="art-time">
                      <span>
                        by <b>Mai Văn Học</b>
                      </span>{" "}
                      |<time>04-07-2023, 3:40 pm</time>
                    </div>
                  </div>
                  <a
                    href="/inno3d-cong-bo-lineup-gpu-geforce-rtx-4090-4080"
                    className="art-other-title"
                  >
                    Inno3D công bố lineup GPU GeForce RTX 4090/4080
                  </a>
                  <div className="art-other-summary">
                    INNO3D công bố dòng sản phẩm INNO3D GeForce RTX 40 series
                    đang rất được mong đợi bao gồm RTX 4090, RTX 4080 16GB và
                    RTX 4080 12GB.
                  </div>
                  <a
                    href="/inno3d-cong-bo-lineup-gpu-geforce-rtx-4090-4080"
                    className="art-other-btn"
                  >
                    Đọc chi tiết{" "}
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="art-other-item">
                <a
                  href="/amd-ryzen-5-7600x-duoc-thu-nghiem-trong-cinebench-r23-voi-amd-core-performance-boost-bi-tat"
                  className="art-other-img"
                >
                  <img
                    data-src="https://hoanghapccdn.com/media/news/1168_r576x.webp"
                    alt="AMD Ryzen 5 7600X được thử nghiệm trong Cinebench R23 với AMD Core Performance Boost bị tắt"
                    width={1}
                    height={1}
                    className="lazy w-auto h-auto loaded"
                    src="https://hoanghapccdn.com/media/news/1168_r576x.webp"
                    data-was-processed="true"
                  />
                </a>
                <div className="art-other-text">
                  <div className="art-other-time-group">
                    <div className="art-other-cat">#Tin Công Nghệ</div>
                    <div className="art-time">
                      <span>
                        by <b>Mai Văn Học</b>
                      </span>{" "}
                      |<time>18-05-2023, 9:42 am</time>
                    </div>
                  </div>
                  <a
                    href="/amd-ryzen-5-7600x-duoc-thu-nghiem-trong-cinebench-r23-voi-amd-core-performance-boost-bi-tat"
                    className="art-other-title"
                  >
                    AMD Ryzen 5 7600X được thử nghiệm trong Cinebench R23 với
                    AMD Core Performance Boost bị tắt
                  </a>
                  <div className="art-other-summary">
                    AMD Ryzen 5 7600X được thử nghiệm trong Cinebench R23 với
                    AMD Core Performance Boost bị tắt.
                  </div>
                  <a
                    href="/amd-ryzen-5-7600x-duoc-thu-nghiem-trong-cinebench-r23-voi-amd-core-performance-boost-bi-tat"
                    className="art-other-btn"
                  >
                    Đọc chi tiết{" "}
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4 col-item-right">
              <div className="art-new-container">
                <p className="box-title">Tin mới nhất</p>
                <div className="box-scroll-group art-new-holder">
                  <div className="item">
                    <a href="/cau-hinh-may-tinh-do-hoa" className="item-img">
                      <img
                        data-src="https://hoanghapccdn.com/media/news/14_pc_do_hoa_hoanghapc_min.jpg"
                        alt="10 Cấu Hình Máy Tính Đồ Họa Theo Ngân Sách✔️"
                        width={1}
                        height={1}
                        className="lazy w-auto h-auto loaded"
                        src="https://hoanghapccdn.com/media/news/14_pc_do_hoa_hoanghapc_min.jpg"
                        data-was-processed="true"
                      />
                      <span className="item-cat">Máy Khỏe - Máy Đẹp</span>
                    </a>
                    <div className="item-text">
                      <a
                        href="/cau-hinh-may-tinh-do-hoa"
                        className="item-title"
                      >
                        10 Cấu Hình Máy Tính Đồ Họa Theo Ngân Sách✔️
                      </a>
                      <div className="item-time art-time">
                        <span>
                          by <b>Mai Văn Học</b>
                        </span>{" "}
                        |<time>28-08-2023, 10:25 am</time>
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
                        width={1}
                        height={1}
                        className="lazy w-auto h-auto loaded"
                        src="https://hoanghapccdn.com/media/news/18_pc_gia_lap_1.jpg"
                        data-was-processed="true"
                      />
                      <span className="item-cat">Máy Khỏe - Máy Đẹp</span>
                    </a>
                    <div className="item-text">
                      <a
                        href="/cau-hinh-may-tinh-chay-gia-lap-nox-player"
                        className="item-title"
                      >
                        Cấu Hình Máy Tính Chạy Giả Lập Nox Player, LDPlayer
                      </a>
                      <div className="item-time art-time">
                        <span>
                          by <b>Mai Văn Học</b>
                        </span>{" "}
                        |<time>04-07-2023, 3:17 pm</time>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <a href="/cau-hinh-may-tinh-dung-phim" className="item-img">
                      <img
                        data-src="https://hoanghapccdn.com/media/news/19_10_cau_hinh_6.jpg"
                        alt="17 Cấu Hình Máy Tính Dựng Phim, Render Edit Video Theo Ngân Sách 2023"
                        width={1}
                        height={1}
                        className="lazy w-auto h-auto loaded"
                        src="https://hoanghapccdn.com/media/news/19_10_cau_hinh_6.jpg"
                        data-was-processed="true"
                      />
                      <span className="item-cat">Máy Khỏe - Máy Đẹp</span>
                    </a>
                    <div className="item-text">
                      <a
                        href="/cau-hinh-may-tinh-dung-phim"
                        className="item-title"
                      >
                        17 Cấu Hình Máy Tính Dựng Phim, Render Edit Video Theo
                        Ngân Sách 2023
                      </a>
                      <div className="item-time art-time">
                        <span>
                          by <b>Mai Văn Học</b>
                        </span>{" "}
                        |<time>04-07-2023, 3:16 pm</time>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <a href="/may-tinh-stream" className="item-img">
                      <img
                        data-src="https://hoanghapccdn.com/media/news/62_pc_streamer.jpg"
                        alt="7 Cấu Hình Máy Tính Cho Streamer Livestream Chuyên Nghiệp 2023"
                        width={1}
                        height={1}
                        className="lazy w-auto h-auto loaded"
                        src="https://hoanghapccdn.com/media/news/62_pc_streamer.jpg"
                        data-was-processed="true"
                      />
                      <span className="item-cat">Máy Khỏe - Máy Đẹp</span>
                    </a>
                    <div className="item-text">
                      <a href="/may-tinh-stream" className="item-title">
                        7 Cấu Hình Máy Tính Cho Streamer Livestream Chuyên
                        Nghiệp 2023
                      </a>
                      <div className="item-time art-time">
                        <span>
                          by <b>Mai Văn Học</b>
                        </span>{" "}
                        |<time>04-07-2023, 1:57 pm</time>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <a href="/cau-hinh-may-tinh-choi-game" className="item-img">
                      <img
                        data-src="https://hoanghapccdn.com/media/news/107_9100f_1060__1_.jpg"
                        alt="10 Cấu Hình Máy Tính Chơi Game Hot Nhất 2023"
                        width={1}
                        height={1}
                        className="lazy w-auto h-auto"
                      />
                      <span className="item-cat">Máy Khỏe - Máy Đẹp</span>
                    </a>
                    <div className="item-text">
                      <a
                        href="/cau-hinh-may-tinh-choi-game"
                        className="item-title"
                      >
                        10 Cấu Hình Máy Tính Chơi Game Hot Nhất 2023
                      </a>
                      <div className="item-time art-time">
                        <span>
                          by <b>Mai Văn Học</b>
                        </span>{" "}
                        |<time>04-07-2023, 1:44 pm</time>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <a
                      href="/cau-hinh-may-tinh-chay-phan-mem-lumion-chuyen-dung"
                      className="item-img"
                    >
                      <img
                        data-src="https://hoanghapccdn.com/media/news/205_case_i9_h500p.JPG"
                        alt="10 Cấu Hình Máy Tính Chạy Lumion✔️Chuyên Dụng"
                        width={1}
                        height={1}
                        className="lazy w-auto h-auto"
                      />
                      <span className="item-cat">Máy Khỏe - Máy Đẹp</span>
                    </a>
                    <div className="item-text">
                      <a
                        href="/cau-hinh-may-tinh-chay-phan-mem-lumion-chuyen-dung"
                        className="item-title"
                      >
                        10 Cấu Hình Máy Tính Chạy Lumion✔️Chuyên Dụng
                      </a>
                      <div className="item-time art-time">
                        <span>
                          by <b>Mai Văn Học</b>
                        </span>{" "}
                        |<time>04-07-2023, 1:38 pm</time>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <a
                      href="/cau-hinh-may-tinh-render-farm"
                      className="item-img"
                    >
                      <img
                        data-src="https://hoanghapccdn.com/media/news/279____nh_deepcool.jpg"
                        alt="10 Cấu Hình Máy Tính Chuyên Render Farm"
                        width={1}
                        height={1}
                        className="lazy w-auto h-auto"
                      />
                      <span className="item-cat">Máy Khỏe - Máy Đẹp</span>
                    </a>
                    <div className="item-text">
                      <a
                        href="/cau-hinh-may-tinh-render-farm"
                        className="item-title"
                      >
                        10 Cấu Hình Máy Tính Chuyên Render Farm
                      </a>
                      <div className="item-time art-time">
                        <span>
                          by <b>Mai Văn Học</b>
                        </span>{" "}
                        |<time>30-06-2023, 3:39 pm</time>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <a
                      href="/huong-dan-chon-cpu-cho-pc-lam-do-hoa-chuyen-nghiep"
                      className="item-img"
                    >
                      <img
                        data-src="https://hoanghapccdn.com/media/news/271_truy___n_th__ng_i9_10900k_03.jpg"
                        alt="Hướng Dẫn Chọn CPU Cho PC Làm Đồ Họa Chuyên Nghiệp"
                        width={1}
                        height={1}
                        className="lazy w-auto h-auto"
                      />
                      <span className="item-cat">CPU - Vi Xử Lý</span>
                    </a>
                    <div className="item-text">
                      <a
                        href="/huong-dan-chon-cpu-cho-pc-lam-do-hoa-chuyen-nghiep"
                        className="item-title"
                      >
                        Hướng Dẫn Chọn CPU Cho PC Làm Đồ Họa Chuyên Nghiệp
                      </a>
                      <div className="item-time art-time">
                        <span>
                          by <b>Mai Văn Học</b>
                        </span>{" "}
                        |<time>17-07-2023, 2:46 pm</time>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <a
                      href="/danh-gia-chi-tiet-man-hinh-viewsonic-va2409-h"
                      className="item-img"
                    >
                      <img
                        data-src="https://hoanghapccdn.com/media/news/1240_viewsonic_va2409_h_review_ha5.jpg"
                        alt="Đánh giá chi tiết màn hình Viewsonic VA2409-H 24'' IPS 75Hz viền mỏng"
                        width={1}
                        height={1}
                        className="lazy w-auto h-auto"
                      />
                      <span className="item-cat">Màn Hình Máy Tính</span>
                    </a>
                    <div className="item-text">
                      <a
                        href="/danh-gia-chi-tiet-man-hinh-viewsonic-va2409-h"
                        className="item-title"
                      >
                        Đánh giá chi tiết màn hình Viewsonic VA2409-H 24'' IPS
                        75Hz viền mỏng
                      </a>
                      <div className="item-time art-time">
                        <span>
                          by <b>Mai Văn Học</b>
                        </span>{" "}
                        |<time>15-07-2023, 10:22 pm</time>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <a
                      href="/intel-bo-ten-goi-core-i-tren-cac-dong-chip-moi"
                      className="item-img"
                    >
                      <img
                        data-src="https://hoanghapccdn.com/media/news/1234_intel_bo_ten_goi_core_i_series_h2.jpg"
                        alt="Intel bỏ tên gọi Core i5, i7 trên các dòng chip mới"
                        width={1}
                        height={1}
                        className="lazy w-auto h-auto"
                      />
                      <span className="item-cat">Tin Công Nghệ</span>
                    </a>
                    <div className="item-text">
                      <a
                        href="/intel-bo-ten-goi-core-i-tren-cac-dong-chip-moi"
                        className="item-title"
                      >
                        Intel bỏ tên gọi Core i5, i7 trên các dòng chip mới
                      </a>
                      <div className="item-time art-time">
                        <span>
                          by <b>Mai Văn Học</b>
                        </span>{" "}
                        |<time>23-05-2023, 8:58 am</time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="art-box-group">
            <div className="box-title-group">
              <a href="/review-san-pham" className="box-title">
                <h2>Review Sản Phẩm</h2>
              </a>
              <div className="cat-child-list">
                <a href="/review-laptop">
                  <h3>Review Laptop</h3>
                </a>
                <a href="/reviews-man-hinh-may-tinh">
                  <h3>Màn Hình Máy Tính</h3>
                </a>
                <a href="/review-cases">
                  <h3>Vỏ Case</h3>
                </a>
                <a href="/reviews-hdd-ssd">
                  <h3>HDD - SSD</h3>
                </a>
                <a href="/reviews-memory">
                  <h3>Ram PC</h3>
                </a>
                <a href="/reviews-graphics-card">
                  <h3>Card Đồ Họa</h3>
                </a>
                <a href="/reviews-mainboard">
                  <h3>Mainboard</h3>
                </a>
                <a href="/reviews-cpu">
                  <h3>CPU - Vi Xử Lý</h3>
                </a>
              </div>
            </div>
            <div className="article-list-container">
              <div className="art-item">
                <a
                  href="/huong-dan-chon-cpu-cho-pc-lam-do-hoa-chuyen-nghiep"
                  className="art-img"
                >
                  <img
                    data-src="https://hoanghapccdn.com/media/news/271_truy___n_th__ng_i9_10900k_03.jpg"
                    alt="Hướng Dẫn Chọn CPU Cho PC Làm Đồ Họa Chuyên Nghiệp"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/271_truy___n_th__ng_i9_10900k_03.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">CPU - Vi Xử Lý</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>17-07-2023, 2:46 pm</time>
                  </p>
                  <a
                    href="/huong-dan-chon-cpu-cho-pc-lam-do-hoa-chuyen-nghiep"
                    className="art-title"
                  >
                    <h3 className="inherit">
                      Hướng Dẫn Chọn CPU Cho PC Làm Đồ Họa Chuyên Nghiệp
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Nên chọn CPU phù hợp với công việc của mình đặc biệt là
                      làm đồ họa chuyên nghiệp. Vậy chúng ta nên chọn CPU Ryzen
                      hay là Intel?
                    </div>
                    <a
                      href="/huong-dan-chon-cpu-cho-pc-lam-do-hoa-chuyen-nghiep"
                      className="art-btn"
                    >
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <a
                  href="/danh-gia-chi-tiet-man-hinh-viewsonic-va2409-h"
                  className="art-img"
                >
                  <img
                    data-src="https://hoanghapccdn.com/media/news/1240_viewsonic_va2409_h_review_ha5.jpg"
                    alt="Đánh giá chi tiết màn hình Viewsonic VA2409-H 24'' IPS 75Hz viền mỏng"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/1240_viewsonic_va2409_h_review_ha5.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Màn Hình Máy Tính</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>15-07-2023, 10:22 pm</time>
                  </p>
                  <a
                    href="/danh-gia-chi-tiet-man-hinh-viewsonic-va2409-h"
                    className="art-title"
                  >
                    <h3 className="inherit">
                      Đánh giá chi tiết màn hình Viewsonic VA2409-H 24'' IPS
                      75Hz viền mỏng
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Tuy nhiên những người sử dụng PC để làm việc hay học tập
                      thì thường có nhu cầu chọn màn hình khá cơ bản và để tiết
                      kiệm tài chính. Hôm nay, Hoàng Hà PC hân hạnh giới thiệu
                      đến bạn màn hình ...
                    </div>
                    <a
                      href="/danh-gia-chi-tiet-man-hinh-viewsonic-va2409-h"
                      className="art-btn"
                    >
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <a
                  href="/cpu-intel-i9-13900-raptor-lake-de-lo-die-257-mm"
                  className="art-img"
                >
                  <img
                    data-src="https://hoanghapccdn.com/media/news/1154_web_14_09_ava.jpg"
                    alt="CPU Intel i9 13900 Raptor Lake để lộ die 257 mm²"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/1154_web_14_09_ava.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Tin Công Nghệ</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>14-07-2023, 9:37 am</time>
                  </p>
                  <a
                    href="/cpu-intel-i9-13900-raptor-lake-de-lo-die-257-mm"
                    className="art-title"
                  >
                    <h3 className="inherit">
                      CPU Intel i9 13900 Raptor Lake để lộ die 257 mm²
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Thông qua kênh Expreview Bilibili, chúng ta có thể tìm
                      thấy video phân tích về CPU Intel Core thế hệ thứ 13 sắp
                      ra mắt, cụ thể là i9-13900. Đây là lần đầu tiên bộ tản
                      nhiệt tích hợp bị loại bỏ ...
                    </div>
                    <a
                      href="/cpu-intel-i9-13900-raptor-lake-de-lo-die-257-mm"
                      className="art-btn"
                    >
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <a
                  href="/danh-gia-chi-tiet-asrock-z690-extreme-wifi-6e"
                  className="art-img"
                >
                  <img
                    data-src="https://hoanghapccdn.com/media/news/1130_asrock_z690_extreme_6e_review.jpg"
                    alt="Đánh giá chi tiết ASRock Z690 Extreme WiFi 6E : Đẳng cấp "
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/1130_asrock_z690_extreme_6e_review.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Mainboard</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>15-07-2023, 3:18 pm</time>
                  </p>
                  <a
                    href="/danh-gia-chi-tiet-asrock-z690-extreme-wifi-6e"
                    className="art-title"
                  >
                    <h3 className="inherit">
                      Đánh giá chi tiết ASRock Z690 Extreme WiFi 6E : Đẳng cấp{" "}
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Asrock Z690 Extreme WiFi 6E - sản phẩm bo mạch chủ mới của
                      Asrock với những tính năng chắc chắn sẽ được rất nhiều
                      người yêu thích.
                    </div>
                    <a
                      href="/danh-gia-chi-tiet-asrock-z690-extreme-wifi-6e"
                      className="art-btn"
                    >
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <a
                  href="/danh-gia-samsung-viewfinity-s8-uhd-27-inch-s80pb"
                  className="art-img"
                >
                  <img
                    data-src="https://hoanghapccdn.com/media/news/1128_samsung_vf_s8_tn.jpg"
                    alt="Đánh giá Samsung ViewFinity S8 UHD 27 inch S80PB "
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/1128_samsung_vf_s8_tn.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Màn Hình Máy Tính</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>21-06-2023, 1:33 pm</time>
                  </p>
                  <a
                    href="/danh-gia-samsung-viewfinity-s8-uhd-27-inch-s80pb"
                    className="art-title"
                  >
                    <h3 className="inherit">
                      Đánh giá Samsung ViewFinity S8 UHD 27 inch S80PB{" "}
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Samsung đã cho ra mắt mẫu sản phẩm ViewFinity S8, một mẫu
                      màn hình chuyên dành cho các nhà sáng tạo nội dung, sẽ
                      mang đến cho người dùng trải nghiệm vượt trội.
                    </div>
                    <a
                      href="/danh-gia-samsung-viewfinity-s8-uhd-27-inch-s80pb"
                      className="art-btn"
                    >
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <a
                  href="/nhin-lai-ryzen-7-5800x-ly-tuong-cho-youtuber-choi-game-va-sang-tao-noi-dung"
                  className="art-img"
                >
                  <img
                    data-src="https://hoanghapccdn.com/media/news/1127_danh_gia_ryzen_7_5800x_min.png"
                    alt="Ryzen 7 5800X - CPU chơi game và sáng tạo nội dung"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/1127_danh_gia_ryzen_7_5800x_min.png"
                    data-was-processed="true"
                  />
                  <span className="art-cat">CPU - Vi Xử Lý</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>10-07-2023, 11:17 am</time>
                  </p>
                  <a
                    href="/nhin-lai-ryzen-7-5800x-ly-tuong-cho-youtuber-choi-game-va-sang-tao-noi-dung"
                    className="art-title"
                  >
                    <h3 className="inherit">
                      Ryzen 7 5800X - CPU chơi game và sáng tạo nội dung
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Ryzen 7 5800X thuộc thế hệ 5000 Series của AMD, đã được
                      nhiều người dùng và chuyên gia đánh giá là CPU chơi game
                      tốt nhất trên thị trường.
                    </div>
                    <a
                      href="/nhin-lai-ryzen-7-5800x-ly-tuong-cho-youtuber-choi-game-va-sang-tao-noi-dung"
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
          <div className="art-box-group">
            <div className="box-title-group">
              <a href="/benchmarks" className="box-title">
                <h2>Benchmarks</h2>
              </a>
              <div className="cat-child-list"></div>
            </div>
            <div className="article-list-container">
              <div className="art-item">
                <a
                  href="/ram-ddr5-se-giup-cpu-the-he-thu-13-nhanh-hon-11"
                  className="art-img"
                >
                  <img
                    data-src="https://hoanghapccdn.com/media/news/1148_i7dd5_ava.jpg"
                    alt="RAM DDR5 sẽ giúp CPU thế hệ thứ 13 nhanh hơn 11% "
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/1148_i7dd5_ava.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Tin Công Nghệ</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>14-07-2023, 9:35 am</time>
                  </p>
                  <a
                    href="/ram-ddr5-se-giup-cpu-the-he-thu-13-nhanh-hon-11"
                    className="art-title"
                  >
                    <h3 className="inherit">
                      RAM DDR5 sẽ giúp CPU thế hệ thứ 13 nhanh hơn 11%{" "}
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Intel vẫn đang nỗ lực chuẩn bị cho CPU thế hệ Raptor Lake
                      sắp ra mắt. Cho thấy tiềm năng hiệu suất được tăng cường
                      khi chuyển từ bộ nhớ RAM DDR4 sang DDR5.
                    </div>
                    <a
                      href="/ram-ddr5-se-giup-cpu-the-he-thu-13-nhanh-hon-11"
                      className="art-btn"
                    >
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <a
                  href="/cpu-amd-ryzen-threadripper-pro-5995wx-pha-ky-luc-cinebench-the-gioi"
                  className="art-img"
                >
                  <img
                    data-src="https://hoanghapccdn.com/media/news/1135_thr5995x_2.jpg"
                    alt="CPU Threadripper PRO 5995WX phá kỷ lục Cinebench thế giới ?"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/1135_thr5995x_2.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Tin Công Nghệ</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>14-07-2023, 11:03 am</time>
                  </p>
                  <a
                    href="/cpu-amd-ryzen-threadripper-pro-5995wx-pha-ky-luc-cinebench-the-gioi"
                    className="art-title"
                  >
                    <h3 className="inherit">
                      CPU Threadripper PRO 5995WX phá kỷ lục Cinebench thế giới
                      ?
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      AMD Threadripper là dòng CPU cao cấp nhất của nhà AMD cho
                      khả năng xử lý cực mạnh mẽ. Mới đây mẫu CPU AMD Ryzen
                      Threadripper PRO 5995WX đã phá kỷ lục thế giới.
                    </div>
                    <a
                      href="/cpu-amd-ryzen-threadripper-pro-5995wx-pha-ky-luc-cinebench-the-gioi"
                      className="art-btn"
                    >
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <a
                  href="/diem-geekbench-cua-intel-core-i5-13600k-lieu-co-tiep-tuc-la-mot-thanh-cong-nua-cho-intel"
                  className="art-img"
                >
                  <img
                    data-src="https://hoanghapccdn.com/media/news/1133_i513th_2.jpg"
                    alt="Điểm GeekBench của Intel Core i5-13600K"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/1133_i513th_2.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Tin Công Nghệ</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>14-07-2023, 11:02 am</time>
                  </p>
                  <a
                    href="/diem-geekbench-cua-intel-core-i5-13600k-lieu-co-tiep-tuc-la-mot-thanh-cong-nua-cho-intel"
                    className="art-title"
                  >
                    <h3 className="inherit">
                      Điểm GeekBench của Intel Core i5-13600K
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Hoàng Hà PC chúng mình sẽ đem đến và chia sẻ cho mọi người
                      các thông số mà chúng mình tìm được về CPU Intel Core
                      i5-13600K.
                    </div>
                    <a
                      href="/diem-geekbench-cua-intel-core-i5-13600k-lieu-co-tiep-tuc-la-mot-thanh-cong-nua-cho-intel"
                      className="art-btn"
                    >
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <a href="/ket-qua-diem-chuan-blender" className="art-img">
                  <img
                    data-src="https://hoanghapccdn.com/media/news/482_blender_benchmark.png"
                    alt="Kết Quả Điểm Chuẩn Blender"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/482_blender_benchmark.png"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Benchmarks</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>17-07-2023, 3:30 pm</time>
                  </p>
                  <a href="/ket-qua-diem-chuan-blender" className="art-title">
                    <h3 className="inherit">Kết Quả Điểm Chuẩn Blender</h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Blender phần mềm tạo nội dung kỹ thuật số nguồn mở, giải
                      pháp tạo mô hình 3D, sáng tác, biên tập, chỉnh sửa video
                      &amp; tổng hợp phổ biến nhất hiện có.
                    </div>
                    <a href="/ket-qua-diem-chuan-blender" className="art-btn">
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <a
                  href="/ket-qua-diem-chuan-cua-corona-renderer"
                  className="art-img"
                >
                  <img
                    data-src="https://hoanghapccdn.com/media/news/481_corona_benchmark.jpg"
                    alt="Kết Quả Điểm Chuẩn Của Corona Renderer"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/481_corona_benchmark.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Benchmarks</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>17-07-2023, 3:29 pm</time>
                  </p>
                  <a
                    href="/ket-qua-diem-chuan-cua-corona-renderer"
                    className="art-title"
                  >
                    <h3 className="inherit">
                      Kết Quả Điểm Chuẩn Của Corona Renderer
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Mặc dù nhiều Công cụ kết xuất hiện đại đã đi theo con
                      đường hỗ trợ GPU, Corona vẫn trung thành với việc chỉ trở
                      thành một Trình kết xuất CPU toàn diện.
                    </div>
                    <a
                      href="/ket-qua-diem-chuan-cua-corona-renderer"
                      className="art-btn"
                    >
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <a
                  href="/diem-chuan-va-diem-hieu-suat-cua-cinema-4d-viewport"
                  className="art-img"
                >
                  <img
                    data-src="https://hoanghapccdn.com/media/news/480_c4d_vp_performace.jpg"
                    alt="Điểm Chuẩn Và Điểm Hiệu Suất Của Cinema 4D Viewport "
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/480_c4d_vp_performace.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Benchmarks</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>17-07-2023, 3:57 pm</time>
                  </p>
                  <a
                    href="/diem-chuan-va-diem-hieu-suat-cua-cinema-4d-viewport"
                    className="art-title"
                  >
                    <h3 className="inherit">
                      Điểm Chuẩn Và Điểm Hiệu Suất Của Cinema 4D Viewport{" "}
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Điểm chuẩn hiệu suất Cinema 4D Viewport của chúng tôi đo
                      lường mức độ linh hoạt và mượt mà của Công việc đang hoạt
                      động bên trong Phần mềm 3D của bạn.
                    </div>
                    <a
                      href="/diem-chuan-va-diem-hieu-suat-cua-cinema-4d-viewport"
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
          <div className="art-box-group">
            <div className="box-title-group">
              <a href="/blog" className="box-title">
                <h2>Blog Thủ Thuật</h2>
              </a>
              <div className="cat-child-list">
                <a href="/thu-thuat-internet">
                  <h3>Thủ Thuật Internet</h3>
                </a>
                <a href="/thu-thuat-may-tinh">
                  <h3>Thủ Thuật Máy Tính</h3>
                </a>
                <a href="/thu-thuat-phan-mem">
                  <h3>Thủ Thuật Phần Mềm</h3>
                </a>
                <a href="/thu-thuat-van-phong">
                  <h3>Thủ Thuật Văn Phòng</h3>
                </a>
              </div>
            </div>
            <div className="article-list-container">
              <div className="art-item">
                <a href="/cong-nghe-raid-la-gi" className="art-img">
                  <img
                    data-src="https://hoanghapccdn.com/media/news/1194_cong_nghe_raid_la_gi_ab.jpg"
                    alt="RAID là gì? Tìm hiểu RAID 0, RAID 1, RAID 5, RAID 6, RAID 10"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/1194_cong_nghe_raid_la_gi_ab.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Thủ Thuật Máy Tính</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>18-07-2023, 2:17 pm</time>
                  </p>
                  <a href="/cong-nghe-raid-la-gi" className="art-title">
                    <h3 className="inherit">
                      RAID là gì? Tìm hiểu RAID 0, RAID 1, RAID 5, RAID 6, RAID
                      10
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Công nghệ RAID chỉ xuất hiện trên các hệ thống máy tính
                      lớn, máy trạm, và máy chủ. RAID đã trở thành một thành
                      phần phổ biến trên các máy tính để bàn.
                    </div>
                    <a href="/cong-nghe-raid-la-gi" className="art-btn">
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <a href="/cach-lap-them-o-cung-cho-laptop" className="art-img">
                  <img
                    data-src="https://hoanghapccdn.com/media/news/1116_cach_lap_them_o_cung_cho_laptop_6.jpg"
                    alt="Hướng Dẫn Chi Tiết Cách Lắp Thêm Ổ Cứng Cho Laptop"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/1116_cach_lap_them_o_cung_cho_laptop_6.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Thủ Thuật Phần Mềm</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>19-07-2023, 10:35 am</time>
                  </p>
                  <a
                    href="/cach-lap-them-o-cung-cho-laptop"
                    className="art-title"
                  >
                    <h3 className="inherit">
                      Hướng Dẫn Chi Tiết Cách Lắp Thêm Ổ Cứng Cho Laptop
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Có nên lắp thêm ổ cứng cho laptop không? Và để có thể bổ
                      sung thêm ổ cứng cho máy tính xách tay thì bạn sẽ phải
                      chuẩn bị, thực hiện như thế nào đúng chuẩn?
                    </div>
                    <a
                      href="/cach-lap-them-o-cung-cho-laptop"
                      className="art-btn"
                    >
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <a href="/mua-laptop-hay-pc" className="art-img">
                  <img
                    data-src="https://hoanghapccdn.com/media/news/1115_mua_laptop_hay_pc_3.jpg"
                    alt="Nên Mua Laptop Hay PC Để Học Tập Và Làm Việc?"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/1115_mua_laptop_hay_pc_3.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Thủ Thuật Phần Mềm</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>15-07-2023, 3:26 pm</time>
                  </p>
                  <a href="/mua-laptop-hay-pc" className="art-title">
                    <h3 className="inherit">
                      Nên Mua Laptop Hay PC Để Học Tập Và Làm Việc?
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Laptop và PC luôn là hai sự lựa chọn khiến rất nhiều người
                      phân vân. Vậy nên mua laptop hay PC để phù hợp với nhu cầu
                      học tập, làm việc và giải trí?
                    </div>
                    <a href="/mua-laptop-hay-pc" className="art-btn">
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <a href="/cach-bat-va-tat-camera-laptop" className="art-img">
                  <img
                    data-src="https://hoanghapccdn.com/media/news/1114_cach_bat_va_tat_camera_laptop_5.jpg"
                    alt="Hướng Dẫn Cách Bật Và Tắt Camera Laptop Đơn Giản Nhất"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/1114_cach_bat_va_tat_camera_laptop_5.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Thủ Thuật Máy Tính</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>18-07-2023, 2:16 pm</time>
                  </p>
                  <a
                    href="/cach-bat-va-tat-camera-laptop"
                    className="art-title"
                  >
                    <h3 className="inherit">
                      Hướng Dẫn Cách Bật Và Tắt Camera Laptop Đơn Giản Nhất
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Ngày nay, các bạn có thể chụp ảnh ngay với chiếc camera
                      trên laptop của mình. Tuy nhiên, việc bật và tắt camera
                      laptop vẫn là vấn đề nan giải với nhiều người.
                    </div>
                    <a
                      href="/cach-bat-va-tat-camera-laptop"
                      className="art-btn"
                    >
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <a href="/laptop-van-chay-tren-win-khi-gap" className="art-img">
                  <img
                    data-src="https://hoanghapccdn.com/media/news/1113_laptop_van_chay_tren_win_khi_gap_1.png"
                    alt="Cách Gập Laptop Mà Máy Vẫn Chạy Trên Windows 10"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/1113_laptop_van_chay_tren_win_khi_gap_1.png"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Thủ Thuật Máy Tính</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>18-07-2023, 2:10 pm</time>
                  </p>
                  <a
                    href="/laptop-van-chay-tren-win-khi-gap"
                    className="art-title"
                  >
                    <h3 className="inherit">
                      Cách Gập Laptop Mà Máy Vẫn Chạy Trên Windows 10
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Có rất nhiều người chỉ có nhu cầu nghe nhạc và muốn tiết
                      kiệm pin laptop nên đóng màn hình lại. Vậy các bạn đã biết
                      cách gập laptop mà máy vẫn chạy hay chưa?
                    </div>
                    <a
                      href="/laptop-van-chay-tren-win-khi-gap"
                      className="art-btn"
                    >
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <a href="/lap-card-roi-cho-laptop" className="art-img">
                  <img
                    data-src="https://hoanghapccdn.com/media/news/1110_lap_card_roi_cho_laptop_2.jpg"
                    alt="Lắp Card Rời Cho Laptop Nên Hay Không Nên?"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/1110_lap_card_roi_cho_laptop_2.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Thủ Thuật Máy Tính</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>18-07-2023, 2:08 pm</time>
                  </p>
                  <a href="/lap-card-roi-cho-laptop" className="art-title">
                    <h3 className="inherit">
                      Lắp Card Rời Cho Laptop Nên Hay Không Nên?
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Nếu bạn đang còn phần vấn có nên lắp card rời cho laptop
                      hay không? Bài viết dưới đây, Hoàng Hà PC sẽ chia sẻ tất
                      tần tật thông tin liên quan về vấn đề này.
                    </div>
                    <a href="/lap-card-roi-cho-laptop" className="art-btn">
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="art-box-group">
            <div className="box-title-group">
              <a href="/tin-game" className="box-title">
                <h2>Tin Tức Game</h2>
              </a>
              <div className="cat-child-list"></div>
            </div>
            <div className="article-list-container">
              <div className="art-item">
                <a href="/cau-hinh-choi-gta-v" className="art-img">
                  <img
                    data-src="https://hoanghapccdn.com/media/news/1120_cau_hinh_choi_gta_v_1.jpg"
                    alt="Cấu Hình Máy Tính Chơi Game GTA V : Nhập Vai RolePlay Hấp Dẫn"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/1120_cau_hinh_choi_gta_v_1.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Tin Tức Game</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>21-07-2023, 2:43 pm</time>
                  </p>
                  <a href="/cau-hinh-choi-gta-v" className="art-title">
                    <h3 className="inherit">
                      Cấu Hình Máy Tính Chơi Game GTA V : Nhập Vai RolePlay Hấp
                      Dẫn
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      GTA V phiên bản mới nhất của dòng game trở thành tựa game
                      thành công nhất thế giới mở. Hãy cùng Hoàng Hà PC tìm hiểu
                      về cấu hình chơi GTA V trong bài viết này.
                    </div>
                    <a href="/cau-hinh-choi-gta-v" className="art-btn">
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <a href="/cau-hinh-choi-lol" className="art-img">
                  <img
                    data-src="https://hoanghapccdn.com/media/news/1119_cau_hinh_choi_lol_1.jpg"
                    alt="7 Cấu Hình Máy Tính Chơi LoL: Liên Minh Huyền Thoại Tốt Nhất"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/1119_cau_hinh_choi_lol_1.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Tin Tức Game</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>21-07-2023, 2:40 pm</time>
                  </p>
                  <a href="/cau-hinh-choi-lol" className="art-title">
                    <h3 className="inherit">
                      7 Cấu Hình Máy Tính Chơi LoL: Liên Minh Huyền Thoại Tốt
                      Nhất
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Tựa game League of Legend không còn xa lạ với game thủ đặc
                      biệt là ở Việt Nam. Cùng Hoàng Hà PC tìm hiểu cấu hình
                      chơi mượt mà League of Legend nhé.
                    </div>
                    <a href="/cau-hinh-choi-lol" className="art-btn">
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <a href="/cau-hinh-choi-valorant" className="art-img">
                  <img
                    data-src="https://hoanghapccdn.com/media/news/1118_cau_hinh_choi_valorant_5.jpg"
                    alt="10 Cấu Hình Máy Tính Chơi Valorant Ngon Bổ Rẻ Nhất"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/1118_cau_hinh_choi_valorant_5.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Tin Tức Game</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>21-07-2023, 2:39 pm</time>
                  </p>
                  <a href="/cau-hinh-choi-valorant" className="art-title">
                    <h3 className="inherit">
                      10 Cấu Hình Máy Tính Chơi Valorant Ngon Bổ Rẻ Nhất
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Valorant vươn lên trở thành top tựa game đa dạng chiến
                      thuật, hấp dẫn trong cơ chế chiến đấu. Hãy cùng Hoàng Hà
                      PC tìm hiểu về cấu hình chơi mượt Valorant nhé.
                    </div>
                    <a href="/cau-hinh-choi-valorant" className="art-btn">
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <a href="/cau-hinh-choi-fifa-online-4" className="art-img">
                  <img
                    data-src="https://hoanghapccdn.com/media/news/1117_cau_hinh_choi_fifa_online_4_2.jpg"
                    alt="10 Cấu Hình Máy Tính Chơi Fifa Online 4 Siêu Mượt 2023"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/1117_cau_hinh_choi_fifa_online_4_2.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Tin Tức Game</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>21-07-2023, 2:38 pm</time>
                  </p>
                  <a href="/cau-hinh-choi-fifa-online-4" className="art-title">
                    <h3 className="inherit">
                      10 Cấu Hình Máy Tính Chơi Fifa Online 4 Siêu Mượt 2023
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Fifa Online 4 tựa game giải trí tuyệt vời cho những bạn
                      đam mê bộ môn thể thao bóng đá. Cùng Hoàng Hà PC tìm hiểu
                      cấu hình chơi Fifa Online 4 mượt mà nhất.
                    </div>
                    <a href="/cau-hinh-choi-fifa-online-4" className="art-btn">
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <a href="/cai-dat-mortal-kombat-11" className="art-img">
                  <img
                    data-src="https://hoanghapccdn.com/media/news/1046_cai_dat_mortal_kombat_11_3.jpg"
                    alt="Cấu hình cài đặt game Mortal Kombat 11 dành cho máy tính"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/1046_cai_dat_mortal_kombat_11_3.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Tin Tức Game</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>21-07-2023, 2:38 pm</time>
                  </p>
                  <a href="/cai-dat-mortal-kombat-11" className="art-title">
                    <h3 className="inherit">
                      Cấu hình cài đặt game Mortal Kombat 11 dành cho máy tính
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Mortal Kombat 11 là một phiên bản game đối kháng thu hút
                      được số lượng lớn người chơi. Để có thể chơi game, bạn sẽ
                      cần tìm hiểu về cấu hình cài đặt của nó.
                    </div>
                    <a href="/cai-dat-mortal-kombat-11" className="art-btn">
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <a href="/cau-hinh-choi-cs-go" className="art-img">
                  <img
                    data-src="https://hoanghapccdn.com/media/news/1044_cau_hinh_choi_cs_go_1.jpg"
                    alt="Counter- Strike: Global Offensive - Cấu Hình Máy Tính Chơi CSGO"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/1044_cau_hinh_choi_cs_go_1.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Tin Tức Game</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>21-07-2023, 2:57 pm</time>
                  </p>
                  <a href="/cau-hinh-choi-cs-go" className="art-title">
                    <h3 className="inherit">
                      Counter- Strike: Global Offensive - Cấu Hình Máy Tính Chơi
                      CSGO
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Counter- Strike: Global Offensive là một chiến thuật bắn
                      súng nổi tiếng trong game. Vậy hãy cùng khám phá chi tiết
                      về game này và cấu hình máy tính chơi game CS GO.
                    </div>
                    <a href="/cau-hinh-choi-cs-go" className="art-btn">
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="art-box-group">
            <div className="box-title-group">
              <a href="/wiki" className="box-title">
                <h2>Wiki</h2>
              </a>
              <div className="cat-child-list"></div>
            </div>
            <div className="article-list-container">
              <div className="art-item">
                <a href="/chip-kaby-lake" className="art-img">
                  <img
                    data-src="https://hoanghapccdn.com/media/news/1191_chip_kaby_lake.png"
                    alt="Chip Kaby Lake là gì? Những điều cần biết về CPU Intel Kaby Lake"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/1191_chip_kaby_lake.png"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Wiki</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>25-07-2023, 3:04 pm</time>
                  </p>
                  <a href="/chip-kaby-lake" className="art-title">
                    <h3 className="inherit">
                      Chip Kaby Lake là gì? Những điều cần biết về CPU Intel
                      Kaby Lake
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Kaby Lake là thế hệ vi xử lý thế hệ 7 của Intel, các CPU
                      Kaby Lake sẽ mang lại hiệu năng đồ họa tốt hơn, thời gian
                      dùng pin dài hơn.
                    </div>
                    <a href="/chip-kaby-lake" className="art-btn">
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <a href="/may-tinh-ca-nhan" className="art-img">
                  <img
                    data-src="https://hoanghapccdn.com/media/news/1190_may_tinh_ca_nhan.jpg"
                    alt="Máy tính cá nhân (Personal Computer) là gì?"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/1190_may_tinh_ca_nhan.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Wiki</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>25-07-2023, 3:04 pm</time>
                  </p>
                  <a href="/may-tinh-ca-nhan" className="art-title">
                    <h3 className="inherit">
                      Máy tính cá nhân (Personal Computer) là gì?
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      PC (máy tính cá nhân) là gì, tính năng và tiện ích mà PC
                      mang lại cho người dùng là gì?. Hãy cùng Hoàng Hà PC tìm
                      hiểu qua bài viết dưới đây.
                    </div>
                    <a href="/may-tinh-ca-nhan" className="art-btn">
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <a href="/3utools-la-gi" className="art-img">
                  <img
                    data-src="https://hoanghapccdn.com/media/news/968_3utools_la_gi_6.jpg"
                    alt="3uTools là gì? Cách cài đặt và sử dụng 3uTools chi tiết"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/968_3utools_la_gi_6.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Wiki</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>25-07-2023, 3:03 pm</time>
                  </p>
                  <a href="/3utools-la-gi" className="art-title">
                    <h3 className="inherit">
                      3uTools là gì? Cách cài đặt và sử dụng 3uTools chi tiết
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      3utools hỗ trợ người dùng quản lý các ứng dụng tiện ích
                      hơn so với cách truyền thống. Giao diện dễ dùng, sẽ mang
                      đến những trải nghiệm thú vị cho bạn.
                    </div>
                    <a href="/3utools-la-gi" className="art-btn">
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <a href="/do-phan-hoi-cua-man-hinh" className="art-img">
                  <img
                    data-src="https://hoanghapccdn.com/media/news/736_thoi_gian_phan_hoi_cua_man_hinh.jpg"
                    alt="Độ phản hồi của màn hình là gì?"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/736_thoi_gian_phan_hoi_cua_man_hinh.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Wiki</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>25-07-2023, 3:02 pm</time>
                  </p>
                  <a href="/do-phan-hoi-cua-man-hinh" className="art-title">
                    <h3 className="inherit">Độ phản hồi của màn hình là gì?</h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Khi mua một chiếc máy tính bạn đừng quên kiểm tra độ phản
                      hồi màn hình của máy. Vậy độ phản hồi của màn hình là gì?
                      Hãy cùng tìm hiểu câu trả lời ngay sau đây.
                    </div>
                    <a href="/do-phan-hoi-cua-man-hinh" className="art-btn">
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <a href="/man-hinh-ultrasharp-la-gi" className="art-img">
                  <img
                    data-src="https://hoanghapccdn.com/media/news/734_man_hinh_ultrasharp_2.jpg"
                    alt="Màn hình Ultrasharp là gì? Những đặc điểm nổi bật của sản phẩm"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/734_man_hinh_ultrasharp_2.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">Wiki</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>25-07-2023, 3:01 pm</time>
                  </p>
                  <a href="/man-hinh-ultrasharp-la-gi" className="art-title">
                    <h3 className="inherit">
                      Màn hình Ultrasharp là gì? Những đặc điểm nổi bật của sản
                      phẩm
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Màn hình Ultrasharp là gì và có đặc điểm ra sao? Cùng tìm
                      hiểu thông tin về màn hình ultrasharp này để có một trải
                      nghiệm sử dụng công nghệ tiên tiến nhất.
                    </div>
                    <a href="/man-hinh-ultrasharp-la-gi" className="art-btn">
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="art-item">
                <a href="/coffee-lake-la-gi" className="art-img">
                  <img
                    data-src="https://hoanghapccdn.com/media/news/731_coffee_lake_la_gi_2.jpg"
                    alt="Coffee Lake là gì? Những điều bạn cần biết về Chip mới này của Intel"
                    width={1}
                    height={1}
                    className="lazy loaded"
                    src="https://hoanghapccdn.com/media/news/731_coffee_lake_la_gi_2.jpg"
                    data-was-processed="true"
                  />
                  <span className="art-cat">CPU - Vi Xử Lý</span>
                </a>
                <div className="art-text">
                  <p className="art-time">
                    <span>
                      by <b>Mai Văn Học</b>
                    </span>{" "}
                    |<time>17-07-2023, 11:07 am</time>
                  </p>
                  <a href="/coffee-lake-la-gi" className="art-title">
                    <h3 className="inherit">
                      Coffee Lake là gì? Những điều bạn cần biết về Chip mới này
                      của Intel
                    </h3>
                  </a>
                  <div className="art-hover">
                    <div className="art-summary">
                      Coffee Lake là thế hệ CPU được chứng kiến sự thay đổi mới
                      hoàn toàn khác biệt từ Intel. Cùng tìm hiểu kỹ hơn về loại
                      chip này nhé.
                    </div>
                    <a href="/coffee-lake-la-gi" className="art-btn">
                      Đọc chi tiết{" "}
                      <i className="fas fa-arrow-right" aria-hidden="true" />
                    </a>
                  </div>
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
              <div className="art-other-item">
                <a href="/gio-vang-gia-soc" className="art-other-img">
                  <img
                    data-src="https://hoanghapccdn.com/media/news/1226_km_gio_vang.jpg"
                    alt="Chương Trình Khuyến Mãi Giờ Vàng - Giá Sốc Tại Hoàng Hà PC"
                    width={1}
                    height={1}
                    className="lazy w-auto h-auto loaded"
                    src="https://hoanghapccdn.com/media/news/1226_km_gio_vang.jpg"
                    data-was-processed="true"
                  />
                </a>
                <div className="art-other-text">
                  <div className="art-other-time-group">
                    <div className="art-other-cat">#Tin Khuyến Mãi</div>
                    <div className="art-time">
                      <span>
                        by <b>Mai Văn Học</b>
                      </span>{" "}
                      |<time>22-04-2023, 3:48 pm</time>
                    </div>
                  </div>
                  <a href="/gio-vang-gia-soc" className="art-other-title">
                    Chương Trình Khuyến Mãi Giờ Vàng - Giá Sốc Tại Hoàng Hà PC
                  </a>
                  <div className="art-other-summary">
                    Thời Gian: 10h - 12h ngày 23/04/2023 áp dụng offline tại
                    showroom Hoàng Hà PC tại: 94E-94F Đường Láng, Ngã tư Sở, Hà
                    Nội
                  </div>
                  <a href="/gio-vang-gia-soc" className="art-other-btn">
                    Xem chi tiết{" "}
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="art-other-item">
                <a
                  href="/build-pc-full-tuf-nhan-qua-cuc-chat"
                  className="art-other-img"
                >
                  <img
                    data-src="https://i.imgur.com/w15IPu4.jpg"
                    alt="Build PC Full TUF - Nhận quà cực chất"
                    width={1}
                    height={1}
                    className="lazy w-auto h-auto"
                  />
                </a>
                <div className="art-other-text">
                  <div className="art-other-time-group">
                    <div className="art-other-cat">#Tin Khuyến Mãi</div>
                    <div className="art-time">
                      <span>
                        by <b>Thanh Thư</b>
                      </span>{" "}
                      |<time>30-03-2023, 3:25 pm</time>
                    </div>
                  </div>
                  <a
                    href="/build-pc-full-tuf-nhan-qua-cuc-chat"
                    className="art-other-title"
                  >
                    Build PC Full TUF - Nhận quà cực chất
                  </a>
                  <div className="art-other-summary">
                    Xây dựng bộ máy siêu chất tại Hoàng Hà PC từ các linh kiện
                    TUF của Asus và nhận ngay quà khủng với tổng trị giá lên tới
                    15 triệu đồng.
                  </div>
                  <a
                    href="/build-pc-full-tuf-nhan-qua-cuc-chat"
                    className="art-other-btn"
                  >
                    Xem chi tiết{" "}
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="art-other-item">
                <a
                  href="/build-may-khung-nhan-ram-chat"
                  className="art-other-img"
                >
                  <img
                    data-src="https://hoanghapccdn.com/media/news/1193_build_pc_nhan_ram_min.png"
                    alt="Build Máy Khủng, Nhận Ram Chất"
                    width={1}
                    height={1}
                    className="lazy w-auto h-auto"
                  />
                </a>
                <div className="art-other-text">
                  <div className="art-other-time-group">
                    <div className="art-other-cat">#Tin Khuyến Mãi</div>
                    <div className="art-time">
                      <span>
                        by <b>Mai Văn Học</b>
                      </span>{" "}
                      |<time>21-03-2023, 3:45 pm</time>
                    </div>
                  </div>
                  <a
                    href="/build-may-khung-nhan-ram-chat"
                    className="art-other-title"
                  >
                    Build Máy Khủng, Nhận Ram Chất
                  </a>
                  <div className="art-other-summary">
                    Khi khách hàng build PC sử dụng combo CPU AMD Ryzen 7000
                    series và mainboard ASUS tuỳ theo mã sản phẩm sẽ nhận được
                    quà tặng là RAM Kingston
                  </div>
                  <a
                    href="/build-may-khung-nhan-ram-chat"
                    className="art-other-btn"
                  >
                    Xem chi tiết{" "}
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
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
