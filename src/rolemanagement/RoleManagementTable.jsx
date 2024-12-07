import React, { useState } from "react";

const data = [
  {
    id: 1,
    orderId: 12345,
    orderNumber:1234567890,
    franchiseId: 12345,
    OrderDate: "10/10/2000",
    orderTotal:500,
    status: "Active",
  },
  {
    id: 2,
    orderId: 12345,
    orderNumber:1234567890,
    franchiseId: 12345,
    OrderDate: "10/10/2000",
    orderTotal:500,
    status: "Active",
  },
  {
    id: 3,
    orderId: 12345,
    orderNumber:1234567890,
    franchiseId: 12345,
    OrderDate: "10/10/2000",
    orderTotal:500,
    status: "Active",
  },
  {
    id: 4,
    orderId: 12345,
    orderNumber:1234567890,
    franchiseId: 12345,
    OrderDate: "10/10/2000",
    orderTotal:500,
    status: "Inactive",
  },
  // Add more data as needed
];

const RoleManagementTable = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  ID
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  Order ID
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  Order Number
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  franchise Id
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  Order Date
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                    Order total
                  </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs  font-bold text-gray-600 tracking-wider">
                  Status
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
                      {item.orderId}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                      {item.orderNumber}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                      {item.franchiseId}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                      {item.OrderDate}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                      {item.orderTotal}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                      <span
                        className={`relative inline-flex items-center px-3 py-1 font-semibold leading-tight ${
                          item.status === "Active"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        <span
                          className={`absolute inset-y-0 left-0 w-2 h-2 rounded-full ${
                            item.status === "Active"
                              ? "bg-green-500"
                              : "bg-red-500"
                          }`}
                          style={{ marginLeft: "-0.15rem", marginTop:"0.55rem" }} // Adjust position of the small round indicator
                        ></span>
                        <span className="relative">{item.status}</span>
                      </span>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RoleManagementTable;
