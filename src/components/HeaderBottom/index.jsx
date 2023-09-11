import React from "react";

export default function HeaderBottom() {
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
          <div className="item">
            <a href="/hhpc-workstation-render-edit-video" className="cat-1">
              <i
                className="cat-thum lazy"
                data-bg="url(https://hoanghapccdn.com/media/category/cat_b1b23be4a8212d5551aa6858e94ebdc2.png)"
                data-was-processed="true"
                style={{
                  backgroundImage:
                    'url("https://hoanghapccdn.com/media/category/cat_b1b23be4a8212d5551aa6858e94ebdc2.png")',
                }}
              />
              <span className="cat-title">PC Render, Edit Video</span>
            </a>
            <div className="sub-menu">
              <div className="sub-item">
                <a href="/hhpc-adobe" className="cat-2">
                  HHPC Adobe
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <a href="/pc-dep" className="cat-1">
              <i
                className="cat-thum lazy"
                data-bg="url(https://hoanghapccdn.com/media/category/cat_ddc8d5a00fb538f705d6e01d0b741609.png)"
                data-was-processed="true"
                style={{
                  backgroundImage:
                    'url("https://hoanghapccdn.com/media/category/cat_ddc8d5a00fb538f705d6e01d0b741609.png")',
                }}
              />
              <span className="cat-title">PC Đẹp</span>
            </a>
            <div className="sub-menu"></div>
          </div>
          <div className="item">
            <a href="/server-may-ao-gia-lap" className="cat-1">
              <i
                className="cat-thum lazy"
                data-bg="url(https://hoanghapccdn.com/media/category/cat_13b03d7515f2d45c308560a4227beb5d.png)"
                data-was-processed="true"
                style={{
                  backgroundImage:
                    'url("https://hoanghapccdn.com/media/category/cat_13b03d7515f2d45c308560a4227beb5d.png")',
                }}
              />
              <span className="cat-title">Server, Máy Ảo, Giả Lập</span>
            </a>
            <div className="sub-menu"></div>
          </div>
          <div className="item">
            <a href="/pc-gaming" className="cat-1">
              <i
                className="cat-thum lazy"
                data-bg="url(https://hoanghapccdn.com/media/category/cat_93aa981ad3b71085fde9c40a0f03904c.png)"
                data-was-processed="true"
                style={{
                  backgroundImage:
                    'url("https://hoanghapccdn.com/media/category/cat_93aa981ad3b71085fde9c40a0f03904c.png")',
                }}
              />
              <span className="cat-title">PC Gaming</span>
            </a>
            <div className="sub-menu">
              <div className="sub-item">
                <a href="/mini-pc-gaming" className="cat-2">
                  Mini PC Gaming
                </a>
              </div>
              <div className="sub-item">
                <a href="/white-pc-gaming" className="cat-2">
                  White PC Gaming
                </a>
              </div>
              <div className="sub-item">
                <a href="/basic-pc-gaming" className="cat-2">
                  Basic PC Gaming
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <a href="/may-tinh-van-phong" className="cat-1">
              <i
                className="cat-thum lazy"
                data-bg="url(https://hoanghapccdn.com/media/category/cat_3ff734d379b1728b4b75c615828425bb.png)"
                data-was-processed="true"
                style={{
                  backgroundImage:
                    'url("https://hoanghapccdn.com/media/category/cat_3ff734d379b1728b4b75c615828425bb.png")',
                }}
              />
              <span className="cat-title">PC Văn Phòng</span>
            </a>
            <div className="sub-menu">
              <div className="sub-item">
                <a href="/pc-dong-bo" className="cat-2">
                  PC Đồng Bộ
                </a>
              </div>
              <div className="sub-item">
                <a href="/asus-workstation" className="cat-2">
                  ASUS Workstation
                </a>
              </div>
              <div className="sub-item">
                <a href="/hhpc-office" className="cat-2">
                  HHPC Office
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <a href="/machine-learning-ai-tensorflow" className="cat-1">
              <i
                className="cat-thum lazy"
                data-bg="url(https://hoanghapccdn.com/media/category/cat_d81ff623e8a9354fb7c3407b864b209d.png)"
                data-was-processed="true"
                style={{
                  backgroundImage:
                    'url("https://hoanghapccdn.com/media/category/cat_d81ff623e8a9354fb7c3407b864b209d.png")',
                }}
              />
              <span className="cat-title">Machine Learning / AI</span>
            </a>
            <div className="sub-menu"></div>
          </div>
          <div className="item">
            <a href="/man-hinh-may-tinh" className="cat-1">
              <i
                className="cat-thum lazy"
                data-bg="url(https://hoanghapccdn.com/media/category/cat_caf4bb975a1395a5d716cc21ce8726a4.png)"
                data-was-processed="true"
                style={{
                  backgroundImage:
                    'url("https://hoanghapccdn.com/media/category/cat_caf4bb975a1395a5d716cc21ce8726a4.png")',
                }}
              />
              <span className="cat-title">Màn Hình Máy Tính</span>
            </a>
            <div className="sub-menu">
              <div className="sub-item">
                <a href="/man-hinh-theo-hang" className="cat-2">
                  Màn Hình Theo Hãng
                </a>
                <a href="/man-hinh-asus">Màn Hình Asus</a>
                <a href="/man-hinh-benq">Màn Hình BenQ</a>
                <a href="/man-hinh-lg">Màn Hình LG</a>
                <a href="/man-hinh-viewsonic">Màn Hình Viewsonic</a>
                <a href="/man-hinh-samsung">Màn Hình Samsung</a>
                <a href="/man-hinh-dell">Màn Hình Dell</a>
                <a href="/man-hinh-aoc">Màn Hình AOC</a>
                <a href="/man-hinh-msi">Màn Hình MSI</a>
                <a href="/man-hinh-gigabyte">Màn hình Gigabyte</a>
              </div>
              <div className="sub-item">
                <a className="cat-2">Độ Phân Giải</a>
                <a href="/man-hinh-may-tinh?filter=%2C343%2C">
                  WUXGA (1920x1200)
                </a>
                <a href="/man-hinh-may-tinh?filter=%2C216%2C">
                  Full HD (1920x1080)
                </a>
                <a href="/man-hinh-may-tinh?filter=%2C303%2C">
                  UWHAD (2560 x 1080)
                </a>
                <a href="/man-hinh-may-tinh?filter=%2C217%2C">
                  QHD (2560x1440)
                </a>
                <a href="/man-hinh-may-tinh?filter=%2C300%2C">
                  WQHD (3440 X 1440)
                </a>
                <a href="/man-hinh-may-tinh?filter=%2C244%2C">
                  Dual Full HD (3840 x 1080)
                </a>
                <a href="/man-hinh-may-tinh?filter=%2C384%2C">
                  WQHD+ (3840 x 1600)
                </a>
                <a href="/man-hinh-may-tinh?filter=%2C218%2C">4K (3840x2160)</a>
                <a href="/man-hinh-may-tinh?filter=%2C302%2C">
                  UltraWide Ultra HD (5120 x 2160)
                </a>
              </div>
              <div className="sub-item">
                <a className="cat-2">Tẩn Số Quét</a>
                <a href="/man-hinh-may-tinh?filter=%2C219%2C">60HZ</a>
                <a href="/man-hinh-may-tinh?filter=%2C220%2C">75HZ</a>
                <a href="/man-hinh-may-tinh?filter=%2C221%2C">100HZ</a>
                <a href="/man-hinh-may-tinh?filter=%2C222%2C">120Hz</a>
                <a href="/man-hinh-may-tinh?filter=%2C223%2C">144HZ</a>
                <a href="/man-hinh-may-tinh?filter=%2C224%2C">165HZ</a>
                <a href="/man-hinh-may-tinh?filter=%2C225%2C">240HZ</a>
              </div>
            </div>
          </div>
          <div className="item">
            <a href="/linh-kien-may-tinh" className="cat-1">
              <i
                className="cat-thum lazy"
                data-bg="url(https://hoanghapccdn.com/media/category/cat_b7e443a7bbded0040540b2c507de5193.png)"
                data-was-processed="true"
                style={{
                  backgroundImage:
                    'url("https://hoanghapccdn.com/media/category/cat_b7e443a7bbded0040540b2c507de5193.png")',
                }}
              />
              <span className="cat-title">Linh Kiện Máy Tính</span>
            </a>
            <div className="sub-menu">
              <div className="sub-item">
                <a href="/main-bo-mach-chu" className="cat-2">
                  Mainboard - Bo Mạch Chủ
                </a>
                <a href="/mainboard-intel-z790">Mainboard Intel Z790</a>
                <a href="/mainboard-intel-b760">Mainboard Intel B760</a>
                <a href="/mainboard-intel-z690">Mainboard Intel Z690</a>
                <a href="/mainboard-intel-b660">Mainboard Intel B660</a>
                <a href="/mainboard-intel-h610">Mainboard Intel H610</a>
                <a href="/mainboard-intel-z590">Mainboard Intel Z590</a>
                <a href="/mainboard-intel-x299">Mainboard Intel X299</a>
                <a href="/mainboard-intel-khac">Mainboard Khác</a>
                <a href="/mainboard-amd-x670">Mainboard AMD X670</a>
                <a href="/mainboard-amd-x570">Mainboard AMD X570</a>
                <a href="/mainboard-amd-b650">Mainboard AMD B650</a>
                <a href="/mainboard-amd-b550">Mainboard AMD B550</a>
                <a href="/mainboard-amd-trx40">Mainboard AMD TRX40</a>
              </div>
              <div className="sub-item">
                <a href="/cpu-bo-vi-xu-ly" className="cat-2">
                  CPU - Bộ Vi Xử Lý
                </a>
                <a href="/cpu-intel-core-i9">Intel Core i9</a>
                <a href="/cpu-intel-core-i7">Intel Core i7</a>
                <a href="/cpu-intel-core-i5">Intel Core i5</a>
                <a href="/cpu-intel-core-i3">Intel Core i3</a>
                <a href="/cpu-intel-xeon">Intel Xeon</a>
                <a href="/cpu-amd-ryzen-5">AMD Ryzen 5</a>
                <a href="/cpu-amd-ryzen-7">AMD Ryzen 7</a>
                <a href="/cpu-amd-ryzen-9">AMD Ryzen 9</a>
                <a href="/amd-ryzen-threadripper">AMD Ryzen Threadripper</a>
              </div>
              <div className="sub-item">
                <a href="/vga-card-man-hinh" className="cat-2">
                  VGA - Card Màn Hình
                </a>
                <a href="/nvidia-rtx-4090">NVIDIA RTX 4090</a>
                <a href="/nvidia-rtx-4080">NVIDIA RTX 4080</a>
                <a href="/nvidia-rtx-4070-4070ti">NVIDIA RTX 4070 / 4070Ti</a>
                <a href="/nvidia-rtx-4060-4060ti">NVIDIA RTX 4060 / 4060Ti</a>
                <a href="/nvidia-rtx-3080">NVIDIA RTX 3080 / 3080Ti</a>
                <a href="/nvidia-rtx-3070">NVIDIA RTX 3070 / 3070Ti</a>
                <a href="/nvidia-rtx-3060-ti">NVIDIA RTX 3060 / 3060 Ti</a>
                <a href="/nvidia-rtx-3050">NVIDIA RTX 3050</a>
                <a href="/rtx-2060">NVIDIA RTX 2060 / Super</a>
                <a href="/gtx-1660-1660ti-series">NVIDIA GTX 1660 / 1660Ti</a>
                <a href="/nvidia-gtx-1650">NVIDIA GTX 1650 / Super</a>
                <a href="/gtx-1050-1050ti-series">NVIDIA GTX 1050 / 1050Ti</a>
                <a href="/nvidia-quadro">NVIDIA Quadro</a>
                <a href="/vga-nvidia">VGA NVIDIA</a>
                <a href="/vga-amd-radeon">VGA AMD Radeon</a>
              </div>
              <div className="sub-item">
                <a href="/psu-nguon-may-tinh" className="cat-2">
                  PSU - Nguồn máy tính
                </a>
                <a href="/nguon-antec">Nguồn Antec</a>
                <a href="/nguon-asus">Nguồn Asus</a>
                <a href="/nguon-cooler-master">Nguồn Cooler Master</a>
                <a href="/nguon-corsair">Nguồn Corsair</a>
                <a href="/nguon-gigabyte">Nguồn Gigabyte</a>
                <a href="/nguon-jetek">Nguồn Jetek</a>
                <a href="/nguon-msi">Nguồn MSI</a>
                <a href="/nguon-super-flower">Nguồn Super Flower</a>
                <a href="/nguon-deepcool">Nguồn Deepcool</a>
                <a href="/nguon-huntkey">Nguồn Huntkey</a>
                <a href="/nguon-nzxt">Nguồn NZXT</a>
                <a href="/nguon-seasonic">Nguồn Seasonic</a>
                <a href="/nguon-thermaltake">Nguồn Thermaltake</a>
              </div>
              <div className="sub-item">
                <a href="/ram-bo-nho-trong" className="cat-2">
                  RAM - Bộ Nhớ Trong
                </a>
                <a href="/ram-corsair">Ram Corsair</a>
                <a href="/ram-gskill">Ram Gskill</a>
                <a href="/ram-ecc">Ram Server ECC - Registered</a>
                <a href="/ram-team">Ram Team</a>
                <a href="/ram-adata">Ram Adata</a>
                <a href="/ram-kingston">Ram Kingston</a>
              </div>
              <div className="sub-item">
                <a href="/case-vo-may-tinh" className="cat-2">
                  Case - Vỏ Máy Tính
                </a>
                <a href="/case-antec">Case Antec</a>
                <a href="/case-asus">Case Asus</a>
                <a href="/case-cooler-master">Case Cooler Master</a>
                <a href="/case-corsair">Case Corsair</a>
                <a href="/case-deepcool">Case Deepcool</a>
                <a href="/case-jetek">Case Jetek</a>
                <a href="/case-mik">Case MIK</a>
                <a href="/case-montech">Case Montech</a>
                <a href="/case-msi">Case MSI</a>
                <a href="/case-nzxt">Case NZXT</a>
                <a href="/case-sama">Case Sama</a>
                <a href="/case-segotep">Case Segotep</a>
                <a href="/case-xigmatek">Case Xigmatek</a>
              </div>
            </div>
          </div>
          <div className="item">
            <a href="/hdd-ssd-nas" className="cat-1">
              <i
                className="cat-thum lazy"
                data-bg="url(https://hoanghapccdn.com/media/category/cat_34ead602847eccffd2bc5af611a422d2.png)"
                data-was-processed="true"
                style={{
                  backgroundImage:
                    'url("https://hoanghapccdn.com/media/category/cat_34ead602847eccffd2bc5af611a422d2.png")',
                }}
              />
              <span className="cat-title">HDD - SSD - NAS</span>
            </a>
            <div className="sub-menu">
              <div className="sub-item">
                <a href="/o-cung-the-ran-ssd" className="cat-2">
                  Ổ Cứng SSD
                </a>
                <a href="/ssd-adata">SSD Adata</a>
                <a href="/ssd-msi">SSD MSI</a>
                <a href="/ssd-pny">SSD PNY</a>
                <a href="/ssd-colorful">SSD Colorful</a>
                <a href="/ssd-corsair">SSD Corsair</a>
                <a href="/ssd-gigabyte">SSD Gigabyte</a>
                <a href="/ssd-kingston">SSD Kingston</a>
                <a href="/ssd-teamgroup">SSD TeamGroup</a>
                <a href="/ssd-samsung">SSD Samsung</a>
                <a href="/ssd-western-digital">SSD Western Digital</a>
              </div>
              <div className="sub-item">
                <a href="/o-cung-hdd" className="cat-2">
                  Ổ Cứng HDD
                </a>
                <a href="/hdd-seagate">HDD Seagate</a>
                <a href="/hdd-toshiba">HDD Toshiba</a>
                <a href="/hdd-western-digital">HDD Western Digital</a>
              </div>
              <div className="sub-item">
                <a href="/o-cung-di-dong-usb" className="cat-2">
                  Ổ Cứng Di Động - USB
                </a>
              </div>
              <div className="sub-item">
                <a href="/o-luu-tru-nas" className="cat-2">
                  Ổ Lưu Trữ NAS
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <a href="/tan-nhiet-cooling" className="cat-1">
              <i
                className="cat-thum lazy"
                data-bg="url(https://hoanghapccdn.com/media/category/cat_5dcd26a207d5b787b1d2a0841233ac8e.png)"
                data-was-processed="true"
                style={{
                  backgroundImage:
                    'url("https://hoanghapccdn.com/media/category/cat_5dcd26a207d5b787b1d2a0841233ac8e.png")',
                }}
              />
              <span className="cat-title">Tản Nhiệt Cooling</span>
            </a>
            <div className="sub-menu">
              <div className="sub-item">
                <a href="/tan-nhiet-cpu" className="cat-2">
                  Tản Nhiệt Khí
                </a>
                <a href="/tan-nhiet-khi-noctua">Tản Nhiệt Khí Noctua</a>
                <a href="/tan-nhiet-khi-cooler-master">
                  Tản Nhiệt Khí Cooler Master
                </a>
                <a href="/tan-nhiet-khi-deepcool">Tản Nhiệt Khí Deepcool</a>
                <a href="/tan-nhiet-khi-id-cooling">
                  Tản Nhiệt Khí ID - Cooling
                </a>
                <a href="/tan-nhiet-khi-thermalright">
                  Tản Nhiệt Khí Thermalright
                </a>
              </div>
              <div className="sub-item">
                <a href="/tan-nhiet-nuoc-aio" className="cat-2">
                  Tản Nhiệt Nước AIO
                </a>
                <a href="/tan-nhiet-nuoc-asus">Tản Nhiệt Nước Asus</a>
                <a href="/tan-nhiet-nuoc-corsair">Tản Nhiệt Nước Corsair</a>
                <a href="/tan-nhiet-nuoc-nzxt">Tản Nhiệt Nước NZXT</a>
                <a href="/tan-nhiet-nuoc-msi">Tản Nhiệt Nước MSI</a>
                <a href="/tan-nhiet-nuoc-thermalright">
                  Tản Nhiệt Nước Thermalright
                </a>
                <a href="/tan-nhiet-nuoc-thermaltake">
                  Tản Nhiệt Nước Thermaltake
                </a>
                <a href="/tan-nhiet-nuoc-cooler-master">
                  Tản Nhiệt Nước Cooler Master
                </a>
                <a href="/tan-nhiet-nuoc-deepcool">Tản Nhiệt Nước DeepCool</a>
              </div>
              <div className="sub-item">
                <a href="/quat-tan-nhiet" className="cat-2">
                  Quạt Tản Nhiệt
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <a href="/gaming-gear" className="cat-1">
              <i
                className="cat-thum lazy"
                data-bg="url(https://hoanghapccdn.com/media/category/cat_c3546eca0b572015cbd381b1309c1157.png)"
                data-was-processed="true"
                style={{
                  backgroundImage:
                    'url("https://hoanghapccdn.com/media/category/cat_c3546eca0b572015cbd381b1309c1157.png")',
                }}
              />
              <span className="cat-title">Gaming Gear</span>
            </a>
            <div className="sub-menu">
              <div className="sub-item">
                <a href="/ban-phim" className="cat-2">
                  Bàn Phím
                </a>
              </div>
              <div className="sub-item">
                <a href="/chuot-may-tinh" className="cat-2">
                  Chuột Máy Tính
                </a>
              </div>
              <div className="sub-item">
                <a href="/ban-di-chuot-gaming" className="cat-2">
                  Bàn Di Chuột
                </a>
              </div>
              <div className="sub-item">
                <a href="/tai-nghe" className="cat-2">
                  Tai Nghe
                </a>
              </div>
              <div className="sub-item">
                <a href="/ban-may-tinh" className="cat-2">
                  Bàn Gaming
                </a>
              </div>
              <div className="sub-item">
                <a href="/loa-vi-tinh" className="cat-2">
                  Loa Vi Tính
                </a>
              </div>
              <div className="sub-item">
                <a href="/ghe-game" className="cat-2">
                  Ghế Gaming
                </a>
              </div>
              <div className="sub-item">
                <a href="/webcam" className="cat-2">
                  WEBCAM
                </a>
              </div>
              <div className="sub-item">
                <a href="/thiet-bi-studio-stream" className="cat-2">
                  Thiết Bị Studio, Stream
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <a href="/phu-kien" className="cat-1">
              <i
                className="cat-thum lazy"
                data-bg="url(https://hoanghapccdn.com/media/category/cat_48012fc36834c4d6305a21c78b2e277e.png)"
                data-was-processed="true"
                style={{
                  backgroundImage:
                    'url("https://hoanghapccdn.com/media/category/cat_48012fc36834c4d6305a21c78b2e277e.png")',
                }}
              />
              <span className="cat-title">Phụ Kiện Máy Tính</span>
            </a>
            <div className="sub-menu"></div>
          </div>
          <div className="item">
            <a href="/thiet-bi-mang" className="cat-1">
              <i
                className="cat-thum lazy"
                data-bg="url(https://hoanghapccdn.com/media/category/cat_d64d635ec2d71db8bcaf077f814b6951.png)"
                data-was-processed="true"
                style={{
                  backgroundImage:
                    'url("https://hoanghapccdn.com/media/category/cat_d64d635ec2d71db8bcaf077f814b6951.png")',
                }}
              />
              <span className="cat-title">Thiết Bị Mạng</span>
            </a>
            <div className="sub-menu">
              <div className="sub-item">
                <a href="/thiet-bi-phat-wifi" className="cat-2">
                  Thiết Bị Phát Wifi
                </a>
                <a href="/asus">Bộ Phát Wifi Asus</a>
                <a href="/bo-phat-wifi-linksys">Bộ Phát Wifi Linksys</a>
                <a href="/thiet-bi-mang-tp-link">Bộ Phát Wifi TP-LINK</a>
              </div>
              <div className="sub-item">
                <a href="/usb-card-mang" className="cat-2">
                  USB - Card Mạng
                </a>
                <a href="/usb-wifi">USB- Wifi</a>
                <a href="/card-wifi">Card Wifi</a>
                <a href="/card-lan">Card Lan</a>
              </div>
              <div className="sub-item">
                <a href="/switch-bo-chia-mang" className="cat-2">
                  Switch - Bộ Chia Mạng
                </a>
                <a href="/toc-do-10-100-mbps">Tốc độ 10/100 Mbps</a>
                <a href="/toc-do-10-100-1000mbps">Tốc độ 10/100/1000Mbps</a>
              </div>
            </div>
          </div>
          <div className="item">
            <a href="/phan-mem-ban-quyen" className="cat-1">
              <i
                className="cat-thum lazy"
                data-bg="url(https://hoanghapccdn.com/media/category/cat_858ddc83e5347068f6ecf9b26713e49f.png)"
                data-was-processed="true"
                style={{
                  backgroundImage:
                    'url("https://hoanghapccdn.com/media/category/cat_858ddc83e5347068f6ecf9b26713e49f.png")',
                }}
              />
              <span className="cat-title">Phần Mềm Bản Quyền</span>
            </a>
            <div className="sub-menu">
              <div className="sub-item">
                <a href="/phan-mem-microsoft-windows" className="cat-2">
                  Phần mềm Microsoft Windows
                </a>
              </div>
              <div className="sub-item">
                <a href="/phan-mem-microsoft-office" className="cat-2">
                  Phần mềm Microsoft Office
                </a>
              </div>
              <div className="sub-item">
                <a href="/phan-mem-diet-virus" className="cat-2">
                  Phần mềm diệt virus
                </a>
              </div>
            </div>
          </div>
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
