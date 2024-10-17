import React from "react";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/date";

const Dashboard = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <div className="bg-whiteDim text-slate-900">
        <div
          id="page-container"
          className="mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-primary/10"
        >
          <main
            id="page-content"
            className="flex max-w-full flex-auto flex-col"
          >
            <div className="relative mx-auto flex min-h-dvh w-full max-w-10xl items-center justify-center overflow-hidden p-4 lg:p-8">
              <section className="w-full max-w-md py-2">
                <header className="mb-4 text-center">
                  <h1 className="mb-1 inline-flex items-center gap-1 text-lg font-bold">
                    <svg
                      className="hi-mini hi-cube-transparent inline-block size-4 text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>One Trip</span>
                  </h1>
                  <h2 className=" text-xs font-medium text-slate-600">
                    Start exploring
                  </h2>
                </header>
                <div className="max-w-sm w-full mx-auto mt-10 p-8 bg-white text-sm rounded-xl shadow-2xl ">
                  <h2 className="text-2xl font-bold mb-6 text-center bg-primary text-transparent bg-clip-text">
                    Dashboard
                  </h2>

                  <div className="space-y-6">
                    <div className="p-4 bg-primary font-medium bg-opacity-10 rounded-lg border-2 border-primary">
                      <h3 className="text-xl font-semibold text-primary mb-3">
                        Profile Information
                      </h3>
                      <p className="text-gray-600">Name: {user.name}</p>
                      <p className="text-gray-600">Email: {user.email}</p>
                    </div>
                    <div className="p-4 bg-primary font-medium bg-opacity-10 rounded-lg border-2 border-primary">
                      <h3 className="text-xl font-semibold text-primary mb-3">
                        Account Activity
                      </h3>
                      <p className="text-gray-600">
                        <span className="font-bold">Joined: </span>
                        {new Date(user.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-bold">Last Login: </span>

                        {formatDate(user.lastLogin)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      onClick={handleLogout}
                      className="w-full py-3 px-4 bg-gradient-to-r from-orange-500 via-white to-emerald-600 font-bold rounded-lg shadow-lg hover:from-primary/80 hover:to-primary text-blue-800 focus:outline-none hover:text-white"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
