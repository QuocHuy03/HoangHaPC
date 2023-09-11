import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export default function HeaderBottom() {
  const location = useLocation();
  const [isDropdown, setIsDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    if (location.pathname === "/") { 
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [location.pathname]);
  return (
    <div className="global-header-bottom-group container d-flex flex-wrap align-items-center position-relative">
      <a href="/" className="header-left-group header-logo">
        <img
          src="https://hoanghapc.vn/template/2022/images/Logo_hoanghapc.png"
          alt="Hoàng Hà PC - Chuyên Cung Cấp Máy Tính Đồ Họa Cao Cấp"
          width={247}
          height={96}
          className="d-block h-auto w-auto m-auto"
        />
      </a>
      <div className="header-middle-group header-static-group">
        <a href="/huong-dan-mua-tra-gop">
          <i className="icons icon-payinstall" />
          <span>HỖ TRỢ TRẢ GÓP</span>
        </a>
        <a href="/chinh-sach-kinh-doanh">
          <i className="icons icon-tag" />
          <span>GIÁ ƯU ĐÃI NHẤT</span>
        </a>
        <a href="/chinh-sach-bao-hanh">
          <i className="icons icon-shield" />
          <span>BẢO HÀNH TẬN NHÀ</span>
        </a>
        <a href="/van-chuyen-giao-nhan">
          <i className="icons icon-truck" />
          <span>MIỄN PHÍ VẬN CHUYỂN</span>
        </a>
      </div>
      <div className="header-right-group header-hotline-group">
        <div className="item position-relative">
          <div className="item-title d-flex align-items-center">
            <i className="icons icon-phone" />
            <p className="text font-300">
              Hotline <b className="d-block">Mua hàng</b>
            </p>
          </div>
          <div className="list-hotline-group">
            <div className="item">
              <span className="num">1</span>
              <span className="txt-phone">
                Hỗ Trợ Kỹ Thuật - Bảo Hành: 19006100
              </span>
            </div>
            <div className="item">
              <span className="num">2</span>
              <span className="txt-phone">
                Hotline Hà Nội (Mr. Long): 0969.123.666
              </span>
            </div>
            <div className="item">
              <span className="num">3</span>
              <span className="txt-phone">
                Hotline Hà Nội (Mr. Nghĩa): 0396.122.999
              </span>
            </div>
            <div className="item">
              <span className="num">4</span>
              <span className="txt-phone">
                Hotline Hà Nội (Mr. Huy): 0396.138.999
              </span>
            </div>
            <div className="item">
              <span className="num">5</span>
              <span className="txt-phone">
                Hotline Hà Nội (Mr. Hưng): 0988.163.666
              </span>
            </div>
            <div className="item">
              <span className="num">6</span>
              <span className="txt-phone">
                Hotline Hà Nội (Mr. Duy): 0396.178.999
              </span>
            </div>
            <div className="item">
              <span className="num">7</span>
              <span className="txt-phone">
                Hotline Hà Nội (Mr. Thụ): 0922.635.999
              </span>
            </div>
            <div className="item">
              <span className="num">8</span>
              <span className="txt-phone">
                Hotline Hồ Chí Minh (Mr. Bình): 0968.123.666
              </span>
            </div>
            <div className="item">
              <span className="num">9</span>
              <span className="txt-phone">
                Hotline Hồ Chí Minh (Mr. Khanh): 0379.260.260
              </span>
            </div>
          </div>
        </div>
        <a href="/cart" className="icon-cart">
          <span className="js-cart-count cart-count">0</span>
        </a>
      </div>
      <div className="header-left-group header-menu-group" ref={dropdownRef}>
        <p className="title" onClick={toggleDropdown}>
          <i className="icons icon-menu" />
          <span>Danh mục sản phẩm</span>
          <i className="icons icon-down" />
        </p>
        {isDropdown && (
          <div className="menu-list menu-homepage">
            <div className="item">
              <a href="/pc-workstation" className="cat-1">
                <i
                  className="cat-thum lazy"
                  data-bg="url(https://hoanghapccdn.com/media/category/cat_4d485476e07e02638e8e2133cdf8f56d.png)"
                  data-was-processed="true"
                  style={{
                    backgroundImage:
                      'url("https://hoanghapccdn.com/media/category/cat_4d485476e07e02638e8e2133cdf8f56d.png")',
                  }}
                />
                <span className="cat-title">PC Thiết Kế Đồ Họa 3D</span>
              </a>
              <div className="sub-menu">
                <div className="sub-item">
                  <a href="/hhpc-3d-lumion" className="cat-2">
                    HHPC 3D Lumion
                  </a>
                </div>
                <div className="sub-item">
                  <a href="/hhpc-3d" className="cat-2">
                    HHPC 3D
                  </a>
                </div>
                <div className="sub-item">
                  <a href="/hhpc-3d-render" className="cat-2">
                    HHPC 3D Render
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="header-middle-group header-search-group">
        <form method="get" action="/tim" name="search">
          <div className="header-search-option-group">
            <input type="hidden" name="scat_id" id="js-search-catId" />
            <p id="js-search-title">
              Danh mục <i className="icons icon-down" />
            </p>
            <div className="search-option-list" id="js-search-option-list">
              <a href="javascript:void(0)" data-id={1}>
                PC Thiết Kế Đồ Họa 3D
              </a>
              <a href="javascript:void(0)" data-id={91}>
                PC Render, Edit Video
              </a>
              <a href="javascript:void(0)" data-id={238}>
                PC Đẹp
              </a>
              <a href="javascript:void(0)" data-id={103}>
                Server, Máy Ảo, Giả Lập
              </a>
              <a href="javascript:void(0)" data-id={27}>
                PC Gaming
              </a>
              <a href="javascript:void(0)" data-id={93}>
                PC Văn Phòng
              </a>
              <a href="javascript:void(0)" data-id={92}>
                Machine Learning / AI
              </a>
              <a href="javascript:void(0)" data-id={9}>
                Màn Hình Máy Tính
              </a>
              <a href="javascript:void(0)" data-id={166}>
                Linh Kiện Máy Tính
              </a>
              <a href="javascript:void(0)" data-id={5}>
                HDD - SSD - NAS
              </a>
              <a href="javascript:void(0)" data-id={24}>
                Tản Nhiệt Cooling
              </a>
              <a href="javascript:void(0)" data-id={25}>
                Gaming Gear
              </a>
              <a href="javascript:void(0)" data-id={121}>
                Phụ Kiện Máy Tính
              </a>
              <a href="javascript:void(0)" data-id={23}>
                Thiết Bị Mạng
              </a>
              <a href="javascript:void(0)" data-id={97}>
                Phần Mềm Bản Quyền
              </a>
            </div>
          </div>
          <input
            type="text"
            id="js-seach-input"
            name="q"
            placeholder="Nhập từ khóa cần tìm"
            defaultValue
            autoComplete="off"
            className="text-search"
          />
          <button type="submit" className="btn-search">
            <i className="icons icon-search" />
          </button>
        </form>
        <div
          className="autocomplete-suggestions"
          id="js-seach-result"
          style={{ display: "none" }}
        >
          {" "}
        </div>
      </div>
      <a href="/buildpc" className="header-right-group header-buildpc">
        <i className="icons icon-buildpc" />
        <span>Xây Dựng Cấu Hình</span>
      </a>
    </div>
  );
}
