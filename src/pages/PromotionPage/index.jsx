import React from "react";

import Layout from "../../components/Layout";

export default function PromotionPage() {
  return (
    <Layout>
      <div className="article-page">
        <div className="art-category-group m-0">
          <a href="/may-khoe-may-dep">Máy Khỏe - Máy Đẹp</a>
          <a href="/tin-cong-nghe">Tin Công Nghệ</a>
          <a href="/review-san-pham">Review Sản Phẩm</a>
          <a href="/benchmarks">Benchmarks</a>
          <a href="/blog">Blog Thủ Thuật</a>
          <a href="/tin-game">Tin Tức Game</a>
          <a href="/wiki">Wiki</a>
          <a href="/tin-khuyen-mai" className="current">
            Tin Khuyến Mãi
          </a>
        </div>
      </div>

      <div className="article-page article-category-page">
        <div className="container">
          <div className="art-child-group">
            <h1 className="box-title">Tin Khuyến Mãi</h1>
            <div className="cat-child-list"></div>
          </div>
          <div className="article-list-container">
            <div className="art-item">
              <a href="/gio-vang-gia-soc" className="art-img">
                <img
                  data-src="https://hoanghapccdn.com/media/news/1226_km_gio_vang.jpg"
                  alt="Chương Trình Khuyến Mãi Giờ Vàng - Giá Sốc Tại Hoàng Hà PC"
                  width={1}
                  height={1}
                  className="lazy loaded"
                  src="https://hoanghapccdn.com/media/news/1226_km_gio_vang.jpg"
                  data-was-processed="true"
                />
                <span className="art-cat">Tin Khuyến Mãi</span>
              </a>
              <div className="art-text">
                <p className="art-time">
                  <span>
                    by <b>Mai Văn Học</b>
                  </span>{" "}
                  |<time>22-04-2023, 3:48 pm</time>
                </p>
                <a href="/gio-vang-gia-soc" className="art-title">
                  <h3 className="inherit">
                    Chương Trình Khuyến Mãi Giờ Vàng - Giá Sốc Tại Hoàng Hà PC
                  </h3>
                </a>
                <div className="art-hover">
                  <div className="art-summary">
                    Thời Gian: 10h - 12h ngày 23/04/2023 áp dụng offline tại
                    showroom Hoàng Hà PC tại: 94E-94F Đường Láng, Ngã tư Sở, Hà
                    Nội
                  </div>
                  <a href="/gio-vang-gia-soc" className="art-btn">
                    Đọc chi tiết{" "}
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            <div className="art-item">
              <a
                href="/build-pc-full-tuf-nhan-qua-cuc-chat"
                className="art-img"
              >
                <img
                  data-src="https://hoanghapccdn.com/media/news/1195_ctkm_tuf_campain_t3_2023.jpg"
                  alt="Build PC Full TUF - Nhận quà cực chất"
                  width={1}
                  height={1}
                  className="lazy loaded"
                  src="https://hoanghapccdn.com/media/news/1195_ctkm_tuf_campain_t3_2023.jpg"
                  data-was-processed="true"
                />
                <span className="art-cat">Tin Khuyến Mãi</span>
              </a>
              <div className="art-text">
                <p className="art-time">
                  <span>
                    by <b>Thanh Thư</b>
                  </span>{" "}
                  |<time>30-03-2023, 3:25 pm</time>
                </p>
                <a
                  href="/build-pc-full-tuf-nhan-qua-cuc-chat"
                  className="art-title"
                >
                  <h3 className="inherit">
                    Build PC Full TUF - Nhận quà cực chất
                  </h3>
                </a>
                <div className="art-hover">
                  <div className="art-summary">
                    Xây dựng bộ máy siêu chất tại Hoàng Hà PC từ các linh kiện
                    TUF của Asus và nhận ngay quà khủng với tổng trị giá lên tới
                    15 triệu đồng.
                  </div>
                  <a
                    href="/build-pc-full-tuf-nhan-qua-cuc-chat"
                    className="art-btn"
                  >
                    Đọc chi tiết{" "}
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            <div className="art-item">
              <a href="/build-may-khung-nhan-ram-chat" className="art-img">
                <img
                  data-src="https://hoanghapccdn.com/media/news/1193_build_pc_nhan_ram_min.png"
                  alt="Build Máy Khủng, Nhận Ram Chất"
                  width={1}
                  height={1}
                  className="lazy loaded"
                  src="https://hoanghapccdn.com/media/news/1193_build_pc_nhan_ram_min.png"
                  data-was-processed="true"
                />
                <span className="art-cat">Tin Khuyến Mãi</span>
              </a>
              <div className="art-text">
                <p className="art-time">
                  <span>
                    by <b>Mai Văn Học</b>
                  </span>{" "}
                  |<time>21-03-2023, 3:45 pm</time>
                </p>
                <a href="/build-may-khung-nhan-ram-chat" className="art-title">
                  <h3 className="inherit">Build Máy Khủng, Nhận Ram Chất</h3>
                </a>
                <div className="art-hover">
                  <div className="art-summary">
                    Khi khách hàng build PC sử dụng combo CPU AMD Ryzen 7000
                    series và mainboard ASUS tuỳ theo mã sản phẩm sẽ nhận được
                    quà tặng là RAM Kingston
                  </div>
                  <a href="/build-may-khung-nhan-ram-chat" className="art-btn">
                    Đọc chi tiết{" "}
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            <div className="art-item">
              <a
                href="/uu-dai-danh-cho-khach-hang-doanh-nghiep"
                className="art-img"
              >
                <img
                  data-src="https://hoanghapccdn.com/media/news/1189_km_kh_doanh_nghi__p_h1.jpg"
                  alt="Ưu Đãi Dành Cho Khách Hàng Doanh Nghiệp"
                  width={1}
                  height={1}
                  className="lazy loaded"
                  src="https://hoanghapccdn.com/media/news/1189_km_kh_doanh_nghi__p_h1.jpg"
                  data-was-processed="true"
                />
                <span className="art-cat">Tin Khuyến Mãi</span>
              </a>
              <div className="art-text">
                <p className="art-time">
                  <span>
                    by <b>Mai Văn Học</b>
                  </span>{" "}
                  |<time>21-06-2023, 1:53 pm</time>
                </p>
                <a
                  href="/uu-dai-danh-cho-khach-hang-doanh-nghiep"
                  className="art-title"
                >
                  <h3 className="inherit">
                    Ưu Đãi Dành Cho Khách Hàng Doanh Nghiệp
                  </h3>
                </a>
                <div className="art-hover">
                  <div className="art-summary">
                    Hoàng Hà PC triển khai chương trình khuyến mại đặc biệt, với
                    nhiều quà tặng giá trị dành cho Quý Khách hàng Doanh nghiệp
                    khi xây dựng hệ thống máy tính cho văn phòng tại Hoàng Hà PC
                    trong năm 2023.
                  </div>
                  <a
                    href="/uu-dai-danh-cho-khach-hang-doanh-nghiep"
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
                href="/mua-cpu-amd-tang-code-game-star-wars-jedi-survivor"
                className="art-img"
              >
                <img
                  data-src="https://hoanghapccdn.com/media/news/1188_km_amd_tang_code_game_starwar.jpg"
                  alt="Mua CPU AMD - Tặng code game STAR WARS Jedi: Survivor"
                  width={1}
                  height={1}
                  className="lazy loaded"
                  src="https://hoanghapccdn.com/media/news/1188_km_amd_tang_code_game_starwar.jpg"
                  data-was-processed="true"
                />
                <span className="art-cat">Tin Khuyến Mãi</span>
              </a>
              <div className="art-text">
                <p className="art-time">
                  <span>
                    by <b>Mai Văn Học</b>
                  </span>{" "}
                  |<time>21-06-2023, 1:58 pm</time>
                </p>
                <a
                  href="/mua-cpu-amd-tang-code-game-star-wars-jedi-survivor"
                  className="art-title"
                >
                  <h3 className="inherit">
                    Mua CPU AMD - Tặng code game STAR WARS Jedi: Survivor
                  </h3>
                </a>
                <div className="art-hover">
                  <div className="art-summary">
                    Sở hữu con chíp mạnh mẽ thế hệ mới của AMD tại Hoàng Hà PC
                    và nhận ngay code game STAR WARS Jedi: Survivor™ cực hot
                    hiện nay.
                  </div>
                  <a
                    href="/mua-cpu-amd-tang-code-game-star-wars-jedi-survivor"
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
                href="/nhan-ngay-game-hot-company-of-heroes-3-khi-mua-cpu-amd-ryzen"
                className="art-img"
              >
                <img
                  data-src="https://hoanghapccdn.com/media/news/1187_km_mua_cpu_amd_tang_code_game_t1_2023.jpg"
                  alt="Nhận ngay Game ''hot'' Company Of Heroes 3 khi mua CPU AMD Ryzen"
                  width={1}
                  height={1}
                  className="lazy loaded"
                  src="https://hoanghapccdn.com/media/news/1187_km_mua_cpu_amd_tang_code_game_t1_2023.jpg"
                  data-was-processed="true"
                />
                <span className="art-cat">Tin Khuyến Mãi</span>
              </a>
              <div className="art-text">
                <p className="art-time">
                  <span>
                    by <b>Mai Văn Học</b>
                  </span>{" "}
                  |<time>21-06-2023, 1:39 pm</time>
                </p>
                <a
                  href="/nhan-ngay-game-hot-company-of-heroes-3-khi-mua-cpu-amd-ryzen"
                  className="art-title"
                >
                  <h3 className="inherit">
                    Nhận ngay Game ''hot'' Company Of Heroes 3 khi mua CPU AMD
                    Ryzen
                  </h3>
                </a>
                <div className="art-hover">
                  <div className="art-summary">
                    Quà tặng hấp dẫn nhận ngay tự game "hot hit" Company of
                    Heroes™ 3 ngay hôm nay khi mua các dòng sản phẩm CPU AMD
                    Ryzen tại Hoàng Hà PC.
                  </div>
                  <a
                    href="/nhan-ngay-game-hot-company-of-heroes-3-khi-mua-cpu-amd-ryzen"
                    className="art-btn"
                  >
                    Đọc chi tiết{" "}
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            <div className="art-item">
              <a href="/giam-gia-cpu-du-cham-day" className="art-img">
                <img
                  data-src="https://hoanghapccdn.com/media/news/1175_giam_gia_cpu_1.jpg"
                  alt="Giảm giá CPU Đu Chạm Đáy!"
                  width={1}
                  height={1}
                  className="lazy loaded"
                  src="https://hoanghapccdn.com/media/news/1175_giam_gia_cpu_1.jpg"
                  data-was-processed="true"
                />
                <span className="art-cat">Tin Khuyến Mãi</span>
              </a>
              <div className="art-text">
                <p className="art-time">
                  <span>
                    by <b>Mai Văn Học</b>
                  </span>{" "}
                  |<time>14-06-2023, 1:23 pm</time>
                </p>
                <a href="/giam-gia-cpu-du-cham-day" className="art-title">
                  <h3 className="inherit">Giảm giá CPU Đu Chạm Đáy!</h3>
                </a>
                <div className="art-hover">
                  <div className="art-summary">
                    Khách hàng Build PC lắp rắp tại hệ thống bán hàng của Hoàng
                    Hà PC, chỉ cần bao gồm linh kiện CPU trong danh sách dưới
                    đây là được giảm ngay giá cực sốc.
                  </div>
                  <a href="/giam-gia-cpu-du-cham-day" className="art-btn">
                    Đọc chi tiết{" "}
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            <div className="art-item">
              <a
                href="/hoang-ha-pc-ve-sinh-may-tinh-mien-phi-tren-toan-he-thong"
                className="art-img"
              >
                <img
                  data-src="https://hoanghapccdn.com/media/news/1162_ve_sinh_mien_phi.jpg"
                  alt="Hoàng Hà PC vệ sinh máy tính MIỄN PHÍ trên toàn hệ thống"
                  width={1}
                  height={1}
                  className="lazy loaded"
                  src="https://hoanghapccdn.com/media/news/1162_ve_sinh_mien_phi.jpg"
                  data-was-processed="true"
                />
                <span className="art-cat">Tin Khuyến Mãi</span>
              </a>
              <div className="art-text">
                <p className="art-time">
                  <span>
                    by <b>Mai Văn Học</b>
                  </span>{" "}
                  |<time>21-06-2023, 1:43 pm</time>
                </p>
                <a
                  href="/hoang-ha-pc-ve-sinh-may-tinh-mien-phi-tren-toan-he-thong"
                  className="art-title"
                >
                  <h3 className="inherit">
                    Hoàng Hà PC vệ sinh máy tính MIỄN PHÍ trên toàn hệ thống
                  </h3>
                </a>
                <div className="art-hover">
                  <div className="art-summary">
                    Nhằm nâng cao chất lượng dịch vụ và đáp ứng nhu cầu của
                    khách hàng, Hoàng Hà PC chính thức triển khai dịch vụ vệ
                    sinh PC Desktop miễn phí.
                  </div>
                  <a
                    href="/hoang-ha-pc-ve-sinh-may-tinh-mien-phi-tren-toan-he-thong"
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
                href="/chuong-trinh-uu-dai-khi-build-pc-tai-hoang-ha-pc"
                className="art-img"
              >
                <img
                  data-src="https://hoanghapccdn.com/media/news/1157_uu_dai_build_pc_min.png"
                  alt="Chương Trình Ưu Đãi Khi Build PC Tại Hoàng Hà PC"
                  width={1}
                  height={1}
                  className="lazy loaded"
                  src="https://hoanghapccdn.com/media/news/1157_uu_dai_build_pc_min.png"
                  data-was-processed="true"
                />
                <span className="art-cat">Tin Khuyến Mãi</span>
              </a>
              <div className="art-text">
                <p className="art-time">
                  <span>
                    by <b>Mai Văn Học</b>
                  </span>{" "}
                  |<time>14-06-2023, 10:47 am</time>
                </p>
                <a
                  href="/chuong-trinh-uu-dai-khi-build-pc-tai-hoang-ha-pc"
                  className="art-title"
                >
                  <h3 className="inherit">
                    Chương Trình Ưu Đãi Khi Build PC Tại Hoàng Hà PC
                  </h3>
                </a>
                <div className="art-hover">
                  <a
                    href="/chuong-trinh-uu-dai-khi-build-pc-tai-hoang-ha-pc"
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
                href="/uu-dai-mua-tuu-truong-voi-man-hinh-msi-modern-summit"
                className="art-img"
              >
                <img
                  data-src="https://hoanghapccdn.com/media/news/1152_quang_cao_msi_1.jpg"
                  alt="Ưu Đãi - Mùa Tựu Trường Với Màn Hình Msi Modern & Summit"
                  width={1}
                  height={1}
                  className="lazy loaded"
                  src="https://hoanghapccdn.com/media/news/1152_quang_cao_msi_1.jpg"
                  data-was-processed="true"
                />
                <span className="art-cat">Tin Khuyến Mãi</span>
              </a>
              <div className="art-text">
                <p className="art-time">
                  <span>
                    by <b>Mai Văn Học</b>
                  </span>{" "}
                  |<time>21-06-2023, 2:00 pm</time>
                </p>
                <a
                  href="/uu-dai-mua-tuu-truong-voi-man-hinh-msi-modern-summit"
                  className="art-title"
                >
                  <h3 className="inherit">
                    Ưu Đãi - Mùa Tựu Trường Với Màn Hình Msi Modern &amp; Summit
                  </h3>
                </a>
                <div className="art-hover">
                  <div className="art-summary">
                    Nhận ngay ưu đãi bàn phím GK30 US hoặc tai nghe GH30 khi mua
                    màn hình Modern hoặc Summit trong thời gian từ 5.9 đến
                    31.10.2022
                  </div>
                  <a
                    href="/uu-dai-mua-tuu-truong-voi-man-hinh-msi-modern-summit"
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
                href="/su-kien-sinh-nhat-lien-minh-huyen-thoai-lan-thu-10"
                className="art-img"
              >
                <img
                  data-src="https://hoanghapccdn.com/media/news/1140_khuyen_mai_lol_1.png"
                  alt="Sự kiện sinh nhật Liên Minh Huyền Thoại lần thứ 10"
                  width={1}
                  height={1}
                  className="lazy loaded"
                  src="https://hoanghapccdn.com/media/news/1140_khuyen_mai_lol_1.png"
                  data-was-processed="true"
                />
                <span className="art-cat">Tin Khuyến Mãi</span>
              </a>
              <div className="art-text">
                <p className="art-time">
                  <span>
                    by <b>Mai Văn Học</b>
                  </span>{" "}
                  |<time>21-06-2023, 1:42 pm</time>
                </p>
                <a
                  href="/su-kien-sinh-nhat-lien-minh-huyen-thoai-lan-thu-10"
                  className="art-title"
                >
                  <h3 className="inherit">
                    Sự kiện sinh nhật Liên Minh Huyền Thoại lần thứ 10
                  </h3>
                </a>
                <div className="art-hover">
                  <a
                    href="/su-kien-sinh-nhat-lien-minh-huyen-thoai-lan-thu-10"
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
                href="/msi-promotion-powered-by-msi-he-ron-rang-ngan-uu-dai"
                className="art-img"
              >
                <img
                  data-src="https://hoanghapccdn.com/media/news/1129_msi_khuyen_mai_min.jpg"
                  alt="MSI promotion | Powered by MSI - HÈ RỘN RÀNG,NGÀN ƯU ĐÃI"
                  width={1}
                  height={1}
                  className="lazy loaded"
                  src="https://hoanghapccdn.com/media/news/1129_msi_khuyen_mai_min.jpg"
                  data-was-processed="true"
                />
                <span className="art-cat">Tin Khuyến Mãi</span>
              </a>
              <div className="art-text">
                <p className="art-time">
                  <span>
                    by <b>Mai Văn Học</b>
                  </span>{" "}
                  |<time>09-06-2023, 10:18 am</time>
                </p>
                <a
                  href="/msi-promotion-powered-by-msi-he-ron-rang-ngan-uu-dai"
                  className="art-title"
                >
                  <h3 className="inherit">
                    MSI promotion | Powered by MSI - HÈ RỘN RÀNG,NGÀN ƯU ĐÃI
                  </h3>
                </a>
                <div className="art-hover">
                  <a
                    href="/msi-promotion-powered-by-msi-he-ron-rang-ngan-uu-dai"
                    className="art-btn"
                  >
                    Đọc chi tiết{" "}
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="paging">
            <a href="/tin-khuyen-mai" className="current">
              1
            </a>
            <a href="/tin-khuyen-mai?page=2">2</a>
            <a href="/tin-khuyen-mai?page=3">3</a>
            <a href="/tin-khuyen-mai?page=4">4</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
