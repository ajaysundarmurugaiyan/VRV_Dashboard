import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Main from "./component/Main";
import PrivateRoutes from "./dashboard/PrivateRoutes";
import DashboardLayout from "./dashboard/DashboardLayout";
import AddNewFranchise from "./franchise/AddNewFranchise";
import RoleManagementHome from "./rolemanagement/RoleManagementHome";
import AddNewRole from "./rolemanagement/AddNewRole";
import FranchiseManagementHome from "./franchise/FranchiseManagementHeader";

function App() {
  const [menus] = useState([
    {
      label: "Franchise Management",
      path: "/admin/franchise-management",
      rPath: "franchise-management",
      rElement: <FranchiseManagementHome />,
    },
    {
      label: "Role Management",
      path: "/admin/company-management",
      rPath: "company-management",
      rElement: <RoleManagementHome />,
    },
    {
      label: "Role Management - Add Company",
      path: "/admin/company-management/add-company",
      rPath: "company-management/add-company",
      rElement: <AddNewRole />,
    },
    {
      label: "Franchise Management - Add Franchise",
      path: "/admin/franchise-management/add-franchise",
      rPath: "franchise-management/add-franchise",
      rElement: <AddNewFranchise />,
    },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Main />
              <Footer />
            </>
          }
        />
        <Route element={<PrivateRoutes allowedRoles={["admin"]} />}>
          <Route
            path="/admin"
            element={<DashboardLayout sidebarItems={menus} />}
          >
            <Route index element={<FranchiseManagementHome />} />
            {menus.map((menu, i) => (
              <Route
                key={i} 
                path={menu.rPath}
                element={menu.rElement}
              />
            ))}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
