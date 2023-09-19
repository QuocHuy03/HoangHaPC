import React from "react";
import Layout from "../../components/Layout";

export default function PaymentInstructionsPage() {
  return (
    <Layout>
      <div className="installment-guild text-16 installment-guild-page">
        <div className="installment-guild-header section-hero">
          <div className="container">
            <div className="text-box font-weight-bold d-flex align-items-start justify-content-center flex-column">
              <h1 className="text-28 text-white mb-2">HƯỚNG DẪN TRẢ GÓP</h1>
              <h2 className="text-white mb-3">
                Trả góp không cần thế chấp tài sản và trả góp qua thẻ tín dụng,
                thủ tục “SIÊU NHANH - SIÊU ĐƠN GIẢN” tại Hoàng Hà PC
              </h2>
              <a href="#" className="btn btn-white-2">
                Khám phá ngay
              </a>
            </div>
          </div>
        </div>
        <div className="bg-color-1 py-3x">
          <div className="container">
            <p className="max-w-792 color-primary text-center mx-auto summary">
              Đối với các quý khách hàng muốn mua sản phẩm của Hoàng Hà PC theo
              hình thức trả góp, Hoàng Hà PC có chính sách quẹt thẻ trực tiếp
              tại showroom để tiến hành trả góp. Vì vậy, Quý Khách cần lưu ý các
              thông tin sau khi trả góp.
            </p>
          </div>
        </div>
        <div className="installment-guild-content">
          <div className="installment-MPOS py-6">
            <div className="container">
              <div className="grid grid--2-cols grid--gap-2">
                <div className="col-left">
                  <h3 className="text-28 font-weight-600 color-primary pb-3x">
                    Trả góp qua thẻ tín dụng MPOS
                  </h3>
                  <div className="installment-MPOS-list">
                    {/* 1 */}
                    <div className="installment-MPOS-item">
                      <div className="d-flex align-items-center">
                        <div className="wraper-icon mr-2">
                          <i className="static-icons static-icon-polygon" />
                          <span className="text-20 font-weight-bold gradient-color gradient-color-4">
                            1
                          </span>
                        </div>
                        <h5 className="font-weight-600">Áp dụng</h5>
                      </div>
                      <p className="my-3">
                        Khách hàng có nhu cầu mua sản phẩm tại Hoàng Hà PC và
                        trả góp qua thẻ tín dụng với giá trị đơn hàng từ
                        3.000.000 vnđ trở lên (sau khi trừ các khuyến mại).
                        Khách hàng vẫn nhận đủ các chương trình khuyến mãi mà
                        Hoàng Hà PC đang áp dụng đối với từng sản phẩm.
                      </p>
                    </div>
                    {/* 2 */}
                    <div className="installment-MPOS-item">
                      <div className="d-flex align-items-center">
                        <div className="wraper-icon mr-2">
                          <i className="static-icons static-icon-polygon" />
                          <span className="text-20 font-weight-bold gradient-color gradient-color-4">
                            2
                          </span>
                        </div>
                        <h5 className="font-weight-600">Điều kiện</h5>
                      </div>
                      <ul className="pl-3 my-3">
                        <li className="mb-3">
                          Khách hàng cần chuẩn bị CMND/CCCD + thẻ tín dụng (cả 2
                          đều phải chính chủ).
                        </li>
                        <li className="mb-3">
                          Hạn mức thẻ tín dụng cần phải lớn hơn tổng số tiền của
                          đơn hàng và phí chuyển đổi trả góp (tùy theo kỳ hạn và
                          ngân hàng phát hành thẻ theo bảng bên dưới).
                        </li>
                        <li className="mb-3">
                          Khách hàng có thể chọn trả góp toàn bộ giá trị đơn
                          hàng hoặc trả góp một phần giá trị đơn hàng.
                        </li>
                        <li className="pb-3">
                          Đối với một số sản phẩm, khách hàng phải tiến hành đặt
                          cọc theo quy định của Hoàng Hà PC.
                        </li>
                      </ul>
                    </div>
                    {/* 3 */}
                    <div className="installment-MPOS-item">
                      <div className="d-flex align-items-center mb-3">
                        <div className="wraper-icon mr-2">
                          <i className="static-icons static-icon-polygon" />
                          <span className="text-20 font-weight-bold gradient-color gradient-color-4">
                            3
                          </span>
                        </div>
                        <h5 className="font-weight-600">Hình Thức Đăng Ký</h5>
                      </div>
                      <ul className="list-style-none">
                        <li className="mb-3">
                          <span className="text-14 font-weight-bold color-secondary mb-1">
                            Cách 1: Đăng ký tại Showroom Hoàng Hà PC
                          </span>
                          <p>
                            Khách hàng tới Showroom Hoàng Hà PC để được tư vấn
                            sản phẩm, thực hiện thanh toán trả góp tại Showroom
                            và nhận sản phẩm.
                          </p>
                        </li>
                        <li>
                          <span className="text-14 font-weight-bold color-secondary mb-1">
                            Cách 2: Đăng ký thông qua Hotline
                          </span>
                          <p>
                            Khách hàng liên hệ Hoàng Hà PC qua Hotline để được
                            tư vấn sản phẩm, đặt hàng, nhận sản phẩm và thực
                            hiện thanh toán trả góp tại nhà.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-right">
                  <div className="box mb-3x">
                    <h4 className="text-20 font-weight-600 color-primary py-3 text-center">
                      PHÍ GIAO DỊCH
                    </h4>
                    <table className="table table-bordered mb-0">
                      <tbody>
                        <tr className="text-20 font-weight-bold">
                          <td style={{ width: 70 }}>STT</td>
                          <td>Loại thẻ</td>
                          <td style={{ width: 120 }}>Phí</td>
                        </tr>
                        <tr>
                          <td className="text-center">1</td>
                          <td>Thẻ nội địa ATM/ NAPAS</td>
                          <td>Liên Hệ</td>
                        </tr>
                        <tr>
                          <td className="text-center">2</td>
                          <td>
                            Thẻ Visa/Master/Unionpay phát hành tại Việt Nam
                          </td>
                          <td>Liên Hệ</td>
                        </tr>
                        <tr>
                          <td className="text-center">3</td>
                          <td>
                            Thẻ Visa, Master, JCB, CUP phát hành tại nước ngoài
                          </td>
                          <td>Liên Hệ</td>
                        </tr>
                        <tr>
                          <td className="text-center">4</td>
                          <td>QRCode mVisa, MasterPass, JCBQR, UPIQR</td>
                          <td>Liên Hệ</td>
                        </tr>
                        <tr>
                          <td className="text-center">5</td>
                          <td>QRCode QR-Pay, ViettelPay, VinID</td>
                          <td>Liên Hệ</td>
                        </tr>
                        <tr>
                          <td className="text-center">6</td>
                          <td>Thanh toán thẻ từ xa</td>
                          <td>Liên Hệ</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="box box-payinstall-2">
                    <h4 className="text-20 font-weight-600 color-primary py-3 text-center">
                      CHÍNH SÁCH PHÍ GIAO DỊCH
                    </h4>
                    <table className="table table-bordered mb-0">
                      <tbody>
                        <tr>
                          <td>
                            <p className="font-weight-bold color-primary mb-1">
                              Chính sách phí trả góp
                            </p>
                            <p>
                              <span className="font-weight-bold">Chú ý:</span>{" "}
                              Vào thời điểm thanh toán, số dư hạn mức tiêu dùng
                              trong thẻ tín dụng của chủ thẻ phải lớn hơn hoặc
                              bằng tổng giá trị giao dịch.
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p className="font-weight-bold color-primary mb-1">
                              Danh sách ngân hàng hỗ trợ trả góp và biểu phí
                              chuyển đổi trả góp
                            </p>
                            <p>
                              Hoàng Hà PC ghi nhận trả góp qua MPOS, áp dụng cho
                              khách hàng CÁ NH N có thẻ tín dụng (Credit Card)
                              của 1 trong 22 ngân hàng sau:
                              <span className="font-weight-bold">
                                SacomBank, VIB, HSBC, SCB, VPBank, Shinhan -
                                ANZ, Maritime Bank, Eximbank, Techcombank,
                                Citibank, SeaBank, Standard Chartered, Kiên
                                Long, Citibank, OCB, Fecredit, TPBank, BIDV,
                                VCB, ACB,Nam Á Bank, MB….
                              </span>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="installment-card py-6 bg-color-1">
            <div className="container">
              <h3 className="text-28 font-weight-600 color-primary heading-primary pb-3 text-center">
                PHÂN BIỆT THẺ NGÂN HÀNG, DẤU HIỆU NHẬN BIẾT THẺ TRẢ GÓP
              </h3>
              <div className="installment-card-list box-r8 box-gradient grid grid--3-cols grid--gap-2">
                {/* 1 */}
                <div className="installment-card-item box-gradient-item p-3 box-blue-liner">
                  <h5 className="text-14 font-weight-600 color-primary mb-3 text-center">
                    Thẻ tín dụng
                  </h5>
                  <img
                    src="/template/2022/images/static-installment-guild-pic-1.png"
                    alt="installment-guild-pic"
                  />
                  <ul className="pl-3 mt-3">
                    <li className="mb-3">
                      Thẻ tín dụng là thẻ Ngân hàng cấp cho chủ thẻ một hạn mức
                      và cho phép chủ thẻ "chi tiêu trước, trả tiền sau".
                    </li>
                    <li>
                      Thẻ tín dụng MPOS hỗ trợ trả góp gồm các loại có logo:
                      <span className="font-weight-600 color-red">
                        VISA, MASTER, JCB, UNIONPAY
                      </span>
                    </li>
                  </ul>
                </div>
                {/* 2 */}
                <div className="installment-card-item box-gradient-item p-3 box-blue-liner">
                  <h5 className="text-14 font-weight-600 color-primary mb-3 text-center">
                    Thẻ ghi nợ (Debit Card)
                    <p className="color-secondary">
                      (THẺ NÀY MPOS KHÔNG HỖ TRỢ TRẢ GÓP)
                    </p>
                  </h5>
                  <img
                    src="/template/2022/images/static-installment-guild-pic-2.png"
                    alt="installment-guild-pic"
                  />
                  <ul className="pl-3 mt-3">
                    <li className="mb-3">
                      Thẻ ghi nợ do ngân hàng cung cấp kèm theo khi mở tài khoản
                      thanh toán tại ngân hàng, cho phép chủ thẻ sử dụng số tiền
                      họ có trong tài khoản (NẠP TIỀN VÀO MỚI ĐƯỢC TIÊU) thanh
                      toán được cả trong nước và quốc tế
                    </li>
                    <li>
                      <span className="font-weight-600">
                        Thẻ ghi nợ quốc tế:
                      </span>
                      gồm thẻ MasterCard Debit, Visa Debit, JCB Debit,… phạm vị
                      sử dụng chức năng của thẻ được thực hiện ở nước ngoài
                    </li>
                  </ul>
                </div>
                {/* 3 */}
                <div className="installment-card-item box-gradient-item p-3 box-blue-liner">
                  <h5 className="text-14 font-weight-600 color-primary mb-3 text-center">
                    Thẻ ATM
                  </h5>
                  <img
                    src="/template/2022/images/static-installment-guild-pic-3.png"
                    alt="installment-guild-pic"
                  />
                  <ul className="pl-3 mt-3">
                    <li className="mb-3">
                      Thẻ ATM là thẻ nạp tiền vào mới được tiêu, phát hành bởi
                      các ngân hàng nội địa
                    </li>
                    <li className="mb-3">
                      Thẻ nội địa được sử dụng để rút tiền mặt hoặc thanh toán
                      tiền hàng hoá, dịch vụ và sử dụng các dịch vụ khác trong
                      nước
                    </li>
                    <li className="mb-3">
                      Trên thẻ KHÔNG có ghi VISA, MASTER, JCB
                    </li>
                    <li>
                      Thẻ này MPOS chỉ hỗ trợ thanh toán thường không hỗ trợ trả
                      góp
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
