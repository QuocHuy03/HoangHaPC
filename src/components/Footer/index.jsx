import React from "react";

import System from "../System";

export default function Footer() {
  return (
    <React.Fragment>
      <div
        className="footer-newsletter-group lazy"
        data-bg="url(https://i.imgur.com/S0TOw5c.png)"
        data-was-processed="true"
        style={{
          backgroundImage: 'url("https://i.imgur.com/S0TOw5c.png")',
          marginTop: "40px",
        }}
      >
        <div className="container d-flex flex-wrap align-items-center justify-content-between">
          <div className="item-left">
            <b className="d-block">
              Nhận thông báo khuyến mại <br /> hoặc tư vấn miến phí từ GradTechShop
            </b>
            <p className="m-0">
              Bạn hãy để lại email để không bỏ lỡ hàng ngàn
              <br /> sản phẩm và các chương trình khuyến mãi khác
            </p>
          </div>
          <div className="item-right d-flex align-items-center">
            <input
              type="text"
              id="js-email-newsletter"
              placeholder="Địa chỉ email của bạn..."
            />
            <a
              href="javascript:;"
              className="btn-send-newsletter"
            >
              Gửi ngay
            </a>
          </div>
        </div>
      </div>

      <System />
      <div>
        <div className="footer-info-group text-16">
          <div className="container">
            <div className="info-top-group d-flex align-items-center justify-content-between">
              <p className="item-left font-600">Email liên hệ</p>
              <div className="item-right d-flex flex-wrap align-items-center">
                <p>
                  <span>Hợp Tác Phát Triển:</span>
                  <a href="mailto:hotro@gmail.com" rel="nofollow">
                    hotro@gmail.com
                  </a>
                </p>
                <p>
                  <span>Liên Hệ Báo Giá:</span>
                  <a href="mailto:kinhdoanh@gradtechshop.vn" rel="nofollow">
                    kinhdoanh@gradtechshop.vn
                  </a>
                </p>
                <p>
                  <span>Hỗ Trợ Bảo Hành:</span>
                  <a href="mailto:kinhdoanh@gradtechshop.vn" rel="nofollow">
                    baohanh@gradtechshop.vn
                  </a>
                </p>
              </div>
            </div>
            <div className="info-bottom-group row">
              <div className="col">
                <p className="title">Hỗ trợ khách hàng</p>
                <div className="info-list">
                  <a href="/huong-dan-mua-hang-online">
                    Hướng dẫn mua hàng Online
                  </a>
                  <a href="/phuong-thuc-thanh-toan">Hướng dẫn thanh toán</a>
                  <a href="/huong-dan-mua-tra-gop">Hướng dẫn mua trả góp</a>
                </div>
              </div>
              <div className="col">
                <p className="title">Thông tin GradTechShop</p>
                <div className="info-list">
                  <a href="/gioi-thieu">Giới thiệu GradTechShop</a>
                  <a href="/he-thong-cua-hang">Hệ thống showroom</a>
                  <a href="/lien-he">Thông tin liên hệ</a>
                  <a href="/tuyen-dung">Tuyển dụng</a>
                  <a href="/tin-tuc">Tin tức</a>
                </div>
              </div>
              <div className="col">
                <p className="title">Cộng đồng GradTechShop</p>
                <div className="info-list">
                  <a href="https://www.facebook.com/hoanghapc" rel="nofollow">
                    GradTechShop Fanpage
                  </a>
                  <a
                    href="https://www.facebook.com/groups/hoanghapc"
                    rel="nofollow"
                  >
                    GradTechShop Group
                  </a>
                  <a href="https://www.tiktok.com/@hoangha.pc" rel="nofollow">
                    GradTechShop Tik Tok
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UC5-eX5HHykW9T3sgmKT6rJQ"
                    rel="nofollow"
                  >
                    GradTechShop Media
                  </a>
                </div>
              </div>
              <div className="col">
                <p className="title">Chính sách mua hàng và bảo hành</p>
                <div className="info-list">
                  <a href="/chinh-sach-bao-hanh">Chính sách bảo hành</a>
                  <a href="/chinh-sach-bao-mat">Chính sách bảo mật</a>
                  <a href="/van-chuyen-giao-nhan">
                    Chính sách vận chuyển, giao nhận
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-group">
          <div className="container d-flex align-items-center justify-content-between flex-wrap">
            <div className="text">
              <b className="d-block">
                CÔNG TY TNHH DỊCH VỤ VÀ CÔNG NGHỆ HOÀNG HÀ ©
              </b>
              <span>
                2008 - 2020 - Công ty TNHH Dịch Vụ Và Công Nghệ Hoàng Hà / GPKD
                số:0107406972 Do Sở Kế Hoạch Và Đầu Tư Thành Phố Hà Nội Cấp{" "}
                <br /> Bản Quyền Thuộc Về hoanghapc.vn
              </span>
            </div>
            <a
              href="http://online.gov.vn/Home/WebDetails/46319"
              target="_blank"
              rel="nofollow"
            >
              <img
                data-src="https://i.imgur.com/bMJYC5m.png"
                alt="Bct"
                width={1}
                height={1}
                className="lazy d-block w-auto h-auto loaded"
                src="https://i.imgur.com/bMJYC5m.png"
                data-was-processed="true"
              />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
