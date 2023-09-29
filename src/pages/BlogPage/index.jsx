import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Layout from '../../components/Layout';
import { blogService } from '../../services/blog.service';
import { Link } from 'react-router-dom';

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
                  <Link to="/tin-tuc/cau-hinh-may-tinh-dung-phim" class="item-title">
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

                  <Link to="/tin-tuc/cau-hinh-may-tinh-dung-phim" class="item-btn">
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
                        className="top-art-img"
                      >
                        <img
                          data-src={`${item.imageBlog}`}
                          alt="10 Cấu Hình Máy Tính Chơi Game Hot Nhất 2023"
                          width={1}
                          height={1}
                          className="lazy w-auto h-auto loaded"
                          src={`${item.imageBlog}`}
                          data-was-processed="true"
                        />
                        <span className="top-cat">Máy Khỏe - Máy Đẹp</span>
                      </Link>
                      <div className="top-art-text">
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
                <Link to="/tin-tuc/cau-hinh-may-tinh-do-hoa" className="art-img">
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
                  <Link to="/tin-tuc/cau-hinh-may-tinh-do-hoa" className="art-title">
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
                    <Link to="/tin-tuc/cau-hinh-may-tinh-do-hoa" className="art-btn">
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
                <Link to="/tin-tuc/cau-hinh-may-tinh-dung-phim" className="art-img">
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
         
    
        </div>
      </div>
    </Layout>
  );
}
