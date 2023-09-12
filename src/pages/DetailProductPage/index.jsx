import React, { useState } from "react";
import Layout from "../../components/Layout";
import SliderImages from "../../components/SliderImages";
import { imageProduct } from "../../constants/imageProduct";
import { Rating } from "react-simple-star-rating";
import Carousel from "../../components/Carousel";
import { bannerImages } from "../../constants/image";
import { SwiperSlide } from "swiper/react";

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
          <h1 className="pd-name w-100">
            HHPC 3D LUMION i9 13900K | 64G DDR5 | NVIDIA RTX 4090 24GB
          </h1>
          <div className="pd-left-group">
            <SliderImages loop={true} images={imageProduct} navigation={true} />
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
              <div className="pd-summary-list">
                <div className="item">
                  CPU : INTEL CORE i9 13900K up 5.8GHz | 24 CORE | 32 THREAD
                </div>
                <div className="item">RAM : DDR5 64GB 5200 MHz (2x32G)</div>
                <div className="item">
                  VGA : NVIDIA GEFORCE RTX 4090 24G GDDR6X
                </div>
              </div>
            </div>
            <div className="pd-price-group">
              <span className="pd-price">80.850.000 đ</span>
              <del className="pd-old-price">89.000.000 đ </del>
              <span className="pd-price-off">Tiết kiệm 8.150.000 đ</span>
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
                    <span style={{ color: "#ff0000", fontSize: "12pt" }}>
                      <strong>ƯU ĐÃI KHI MUA KÈM PC TẠI HOÀNG HÀ PC</strong>
                    </span>
                  </p>
                </div>
                <div className="item">
                  <p>
                    <span style={{ fontSize: "12pt" }}>
                      ⭐ Tặng ngay{" "}
                      <span style={{ fontSize: "13pt", color: "#ff0000" }}>
                        <strong>
                          bộ phím chuột và bàn di chuột + 5 mét dây mạng
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
                        <span style={{ color: "#ff0000" }}>100.000đ</span>
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
                        <span style={{ color: "#ff0000" }}>200.000đ</span>
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
              <h2 className="box-title">
                Đánh giá HHPC 3D LUMION i9 13900K | 64G DDR5 | NVIDIA RTX 4090
                24GB
              </h2>
              <div
                className={
                  isSeeMore
                    ? "pd-content-holder js-static-content bg-content"
                    : "pd-content-holder js-static-content"
                }
                style={isSeeMore ? { height: 550 } : { height: "auto" }}
              >
                <p style={{ textAlign: "center" }}>
                  <iframe
                    title="YouTube video player"
                    src="https://www.youtube.com/embed/rJXMr3JkF0k"
                    width={896}
                    height={504}
                    frameBorder={0}
                    allowFullScreen="allowfullscreen"
                  />
                </p>
                <p>
                  <strong>HHPC 3D LUMION i9 13900K&nbsp;</strong>là một trong
                  những cấu hình đồ họa được&nbsp;
                  <strong>
                    <a href="https://hoanghapc.vn/">Hoàng Hà PC</a>
                  </strong>
                  &nbsp;tối ưu về phần cứng giúp cho khách hàng có trải nghiệm
                  tốt nhất trong tầm giá. Cấu hình này mang tới sự ổn định cao
                  cũng như đáp ứng đầy đủ thiết kế đồ họa, thích ứng với những
                  phần mềm như&nbsp;Lumion, AutoCaD, Adobe,...&nbsp;thích hợp
                  cho người dùng làm việc chuyên nghiệp.
                </p>
                <h3>
                  1.&nbsp;
                  <a href="https://hoanghapc.vn/cpu-bo-vi-xu-ly">
                    Mua CPU máy tính
                  </a>
                  &nbsp;mới nhất từ Intel&nbsp;
                </h3>
                <p>
                  <strong>
                    CPU&nbsp;
                    <a href="https://hoanghapc.vn/cpu-intel-core-i9-13900k">
                      Intel Core i9 13900K
                    </a>
                  </strong>
                  &nbsp;là CPU cao cấp nhất thế hệ thứ 13 mang đến sự thành công
                  của công nghệ Intel Hybird khi kết hợp với nhân P và nhân E
                  tạo nên số lượng nhân vô cùng lớn lên tới&nbsp;24 nhân&nbsp;và
                  32&nbsp;luồng,&nbsp;từ đó đẩy mạnh sức mạnh đa nhiệm CPU lên
                  tầm cao mới,&nbsp;Intel Core i9 13900K&nbsp;vẫn giữ sức mạnh
                  đơn nhân khủng khiếp mà trước kia đã có khi&nbsp;tần số Max
                  Turbo có để đạt đến 5.8GHz.
                </p>
                <p>
                  Với những gì test trong trải nghiệm,&nbsp;Intel Core
                  i9-13900K&nbsp;có hiệu năng cao hơn&nbsp;Core
                  i9-12900K&nbsp;12% và hơn 10% so với&nbsp;Ryzen 9
                  5950X&nbsp;của AMD. Vì vậy đây sẽ là sản phẩm đáng mua nhất
                  trong năm nay.
                </p>
                <p>
                  <img
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    src="/media/product/3547_cpu_i9_13900k.jpg"
                    alt="CPU Intel Core i9-13900K"
                    width={661}
                    height={661}
                  />
                </p>
                <h3>
                  2.&nbsp;
                  <a href="https://hoanghapc.vn/main-bo-mach-chu">Mainboard</a>
                  &nbsp;MSI Z790 GAMING WIFI D5 - Sức mạnh hàng đầu về hiệu năng
                </h3>
                <p>
                  <strong>Bo mạch chủ Z790 GAMING WIFI D5</strong>&nbsp;được MSI
                  trang bị những giải pháp nâng cấp với khả năng lưu trữ và kết
                  nối vượt trội để mang lại hiệu suất tối ưu cho nhu cầu sử
                  dụng.&nbsp;Để đảm bảo hiệu suất Turbo Boost và ép xung tối đa
                  của CPU thế hệ mới của Intel,&nbsp;bo mạch chủ Z790&nbsp;trang
                  bị thiết kế VRM tốt nhất với các linh kiện cao cấp. Kết nối
                  PCIe 5.0 hỗ trợ gấp đôi băng thông so với PCIe 4.0 và đảm bảo
                  tương thích với các GPU tiên tiến được trong vài năm nhằm mang
                  lại hiệu năng tối đa.
                </p>
                <p>
                  MSI&nbsp;thiết kế cho&nbsp;Z790 GAMING WIFI D5&nbsp;hệ thống
                  tản nhiệt tối ưu hóa để đảm bảo CPU, chipset, SSD luôn hoạt
                  động ổn định với nhiệt độ thấp nhất.&nbsp;Tản nhiệt chipset
                  được thiết kế để giảm bụi và tiếng ồn, đồng thời có khả năng
                  duy trì hiệu quả cao của PCH. Kết nối&nbsp;Wi-Fi 6E tích hợp
                  của Intel hỗ trợ băng tần kép cho&nbsp;khả năng truy
                  cập&nbsp;siêu tốc. Trải nghiệm làm việc và chơi game siêu tốc
                  nhờ các kết nối hiện đại như: khe cắm PCIe 4.0, Lightning Gen
                  4 x4 M.2 với M.2 Shield Frozr, Turbo USB 3.2 Gen 2 10G.
                </p>
                <p>
                  <img
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    src="https://hoanghapccdn.com/media/lib/08-06-2023/msi-z790-gaming-wifi-ha1.jpg"
                    alt="MSI Z790 GAMING WIFI D5"
                    width={660}
                  />
                </p>
                <h3>
                  3.&nbsp;
                  <a href="https://hoanghapc.vn/tan-nhiet-cpu">
                    Tản nhiệt&nbsp;nước&nbsp;cho CPU
                  </a>
                  &nbsp;Thermalright Frozen Notte 360 Black ARGB - Tối ưu nhiệt
                  độ hàng đầu
                </h3>
                <p>
                  <strong>
                    <a href="https://hoanghapc.vn/tan-nhiet-nuoc-thermalright-frozen-notte-360-black-argb">
                      Thermalright Frozen Notte 360 Black ARGB
                    </a>
                  </strong>
                  &nbsp;là dòng tản nhiệt nước hàng đầu hiện nay, với thiết kế
                  nhằm tối ưu cho các CPU cao cấp và được trang bị hệ thống LED
                  ARGB mang lại sự nổi bật cho bộ máy của bạn. Phần mặt của
                  block của&nbsp;Tản nhiệt nước này có thể xoay được, phù hợp
                  với mọi cách lắp đặt và mọi vị trí bố trí dây, chưa kể sức
                  mạnh bơm vô cùng mạnh mẽ đạt tới 5300 RPM±10%, và tốc độ quạt
                  2000 RPM±10% giúp&nbsp;CPU luôn ở mức nhiệt thấp nhất kể cả
                  khi làm những tác vụ nặng. Độ ồn của bơm và quạt cao nhất chỉ
                  ở mức&nbsp;28 dBA&nbsp;giúp bộ máy luôn hoạt động yên tĩnh.
                </p>
                <p>
                  <img
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    src="https://hoanghapccdn.com/media/lib/28-04-2023/frozen-notte-360-black-ha1.jpg"
                    alt="Thermalright Frozen Notte 360 Black ARGB"
                    width={660}
                  />
                </p>
                <h3>
                  4.&nbsp;
                  <a href="https://hoanghapc.vn/ram-bo-nho-trong">Bộ nhớ ram</a>
                  &nbsp;CORSAIR VENGEANCE RGB 64G/ 5200MHz (2x32G) DDR5
                </h3>
                <p>
                  <strong>
                    <a href="https://hoanghapc.vn/ram-ddr5-corsair-vengeance-rgb-64g-5200-2x32g">
                      CORSAIR VENGEANCE RGB 64G/ 5200MHz (2x32G)
                    </a>
                  </strong>
                  &nbsp;tối đa hóa sức mạnh của hệ thống với RAM DDR5, đảm bảo
                  CPU của bạn nhận dữ liệu một cách nhanh chóng và dễ dàng. Kit
                  RAM này có xung nhịp tới 5200 Mhz, được đánh giá là tốc độ xử
                  lí siêu tốc hỗ trợ mọi tác vụ từ chơi game, phần mềm chuyên
                  dụng, mở nhiều tab hay đa tác vụ đều nhanh chóng hơn bao giờ
                  hết.
                </p>
                <p>
                  Hiệu suất tùy chỉnh PCB đảm bảo chất lượng và độ ổn định của
                  tín hiệu, cho khả năng ép xung vượt trội. Tản nhiệt nhôm
                  nguyên khối giúp dẫn nhiệt ra khỏi bộ nhớ một cách nhanh
                  chóng. Bộ nhớ có thiết kế&nbsp;LED RGB&nbsp;phù hợp với các bộ
                  máy hiện đại, nổi bật.
                </p>
                <p>
                  <img
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    src="https://hoanghapccdn.com/media/lib/28-04-2023/ddr5-corsair-vengeance-rgb-ha2.jpg"
                    alt="CORSAIR VENGEANCE RGB 64G/ 5200MHz"
                    width={660}
                  />
                </p>
                <h3>
                  5.&nbsp;
                  <a href="https://hoanghapc.vn/o-cung-the-ran-ssd">Ổ SSD</a>,
                  HDD:&nbsp;MSI Spatium M480 Pro 1TB PCIe 4.0 NVMe M.2
                </h3>
                <p>
                  <strong>MSI Spatium M480 Pro</strong>&nbsp;đem đến hiệu năng
                  dành cho người dùng chuyên nghiệp nhờ vào PCIe 4.0, đạt tốc độ
                  đọc/ghi ngẫu nhiên nhanh hơn đến 60%, cho trải nghiệm phản hồi
                  nhanh chóng trong chơi game và làm việc hiệu suất ngay cả
                  trong các tác vụ nặng. Hoàn thành mọi công việc&nbsp;với hiệu
                  suất tuyệt vời bởi công nghệ NVMe PCIe mới nhất với tốc độ đọc
                  đến&nbsp;7400 MB/s và tốc độ ghi đến 6000 MB/s.
                </p>
                <p>
                  Công nghệ chip nhớ 3D NAND tiên tiến nhất mang đến mức độ lưu
                  trữ dày đặc hơn trong một thiết kế nhỏ gọn và cho phép SPATIUM
                  đạt dung lượng lên đến 1TB.&nbsp;Tích hợp tính năng an ninh
                  cho dữ liệu và tự sửa lỗi tăng cường độ bền và tuổi thọ của
                  các chip NAND flash.
                </p>
                <p>
                  <img
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    src="https://hoanghapccdn.com/media/product/2773_msi_spatium_m480_pro_1tb_ha1.jpg"
                    alt
                    width={660}
                  />
                </p>
                <h3>
                  6.&nbsp;
                  <a href="https://hoanghapc.vn/vga-card-man-hinh">
                    Card màn hình rời
                  </a>
                  &nbsp;GIGABYTE RTX 4090 GAMING OC 24G cơn bão hiệu năng:
                </h3>
                <p>
                  Thông số kỹ thuật năm nay của&nbsp;Gigabyte RTX 4090 Gaming OC
                  24GB&nbsp;cũng cho thấy sự cải tiến vô cùng lớn của NVIDIA
                  trong năm nay, với công nghệ mới Ada Lovelance tăng gấp đôi
                  hiệu suất và tiết kiệm năng lượng cũng như nhân cuda vượt trội
                  lên tới 16384 gần như gấp 1,5 lần so với người tiềm nhiệm
                  trước kia là RTX 3090 là 10496. Mặc dù vẫn sở hữu VRAM 24GB
                  GDDR6X như năm ngoái, nhưng hiệu năng của RTX 4090 thật sự ấn
                  tượng, cụ thể với bài test GeekBench và Open CL, hiệu năng của
                  RTX 4090 mạnh lên tới 67% so với RTX 3090 Ti, điều đó cho thấy
                  NVIDIA đã sẵn sàng hơn cho trải nghiệm 8K mà RTX 3090 trước
                  kia còn dang dở, từ đó mang tới trải nghiệm hình ảnh tốt nhất,
                  hiệu năng vượt trội khiến cho sản phẩm này đáng đồng tiền cho
                  các bộ PC cao cấp.
                </p>
                <p>
                  <img
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    src="https://hoanghapc.vn/media/product/3674_gigabyte_rtx_4090_gaming_oc_1.jpg"
                    alt="Gigabyte RTX 4090 Gaming OC 24GB "
                    width={659}
                    height={659}
                  />
                </p>
                <h3>
                  7.&nbsp;
                  <a href="https://hoanghapc.vn/psu-nguon-may-tinh">
                    Nguồn máy tính
                  </a>
                  &nbsp;ASUS TUF GAMING 1000W GOLD 80 PLUS GOLD PCIE 5.0
                </h3>
                <p>
                  <strong>ASUS TUF GAMING 1000W GOLD</strong>&nbsp;là bộ nguồn
                  1000W cao cấp được thiết kế để tối ưu hóa hiệu quả sử dụng
                  năng lượng, với chỉ số hiệu suất năng lượng cao lên đến 90% và
                  đạt chứng nhận 80 Plus Gold. Được tối ưu hóa đặc biệt để hoạt
                  động với tất cả các thế hệ bộ xử lí nhằm đạt được mức tiết
                  kiệm năng lượng tối đa.
                </p>
                <p>
                  <strong>TUF GAMING 1000W GOLD</strong>&nbsp;còn thiết kế quạt
                  công nghệ hướng trục Axial&nbsp;có trục quạt nhỏ hơn, từ đó
                  cánh quạt sẽ dài hơn cùng một vòng nối liền cánh quạt giúp
                  tăng áp lực khí đi xuống. Tụ điện Nhật Bản và các linh kiện
                  cao cấp, nhằm cung cấp công suất đầu ra liên tục và ổn định ở
                  nhiệt độ môi trường lên đến 50°C trong khi vẫn đảm bảo hoạt
                  động liên tục, hạn chế tiếng ồn và mang lại hiệu suất đáng tin
                  cậy.&nbsp;<strong>TUF Gaming 1000W Gold</strong>&nbsp;là một
                  trong những bộ nguồn tuân thủ đầy đủ theo chuẩn mới và dẫn đầu
                  xu hướng. Cáp PCIe 16-pin được đi kèm với PSU, sẵn sàng để
                  truyền công suất lên tới 600W cho card đồ họa PCIe Gen 5.0,
                  mang lại khả năng kết nối nhiều thiết bị.​
                </p>
                <p>
                  <img
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    src="https://hoanghapccdn.com/media/lib/30-05-2023/tuf-gaming-1000w-gold-ha2.jpg"
                    alt="TUF GAMING 1000W GOLD"
                    width={660}
                  />
                </p>
                <h3>
                  8.&nbsp;
                  <a href="https://hoanghapc.vn/case-vo-may-tinh">
                    Vỏ cây máy tính
                  </a>
                  &nbsp;SEGOTEP GANK 360
                </h3>
                <p>
                  SEGOTEP GANK 360 đến từ thương hiệu nổi
                  tiếng&nbsp;segotep&nbsp;,&nbsp;chất liệu cao cấp với độ hoàn
                  thiện cao được làm&nbsp;mang tới chất lượng cực kỳ chắc chắn,
                  cũng như khe thoát khí chất lượng, tránh bám bụi. Đây chắc
                  chắn là vỏ case tốt nhất trong tầm giá.
                </p>
                <p>
                  <img
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    src="https://hoanghapc.vn/media/product/2571_segotep_gank_360_1.jpg"
                    alt="SEGOTEP GANK 360"
                    width={659}
                    height={659}
                  />
                </p>
              </div>
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
            <div className="pd-box-group">
              <h2 className="box-title">Thông số kỹ thuật</h2>
              <div className="pd-spec-holder">
                <div className="tlqcontent">
                  <table>
                    <tbody>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <strong>STT</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>MÃ HÀNG</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>TÊN HÀNG</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>THỜI HẠN BẢO HÀNH</strong>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <strong>1</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>CPU</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>
                            <a href="https://hoanghapc.vn/cpu-intel-core-i9-13900k">
                              INTEL CORE i9 13900K UP 5.8GHz | 24 CORE | 32
                              THREAD
                            </a>
                            &nbsp;&nbsp;
                          </strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>36 THÁNG</strong>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <strong>2</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>MAINBOARD</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>
                            <a href="https://hoanghapc.vn/mainboard-msi-z790-gaming-wifi">
                              MSI Z790 GAMING WIFI DDR5
                            </a>
                          </strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>36 THÁNG</strong>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <strong>3</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>TẢN NHIỆT</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>
                            <a href="https://hoanghapc.vn/tan-nhiet-nuoc-thermalright-frozen-notte-360-black-argb">
                              THERMALRIGHT FROZEN&nbsp;NOTTE 360 BLACK ARGB
                            </a>
                          </strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>12 THÁNG</strong>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <strong>4</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>RAM</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>
                            <a href="https://hoanghapc.vn/ram-ddr5-corsair-vengeance-rgb-64g-5200-2x32g">
                              DDR5 CORSAIR VENGEANCE RGB 64G/ 5200MHz (2x32G)
                            </a>
                          </strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>36&nbsp;THÁNG</strong>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <strong>5</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>SSD</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>
                            <a href="https://hoanghapc.vn/o-cung-ssd-msi-spatium-m480-pro-1tb">
                              MSI M480 PRO 1TB Gen4 - 7400/6000MB/s
                            </a>
                          </strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>60&nbsp;THÁNG</strong>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <strong>6</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <span style={{ color: "#000000" }}>
                            <strong>VGA</strong>
                          </span>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>
                            <a href="https://hoanghapc.vn/vga-gigabyte-rtx-4090-gaming-oc-24g">
                              GIGABYTE RTX 4090 GAMING OC 24G
                            </a>
                          </strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>36 THÁNG</strong>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <strong>7</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>NGUỒN</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>
                            <a href="https://hoanghapc.vn/nguon-asus-tuf-gaming-1000w-gold-80-plus-gold-full-modular">
                              ASUS TUF GAMING 1000W GOLD 80 PLUS GOLD PCIE 5.0
                            </a>
                          </strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>10 NĂM</strong>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <strong>8</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>CASE</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>
                            <a href="https://hoanghapc.vn/vo-case-segotep-gank-360">
                              SEGOTEP GANK&nbsp;360
                            </a>
                          </strong>
                        </td>
                        <td style={{ textAlign: "center" }}>&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <a href="#fancybox-spec" data-fancybox className="btn-spec">
                Xem đầy đủ thông số kỹ thuật
              </a>
              <div
                className="pd-spec-holder fancybox-spec"
                id="fancybox-spec"
                style={{ display: "none" }}
              >
                <div className="tlqcontent">
                  <table>
                    <tbody>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <strong>STT</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>MÃ HÀNG</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>TÊN HÀNG</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>THỜI HẠN BẢO HÀNH</strong>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <strong>1</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>CPU</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>
                            <a href="https://hoanghapc.vn/cpu-intel-core-i9-13900k">
                              INTEL CORE i9 13900K UP 5.8GHz | 24 CORE | 32
                              THREAD
                            </a>
                            &nbsp;&nbsp;
                          </strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>36 THÁNG</strong>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <strong>2</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>MAINBOARD</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>
                            <a href="https://hoanghapc.vn/mainboard-msi-z790-gaming-wifi">
                              MSI Z790 GAMING WIFI DDR5
                            </a>
                          </strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>36 THÁNG</strong>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <strong>3</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>TẢN NHIỆT</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>
                            <a href="https://hoanghapc.vn/tan-nhiet-nuoc-thermalright-frozen-notte-360-black-argb">
                              THERMALRIGHT FROZEN&nbsp;NOTTE 360 BLACK ARGB
                            </a>
                          </strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>12 THÁNG</strong>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <strong>4</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>RAM</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>
                            <a href="https://hoanghapc.vn/ram-ddr5-corsair-vengeance-rgb-64g-5200-2x32g">
                              DDR5 CORSAIR VENGEANCE RGB 64G/ 5200MHz (2x32G)
                            </a>
                          </strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>36&nbsp;THÁNG</strong>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <strong>5</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>SSD</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>
                            <a href="https://hoanghapc.vn/o-cung-ssd-msi-spatium-m480-pro-1tb">
                              MSI M480 PRO 1TB Gen4 - 7400/6000MB/s
                            </a>
                          </strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>60&nbsp;THÁNG</strong>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <strong>6</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <span style={{ color: "#000000" }}>
                            <strong>VGA</strong>
                          </span>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>
                            <a href="https://hoanghapc.vn/vga-gigabyte-rtx-4090-gaming-oc-24g">
                              GIGABYTE RTX 4090 GAMING OC 24G
                            </a>
                          </strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>36 THÁNG</strong>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <strong>7</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>NGUỒN</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>
                            <a href="https://hoanghapc.vn/nguon-asus-tuf-gaming-1000w-gold-80-plus-gold-full-modular">
                              ASUS TUF GAMING 1000W GOLD 80 PLUS GOLD PCIE 5.0
                            </a>
                          </strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>10 NĂM</strong>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <strong>8</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>CASE</strong>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <strong>
                            <a href="https://hoanghapc.vn/vo-case-segotep-gank-360">
                              SEGOTEP GANK&nbsp;360
                            </a>
                          </strong>
                        </td>
                        <td style={{ textAlign: "center" }}>&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
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
              {bannerImages?.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="p-item">
                    <a
                      href="/hhpc-3d-lumion-i5-13600k-32g-nvidia-rtx-3060-12g"
                      className="p-img"
                    >
                      <img
                        src="https://hoanghapccdn.com/media/product/250_3792_hhpc_sama_tan_120_ha5.jpg"
                        alt="HHPC 3D i5 13600K | 32G | NVIDIA RTX 3060 12G"
                        width={250}
                        height={250}
                      />
                    </a>
                    <div className="p-text">
                      <a
                        href="/hhpc-3d-lumion-i5-13600k-32g-nvidia-rtx-3060-12g"
                        className="p-name"
                      >
                        <h3 className="inherit">
                          HHPC 3D i5 13600K | 32G | NVIDIA RTX 3060 12G
                        </h3>
                      </a>
                      <div className="p-price-group">
                        <span className="p-price">23.950.000 đ</span>
                        <del className="p-old-price">26.500.000 đ</del>
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
