import React from "react";
import Layout from "../../components/Layout";

export default function CommunicationTransportationPage() {
  return (
    <Layout>
      <div
        className="ship-policy text-16 bg-white ship-policy-page"
        style={{ overflow: "hidden" }}
      >
        <div className="ship-policy-header section-hero" />
        <div className="mb-content-container">
          <div className="ship-policy-form">
            <div className="ship-policy-form-header">
              <div className="container">
                <div className="h-100 py-4x d-flex flex-wrap align-items-center justify-content-between">
                  <h4 className="text-16">
                    Quý khách có thể lựa chọn một trong các hình thức vận chuyển
                    khi mua hàng tại Hoàng Hà PC
                  </h4>
                  <ul className="d-flex align-items-center h-100">
                    <li className="d-flex align-items-center h-100">
                      <img
                        src="/template/2022/images/static-ship-policy-pic-3.png"
                        alt="banner"
                      />
                      <p className="ml-3">
                        Chúng tôi sẽ trực tiếp giao hàng tận tay khách hàng
                      </p>
                    </li>
                    <li className="d-flex align-items-center h-100">
                      <img
                        src="/template/2022/images/static-ship-policy-pic-4.png"
                        alt="banner"
                      />
                      <p className="ml-3">
                        Chúng tôi sẽ giao hàng cho khách hàng thông qua các nhà
                        cung cấp dịch vụ
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="ship-policy-form-content">
              <div className="ship-policy-form-inner-city container">
                <img
                  src="/template/2022/images/static-ship-policy-pic-5.png"
                  alt="banner"
                />
                <h4 className="text-24 text-center color-blue-1">
                  <p>
                    <span className="font-weight-600">
                      {" "}
                      Giao hàng siêu tốc trong 2h{" "}
                    </span>{" "}
                    ( Áp dụng Nội Thành Hà Nội Và Hồ Chí Minh )
                  </p>
                  <p>
                    <span className="font-weight-600">
                      {" "}
                      Miễn phí vận chuyển
                    </span>{" "}
                    đối với khách hàng mua
                    <span className="font-weight-600">
                      {" "}
                      bộ PC nội thành TP. HCM và Hà Nội{" "}
                    </span>
                  </p>
                  <p>
                    <span className="font-weight-600">
                      {" "}
                      Miễn phí vận chuyển
                    </span>{" "}
                    khi mua
                    <span className="font-weight-600">
                      {" "}
                      linh kiện lẻ với bán kính nhỏ hơn 20km{" "}
                    </span>
                  </p>
                </h4>
              </div>
              <div className="ship-policy-form-outside-city section-hero">
                <div className="container d-flex align-items-center">
                  <div className="wraper">
                    <img
                      className="pb-4x"
                      src="/template/2022/images/static-ship-policy-pic-6.png"
                      alt="banner"
                    />
                    <ul className="text-24 pr-5 color-blue-1">
                      <li className="mb-4">
                        <span className="font-weight-600">
                          Miễn phí vận chuyển
                        </span>{" "}
                        đối với khách hàng mua
                        <span className="font-weight-600">
                          bộ PC trên Toàn Quốc
                        </span>
                      </li>
                      <li>
                        <span className="font-weight-600">
                          Đối với các khách hàng mua linh kiện lẻ vui lòng thanh
                          toán cước vận chuyển khi nhận hàng
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ship-policy-pay container">
            <div className="ship-policy-pay-top">
              <h3 className="text-32 font-weight-600 text-uppercase color-blue-1 text-center pb-3">
                {" "}
                Hình thức thu tiền
              </h3>
              <div className="grid grid--2-cols py-4x">
                <div className="d-flex align-items-center">
                  <img
                    src="/template/2022/images/static-ship-policy-pic-7.png"
                    alt="banner"
                  />
                  <div className="wraper">
                    <h4 className="text-28 font-weight-600 mb-3">
                      Giao hàng không thu tiền
                    </h4>
                    <ul>
                      <li className="mb-3">
                        <span className="font-weight-600 color-blue-1">
                          Miễn phí vận chuyển cho các đơn hàng trên toàn quốc.
                        </span>
                      </li>
                      <li>
                        Lưu ý: Khách hàng phải thanh toán tổng giá trị đơn hàng
                        trước cho Hoàng Hà PC.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src="/template/2022/images/static-ship-policy-pic-8.png"
                    alt="banner"
                  />
                  <div className="wraper">
                    <h4 className="text-28 font-weight-600 mb-3">
                      {" "}
                      Giao hàng có thu tiền
                    </h4>
                    <ul>
                      <li>
                        <span className="font-weight-600 color-blue-1">
                          {" "}
                          Chỉ áp dụng với các đơn hàng nội thành Hồ Chí Minh và
                          Hà Nội
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="ship-policy-pay-bottom pt-6">
              <h3 className="text-32 font-weight-600 mb-4 color-blue-1">
                LƯU Ý
              </h3>
              <p className="text-20 font-weight-bold mb-3">
                Sau khi bạn đặt hàng, trong vòng 30 phút làm việc chúng tôi sẽ
                liên lạc lại để xác nhận và kiểm tra thông tin.
              </p>
              <ul>
                <li className="mb-2">
                  Những rủi ro phát sinh trong quá trình vận chuyển (va đập, ẩm
                  ướt, tai nạn..) có thể ảnh hưởng đến hàng hóa, vì thế xin
                  <span className="font-weight-600 color-blue-1">
                    Quý Khách vui lòng kiểm tra hàng hóa thật kỹ trước khi ký
                    nhận.{" "}
                  </span>
                </li>
                <li>
                  Công Ty TNHH Dịch Vụ Và Công Nghệ Hoàng Hà sẽ không chịu trách
                  nhiệm với những sai lệch hình thức của hàng hóa sau khi Quý
                  khách đã ký nhận hàng và sử dụng.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
