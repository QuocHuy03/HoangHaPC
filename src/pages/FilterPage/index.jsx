import React from "react";

import Layout from "../../components/Layout";

export default function FilterPage() {
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
              <a href="/pc-workstation" itemProp="item" className="nopad-l">
                <span itemProp="name">PC Thiết Kế Đồ Họa 3D</span>
              </a>
              <meta itemProp="position" content={2} />
            </li>
          </ol>
        </div>
      </div>
      <div className="product-page container">
        <div className="box-page-title d-inline-flex align-items-baseline">
          <h1 className="page-title blue-2 text-uppercase font-700">
            PC Thiết Kế Đồ Họa 3D
          </h1>
          <p>(Tổng 121 sản phẩm)</p>
        </div>

        <div className="row">
          <div className="col-3">
            <div className="filter-container">
              <p className="box-title">LỌC SẢN PHẨM</p>
              <div className="filter-item filter-category">
                <p className="title">DANH MỤC</p>
                <div className="filter-list">
                  <a href="/hhpc-3d-lumion">HHPC 3D Lumion</a>
                  <a href="/hhpc-3d">HHPC 3D</a>
                  <a href="/hhpc-3d-render">HHPC 3D Render</a>
                </div>
              </div>
              <div className="filter-item">
                <p className="title">KHOẢNG GIÁ</p>
                <div className="filter-list">
                  <a href="https://hoanghapc.vn/pc-workstation?max=10000000">
                    <span>Dưới 10 triệu</span>
                    <span>(1)</span>
                  </a>
                  <a href="https://hoanghapc.vn/pc-workstation?max=15000000&min=10000000">
                    <span>10 triệu - 15 triệu</span>
                    <span>(1)</span>
                  </a>
                  <a href="https://hoanghapc.vn/pc-workstation?max=20000000&min=15000000">
                    <span>15 triệu - 20 triệu</span>
                    <span>(13)</span>
                  </a>
                  <a href="https://hoanghapc.vn/pc-workstation?max=25000000&min=20000000">
                    <span>20 triệu - 25 triệu</span>
                    <span>(22)</span>
                  </a>
                  <a href="https://hoanghapc.vn/pc-workstation?max=30000000&min=25000000">
                    <span>25 triệu - 30 triệu</span>
                    <span>(24)</span>
                  </a>
                  <a href="https://hoanghapc.vn/pc-workstation?max=35000000&min=30000000">
                    <span>30 triệu - 35 triệu</span>
                    <span>(18)</span>
                  </a>
                  <a href="https://hoanghapc.vn/pc-workstation?max=40000000&min=35000000">
                    <span>35 triệu - 40 triệu</span>
                    <span>(12)</span>
                  </a>
                  <a href="https://hoanghapc.vn/pc-workstation?max=45000000&min=40000000">
                    <span>40 triệu - 45 triệu</span>
                    <span>(9)</span>
                  </a>
                  <a href="https://hoanghapc.vn/pc-workstation?max=50000000&min=45000000">
                    <span>45 triệu - 50 triệu</span>
                    <span>(7)</span>
                  </a>
                  <a href="https://hoanghapc.vn/pc-workstation?min=50000000">
                    <span>Trên 50 triệu</span>
                    <span>(14)</span>
                  </a>
                </div>
              </div>
              <div className="filter-item">
                <p className="title">CPU</p>
                <div className="filter-list">
                  <a href="https://hoanghapc.vn/pc-workstation?filter=396">
                    <span>Intel Core i5</span>
                    <span>(26)</span>
                  </a>
                  <a href="https://hoanghapc.vn/pc-workstation?filter=397">
                    <span>Intel Core i7</span>
                    <span>(36)</span>
                  </a>
                  <a href="https://hoanghapc.vn/pc-workstation?filter=398">
                    <span>Intel Core i9</span>
                    <span>(47)</span>
                  </a>
                  <a href="https://hoanghapc.vn/pc-workstation?filter=399">
                    <span>Intel Xeon</span>
                    <span>(1)</span>
                  </a>
                  <a href="https://hoanghapc.vn/pc-workstation?filter=401">
                    <span>AMD Ryzen 5</span>
                    <span>(1)</span>
                  </a>
                  <a href="https://hoanghapc.vn/pc-workstation?filter=403">
                    <span>AMD Ryzen 9</span>
                    <span>(10)</span>
                  </a>
                </div>
              </div>
              <div className="filter-item">
                <p className="title">RAM</p>
                <div className="filter-list">
                  <a href="https://hoanghapc.vn/pc-workstation?filter=406">
                    <span>16GB</span>
                    <span>(22)</span>
                  </a>
                  <a href="https://hoanghapc.vn/pc-workstation?filter=407">
                    <span>32GB</span>
                    <span>(83)</span>
                  </a>
                  <a href="https://hoanghapc.vn/pc-workstation?filter=408">
                    <span>64GB</span>
                    <span>(16)</span>
                  </a>
                </div>
              </div>
              <div className="filter-item">
                <p className="title">VGA</p>
                <div className="filter-list">
                  <a href="https://hoanghapc.vn/pc-workstation?filter=410">
                    <span>VGA Geforce</span>
                    <span>(101)</span>
                  </a>
                  <a href="https://hoanghapc.vn/pc-workstation?filter=411">
                    <span>VGA Quadro</span>
                    <span>(9)</span>
                  </a>
                  <a href="https://hoanghapc.vn/pc-workstation?filter=412">
                    <span>VGA AMD</span>
                    <span>(2)</span>
                  </a>
                  <a href="https://hoanghapc.vn/pc-workstation?filter=414">
                    <span>Không có</span>
                    <span>(9)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            {/* banner  */}
            <img
              src="https://hoanghapccdn.com/media/banner/19_Oct4a510e00e5f1c7e4378a0bf2aa6a227e.jpg"
              alt=""
            />
            {/* end */}
            <div className="product-box-group">
              <div className="product-sort-group d-flex flex-wrap align-items-center justify-content-between">
                <div className="product-sort-button">
                  <a href="https://hoanghapc.vn/pc-workstation?sort=new">
                    Hàng mới
                  </a>
                  <a href="https://hoanghapc.vn/pc-workstation?sort=price-asc">
                    Giá tăng dần
                  </a>
                  <a href="https://hoanghapc.vn/pc-workstation?sort=price-desc">
                    Giá giảm dần
                  </a>
                  <a href="https://hoanghapc.vn/pc-workstation?sort=view">
                    Xem nhiều
                  </a>
                </div>
                <div className="product-display-group">
                  <select onchange="location.href = this.value">
                    <option className="js-select-path" value="/pc-workstation">
                      Sắp xếp
                    </option>
                    <option value="https://hoanghapc.vn/pc-workstation?other_filter=in-stock">
                      Còn hàng
                    </option>
                    <option value="https://hoanghapc.vn/pc-workstation?sort=rating">
                      Đánh giá
                    </option>
                    <option value="https://hoanghapc.vn/pc-workstation?sort=name">
                      Tên A-&gt;Z
                    </option>
                  </select>
                  <a
                    href="javascript:;"
                    onclick="setUserOption('product_display', 'grid', 'https://hoanghapc.vn/pc-workstation')"
                    className="icons icon-grid active"
                  />
                  <a
                    href="javascript:;"
                    onclick="setUserOption('product_display', 'list', 'https://hoanghapc.vn/pc-workstation')"
                    className="icons icon-list "
                  />
                </div>
              </div>
              <div className="p-container ">
                <div className="p-item">
                  <a
                    href="/hhpc-core-i9-13900k-64gb-ddr5-nvidia-rtx-a5000-24gb"
                    className="p-img"
                  >
                    <img
                      data-src="https://hoanghapccdn.com/media/product/250_4551_"
                      alt="HHPC CORE i9 13900K | 64GB DDR5 | NVIDIA RTX A5000 24GB"
                      width={250}
                      height={250}
                      className="lazy owl-lazy loaded"
                      src="https://hoanghapccdn.com/media/product/250_4551_"
                      data-was-processed="true"
                    />
                  </a>
                  <div className="p-text">
                    <a
                      href="/hhpc-core-i9-13900k-64gb-ddr5-nvidia-rtx-a5000-24gb"
                      className="p-name"
                    >
                      <h3 className="inherit">
                        HHPC CORE i9 13900K | 64GB DDR5 | NVIDIA RTX A5000 24GB
                      </h3>
                    </a>
                    <div className="p-price-group">
                      <span className="p-price">72.390.000 đ</span>
                      <del className="p-old-price">79.000.000 đ</del>
                      <span className="p-discount">(Tiết kiệm: 9%)</span>
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
                      <a className="p-add-cart" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="paging">
                <a href="/pc-workstation" className="current">
                  1
                </a>
                <a href="/pc-workstation?page=2">2</a>
                <a href="/pc-workstation?page=3">3</a>
                <a href="/pc-workstation?page=4">4</a>
                <a href="/pc-workstation?page=5">5</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
