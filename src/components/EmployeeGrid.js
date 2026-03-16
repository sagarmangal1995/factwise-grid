import React, { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";

import "ag-grid-community/styles/ag-theme-alpine.css";

import employeesData from "../data/employees.json";

ModuleRegistry.registerModules([AllCommunityModule]);

const EmployeeGrid = () => {

  const rowData = employeesData.employees;

  const columnDefs = useMemo(() => [

    { headerName: "ID", field: "id", width: 80 },

    {
      headerName: "Name",
      valueGetter: (params) =>
        `${params.data.firstName} ${params.data.lastName}`,
      sortable: true,
      filter: true
    },

    { headerName: "Email", field: "email", flex: 1 },

    { headerName: "Department", field: "department", filter: true },

    { headerName: "Position", field: "position" },

    {
      headerName: "Salary",
      field: "salary",
      valueFormatter: (p) => `$${p.value.toLocaleString()}`
    },

    { headerName: "Age", field: "age" },

    { headerName: "Location", field: "location" },

    {
      headerName: "Hire Date",
      field: "hireDate",
      valueFormatter: (p) =>
        new Date(p.value).toLocaleDateString()
    },

    {
      headerName: "Rating",
      field: "performanceRating",
      cellStyle: (params) => {
        if (params.value >= 4.5) return { color: "green", fontWeight: "bold" };
        if (params.value >= 4) return { color: "orange" };
        return { color: "red" };
      }
    },

    { headerName: "Projects", field: "projectsCompleted" },

    {
      headerName: "Skills",
      field: "skills",
      valueGetter: (params) => params.data.skills.join(", ")
    },

    {
      headerName: "Manager",
      field: "manager",
      valueFormatter: (p) => p.value || "—"
    },

    {
      headerName: "Status",
      field: "isActive",
      cellRenderer: (params) =>
        params.value ? (
          <span style={{ color: "green", fontWeight: "bold" }}>Active</span>
        ) : (
          <span style={{ color: "red", fontWeight: "bold" }}>Inactive</span>
        )
    }

  ], []);

  const defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true
  };

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: 600, width: "100%" }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        pagination={true}
        paginationPageSize={10}
      />
    </div>
  );
};

export default EmployeeGrid;