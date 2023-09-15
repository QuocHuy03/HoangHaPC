import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import address from "../../json/address.json";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { logout } from "../../stores/authentication/actions";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, refreshToken } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [wards, setWards] = useState([]);
  const formRef = useRef(null);

  useEffect(() => {
    setProvinces(address.provinces);
    setDistricts(address.districts);
    setWards(address.wards);
  }, []);

  const handleSelectProvince = (provinceId) => {
    setSelectedProvince(provinceId);
    setSelectedDistrict("");
  };

  const handleSelectDistrict = (districtId) => {
    setSelectedDistrict(districtId);
  };

  const filteredDistricts = districts.filter(
    (district) => district.province_id === selectedProvince
  );

  const filteredWards = wards.filter(
    (ward) => ward.district_id === selectedDistrict
  );

  const handleSubmit = () => {
    const selectedCity = provinces.find(
      (province) => province.id === values.city
    );
    if (selectedCity) {
      values.city = selectedCity.name;
    }

    const selectedDistrict = districts.find(
      (district) => district.id === values.district
    );
    if (selectedDistrict) {
      values.district = selectedDistrict.name;
    }

    const selectedCommune = wards.find((ward) => ward.id === values.commune);
    if (selectedCommune) {
      values.commune = selectedCommune.name;
    }
  };

  const handleLogout = async () => {
    handleTabClick(3);
    await dispatch(logout(refreshToken));
  };

  const UpdateProfile = ({ user }) => {
    const isUserAvailable = user != null;
    return (
      <div className="account-col-right">
        <h3>Cập nhật thông tin cá nhân</h3>
        <form
          method="post"
          encType="multipart/form-data"
          name="account_form"
          className="col-right-tbl"
        >
          <table
            cellPadding={5}
            border={0}
            bordercolor="#CCCCCC"
            style={{ borderCollapse: "collapse", width: "100%" }}
          >
            <tbody>
              <tr>
                <td>Họ tên</td>
                <td>
                  {isUserAvailable ? (
                    <input
                      type="text"
                      className="form-control"
                      name="fullname"
                      id="fullname"
                      size={40}
                      defaultValue={user.fullname}
                    />
                  ) : (
                    <input
                      type="text"
                      className="form-control"
                      name="fullname"
                      id="fullname"
                      size={40}
                    />
                  )}
                </td>
              </tr>

              <tr>
                <td>Địa chỉ email</td>
                <td>
                  {isUserAvailable ? (
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      id="email"
                      size={40}
                      defaultValue={user.email}
                    />
                  ) : (
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      id="email"
                      size={40}
                    />
                  )}
                </td>
              </tr>
              <tr>
                <td>Địa chỉ nhà</td>
                <td>
                  {isUserAvailable ? (
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      id="address"
                      size={40}
                      defaultValue={user.address}
                    />
                  ) : (
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      id="address"
                      size={40}
                    />
                  )}
                </td>
              </tr>
              <tr>
                <td>Tỉnh / TP</td>
                <td>
                  <select className="form-control" name="province">
                    <option value={1}>Hà Nội</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Điện thoại cố định</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="telephone"
                    id="telephone"
                    size={40}
                    defaultValue
                  />
                </td>
              </tr>
              <tr>
                <td>Điện thoại di động</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="mobile"
                    id="mobile"
                    size={40}
                    defaultValue
                  />
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <input
                    type="submit"
                    disabled={!isUserAvailable}
                    defaultValue="Thay đổi"
                    className="btn btn-danger"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <input type="hidden" name="update" defaultValue="yes" />
        </form>
      </div>
    );
  };

  return (
    <Layout>
      <div className="account-page">
        <div className="container">
          <div className="account-col-left">
            <div className="box-info">
              <i className="fas fa-user-circle" aria-hidden="true" />
              <p>
                Tài khoản của,{" "}
                <b>
                  {user && user.fullname !== null
                    ? user.fullname
                    : "Đang cập nhật"}
                </b>
              </p>
            </div>
            <div className="box-direction">
              <Link
                onClick={() => handleTabClick(0)}
                className={activeTab === 0 || activeTab === 4 ? "current" : ""}
              >
                <i className="far fa-user" aria-hidden="true" />
                <span>Thông tin tài khoản</span>
              </Link>
              <Link
                onClick={() => handleTabClick(1)}
                className={activeTab === 1 ? "current" : ""}
              >
                <i className="far fa-list-alt" aria-hidden="true" />
                <span>Danh sách đơn hàng</span>
              </Link>
              <Link
                onClick={() => handleTabClick(2)}
                className={activeTab === 2 ? "current" : ""}
              >
                <i className="fas fa-lock" aria-hidden="true" />
                <span>Thay đổi mật khẩu</span>
              </Link>
              <Link
                onClick={() => handleLogout()}
                className={activeTab === 3 ? "current" : ""}
              >
                <i className="fas fa-sign-out-alt" aria-hidden="true" />
                <span>Đăng xuất</span>
              </Link>
            </div>
          </div>
          {activeTab === 0 && (
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
                    <td>
                      {user && user.fullname !== null
                        ? user.fullname
                        : "Đang cập nhật"}
                    </td>
                  </tr>
                  <tr>
                    <td>Địa chỉ email</td>
                    <td>
                      {user && user.email !== null
                        ? user.email
                        : "Đang cập nhật"}
                    </td>
                  </tr>
                  <tr>
                    <td>Địa chỉ nhà</td>
                    <td>
                      {user && user.address !== null
                        ? user.address
                        : "Đang cập nhật"}
                    </td>
                  </tr>
                  <tr>
                    <td>Quận/Huyện</td>
                    <td>
                      {user && user.district !== null
                        ? user.district
                        : "Đang cập nhật"}
                    </td>
                  </tr>
                  <tr>
                    <td>Xã/Phường</td>
                    <td>
                      {user && user.commune !== null
                        ? user.commune
                        : "Đang cập nhật"}
                    </td>
                  </tr>
                  <tr>
                    <td>Tỉnh/TP</td>
                    <td>
                      {user && user.city !== null ? user.city : "Đang cập nhật"}
                    </td>
                  </tr>
                  <tr>
                    <td>Số điện thoại</td>
                    <td>
                      {user && user.phone !== null
                        ? user.phone
                        : "Đang cập nhật"}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div style={{ paddingTop: 20, fontWeight: "bold" }}>
                <Link
                  onClick={() => handleTabClick(4)}
                  className="btn btn-danger"
                >
                  Thay đổi thông tin
                </Link>
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div className="account-col-right">
              <h3>Danh sách đơn hàng</h3>
              <table
                width="100%"
                border={1}
                bordercolor="#CCCCCC"
                style={{ borderCollapse: "collapse" }}
                cellPadding={4}
                cellSpacing={0}
              >
                <tbody>
                  <tr
                    align="center"
                    style={{
                      fontWeight: "bold",
                      background: "#0066c1",
                      color: "#fff",
                    }}
                  >
                    <td>STT</td>
                    <td>Số đơn hàng</td>
                    <td>Giá trị</td>
                    <td>Thời gian</td>
                    <td>Thông tin</td>
                  </tr>
                  <tr align="center">
                    <td>1</td>
                    <td align="left">
                      #7541{" "}
                      <a href="?view=account-order-detail&id=7541">
                        Xem chi tiết
                      </a>
                    </td>
                    <td>27.650.000</td>
                    <td>12-09-2023</td>
                    <td>Chưa xử lý</td>
                  </tr>
                </tbody>
              </table>
              <br />
            </div>
          )}

          {activeTab === 2 && (
            <div className="account-col-right">
              <h3>Thay đổi mật khẩu</h3>
              <form
                method="post"
                encType="multipart/form-data"
                name="account_form"
                className="col-right-tbl"
              >
                <table
                  cellPadding={5}
                  border={0}
                  bordercolor="#CCCCCC"
                  style={{ borderCollapse: "collapse" }}
                >
                  <tbody>
                    <tr>
                      <td width="150px">Mật khẩu hiện tại</td>
                      <td>
                        <input
                          type="password"
                          name="currentpassword"
                          id="currentpassword"
                          className="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Mật khẩu mới</td>
                      <td>
                        <input
                          type="password"
                          name="newpassword"
                          id="newpassword"
                          className="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Nhập lại mật khẩu</td>
                      <td>
                        <input
                          type="password"
                          name="renewpassword"
                          id="renewpassword"
                          className="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td />
                      <td>
                        <input
                          type="submit"
                          defaultValue="Thay đổi"
                          className="btn btn-danger"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <input type="hidden" name="update" defaultValue="yes" />
              </form>
            </div>
          )}

          {activeTab === 4 && <UpdateProfile user={user} />}
        </div>
      </div>
    </Layout>
  );
}
