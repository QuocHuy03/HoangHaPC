import React from "react";

import Layout from "../../components/Layout";

export default function ConditionsPolicyPage() {
  return (
    <Layout>
      <div className="warranty-policy text-16">
        <div className="warranty-policy-header section-hero">
          <div className="container">
            <div className="text-box d-flex align-items-start justify-content-center flex-column">
              <h3 className="text-40 font-weight-bold text-white mb-3">
                <i className="static-icons static-icon-shield-3" />
                <p>CHÍNH SÁCH BẢO HÀNH</p>
                <span className="d-block mt-1">tại Hoàng Hà PC</span>
              </h3>
              <p className="text-white pb-4x">
                Nếu Quý Khách gặp khó khăn trong việc liên hệ Trung Tâm Bảo
                Hành, vui lòng liên hệ với bộ phận chăm sóc khách hàng của{" "}
                <span className="font-weight-bold text-white">Hoàng Hà PC</span>{" "}
                theo thông tin sau để được hỗ trợ:
              </p>
              <a
                href="mailto:baohanh@hoanghapc.vn"
                className="btn btn-blue-3 d-flex align-items-center"
              >
                <i className="static-icons static-icon-mail mr-2" />
                <span>baohanh@hoanghapc.vn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="warranty-policy-guild py-8">
          <div className="container">
            <h3 className="text-32 font-weight-bold pb-4x">
              I. Các bước bảo hành sản phẩm
            </h3>
            <img
              src="/template/2022/images/static-warranty-policy-pic-0.png"
              alt="warranty-policy-pic"
            />
            <div className="warranty-policy-guild-step">
              <div className="warranty-policy-guild-item">
                <h3 className="text-24 font-weight-600 d-flex align-items-center">
                  1. Liên hệ với Hoàng Hà PC
                  <div className="line ml-4">
                    {" "}
                    <p />{" "}
                  </div>
                </h3>
                <div className="wraper d-flex align-items-center justify-content-between">
                  <div className="col-left">
                    <p>
                      Khi có nhu cầu bảo hành sản phẩm, khách hàng vui lòng liên
                      hệ với Hoàng Hà PC qua hình thức sau:
                    </p>
                    <ul className="pl-3">
                      <li className="mb-3">
                        Tổng đài bảo hành:
                        <a
                          href="tel:19006100"
                          className="text-20 font-weight-bold d-inline-block red"
                        >
                          19006100
                        </a>
                      </li>
                      <li className="mb-3">
                        Trò chuyện trực tiếp với Hoàng Hà PC tại
                        <a
                          href="/"
                          className="d-inline-block red text-20 font-weight-bold"
                        >
                          {" "}
                          Website{" "}
                        </a>{" "}
                        hoặc
                        <a
                          href="https://www.facebook.com/hoanghapc"
                          target="_blank"
                          className="d-inline-block red text-20 font-weight-bold"
                        >
                          {" "}
                          Fanpage{" "}
                        </a>
                      </li>
                      <li>
                        Liên hệ trực tiếp tại chi nhánh{" "}
                        <a
                          href="/he-thong-cua-hang"
                          className="d-inline-block red text-20 font-weight-bold"
                        >
                          cửa hàng Hoàng Hà PC
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-right d-flex flex-column align-items-end">
                    <a
                      href="tel:19006100"
                      className="btn btn-red mb-3 hover-zoom d-flex align-items-center"
                    >
                      <i className="static-icons static-icon-phone" />
                      <span className="text-white">Gọi ngay</span>
                    </a>
                    <a
                      href="https://www.facebook.com/hoanghapc"
                      className="btn btn-blue-2 d-flex align-items-center"
                    >
                      <i className="static-icons static-icon-chat-tear mr-1" />
                      <span className="text-white">Chat với chúng tôi</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="warranty-policy-guild-item">
                <h3 className="text-24 font-weight-600 d-flex align-items-center">
                  {" "}
                  2. Chuyển sản phẩm tới bảo hành{" "}
                </h3>
                <div className="wraper d-flex align-items-start justify-content-between">
                  <div className="col-left pt-4">
                    <p>
                      {" "}
                      Quý khách gửi hoặc mang sản phẩm cần bảo hành đến trung
                      tâm bảo hành Hoàng Hà PC:{" "}
                    </p>
                    <ul className="warranty-policy-location pl-3">
                      <li className="mb-4">
                        <span className="text-dark">Khu vực phía Nam</span>
                        <div className="wraper ml-5">
                          <p className="d-flex align-items-center mb-1">
                            <i className="static-icons static-icon-location-small" />
                            260 Lý Thường Kiệt, Phường 14, Quận 10, Hồ Chí Minh
                          </p>
                          <p className="d-flex align-items-center mb-1">
                            <i className="static-icons static-icon-clock" />
                            Từ 8h00 đến 21h00 hàng ngày
                          </p>
                        </div>
                      </li>
                      <li>
                        <span className="text-dark">Khu vực phía Bắc</span>
                        <div className="wraper ml-5">
                          <p className="d-flex align-items-center mb-1">
                            <i className="static-icons static-icon-location-small">
                              {" "}
                            </i>
                            41 Khúc Thừa Dụ, Phường Dịch Vọng, Quận Cầu Giấy, Hà
                            Nội
                          </p>
                          <p className="d-flex align-items-center mb-1">
                            <i className="static-icons static-icon-clock" />
                            Từ 8h00 đến 21h00 hàng ngày
                          </p>
                          <p className="d-flex align-items-center mb-1">
                            <i className="static-icons static-icon-location-small">
                              {" "}
                            </i>
                            94E-94F Đường Láng, Phường Ngã Tư Sở, Quận Đống Đa,
                            Hà Nội
                          </p>
                          <p className="d-flex align-items-center mb-1">
                            <i className="static-icons static-icon-clock" />
                            Từ 8h00 đến 21h00 hàng ngày
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="line-col" />
                  </div>
                  <div className="col-right d-flex flex-column">
                    <div className="bumble-chat">
                      <p className="font-weight-bold text-center">
                        Lưu ý: Quý khách vui lòng liên hệ nhân viên tư vấn trước
                        khi gửi hàng để được hỗ trợ cũng như tránh thất thoát
                        hàng hóa
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="warranty-policy-guild-item mb-0">
                <h3 className="text-24 font-weight-600 d-flex align-items-center">
                  3. Bảo hành và bàn giao sản phẩm
                  <div className="line ml-4">
                    {" "}
                    <p />{" "}
                  </div>
                </h3>
                <div className="wraper d-flex align-items-center justify-content-between">
                  <div className="col-left">
                    <p>
                      {" "}
                      Hoàn tất xử lý bảo hành và bàn giao sản phẩm đến khách
                      hàng{" "}
                    </p>
                  </div>
                  <div className="col-right d-flex">
                    <i className="static-icons static-icon-star-yellow" />
                    <i className="static-icons static-icon-star-yellow" />
                    <i className="static-icons static-icon-star-yellow" />
                    <i className="static-icons static-icon-star-yellow" />
                    <i className="static-icons static-icon-star-yellow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="warranty-policy-condition py-8">
          <div className="container">
            <h3 className="text-32 text-white font-weight-bold pb-4x">
              {" "}
              II. Điều Kiện Bảo Hành Sản Phẩm{" "}
            </h3>
            <div className="grid grid--2-cols">
              <div className="condition-box condition-box-true p-5 bg-white">
                <div className="condition-box-header d-flex justify-content-between">
                  <h3 className="text-24 font-weight-bold pb-4x color-secondary">
                    {" "}
                    Những Sản Phẩm <p className="mt-1">
                      Đủ Điều Kiện Bảo Hành
                    </p>{" "}
                  </h3>
                  <i className="static-icons static-icon-check-blue" />
                </div>
                <ul className="mb-2">
                  <li className="mb-2">
                    Sản phẩm nếu có tem niêm phong (seal) trên sản phẩm thì
                    <span className="font-weight-600">
                      tem niêm phong phải còn nguyên vẹn
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    Đối với sản phẩm bảo hành trên hộp:
                    <span className="font-weight-600">
                      sản phẩm còn đầy đủ hộp
                    </span>
                    .
                  </li>
                  <li>
                    Sản phẩm
                    <span className="font-weight-600">
                      không trầy xước, cấn móp, bể, vỡ, biến dạng so với ban đầu
                    </span>
                    .
                  </li>
                </ul>
                <img
                  src="/template/2022/images/static-warranty-policy-pic-1.png"
                  alt="Điều Kiện Bảo Hành Sản Phẩm tại Hoàng Hà PC"
                />
              </div>
              <div className="condition-box condition-box-fail p-5 bg-white">
                <div className="condition-box-header d-flex justify-content-between">
                  <h3 className="text-24 font-weight-bold pb-4x color-secondary">
                    {" "}
                    Những Sản Phẩm{" "}
                    <p className="mt-1">không đủ điều kiện bảo hành</p>{" "}
                  </h3>
                  <i className="static-icons static-icon-red-cancel" />
                </div>
                <ul className="mb-2">
                  <li className="mb-2">Hết thời hạn bảo hành.</li>
                  <li className="mb-2">
                    Không có tem niêm phong, hoặc bị tẩy xóa, không còn nguyên
                    dạng ban đầu.
                  </li>
                  <li className="mb-2">
                    Bị tác động vật lý làm trầy xước, cong vênh, rạn nứt, bể vỡ
                    trong quá trình quá trình sử dụng.
                  </li>
                  <li className="mb-2">
                    Bị hư hỏng do tự ý thảo mở, sửa chữa, thay đổi cấu trúc sản
                    phẩm bên trong mà chưa có sự xác nhận đồng ý hoặc giám sát
                    bởi kỹ thuật viên Hoàng Hà PC.
                  </li>
                  <li className="mb-2">
                    Bị hư hỏng, chập, cháy do sử dụng sai mục đích, tự ý tháo,
                    lắp đặt không tuân theo các hướng dẫn sử dụng đính kèm theo
                    sản phẩm.
                  </li>
                  <li className="mb-2">
                    Bị hư hỏng do côn trùng xâm nhập (chuột, gián, kiến, mối…)
                  </li>
                  <li className="mb-2">
                    Bị hư hỏng do thiên tai, hỏa hoạn, lụt lội, sét đánh, rỉ
                    sét, hao mòn do môi trường gây ra.
                  </li>
                  <li className="mb-2">
                    <strong>
                      Lưu Ý: Đối Với sản phẩm SSD, HDD chúng tôi Không bảo hành
                      dữ liệu của khách hàng
                    </strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="warranty-policy-list">
          <div className="container">
            <div className="warranty-policy-general py-8">
              <h3 className="text-32 font-weight-bold pb-4x">
                III. Chính sách bảo hành chung{" "}
              </h3>
              <div className="general-item d-flex align-items-center pb-5">
                <h2 className="d-flex align-items-center">
                  1{" "}
                  <span className="text-24 font-weight-600 ml-2 color-blue-1">
                    {" "}
                    Chính sách đổi mới <b className="text-32">100%</b>
                  </span>{" "}
                </h2>
                <div className="general-item-content">
                  <h4 className="mb-2 font-weight-bold">
                    1.1. Điều kiện sản phẩm được áp dụng đổi mới 100%{" "}
                  </h4>
                  <ul>
                    <li className="mb-2">
                      Sản phẩm nếu có tem niêm phong (seal) trên sản phẩm thì{" "}
                      <span className="font-weight-600">
                        tem niêm phong phải còn nguyên vẹn
                      </span>
                      .
                    </li>
                    <li className="mb-2">
                      Đối với sản phẩm bảo hành trên hộp:{" "}
                      <span className="font-weight-600">
                        sản phẩm còn đầy đủ hộp
                      </span>
                      .
                    </li>
                    <li className="mb-2">
                      Sản phẩm{" "}
                      <span className="font-weight-600">
                        không trầy xước, cấn móp, bể, vỡ, biến dạng so với ban
                        đầu
                      </span>
                      .
                    </li>
                  </ul>
                  <h4 className="mb-2 font-weight-bold">
                    1.2. Đổi Mới 100% - 30 Ngày Đầu
                  </h4>
                  <ul>
                    <li className="mb-2">
                      Đổi mới 100% các sản phẩm bị lỗi do nhà sản xuất trong 30
                      ngày đầu tiên (tính từ thời điểm mua hàng){" "}
                      <span className="font-weight-600">
                        tem áp dụng đối với các sản phẩm:
                      </span>
                      .
                    </li>
                    <li className="mb-2">
                      Gaming Gear:{" "}
                      <span className="font-weight-600">
                        Bàn phím, chuột, tai nghe
                      </span>
                      .
                    </li>
                    <li className="mb-2">
                      Linh kiện máy tính:{" "}
                      <span className="font-weight-600">
                        CPU, RAM, SSD, HDD, Tản Nhiệt, PSU,...
                      </span>
                      .
                    </li>
                  </ul>
                  <h4 className="mb-2 font-weight-bold">
                    1.3. Đổi Mới 100% - 7 Ngày Đầu
                  </h4>
                  <ul>
                    <li className="mb-2">
                      Đổi mới 100% các sản phẩm bị lỗi do nhà sản xuất trong 7
                      ngày đầu tiên (tính từ thời điểm mua hàng){" "}
                      <span className="font-weight-600">
                        tem áp dụng đối với các sản phẩm:
                      </span>
                      .
                    </li>
                    <li className="mb-2">
                      Laptop{" "}
                      <span className="font-weight-600">
                        (Không áp dụng các sản phẩm Macbook)
                      </span>
                      .
                    </li>
                    <li className="mb-2">
                      Màn hình <span className="font-weight-600">máy tính</span>
                      .
                    </li>
                  </ul>
                  <h4 className="mb-2 font-weight-bold">
                    1.4. Chính sách Vận Chuyển Bảo Hành
                  </h4>
                  <ul>
                    <li className="mb-2">
                      Hỗ trợ miễn phí{" "}
                      <span className="font-weight-600">
                        cả phí vận chuyển Khách Hàng gửi hàng trong 1 tháng đầu
                      </span>{" "}
                      tới Trung Tâm Bảo Hành của Hoàng Hà PC.
                    </li>
                    <li className="mb-2">
                      Khách Hàng chủ động{" "}
                      <span className="font-weight-600">
                        gửi qua các Trung Tâm Bảo Hành của Hoàng Hà PC
                      </span>{" "}
                      gần nhất để được hỗ trợ miễn phí tại cửa hàng.
                    </li>
                    <li className="mb-2">
                      Hoàng Hà PC không thu thêm{" "}
                      <span className="font-weight-600">
                        chi phí vận chuyển của khách hàng{" "}
                      </span>
                      khi gửi bảo hành và trả bảo hành.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="general-item general-item-2 d-flex align-items-center pb-5">
                <h2 className="d-flex align-items-center">
                  2{" "}
                  <span className="text-32 font-weight-600 ml-2 color-blue-1">
                    Thời gian xử lý sản phẩm
                  </span>
                </h2>
                <div className="general-item-content">
                  <div className="wraper">
                    <h4 className="mb-2 font-weight-bold">
                      2.1. Lỗi do nhà sản xuất
                    </h4>
                    <p className="mb-2">
                      Nhân viên kĩ thuật – bảo hành Hoàng Hà PC tiến hành kiểm
                      tra ngay thời điểm tiếp nhận sản phẩm bảo hành
                    </p>
                    <ul className="mb-4">
                      <li className="mb-2">
                        <span className="color-blue-1 font-weight-600">
                          Phát hiện ra lỗi:
                        </span>
                        <p className="mt-1">
                          {" "}
                          Hoàng Hà PC tiến hành xử lý bảo hành theo chính sách
                          bảo hành của sản phẩm.{" "}
                        </p>
                      </li>
                      <li>
                        <span className="color-blue-1 font-weight-600">
                          Chưa phát hiện ra lỗi:
                        </span>
                        <p className="mt-1">
                          Hoàng Hà PC có thể giữ lại sản phẩm để tiếp tục kiểm
                          tra trong vòng 3 ngày làm việc nếu có yêu cầu kiểm tra
                          của khách hàng(không bao gồm thứ 7, Chủ Nhật &amp; các
                          ngày Lễ, Tết). Sau 3 ngày kiểm tra vẫn chưa phát hiện
                          được lỗi của sản phẩm, Hoàng Hà PC xin phép hoàn trả
                          lại sản phẩm đến quý khách.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="wraper">
                    <h4 className="mb-2 font-weight-bold">
                      2.2. Lỗi do người dùng
                    </h4>
                    <p>
                      Hoàng Hà PC từ chối bảo hành các sản phẩm lỗi phát sinh do
                      người sử dụng.
                    </p>
                  </div>
                </div>
              </div>
              <div className="general-item d-flex align-items-center">
                <h2 className="d-flex align-items-center">
                  3{" "}
                  <span className="text-32 font-weight-600 ml-2 color-blue-1">
                    {" "}
                    Không còn sản phẩm thay thế, bảo hành
                  </span>
                </h2>
                <div className="general-item-content">
                  <h4 className="mb-2 font-weight-bold">
                    Trường hợp sản phẩm bị lỗi kĩ thuật và Nhà sản xuất không
                    còn sản phẩm thay thế, đổi trả bảo hành hoặc ngưng kinh
                    doanh, khách hàng lựa chọn một trong những phương án sau:
                  </h4>
                  <p>
                    Đổi ngay sản phẩm tương đương: Cùng nhóm, cùng cấu hình,
                    cùng dung lượng, … hoặc cao hơn do Hoàng Hà PC đề xuất.
                  </p>
                </div>
              </div>
            </div>
            <div className="warranty-policy-in-home py-8">
              <div className="grid grid--2-cols grid--gap-2">
                <div className="in-home-text-box">
                  <h3 className="text-32 font-weight-bold mb-5">
                    {" "}
                    IV. Chính sách bảo hành tận nơi sử dụng{" "}
                  </h3>
                  <h4 className="text-16 mb-4">
                    Đây là dịch vụ mà Hoàng Hà PC tự hào đã và đang triển khai
                    trong suốt thời gian hoạt động hiện nay.
                  </h4>
                  <ul>
                    <li className="d-flex align-items-center mb-3">
                      <i className="static-icons static-icon-38 static-icon-card-vizit" />
                      <p>
                        Dịch vụ bảo hành tận nơi sử dụng chỉ áp dụng tại{" "}
                        <span className="font-weight-600">
                          Nội Thành TP. Hà Nội
                        </span>
                        , Nội thành{" "}
                        <span className="font-weight-600">TP. Hồ Chí Minh</span>{" "}
                        và Nội Thành{" "}
                        <span className="font-weight-600">TP. Vinh</span>.
                      </p>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="static-icons static-icon-38 static-icon-note" />
                      <p>
                        Chúng tôi sẽ có mặt trực tiếp để thực hiện nghiệp vụ bảo
                        hành tại nơi sử dụng cho sản phẩm của Quý khách.
                      </p>
                    </li>
                    <li className="d-flex align-items-center mb-3">
                      <i className="static-icons static-icon-38 static-icon-clock-2" />
                      <p>
                        Thời gian đáp ứng yêu cầu bảo hành tại nơi sử dụng: Chậm
                        nhất là 120 phút kể từ thời điểm nhận được thông tin của
                        khách hàng.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="in-home-image-box">
                  <img
                    src="/template/2022/images/static-warranty-policy-pic-2.png"
                    alt="warranty-policy-pic"
                  />
                </div>
              </div>
            </div>
            <div className="warranty-policy-in-home py-8">
              <div className="in-home-text-box">
                <h3 className="text-32 font-weight-bold mb-5">
                  {" "}
                  V. Chính sách bảo hành cho sản phẩm bán buôn và thiết bị dùng
                  cho việc sản xuất tiền điện tử{" "}
                </h3>
                <h4 className="mb-2 font-weight-bold">
                  6.1 Chính sách bảo hành cho sản phẩm bán buôn đối với các đại
                  lý :
                </h4>
                <p>
                  - Với các sản phẩm được phân phối chính hãng, Hoàng Hà PC sẽ
                  bảo hành trong 30 ngày đầu, thời gian bảo hành tiếp theo quý
                  khách hàng làm việc trực tiếp với các trung tâm bảo hành của
                  hãng.
                </p>
                <p>
                  - Với các sản phẩm được phân phối bởi Hoàng Hà PC, chúng tôi
                  cam kết bảo hành thông suốt theo đúng như thỏa thuận mua bán
                  giữa 2 bên.
                </p>
                <h4 className="mb-2 font-weight-bold">
                  6.2 Chính sách bảo hành đối với các thiết bị dùng trong việc
                  sản xuất, khai thác tiền điện tử
                </h4>
                <p>
                  - Các sản phẩm được quý khách hàng mua tại Hoàng Hà PC sử dụng
                  trong việc sản xuất, khai thác tiền điện tử sẽ không được
                  Hoàng Hà PC tiếp nhận bảo hành. Mọi vấn đề về bảo hành sản
                  phẩm quý khách hàng vui lòng làm việc trực tiếp với trung tâm
                  bảo hành của hãng.
                </p>
                <p>
                  - Chính sách bảo hành của hãng đối với các thiết bị dùng trong
                  việc sản xuất, khai thác tiền điện tử thay đổi liên tục, do
                  vậy Hoàng Hà PC khuyên quý khách hàng hãy cân nhắc, tìm hểu kỹ
                  trong việc mua các thiết bị này.
                </p>
              </div>
            </div>
            <div className="warranty-policy-manufacturer py-8">
              <h3 className="text-32 font-weight-bold mb-3 d-flex align-items-center">
                {" "}
                VI. Chính sách bảo hành hãng
                <div className="line ml-3">
                  <p />
                </div>
              </h3>
              <p className="pb-4x">
                * Thời gian bảo hành dự kiến (trừ thứ 7, chủ nhật và các ngày lễ
                tết): theo thông báo qui định của nhà sản xuất/nhà cung cấp,
                thời gian bảo hành có thể thay đổi.
              </p>
              <div className="warranty-logo-list d-flex flex-wrap">
                <a
                  href="https://www.coolermaster.com/us/en-us/warranty/"
                  rel="nofollow"
                >
                  <img
                    src="/template/2022/images/logo-coolermaster.png"
                    alt="brand"
                  />
                </a>
                <a
                  href="https://support.hp.com/vn-en/check-warranty"
                  rel="nofollow"
                >
                  <img src="/template/2022/images/logo-hp.png" alt="brand" />
                </a>
                <a
                  href="https://www.leadtek.com/eng/support/warranty/"
                  rel="nofollow"
                >
                  <img
                    src="/template/2022/images/logo-qleadtek.png"
                    alt="brand"
                  />
                </a>
                <a
                  href="https://www.logitech.com/vi-vn/footer/terms-of-use/&id=3101"
                  rel="nofollow"
                >
                  <img
                    src="/template/2022/images/logo-logitech.png"
                    alt="brand"
                  />
                </a>
                <a
                  href="https://www.acer.com/vn-vi/support/warranty"
                  rel="nofollow"
                >
                  <img src="/template/2022/images/logo-acer.png" alt="brand" />
                </a>
                <a
                  href="https://amdvietnam.vn/chinh-sach-bao-hanh.html"
                  rel="nofollow"
                >
                  <img src="/template/2022/images/logo-amd.png" alt="brand" />
                </a>
                <a href="https://www.apple.com/legal/warranty/" rel="nofollow">
                  <img src="/template/2022/images/logo-apple.png" alt="brand" />
                </a>
                <a
                  href="https://www.asrock.com/support/index.asp?cat=RMA"
                  rel="nofollow"
                >
                  <img
                    src="/template/2022/images/logo-asrock.png"
                    alt="brand"
                  />
                </a>
                <a
                  href="https://www.asus.com/vn/support/article/839/"
                  rel="nofollow"
                >
                  <img src="/template/2022/images/logo-asus.png" alt="brand" />
                </a>
                <a
                  href="https://www.dell.com/support/home/en-vn?app=warranty"
                  rel="nofollow"
                >
                  <img src="/template/2022/images/logo-dell.png" alt="brand" />
                </a>
                <a
                  href="https://www.gigabyte.com/vn/Support/Warranty"
                  rel="nofollow"
                >
                  <img
                    src="/template/2022/images/logo-gigabyte.png"
                    alt="brand"
                  />
                </a>
                <a href>
                  <img src="/template/2022/images/logo-wd.png" alt="brand" />
                </a>
                <a
                  href="https://supporttickets.intel.com/s/warrantyinfo?language=en_US"
                  rel="nofollow"
                >
                  <img src="/template/2022/images/logo-intel.png" alt="brand" />
                </a>
                <a
                  href="https://support.lenovo.com/vn/en/warrantylookup#/"
                  rel="nofollow"
                >
                  <img
                    src="/template/2022/images/logo-lenovo.png"
                    alt="brand"
                  />
                </a>
                <a
                  href="https://www.lg.com/vn/tro-giup/bao-hanh"
                  rel="nofollow"
                >
                  <img src="/template/2022/images/logo-lg.png" alt="brand" />
                </a>
                <a href>
                  <img
                    src="/template/2022/images/logo-microlab.png"
                    alt="brand"
                  />
                </a>
                <a
                  href="https://support.microsoft.com/en-us/warranty"
                  rel="nofollow"
                >
                  <img
                    src="/template/2022/images/logo-microsoft.png"
                    alt="brand"
                  />
                </a>
                <a
                  href="http://edravn.com/chinh-sach-bao-hanh.html"
                  rel="nofollow"
                >
                  <img src="/template/2022/images/logo-edra.png" alt="brand" />
                </a>
                <a href="https://vn.msi.com/page/warranty" rel="nofollow">
                  <img src="/template/2022/images/logo-msi.png" alt="brand" />
                </a>
                <a
                  href="https://mmd-aoc2.oss-cn-hongkong.aliyuncs.com/Support/docs/AOC_Regulation_Service_Information_TW.pdf"
                  rel="nofollow"
                >
                  <img src="/template/2022/images/logo-noc.png" alt="brand" />
                </a>
                <a href="https://nzxt.com/legal/nzxt-warranty" rel="nofollow">
                  <img src="/template/2022/images/logo-nzxt.png" alt="brand" />
                </a>
                <a
                  href="https://www.samsung.com/vn/support/warranty/"
                  rel="nofollow"
                >
                  <img
                    src="/template/2022/images/logo-samsung.png"
                    alt="brand"
                  />
                </a>
                <a
                  href="https://www.seagate.com/as/en/support/warranty-and-replacements/"
                  rel="nofollow"
                >
                  <img
                    src="/template/2022/images/logo-seagate.png"
                    alt="brand"
                  />
                </a>
                <a
                  href="https://www.toshiba.com.vn/bao-hanh/dieu-khoan-bao-hanh"
                  rel="nofollow"
                >
                  <img
                    src="/template/2022/images/logo-toshiba.png"
                    alt="brand"
                  />
                </a>
                <a
                  href="https://www.viewsonic.com/vn/support/warranty/"
                  rel="nofollow"
                >
                  <img
                    src="/template/2022/images/logo-viewsonic.png"
                    alt="brand"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
