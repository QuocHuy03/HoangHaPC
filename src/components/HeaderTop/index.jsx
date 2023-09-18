import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function HeaderTop() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="global-header-top text-12">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <div className="item-left">
          <div className="item js-header-item">
            <a href="/he-thong-cua-hang" className="box-title">
              <i className="icons icon-map" /> Hệ thống Showroom
            </a>
            <div className="item-support-group">
              <p className="title">HỆ THỐNG SHOWROOM</p>
              <div className="row">
                <div className="col">
                  <p className="col-title">SHOWROOM - CẦU GIẤY</p>
                  <div className="global-store-info">
                    <a
                      href="https://goo.gl/maps/56ARHjWKoVhpWBCF6"
                      target="_blank"
                      className="store-address"
                      rel="nofollow"
                    >
                      41 Khúc Thừa Dụ, Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội
                    </a>
                    <a href="/he-thong-cua-hang" target="_blank">
                      <i className="icons icon-picture" />
                      <span className="text">Hình ảnh showroom</span>
                    </a>
                    <a href="tel:0969.123.666" rel="nofollow">
                      <i className="icons icon-hotline" />
                      <span className="text">
                        Hotline mua hàng: 0969.123.666
                      </span>
                    </a>
                    <a href="tel:19006100" rel="nofollow">
                      <i className="icons icon-phone" />
                      <span className="text">Hotline bảo hành: 19006100</span>
                    </a>
                    <a href="mailto:qhuy.dev@gmail.com" rel="nofollow">
                      <i className="icons icon-email" />
                      <span className="text">Email: qhuy.dev@gmail.com</span>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="icons icon-time" />
                      <span className="text">
                        Thời gian làm việc: 8h00 - 20h00
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col">
                  <p className="col-title">SHOWROOM - ĐỐNG ĐA</p>
                  <div className="global-store-info">
                    <a
                      href="https://g.page/hoanghapc?share"
                      target="_blank"
                      className="store-address"
                      rel="nofollow"
                    >
                      94E-94F Đường Láng, Phường Ngã Tư Sở, Quận Đống Đa, Hà Nội
                    </a>
                    <a href="/he-thong-cua-hang" target="_blank">
                      <i className="icons icon-picture" />
                      <span className="text">Hình ảnh showroom</span>
                    </a>
                    <a href="tel:0396.122.999" rel="nofollow">
                      <i className="icons icon-hotline" />
                      <span className="text">
                        Hotline mua hàng: 0396.122.999
                      </span>
                    </a>
                    <a href="tel:19006100" rel="nofollow">
                      <i className="icons icon-phone" />
                      <span className="text">Hotline bảo hành: 19006100</span>
                    </a>
                    <a href="mailto:hoanghapcws@gmail.com" rel="nofollow">
                      <i className="icons icon-email" />
                      <span className="text">Email: hoanghapcws@gmail.com</span>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="icons icon-time" />
                      <span className="text">
                        Thời gian làm việc: 8h00 - 20h00
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col">
                  <p className="col-title">SHOWROOM - VINH, NGHỆ AN</p>
                  <div className="global-store-info">
                    <a
                      href="https://goo.gl/maps/fCtcjCeuTjTGRjrL7"
                      target="_blank"
                      className="store-address"
                    >
                      72 Lê Lợi, Thành Phố Vinh, Nghệ An
                    </a>
                    <a href="/he-thong-cua-hang" target="_blank" rel="nofollow">
                      <i className="icons icon-picture" />
                      <span className="text">Hình ảnh showroom</span>
                    </a>
                    <a href="tel:0968.123.666" rel="nofollow">
                      <i className="icons icon-hotline" />
                      <span className="text">
                        Hotline mua hàng: 0988.163.666
                      </span>
                    </a>
                    <a href="tel:19006100" rel="nofollow">
                      <i className="icons icon-phone" />
                      <span className="text">Hotline bảo hành: 19006100</span>
                    </a>
                    <a href="mailto:hoanghapcws@gmail.com" rel="nofollow">
                      <i className="icons icon-email" />
                      <span className="text">Email: hoanghapcws@gmail.com</span>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="icons icon-time" />
                      <span className="text">
                        Thời gian làm việc: 8h00 - 18h30
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col">
                  <p className="col-title">SHOWROOM - HỒ CHÍ MINH</p>
                  <div className="global-store-info">
                    <a
                      href="https://g.page/hoanghapchcm?share"
                      target="_blank"
                      className="store-address"
                      rel="nofollow"
                    >
                      260 Lý Thường Kiệt, Phường 14, Quận 10, Hồ Chí Minh
                    </a>
                    <a href="/he-thong-cua-hang" target="_blank">
                      <i className="icons icon-picture" />
                      <span className="text">Hình ảnh showroom</span>
                    </a>
                    <a href="tel:0968.123.666" rel="nofollow">
                      <i className="icons icon-hotline" />
                      <span className="text">
                        Hotline mua hàng: 0968.123.666
                      </span>
                    </a>
                    <a href="tel:19006100" rel="nofollow">
                      <i className="icons icon-phone" />
                      <span className="text">Hotline bảo hành: 19006100</span>
                    </a>
                    <a href="mailto:hoanghapcws@gmail.com" rel="nofollow">
                      <i className="icons icon-email" />
                      <span className="text">Email: hoanghapcws@gmail.com</span>
                    </a>
                    <a href="javascript:void(0)">
                      <i className="icons icon-time" />
                      <span className="text">
                        Thời gian làm việc: 8h00 - 20h00
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item js-header-item">
            <p className="box-title">
              <i className="icons icon-hotline" /> Hotline Hà Nội
            </p>
            <div className="item-support-group">
              <p className="title">HỖ TRỢ TẠI HÀ NỘI</p>
              <div className="d-flex flex-wrap justify-content-center">
                <div className="col-item">
                  <table>
                    <tbody>
                      <tr>
                        <td colSpan={2}>
                          <p className="col-title">HOÀNG HÀ PC CẦU GIẤY</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span
                            className="lazy icon-zalo"
                            data-bg="url(/template/2022/images/pd-icon-zalo.png)"
                            data-was-processed="true"
                            style={{
                              backgroundImage:
                                'url("/template/2022/images/pd-icon-zalo.png")',
                            }}
                          />
                          <b>0969.123.666</b>
                        </td>
                        <td>Mr.Long</td>
                      </tr>
                      <tr>
                        <td>
                          <span
                            className="lazy icon-zalo"
                            data-bg="url(/template/2022/images/pd-icon-zalo.png)"
                            data-was-processed="true"
                            style={{
                              backgroundImage:
                                'url("/template/2022/images/pd-icon-zalo.png")',
                            }}
                          />
                          <b>0922.635.999</b>
                        </td>
                        <td>Mr.Thụ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-item">
                  <table>
                    <tbody>
                      <tr>
                        <td colSpan={2}>
                          <p className="col-title">HOÀNG HÀ PC ĐỐNG ĐA</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span
                            className="lazy icon-zalo"
                            data-bg="url(/template/2022/images/pd-icon-zalo.png)"
                            data-was-processed="true"
                            style={{
                              backgroundImage:
                                'url("/template/2022/images/pd-icon-zalo.png")',
                            }}
                          />
                          <b>0396.122.999</b>
                        </td>
                        <td>Mr.Nghĩa</td>
                      </tr>
                      <tr>
                        <td>
                          <span
                            className="lazy icon-zalo"
                            data-bg="url(/template/2022/images/pd-icon-zalo.png)"
                            data-was-processed="true"
                            style={{
                              backgroundImage:
                                'url("/template/2022/images/pd-icon-zalo.png")',
                            }}
                          />
                          <b>0396.138.999</b>
                        </td>
                        <td>Mr.Huy</td>
                      </tr>
                      <tr>
                        <td>
                          <span
                            className="lazy icon-zalo"
                            data-bg="url(/template/2022/images/pd-icon-zalo.png)"
                            data-was-processed="true"
                            style={{
                              backgroundImage:
                                'url("/template/2022/images/pd-icon-zalo.png")',
                            }}
                          />
                          <b>0396.178.999</b>
                        </td>
                        <td>Mr.Duy</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-item">
                  <table>
                    <tbody>
                      <tr>
                        <td colSpan={2}>
                          <p className="col-title">HỖ TRỢ KỸ THUẬT</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span
                            className="lazy icon-zalo"
                            data-bg="url(/template/2022/images/pd-icon-zalo.png)"
                            data-was-processed="true"
                            style={{
                              backgroundImage:
                                'url("/template/2022/images/pd-icon-zalo.png")',
                            }}
                          />
                          <b>0976.382.666</b>
                        </td>
                        <td>Mr.Dũng</td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <tbody>
                      <tr>
                        <td colSpan={2}>
                          <p className="col-title">HỖ TRỢ BẢO HÀNH</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span
                            className="lazy icon-zalo"
                            data-bg="url(/template/2022/images/pd-icon-zalo.png)"
                            data-was-processed="true"
                            style={{
                              backgroundImage:
                                'url("/template/2022/images/pd-icon-zalo.png")',
                            }}
                          />
                          <b>19006100</b>
                        </td>
                        <td>Bảo hành</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="item js-header-item">
            <p className="box-title">
              <i className="icons icon-hotline" /> Hotline Miền Trung
            </p>
            <div className="item-support-group">
              <p className="title">HỖ TRỢ TẠI MIỀN TRUNG</p>
              <div className="d-flex flex-wrap justify-content-center">
                <div className="col-item">
                  <table>
                    <tbody>
                      <tr>
                        <td colSpan={2}>
                          <p className="col-title">KH CÁ NHÂN - DOANH NGHIỆP</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span
                            className="lazy icon-zalo"
                            data-bg="url(/template/2022/images/pd-icon-zalo.png)"
                            data-was-processed="true"
                            style={{
                              backgroundImage:
                                'url("/template/2022/images/pd-icon-zalo.png")',
                            }}
                          />
                          <b>0988.163.666</b>
                        </td>
                        <td>Mr.Hưng</td>
                      </tr>
                      <tr>
                        <td>
                          <span
                            className="lazy icon-zalo"
                            data-bg="url(/template/2022/images/pd-icon-zalo.png)"
                            data-was-processed="true"
                            style={{
                              backgroundImage:
                                'url("/template/2022/images/pd-icon-zalo.png")',
                            }}
                          />
                          <b>0356.072.072</b>
                        </td>
                        <td>Mr.Huy</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-item">
                  <table>
                    <tbody>
                      <tr>
                        <td colSpan={2}>
                          <p className="col-title">HỖ TRỢ KỸ THUẬT</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span
                            className="lazy icon-zalo"
                            data-bg="url(/template/2022/images/pd-icon-zalo.png)"
                            data-was-processed="true"
                            style={{
                              backgroundImage:
                                'url("/template/2022/images/pd-icon-zalo.png")',
                            }}
                          />
                          <b> 0358.072.072</b>
                        </td>
                        <td>Mr.Tình</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-item">
                  <table>
                    <tbody>
                      <tr>
                        <td colSpan={2}>
                          <p className="col-title">HỖ TRỢ BẢO HÀNH</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span
                            className="lazy icon-zalo"
                            data-bg="url(/template/2022/images/pd-icon-zalo.png)"
                            data-was-processed="true"
                            style={{
                              backgroundImage:
                                'url("/template/2022/images/pd-icon-zalo.png")',
                            }}
                          />
                          <b>19006100</b>
                        </td>
                        <td>Bảo hành</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="item js-header-item">
            <p className="box-title">
              <i className="icons icon-hotline" /> Hotline Hồ Chí Minh
            </p>
            <div className="item-support-group">
              <p className="title">HỖ TRỢ TẠI HỒ CHÍ MINH</p>
              <div className="d-flex flex-wrap justify-content-center">
                <div className="col-item">
                  <table>
                    <tbody>
                      <tr>
                        <td colSpan={2}>
                          <p className="col-title">KH CÁ NHÂN - DOANH NGHIỆP</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span
                            className="lazy icon-zalo"
                            data-bg="url(/template/2022/images/pd-icon-zalo.png)"
                            data-was-processed="true"
                            style={{
                              backgroundImage:
                                'url("/template/2022/images/pd-icon-zalo.png")',
                            }}
                          />
                          <b>0968.123.666</b>
                        </td>
                        <td>Mr.Bình</td>
                      </tr>
                      <tr>
                        <td>
                          <span
                            className="lazy icon-zalo"
                            data-bg="url(/template/2022/images/pd-icon-zalo.png)"
                            data-was-processed="true"
                            style={{
                              backgroundImage:
                                'url("/template/2022/images/pd-icon-zalo.png")',
                            }}
                          />
                          <b>0379.260.260</b>
                        </td>
                        <td>Mr.Khanh</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-item">
                  <table>
                    <tbody>
                      <tr>
                        <td colSpan={2}>
                          <p className="col-title">HỖ TRỢ KỸ THUẬT</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span
                            className="lazy icon-zalo"
                            data-bg="url(/template/2022/images/pd-icon-zalo.png)"
                            data-was-processed="true"
                            style={{
                              backgroundImage:
                                'url("/template/2022/images/pd-icon-zalo.png")',
                            }}
                          />
                          <b>0345.260.260</b>
                        </td>
                        <td>Mr.Nhân</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-item">
                  <table>
                    <tbody>
                      <tr>
                        <td colSpan={2}>
                          <p className="col-title">HỖ TRỢ BẢO HÀNH</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span
                            className="lazy icon-zalo"
                            data-bg="url(/template/2022/images/pd-icon-zalo.png)"
                            data-was-processed="true"
                            style={{
                              backgroundImage:
                                'url("/template/2022/images/pd-icon-zalo.png")',
                            }}
                          />
                          <b>19006100</b>
                        </td>
                        <td>Bảo hành</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <a href="/tin-tuc" className="item-news">
            <i className="icons icon-news" />
            <span>Trang tin công nghệ</span>
          </a>
          <a href="/tin-khuyen-mai" className="item-news">
            <i className="icons icon-bold" />
            <span>Trang khuyến mãi</span>
          </a>
        </div>
        <div className="item-right text-white text-14 font-600">
          {user ? (
            <div class="item-right text-white text-14 font-600">
              <Link to="/profile">
                Xin chào: <b> {user.fullname}</b>
              </Link>
            </div>
          ) : (
            <>
              <Link to={"/auth/register"}>Đăng ký</Link>
              <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
              <Link to={"/auth/login"}>Đăng nhập</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
