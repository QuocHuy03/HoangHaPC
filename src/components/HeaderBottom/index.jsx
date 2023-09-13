import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { categoryService } from "../../services/category.service";
import Loading from "../Loading";
import { brandService } from "../../services/brand.service";

export default function HeaderBottom() {
  const location = useLocation();
  const [isDropdown, setIsDropdown] = useState(false);
  const [activeCategoryID, setActiveCategoryID] = useState(null);
  useEffect(() => {
    if (location.pathname === "/") {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  }, [location.pathname]);

  const { data: isCategories, isLoading: loadingCategories } = useQuery(
    ["categories"],
    () => categoryService.fetchAllCategories(),
    {
      retry: 3,
      retryDelay: 1000,
    }
  );
  const { data: isBrands, isLoading: loadingBrands } = useQuery(
    ["brands"],
    () => brandService.fetchAllBrands(),
    {
      retry: 3,
      retryDelay: 1000,
    }
  );

  const handleCategoryHover = (categoryID) => {
    setActiveCategoryID(categoryID);
  };
  const getBrandsForCategoryID = (categoryID) => {
    if (!isCategories || !isBrands) {
      return []; //
    }

    const selectedCategory = isCategories.find(
      (category) => category._id === categoryID
    );

    if (!selectedCategory) {
      return []; // Trả về một mảng rỗng nếu không tìm thấy danh mục
    }

    // Lấy tất cả các thương hiệu có categoryID trùng khớp với danh mục được chọn
    const categoryBrands = isBrands.filter(
      (brand) => brand.categoryID._id === selectedCategory._id
    );
    console.log(categoryBrands);
    return categoryBrands;
  };

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
      <div className="header-left-group header-menu-group">
        <p className="title">
          <i className="icons icon-menu" />
          <span>Danh mục sản phẩm</span>
          <i className="icons icon-down" />
        </p>

        <div className={isDropdown ? `menu-list menu-homepage` : `menu-list `}>
          {/* list category */}

          {loadingCategories ? (
            <div className="loading-spinner">
              <Loading />
            </div>
          ) : (
            isCategories?.map((category) => (
              <div
                className="item"
                key={category._id}
                onMouseEnter={() => handleCategoryHover(category._id)}
              >
                <Link to={`/filter/${category.slugCategory}`} className="cat-1">
                  <i
                    className="cat-thum lazy"
                    data-bg={`url(${category.imageCategory})`}
                    data-was-processed="true"
                    style={{
                      backgroundImage: `url(${category.imageCategory})`,
                    }}
                  />
                  <span className="cat-title">{category.nameCategory}</span>
                </Link>
                {activeCategoryID === category._id && (
                  <div className="sub-menu">
                    <div className="sub-item">
                      {category.nameCategory === "Laptop" ? (
                        <>
                          <Link className="cat-2">Laptop Chính Hãng</Link>
                          {getBrandsForCategoryID(category._id).map((brand) => (
                            <Link
                              href={`/mainboard-intel-z790/${brand._id}`}
                              key={brand._id}
                            >
                              {brand.nameBrand}
                            </Link>
                          ))}
                        </>
                      ) : category.nameCategory === "PC Đẹp" ? (
                        <>
                          <Link className="cat-2">PC Chính Hãng</Link>
                          {getBrandsForCategoryID(category._id).map((brand) => (
                            <Link
                              href={`/mainboard-intel-z790/${brand._id}`}
                              key={brand._id}
                            >
                              {brand.nameBrand}
                            </Link>
                          ))}
                        </>
                      ) : category.nameCategory === "Màn Hình" ? (
                        <>
                          <Link className="cat-2">Màn Hình Theo Hãng</Link>
                          {getBrandsForCategoryID(category._id).map((brand) => (
                            <Link
                              href={`/mainboard-intel-z790/${brand._id}`}
                              key={brand._id}
                            >
                              {brand.nameBrand}
                            </Link>
                          ))}
                        </>
                      ) : category.nameCategory === "Thiết Bị Mạng" ? (
                        <>
                          <Link className="cat-2">Thiết Bị Mạng Wifi</Link>
                          {getBrandsForCategoryID(category._id).map((brand) => (
                            <Link
                              href={`/mainboard-intel-z790/${brand._id}`}
                              key={brand._id}
                            >
                              {brand.nameBrand}
                            </Link>
                          ))}
                        </>
                      ): (
                        ""
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
      <div className="header-middle-group header-search-group">
        <form method="get" action="/tim" name="search">
          <div className="header-search-option-group">
            <input type="hidden" name="scat_id" id="js-search-catId" />
            <p id="js-search-title">
              Danh mục <i className="icons icon-down" />
            </p>
            <div className="search-option-list" id="js-search-option-list">
              {isCategories?.map((item) => (
                <Link to={`/filter/${item.slugCategory}`} key={item._id}>
                  {item.nameCategory}
                </Link>
              ))}
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
        ></div>
      </div>
      <a href="/buildpc" className="header-right-group header-buildpc">
        <i className="icons icon-buildpc" />
        <span>Xây Dựng Cấu Hình</span>
      </a>
    </div>
  );
}
