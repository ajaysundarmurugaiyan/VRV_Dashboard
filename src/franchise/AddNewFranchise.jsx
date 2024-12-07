// AddNewFranchise.js
import React, { useState } from "react";
import { FcApproval } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import FranchiseManagementHeader from "./FranchiseManagementHeader"
import { BsChevronDoubleRight, BsChevronLeft } from "react-icons/bs";

// Import all form components
import FirstSetForm from "./FirstSetForm";

const steps = [
  { title: "First Set", component: FirstSetForm },
];

const AddNewFranchise = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleBack = () => {
    navigate("/admin/franchise-management");
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate("/admin/franchise-management");
      }, 2000);
    }
  };

  const handlePrevious = () => {
    navigate("/admin/franchise-management");
  };

  // Get the current form component based on the current step
  const CurrentForm = steps[currentStep].component;

  return (
    <div className="p-6 bg-white   min-h-[84.5vh]  rounded-md shadow-md m-3">
      {/* Add New Company Header */}
      <div className="sticky top-[50px] py-2 bg-white flex justify-between Franchise mt-7">
        <div className="font-opensans mt-3">
          <p className="text-customBlack text-md font-bold">
            Add New Franchise
          </p>
          <p className="text-xs text-customTextGrey2">
            {steps[currentStep].title}{" "}
          </p>
        </div>

        {/* Breadcrumbs Section */}
        <div className="flex items-center bg-customGrey5 px-3 py-2 rounded-md mt-4 space-x-2 text-customTextGrey2 font-opensans font-semibold text-xs">
          {/* Show only the active step on smaller screens */}
          <div className="flex lg:hidden items-center">
            <span className="text-customBlue1">{steps[currentStep].title}</span>
          </div>
        </div>
      </div>

      {/* Render the current form step */}
      <CurrentForm formData={formData} setFormData={setFormData} />

      {/* Button Section */}
      <div className="mt-6 flex flex-row">
        <div className="flex items-center">
          <button className="px-5 py-2 flex justify-center items-center"
          onClick={handlePrevious}
          >
            <BsChevronLeft className="mr-1" /> Back
          </button>
        </div>

        <div>
          <button
            onClick={handleNext}
            className="px-14 mx-5 py-2 text-xs font-semibold text-white bg-customBlue rounded-md"
          >
            {currentStep === steps.length - 1 ? "Add" : "Next"}
          </button>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md flex flex-col items-center justify-center shadow-md text-center">
            <FcApproval className="text-5xl text-center" />
            <p className="text-lg font-semibold">
              New User added <br />
              <span className="font-bold">successfully</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNewFranchise;