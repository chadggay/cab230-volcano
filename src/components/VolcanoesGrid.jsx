import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export default function VolcanoesGrid({ volcanoes }) {
  const navigate = useNavigate();

  const [colDefs] = useState([
    { field: "name", headerName: "Name", sortable: true, filter: true },
    { field: "region", headerName: "Region", sortable: true },
    { field: "subregion", headerName: "Subregion", sortable: true },
  ]);

  return (
    <div className="mt-10 ag-theme-alpine w-full h-96">
      <AgGridReact
        columnDefs={colDefs}
        rowData={volcanoes}
        pagination={true}
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 20, 30, 40, 50, 100]}
        gridOptions={{
          autoSizeStrategy: {
            type: "fitGridWidth",
            defaultMinWidth: 100,
            columnLimits: [
              {
                colId: "country",
                minWidth: 900,
              },
            ],
          },
        }}
        onRowClicked={(row) => navigate(`/volcano/${row.data.id}`)}
      />
    </div>
  );
}
