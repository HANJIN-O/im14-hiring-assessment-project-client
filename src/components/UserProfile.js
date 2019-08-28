import React from "react";

const UserProfile = (props) => {
  let { id, name, email, phone } = props.user;
  let picUrl = `https://randomuser.me/api/portraits/men/${id}.jpg`
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td><img src={picUrl} alt='pic'/></td>
          </tr>
          <tr>
            <td>{name}</td>
          </tr>
          <tr>
            <td>{email}</td>
          </tr>
          <tr>
            <td>{phone}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default UserProfile;
