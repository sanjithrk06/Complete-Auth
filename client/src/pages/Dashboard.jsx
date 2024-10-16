import React from "react";
import { useAuthStore } from "../store/authStore";

const Dashboard = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className=" text-center align-middle">
      <h1 className=" text-primary font-bold text-xl">{user.name}</h1>
      <p className=" text-slate-800 font-medium text-lg">{user.email}</p>
      <button
        onClick={handleLogout}
        className=" hover:underline font-medium text-orange-500"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
