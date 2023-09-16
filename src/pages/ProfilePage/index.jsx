import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import huydev from "../../json/address.json";
import { Link } from "react-router-dom";
import { logout } from "../../stores/authentication/actions";
import { userService } from "../../services/user.service";
import { message } from "antd";
import { LOAD_CURRENT_LOGIN_USER_SUCCESS } from "../../stores/authentication/types";

export default function ProfilePage() {
  const dispatch = useDispatch();
  const { user, refreshToken } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState(0);
  const [validationErrors, setValidationErrors] = useState([]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleLogout = async () => {
    // handleTabClick(3);
    await dispatch(logout(refreshToken));
  };

  // change-password

  const [inputChangePass, setInputChangePass] = useState({
    old_password: "",
    password: "",
    confirm_password: "",
  });

  const handleChangePasswordInput = (e) => {
    const { name, value } = e.target;
    setInputChangePass((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleChangePassword = async (e) => {
    let data = {
      old_password: inputChangePass.old_password,
      password: inputChangePass.password,
      confirm_password: inputChangePass.confirm_password,
    };
    e.preventDefault();
    try {
      const response = await userService.changePassword(data);
      console.log(response);
      if (response.status === true) {
        setValidationErrors([]);
        message.success(response.message);
        await dispatch(logout(refreshToken));
      } else {
        if (response.status === false) {
          setValidationErrors([]);
          message.error(response.message);
        }
        setValidationErrors(
          Object.values(response.errors).map((error) => error.msg)
        );
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  // update me

  const UpdateProfile = ({ user }) => {
    const isUserAvailable = user !== null;
    const [provinces, setProvinces] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState("");
    const [districts, setDistricts] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedCommune, setSelectedCommune] = useState("");
    const [wards, setWards] = useState([]);

    const initialInputValues = {
      fullname: isUserAvailable ? user.fullname : "",
      email: isUserAvailable ? user.email : "",
      address: isUserAvailable ? user.address : "",
      city: isUserAvailable ? user.city : "",
      district: isUserAvailable ? user.district : "",
      commune: isUserAvailable ? user.commune : "",
      phone: isUserAvailable ? user.phone : "",
    };

    const [inputs, setInputs] = useState(initialInputValues);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: value,
      }));
    };

    useEffect(() => {
      setProvinces(huydev.provinces);
      setDistricts(huydev.districts);
      setWards(huydev.wards);
      if (isUserAvailable) {
        setSelectedProvince(user.city);
        setSelectedDistrict(user.district);
        setSelectedCommune(user.commune);
      }
    }, [isUserAvailable]);

    const handleSelectProvince = (e) => {
      setSelectedProvince(e.target.value);

      setInputs((prevInputs) => ({
        ...prevInputs,
        city: e.target.value,
      }));
    };

    const handleSelectDistrict = (e) => {
      setSelectedDistrict(e.target.value);
      setInputs((prevInputs) => ({
        ...prevInputs,
        district: e.target.value,
      }));
    };

    const handleSelectCommune = (e) => {
      setSelectedCommune(e.target.value);
      setInputs((prevInputs) => ({
        ...prevInputs,
        commune: e.target.value,
      }));
    };

    const filteredDistricts = districts?.filter(
      (district) => district.province_id === Number(selectedProvince)
    );

    const filteredWards = wards?.filter(
      (ward) => ward.district_id === Number(selectedDistrict)
    );
    const handleSubmit = async (e) => {
      let data = {
        fullname: inputs.fullname,
        address: inputs.address,
        city: Number(inputs.city),
        district: Number(inputs.district),
        commune: Number(inputs.commune),
        phone: inputs.phone,
      };
      // console.log(data)
      e.preventDefault();
      // const selectedCity = provinces.find(
      //   (province) => province.id === Number(data.city)
      // );
      // if (selectedCity) {
      //   data.city = selectedCity.name;
      // }

      // const selectedDistrict = districts.find(
      //   (district) => district.id === Number(data.district)
      // );
      // if (selectedDistrict) {
      //   data.district = selectedDistrict.name;
      // }
      // console.log(selectedProvince);

      // const selectedCommune = wards.find(
      //   (ward) => ward.id === Number(data.commune)
      // );

      // if (selectedCommune) {
      //   data.commune = selectedCommune.name;
      // }

      try {
        const response = await userService.updateMe(data);
        dispatch({
          type: LOAD_CURRENT_LOGIN_USER_SUCCESS,
          payload: response.user,
        });
        if (response.status === true) {
          message.success(response.message);
        } else {
          message.error(response.message);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };
    return (
      <div className="account-col-right">
        <h3>Cập nhật thông tin cá nhân</h3>
        <form onSubmit={handleSubmit} className="col-right-tbl">
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
                  <input
                    type="text"
                    className="form-control"
                    name="fullname"
                    onChange={handleChange}
                    value={inputs.fullname}
                    id="fullname"
                    size={40}
                  />
                </td>
              </tr>

              <tr>
                <td>Địa chỉ email</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    onChange={handleChange}
                    value={inputs.email}
                    disabled
                    id="email"
                    size={40}
                  />
                </td>
              </tr>

              <tr>
                <td>Địa chỉ nhà</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    onChange={handleChange}
                    value={inputs.address}
                    id="address"
                    size={40}
                  />
                </td>
              </tr>

              <tr>
                <td>Tỉnh / TP</td>
                <td>
                  <select
                    className="form-control"
                    name="city"
                    onChange={handleSelectProvince}
                    value={selectedProvince}
                    placeholder={`Vui lòng chọn Tỉnh / TP`}
                  >
                    <option value="">Vui lòng chọn Tỉnh / TP</option>
                    {provinces?.map((province) => (
                      <option key={province.id} value={province.id}>
                        {province.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>Quận / Huyện</td>
                <td>
                  <select
                    className="form-control"
                    name="district"
                    value={selectedDistrict}
                    onChange={handleSelectDistrict}
                    disabled={!selectedProvince}
                    placeholder={`Vui Lòng Chọn Quận / Huyện ${selectedDistrict}`}
                  >
                    <option value="">Vui lòng chọn Quận / Huyện</option>
                    {filteredDistricts?.map((district) => (
                      <option key={district.id} value={district.id}>
                        {district.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>Phường / Xã</td>
                <td>
                  <select
                    className="form-control"
                    name="commune"
                    value={selectedCommune}
                    onChange={handleSelectCommune}
                    disabled={!selectedDistrict}
                    placeholder="Vui Lòng Chọn Phường / Xã"
                  >
                    <option value="">Vui lòng chọn Phường / Xã</option>
                    {filteredWards?.map((ward) => (
                      <option key={ward.id} value={ward.id}>
                        {ward.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>Điện thoại di động</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    onChange={handleChange}
                    value={inputs.phone}
                    id="phone"
                    size={40}
                  />
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <button type="submit" className="btn btn-danger">
                    Thay đổi
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
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
                        ? huydev?.districts.find(
                            (district) => district.id === Number(user.district)
                          )?.name || "Đang cập nhật"
                        : "Đang cập nhật"}
                    </td>
                  </tr>
                  <tr>
                    <td>Xã/Phường</td>
                    <td>
                      {user && user.commune !== null
                        ? huydev?.wards.find(
                            (commune) => commune.id === Number(user.commune)
                          )?.name || "Đang cập nhật"
                        : "Đang cập nhật"}
                    </td>
                  </tr>
                  <tr>
                    <td>Tỉnh/TP</td>
                    <td>
                      {user && user.city !== null
                        ? huydev?.provinces.find(
                            (city) => city.id === Number(user.city)
                          )?.name || "Đang cập nhật"
                        : "Đang cập nhật"}
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
              <form onSubmit={handleChangePassword} className="col-right-tbl">
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
                          onChange={handleChangePasswordInput}
                          name="old_password"
                          className="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Mật khẩu mới</td>
                      <td>
                        <input
                          type="password"
                          name="password"
                          onChange={handleChangePasswordInput}
                          className="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Nhập lại mật khẩu</td>
                      <td>
                        <input
                          type="password"
                          name="confirm_password"
                          onChange={handleChangePasswordInput}
                          className="form-control"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td />
                      <td>
                        <button type="submit" className="btn btn-danger">
                          Thay đổi
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
              {validationErrors && (
                <p
                  className="mt-1 red"
                  id="js-popup-login-note"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {validationErrors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </p>
              )}
            </div>
          )}

          {activeTab === 4 && <UpdateProfile user={user} />}
        </div>
      </div>
    </Layout>
  );
}
