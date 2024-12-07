import React, { useState } from "react";
import { FcApproval } from "react-icons/fc";

const data = [
  {
    id: 1,
    franchiseCode: "123456",
    operatingName: "name",
    legalName:"ajay",
    openDate:"01/01/2000",
    email:"email@gmail.com",
    franchiseEmail:"franchise@co.in",
    service:"1234567890",
    address:"address",
    country:"india",
    state:"tamil nadu",
    city:"coimbatore",
    zipcode:"123456",
    role:"user",
    status: "Active",
  },
  {
    id: 2,
    franchiseCode: "123456",
    operatingName: "name",
    legalName:"ajay",
    openDate:"01/01/2000",
    email:"email@gmail.com",
    franchiseEmail:"franchise@co.in",
    service:"1234567890",
    address:"address",
    country:"india",
    state:"tamil nadu",
    city:"coimbatore",
    zipcode:"123456",
    role:"user",
    status: "Active",
  },
  {
    id: 3,
    franchiseCode: "123456",
    operatingName: "name",
    legalName:"ajay",
    openDate:"01/01/2000",
    email:"email@gmail.com",
    franchiseEmail:"franchise@co.in",
    service:"1234567890",
    address:"address",
    country:"india",
    state:"tamil nadu",
    city:"coimbatore",
    zipcode:"123456",
    role:"user",
    status: "Active",
  },
  {
    id: 4,
    franchiseCode: "123456",
    operatingName: "name",
    legalName:"ajay",
    openDate:"01/01/2000",
    email:"email@gmail.com",
    franchiseEmail:"franchise@co.in",
    service:"1234567890",
    address:"address",
    country:"india",
    state:"tamil nadu",
    city:"coimbatore",
    zipcode:"123456",
    role:"user",
    status: "Inactive",
  },
  // Add more data as needed
];

const FranchiseTable = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const handleAdd = () => {
    // You can add your form submission logic here

    // Show success popup
    setShowPopup(true);

    // Hide the popup after a few seconds and navigate to company management page
    setTimeout(() => {
      setShowPopup(false);
      // navigate('/franchise-management');
    }, 2000);
  };

  const [showPopupDelete, setShowPopupDelete] = useState(false);
  const handleDelete = () => {
    // You can add your form submission logic here

    // Show success popup
    setShowPopup(true);

    // Hide the popup after a few seconds and navigate to company management page
    setTimeout(() => {
      setShowPopup(false);
      navigate('/franchise-management');
    }, 2000);
  };

  const toggleDropdown1 = (id) => {
    setIsDropdownOpen(isDropdownOpen === id ? null : id);
  };


  const [isOpen, setIsOpen] = useState(null); // Track which dropdown is open

  const toggleDropdown = (id) => {
    setIsOpen(isOpen === id ? null : id); // Toggle dropdown for a specific row
  };

  return (
    <div className="bg-white">
      {/* Table Section */}
      <div className=" overflow-x-auto">
        <div className="inline-block min-w-full overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  ID
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  Franchise code
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  Operating Name
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  Legal Name
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  Email
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  Phone
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  Address
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  City
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  State
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  Country
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  Zip Code
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  Role
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs  font-bold text-gray-600 tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                      {item.id}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                      {item.franchiseCode}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                      {item.operatingName}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                      {item.legalName}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                      {item.email}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                      {item.service}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                      {item.address}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                      {item.city}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                      {item.state}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                      {item.country}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                      {item.zipcode}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                      {item.role}
                    </p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs relative">
                    <button
                      onClick={() => toggleDropdown(item.id)}
                      className="text-[#39A9DB] hover:text-customBlue flex items-center"
                    >
                      Action
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.121"
                        height="6.811"
                        className="ml-1"
                        viewBox="0 0 12.121 6.811"
                      >
                        <path
                          id="down-arrow-5-svgrepo-com"
                          d="M7,10l5,5,5-5"
                          transform="translate(-5.939 -8.939)"
                          fill="none"
                          stroke="#39A9DB"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </button>
                    {isOpen === item.id && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                        <ul className="relative py-1 text-sm">
                        <li>
                            <button
                              onClick={() =>{}}
                              className="flex items-center px-4 py-2 w-full text-black hover:bg-white"
                            >
                              View
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={handleAdd}
                              className="flex items-center px-4 py-2 w-full text-green-600 hover:bg-green-100"
                            >
                              Update
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={setShowPopupDelete}
                              className="flex items-center px-4 py-2 w-full text-red-600 hover:bg-red-100"
                            >
                              Delete
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {showPopup && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-md flex flex-col items-center justify-center shadow-md text-center">
                <FcApproval className="text-5xl text-center" />
                <p className="text-lg font-semibold">
                  New User Updated <br />{" "}
                  <span className="font-bold">successfully</span>
                </p>
              </div>
            </div>
          )}
          {showPopupDelete && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-md flex flex-col items-center justify-center shadow-md text-center">
                <FcApproval className="text-5xl text-center" />
                <p className="text-lg font-semibold">
                  New User Deleted <br />{" "}
                  <span className="font-bold">successfully</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FranchiseTable;
