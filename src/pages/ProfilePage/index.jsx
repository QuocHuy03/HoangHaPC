import React from "react";
import Layout from "../../components/Layout";
import { useSelector } from "react-redux";

export default function ProfilePage() {
  const user = useSelector((state) => state.auth.user);
  return (
    <Layout>
      <div className="account-page">
        <div className="container">
          <div className="account-col-left">
            <div className="box-info">
              <i className="fas fa-user-circle" aria-hidden="true" />
              <p>
                Tài khoản của, <b>{user.fullname}</b>
              </p>
            </div>
            <div className="box-direction">
              <a href="?view=account-info" className="current">
                <i className="far fa-user" aria-hidden="true" />
                <span>Thông tin tài khoản</span>
              </a>
              <a href="?view=account-order">
                <i className="far fa-list-alt" aria-hidden="true" />
                <span>Danh sách đơn hàng</span>
              </a>
              <a href="/san-pham-da-xem">
                <i className="far fa-eye" aria-hidden="true" />
                <span>Sản phẩm đã xem</span>
              </a>
              <a href="?view=account-change-pass">
                <i className="fas fa-lock" aria-hidden="true" />
                <span>Thay đổi mật khẩu</span>
              </a>
              <a href="/">
                <i className="fas fa-sign-out-alt" aria-hidden="true" />
                <span>Đăng xuất</span>
              </a>
            </div>
          </div>
          <div className="account-col-right">
            <h3>Thông tin cá nhân</h3>
            <table
              cellPadding={5}
              border={1}
              bordercolor="#CCCCCC"
              style={{ borderCollapse: "collapse", width: "100%" }}
            >
              <tbody>
                <tr>
                  <td width="120px">Họ tên</td>
                  <td>nguyễn trường thịnh</td>
                </tr>
                <tr>
                  <td>Giới tính</td>
                  <td>Nữ</td>
                </tr>
                <tr>
                  <td>Địa chỉ email</td>
                  <td>thinhnguyen012003@gmail.com</td>
                </tr>
                <tr>
                  <td>Địa chỉ nhà</td>
                  <td />
                </tr>
                <tr>
                  <td>Tỉnh/TP</td>
                  <td />
                </tr>
                <tr>
                  <td>Số điện thoại</td>
                  <td />
                </tr>
                <tr>
                  <td>Số di động</td>
                  <td />
                </tr>
              </tbody>
            </table>
            <div style={{ paddingTop: 20, fontWeight: "bold" }}>
              {" "}
              <a href="?view=account-change-info" className="btn btn-danger">
                Thay đổi thông tin
              </a>
            </div>
          </div>
          {/* thay đổi thông tin */}
          {/* <div className="account-col-right">
            <h3>Cập nhật thông tin cá nhân</h3>
            <form method="post" encType="multipart/form-data" name="account_form" className="col-right-tbl">
              <table cellPadding={5} border={0} bordercolor="#CCCCCC" style={{ borderCollapse: 'collapse', width: '100%' }}>
                <tbody><tr>
                  <td>Họ tên</td>
                  <td><input type="text" className="form-control" name="fullname" id="fullname" size={40} defaultValue="nguyễn trường thịnh" /></td>
                </tr>
                  <tr>
                    <td>Giới tính</td>
                    <td>
                      <label><input type="radio" name="sex" defaultValue="male" />Nam </label>&nbsp;
                      <label><input type="radio" name="sex" defaultValue="female" defaultChecked />Nữ </label>
                    </td>
                  </tr>
                  <tr>
                    <td>Địa chỉ email</td>
                    <td>
                      <input type="text" className="form-control" name="email" id="email" size={40} defaultValue="thinhnguyen012003@gmail.com" />
                      <input type="hidden" name="old_email" id="old_email" defaultValue="thinhnguyen012003@gmail.com" />
                    </td>
                  </tr>
                  <tr>
                    <td>Địa chỉ nhà</td>
                    <td>
                      <input type="text" className="form-control" name="address" id="address" defaultValue size={50} />
                    </td>
                  </tr>
                  <tr>
                    <td>Tỉnh / TP</td>
                    <td>
                      <select className="form-control" name="province">
                        <option value={1}>Hà Nội</option>
                        <option value={2}>TP HCM</option>
                        <option value={5}>Hải Phòng</option>
                        <option value={4}>Đà Nẵng</option>
                        <option value={6}>An Giang</option>
                        <option value={7}>Bà Rịa-Vũng Tàu</option>
                        <option value={13}>Bình Dương</option>
                        <option value={15}>Bình Phước</option>
                        <option value={16}>Bình Thuận</option>
                        <option value={14}>Bình Định</option>
                        <option value={8}>Bạc Liêu</option>
                        <option value={10}>Bắc Giang</option>
                        <option value={9}>Bắc Kạn</option>
                        <option value={11}>Bắc Ninh</option>
                        <option value={12}>Bến Tre</option>
                        <option value={18}>Cao Bằng</option>
                        <option value={17}>Cà Mau</option>
                        <option value={3}>Cần Thơ</option>
                        <option value={24}>Gia Lai</option>
                        <option value={25}>Hà Giang</option>
                        <option value={26}>Hà Nam</option>
                        <option value={27}>Hà Tĩnh</option>
                        <option value={30}>Hòa Bình</option>
                        <option value={28}>Hải Dương</option>
                        <option value={29}>Hậu Giang</option>
                        <option value={31}>Hưng Yên</option>
                        <option value={32}>Khánh Hòa</option>
                        <option value={33}>Kiên Giang</option>
                        <option value={34}>Kon Tum</option>
                        <option value={35}>Lai Châu</option>
                        <option value={38}>Lào Cai</option>
                        <option value={36}>Lâm Đồng</option>
                        <option value={37}>Lạng Sơn</option>
                        <option value={39}>Long An</option>
                        <option value={40}>Nam Định</option>
                        <option value={41}>Nghệ An</option>
                        <option value={42}>Ninh Bình</option>
                        <option value={43}>Ninh Thuận</option>
                        <option value={44}>Phú Thọ</option>
                        <option value={45}>Phú Yên</option>
                        <option value={46}>Quảng Bình</option>
                        <option value={47}>Quảng Nam</option>
                        <option value={48}>Quảng Ngãi</option>
                        <option value={49}>Quảng Ninh</option>
                        <option value={50}>Quảng Trị</option>
                        <option value={51}>Sóc Trăng</option>
                        <option value={52}>Sơn La</option>
                        <option value={53}>Tây Ninh</option>
                        <option value={56}>Thanh Hóa</option>
                        <option value={54}>Thái Bình</option>
                        <option value={55}>Thái Nguyên</option>
                        <option value={57}>Thừa Thiên-Huế</option>
                        <option value={58}>Tiền Giang</option>
                        <option value={59}>Trà Vinh</option>
                        <option value={60}>Tuyên Quang</option>
                        <option value={61}>Vĩnh Long</option>
                        <option value={62}>Vĩnh Phúc</option>
                        <option value={63}>Yên Bái</option>
                        <option value={19}>Đắk Lắk</option>
                        <option value={22}>Đồng Nai</option>
                        <option value={23}>Đồng Tháp</option>
                        <option value={21}>Điện Biên</option>
                        <option value={20}>Đăk Nông</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Điện thoại cố định</td>
                    <td>
                      <input type="text" className="form-control" name="telephone" id="telephone" size={40} defaultValue />
                    </td>
                  </tr>
                  <tr>
                    <td>Điện thoại di động</td>
                    <td>
                      <input type="text" className="form-control" name="mobile" id="mobile" size={40} defaultValue />
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <input type="submit" defaultValue="Thay đổi" className="btn btn-danger" />
                    </td>
                  </tr>
                </tbody></table>
              <input type="hidden" name="update" defaultValue="yes" />
            </form>
          </div> */}
          {/* end */}

          {/* danh sách đơn hàng */}
          {/* <div className="account-col-right">
  <h3>Danh sách đơn hàng</h3>
  <table width="100%" border={1} bordercolor="#CCCCCC" style={{borderCollapse: 'collapse'}} cellPadding={4} cellSpacing={0}>
    <tbody><tr align="center" style={{fontWeight: 'bold', background: '#0066c1', color: '#fff'}}>
        <td>STT</td>
        <td>Số đơn hàng</td>
        <td>Giá trị</td>
        <td>Thời gian</td>
        <td>Thông tin</td>
      </tr>
      <tr align="center">
        <td>1</td>
        <td align="left">#7541 <a href="?view=account-order-detail&id=7541">Xem chi tiết</a></td>
        <td>
          27.650.000
        </td>
        <td>12-09-2023</td>
        <td>
          Chưa xử lý
        </td>
      </tr>
    </tbody></table>
  <br />
</div> */}
          {/* end */}

          {/* thay đổi mật khẩu */}
          {/* <div className="account-col-right">
  <h3>Thay đổi mật khẩu</h3>
  <form method="post" encType="multipart/form-data" name="account_form" className="col-right-tbl">
    <table cellPadding={5} border={0} bordercolor="#CCCCCC" style={{borderCollapse: 'collapse'}}>
      <tbody><tr>
          <td width="150px">Mật khẩu hiện tại</td>
          <td>
            <input type="password" name="currentpassword" id="currentpassword" className="form-control" />
          </td>
        </tr>
        <tr>
          <td>Mật khẩu mới</td>
          <td>
            <input type="password" name="newpassword" id="newpassword" className="form-control" />
          </td>
        </tr>
        <tr>
          <td>Nhập lại mật khẩu</td>
          <td>
            <input type="password" name="renewpassword" id="renewpassword" className="form-control" />
          </td>
        </tr>
        <tr>
          <td />
          <td>
            <input type="submit" defaultValue="Thay đổi" className="btn btn-danger" />
          </td>
        </tr>
      </tbody></table>
    <input type="hidden" name="update" defaultValue="yes" />    
  </form>
</div> */}
          {/* end */}
        </div>
      </div>
    </Layout>
  );
}
