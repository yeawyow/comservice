import React from "react";
import RepairList from "./RepairList";
import { useForm } from "react-hook-form";

function RepairRegist() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
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
                <div className="col-md-6">
                  <div className="form-group">
                    <label>หน่วยงาน:</label>
                    <input
                      type="text"
                      className="form-control my-colorpicker1"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>เรื่อง:</label>
                    <div className="input-group my-colorpicker2">
                      <input type="text" className="form-control" />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="fas fa-square" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <RepairList />
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

export default RepairRegist;
