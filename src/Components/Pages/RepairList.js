import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

export default function RepairList() {
  const [dataArray, setDataArrary] = useState({ Listdata: [] });
  useEffect(() => {
    const fetData = async () => {
      await axios
        .get(
          `http://202.80.228.46:8080/api/RegistRepairs?filter={"include":[{"relation":"topic_repair"},{"relation":"hospital_department"},{"relation":"status_repair"}]}`
        )
        .then((respon) => setDataArrary({ Listdata: respon.data }));
      // alert(JSON.stringify(data));
      // setDataArrary(respon.data);
    };

    fetData();
  }, []);
  //const data = [{ id: 1, title: "Conan the Barbarian", year: "1982" }];
  const columns = [
    {
      name: "หมายเลขงาน",
      selector: "id",
      sortable: true,
    },
    {
      name: "หัวข้อ",
      selector: "topic_repair.topicRepair",
      sortable: true,
      right: true,
    },
    {
      name: "วันที่แจ้ง",
      selector: "dateRegist",
      sortable: true,
      right: true,
    },
    {
      name: "ชื่อผู้แจ้ง",
      selector: "fullname",
      sortable: true,
    },
    {
      name: "รายละเอียดงาน",
      selector: "comment_detail",
      sortable: true,
    },
    {
      name: "หน่วยงาน",
      selector: "hospital_department.name",
      sortable: true,
      right: true,
    },
    {
      name: "สถานะ",
      selector: "status_repair.statusName",
      sortable: true,
      right: true,
    },
  ];
  console.log(dataArray.Listdata);
  return (
    <div>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid"></div>
        </div>
        <div className="container-fluid">
          <div className="card card-info">
            <div className="card-header">
              <h3 className="card-title">ทะเบียนงาน</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <DataTable
                  title="Arnold Movies"
                  columns={columns}
                  data={dataArray.Listdata}
                />
              </div>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
      </div>
    </div>
  );
}
