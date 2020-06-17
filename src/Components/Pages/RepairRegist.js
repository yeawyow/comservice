import React, { useState, useEffect } from "react";
import RepairList from "./RepairList";
import { useForm } from "react-hook-form";
import axios from "axios";
import Select from "react-select";
function RepairRegist() {
  const [hosdepArray, setListdep] = useState({ listdep: [] });

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const listItems = hosdepArray.listdep.map((items) => ({
    value: items.id,
    label: items.name,
  }));
  // <option key={items.id}>{items.name}</option>
  console.log(listItems);
  //console.log(hosdepArray.listdep);
  useEffect(() => {
    const hosdep = () =>
      axios.get(`http://192.168.2.25:8080/api/HospitalDepartments`);
    hosdep().then((response) => setListdep({ listdep: response.data }));
  }, [register]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                      <Select
                        name="hospital_department"
                        options={listItems}
                        value={listItems}
                        //isMulti
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
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>หน่วยงาน:</label>
                      <input
                        name="5555"
                        type="text"
                        className="form-control my-colorpicker1"
                        ref={register}
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
                </div>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
          <input type="submit" />
        </div>
      </form>

      <RepairList />
    </div>
  );
}

export default RepairRegist;
