import { useContext, useEffect, useState } from "react";
import "./userprofile.css";
import { AppContext } from "../components/context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const UserProfile = () => {
  const {
    email,
    address,
    setEmail,
    setAddress,
    backendUrl,
    username,
    getUserData,
    setUsername,
    localData,
  } = useContext(AppContext);

  const [oldPassword, setOldPassword] = useState("");

  const handleUsernameChange = (e) => {
    const { name, value } = e.target;
    setUsername((prevUsername) => ({
      ...prevUsername,
      [name]: value,
    }));
  };

  const updateUserData = async () => {
    const fullName = username.firstName + " " + username.lastName;
    if (
      fullName === localData.name &&
      email === localData.email &&
      address === localData.address
    ) {
      toast.error("No Change made");
      setOldPassword("");
      return;
    }

    try {
      const { data } = await axios.put(backendUrl + "/api/user/update-data", {
        name: fullName,
        password: oldPassword,
        email,
        address,
      });
      console.log(data);
      if (data.success) {
        toast.success("Data updated");
        setOldPassword("");
        getUserData();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const resetDataChange = async () => {
    getUserData();
    setOldPassword("");
  };

  // useEffect(() => {
  //   setLocalUserName(username.firstName);
  // }, []);

  return (
    <div>
      <div className="contact-parent">
        <ul className="contact-header">
          <li className="home-text"> Home /</li>
          <li className="contact-text">My Account /</li>

          <div className="welcome-username">
            <li className="contact-text-b">Welcome {localData.name.split(" ")[0]}</li>
          </div>
        </ul>
      </div>

      <div className="manage-account-grid">
        <div className="manage-account-flex">
          <span>
            <h3 className="manage-my-account">Manage My Account</h3>
            <div className="manage-my-account-child">
              <p>My profile</p>
              <p>Address Book</p>
              <p> My Payment Options</p>
            </div>
          </span>
          <span>
            <h3 className="manage-my-account">My Order</h3>
            <div className="manage-my-account-child">
              <p>My Returns</p>
              <p>My Cancellations</p>
            </div>
          </span>
          <span>
            <h3 className="manage-my-account">My Wishlist</h3>
            <div className="manage-my-account-child">
              <p>My Wishlist</p>
            </div>
          </span>
        </div>
        <div>
          <h3 className="edit-your-profile">Edit Your Profile</h3>
          <div className="input-grids">
            <div className="input-family">
              <p className="user-first-name">First Name</p>
              <input
                className="input-first-name"
                value={username.firstName}
                onChange={handleUsernameChange}
                name="firstName"
              />
            </div>
            <div className="input-family">
              <p className="user-first-name">Last Name</p>
              <input
                className="input-first-name"
                value={username.lastName}
                onChange={handleUsernameChange}
                name="lastName"
              />
            </div>
            <div className="input-family">
              <p className="user-first-name">Email</p>
              <input
                className="input-first-name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-family">
              <p className="user-first-name">Address</p>
              <input
                className="input-first-name"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="input-family">
            <p className="user-first-name">User Password</p>
            <input
              className="password-changes-input"
              placeholder="Current Password"
              value={oldPassword}
              type="password"
              onChange={(e) => setOldPassword(e.target.value)}
            />
            {/* <input
              className="password-changes-input"
              placeholder="New Password"
              value={newPassword}
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              className="password-changes-input"
              placeholder="Confirm New Password"
              value={verifiedNewPassword}
              type="password"
              onChange={(e) => setNewVerifiedPassword(e.target.value)}
            /> */}
          </div>
          <div className="save-changes">
            <button className="save-changes-button" onClick={updateUserData}>
              Save Changes
            </button>
            <p className="cancel-text" onClick={resetDataChange}>
              cancel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
