import React, { useState } from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import FranchiseTable from "./FranchiseTable";

const data = [
  {
    id: 12345,
    name: "GoMobile Tires North Florida",
    category: "Category 1",
    description: "GoMobile Tires North Florida",
    status: "Active",
  },
  {
    id: 12346,
    name: "GoMobile Tires OR-PDX",
    category: "Category 1",
    description: "GoMobile Tires OR-PDX",
    status: "Active",
  },
  {
    id: 12347,
    name: "GoMobile Tires MO-Kansas City",
    category: "Category 1",
    description: "GoMobile Tires MO-Kansas City",
    status: "Active",
  },
  {
    id: 12348,
    name: "GoMobile Tires TX-Austin",
    category: "Category 1",
    description: "GoMobile Tires TX-Austin",
    status: "Inactive",
  },
  // Add more data as needed
];

const FranchiseManagementHome = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown1 = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isOpen, setIsOpen] = useState(null); // Track which dropdown is open

  const toggleDropdown = (id) => {
    setIsOpen(isOpen === id ? null : id); // Toggle dropdown for a specific row
  };

  return (
    <div className="bg-white">
      <div className="m-3 h-[84.5vh] bg-white rounded-lg">
        <div className="flex flex-row mb-4  px-6 pt-5 sm:mb-0 justify-between w-full">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="14.75"
              viewBox="0 0 18 15.75"
            >
              <path
                id="location_away_FILL1_wght400_GRAD0_opsz24"
                d="M84.5-804.25H81.8a1.733,1.733,0,0,1-1.271-.529A1.733,1.733,0,0,1,80-806.05v-8.1a1.787,1.787,0,0,1,.191-.81,1.726,1.726,0,0,1,.529-.63l5.4-4.05a1.9,1.9,0,0,1,.518-.27A1.767,1.767,0,0,1,87.2-820a1.767,1.767,0,0,1,.563.09,1.9,1.9,0,0,1,.518.27l2.97,2.25a.428.428,0,0,1,.169.45.462.462,0,0,1-.349.36,4.378,4.378,0,0,0-1.552.956,4.679,4.679,0,0,0-1.057,1.5,4.206,4.206,0,0,0-.371,1.789,4.467,4.467,0,0,0,.394,1.789.8.8,0,0,1,.011.574.644.644,0,0,1-.371.394,6.653,6.653,0,0,0-1.44.833,3.261,3.261,0,0,0-.81.99,3.027,3.027,0,0,0-.36.866,3.927,3.927,0,0,0-.112.934v.81a.871.871,0,0,1-.259.641A.871.871,0,0,1,84.5-804.25Zm8.1-4.5a8.759,8.759,0,0,1,2.351.315,9.052,9.052,0,0,1,2.171.922,1.814,1.814,0,0,1,.641.664,1.772,1.772,0,0,1,.236.889,1.652,1.652,0,0,1-.495,1.215,1.652,1.652,0,0,1-1.215.495H88.91a1.652,1.652,0,0,1-1.215-.495,1.652,1.652,0,0,1-.5-1.215,1.772,1.772,0,0,1,.236-.889,1.814,1.814,0,0,1,.641-.664,9.052,9.052,0,0,1,2.171-.922A8.759,8.759,0,0,1,92.6-808.75Zm0-.9a2.6,2.6,0,0,1-1.913-.787,2.6,2.6,0,0,1-.787-1.912,2.6,2.6,0,0,1,.787-1.913,2.6,2.6,0,0,1,1.913-.788,2.6,2.6,0,0,1,1.912.788,2.6,2.6,0,0,1,.788,1.913,2.6,2.6,0,0,1-.788,1.912A2.6,2.6,0,0,1,92.6-809.65Z"
                transform="translate(-80 820)"
                fill="#16425B"
              />
            </svg>
            <p className=" text-sm ml-1.5 text-customTextGrey1 font-opensans font-bold ">
              User Management
            </p>
            <span className="text-customTextGrey2 sm:block hidden relative md:mx-16 mx-4  text-xs">
              User List
              <span className="absolute left-0 top-5 bottom-0 w-full h-0.5 bg-red-500 z-10"></span>
            </span>
          </div>
          <div className="">
            <Link
              to="/admin/franchise-management/add-franchise"
              className="px-2 py-2 text-xs font-semibold text-white bg-red-500 rounded-md"
            >
              + Add <span className="lg:inline-block hidden">New User</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between my-8 px-5">
          {/* Search Section */}
          <div className="flex flex-col mb-4 md:mb-0">
            <label className="text-sm font-opensans font-semibold text-customTextGrey1">
              Search
            </label>
            <div className="relative ">
              <input
                type="text"
                placeholder="Type here"
                className="border-b-2 text-xs focus:outline-none font-semibold pl-5"
              />
              <span className="absolute inset-y-0 flex items-center text-customGrey4">
                <FaSearch className="text-customGrey3 text-xs" />
              </span>
            </div>
          </div>

          {/* Export Section */}
          <div className="flex flex-col items-end">
            <div className="text-sm font-opensans font-semibold text-customTextGrey1">
              Export
            </div>

            {/* Desktop View */}
            <div className="hidden md:flex space-x-5 mt-1">
              <p className="text-xs text-red-500">Copy</p>
              <p className="text-xs text-red-500">CSV</p>
              <p className="text-xs text-red-500">Excel</p>
              <p className="text-xs text-red-500">PDF</p>
              <p className="text-xs text-red-500">Print</p>
            </div>

            {/* Mobile View */}
            <div className="md:hidden relative mt-2">
              <button
                className="bg-customNavy text-white text-xs py-1 px-1 md:px-3 rounded-md flex items-center"
                onClick={toggleDropdown1}
              >
                <span className="me-1">Options</span>
                <FaChevronDown className="text-white" />
              </button>
              {isDropdownOpen && (
                <ul className="absolute mt-2  bg-customNavy text-white text-xs z-50 rounded-md py-2 w-20 shadow-lg">
                  <li className="px-3 py-1 hover:bg-customBlue">Copy</li>
                  <li className="px-3 py-1 hover:bg-customBlue">CSV</li>
                  <li className="px-3 py-1 hover:bg-customBlue">Excel</li>
                  <li className="px-3 py-1 hover:bg-customBlue">PDF</li>
                  <li className="px-3 py-1 hover:bg-customBlue">Print</li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <FranchiseTable />
      </div>
    </div>
  );
};

export default FranchiseManagementHome;
