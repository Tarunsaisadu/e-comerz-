import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./userlist.css";
import Sidebar from "../Sidebar";
import faker from "faker";
import { userRows } from "../../../dummydata";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function UserList() {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "status",
      headerName: "status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "transaction",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <span>€</span> {params.row.transaction}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: "150",
      renderCell: (params) => {
        return (
          <>
            <Link to={"/users/" + params.row.id}>
              <button className="userlistEdit">
                <lord-icon
                  src="https://cdn.lordicon.com/puvaffet.json"
                  trigger="loop-on-hover"
                  colors="primary:#121331,secondary:#08a88a"
                  style={{ width: "32px", height: "32px" }}
                ></lord-icon>{" "}
                Edit{" "}
              </button>
            </Link>
            <lord-icon
              className="userlistDel"
              src="https://cdn.lordicon.com/gsqxdxog.json"
              trigger="loop-on-hover"
              colors="primary:#c71f16,secondary:#c71f16"
              style={{ width: "32px", height: "32px" }}
              onClick={() => handleDelete(params.row.id)}
            ></lord-icon>
          </>
        );
      },
    },
  ];

  return (
    <div>
      <div className="sidebarcont">
        <Sidebar />
      </div>
      <div className="userlist">
        <DataGrid
          disableSelectionOnClick
          rows={data}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
