import React from "react";
import { useNavigate } from "react-router-dom";
import { RxLockClosed } from "react-icons/rx";

export default function UnAuthorizedPage() {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center h-[80vh] px-4">
            <div className="bg-white shadow-lg rounded-xl p-8 max-w-md text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-red-100 rounded-full mb-4">
                    <RxLockClosed className="text-red-500 text-3xl" />
                </div>
                <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                    Access Denied
                </h1>
                <p className="text-gray-600 mb-6">
                    You don't have permission to view this page.
                </p>
                <button
                    onClick={() => navigate("/advertising")}
                    className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
}
