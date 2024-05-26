import React from "react";
import { useAuth } from "../../Hooks/Auth/useAuth";
import { useNavigate } from "react-router-dom";

function DashboardHome() {
  const { user, logOutUser } = useAuth();
  const navigate = useNavigate();
  const userSignOut = () => {
    logOutUser()
      .then(() => {
        navigate("/");
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="p-10 bg-gray-100 rounded">
      <div className="flex items-start">
        <div className="w-1/6">
          <img src={user?.photoURL} alt="" className="w-[120px] h-[120px]" />
        </div>
        <div className="w-5/6">
          <h4 className="text-[16px] font-normal mb-2">{user?.displayName}</h4>
          <h4 className="text-[16px] font-normal mb-3">{user?.email}</h4>
          <button
            onClick={userSignOut}
            className="px-4 py-2 bg-primary rounded text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
