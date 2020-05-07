import React from "react";
import { useForm } from "react-hook-form";

function ComEquipFrom() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">รายการครุภัณฑ์คอมพิวเตอร์</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input name="serialNumber" ref={register} />
            <select name="gender" ref={register}>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
            <input type="submit" />
          </form>
          <div className="card card-info">
            <div className="card-header">
              <h3 className="card-title">Color &amp; Time Picker</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>หมายเลขครุภัณฑ์:</label>
                    <input
                      type="text"
                      className="form-control my-colorpicker1"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>ชื่อเครื่อง:</label>
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

                <div className="bootstrap-timepicker">
                  <div className="form-group">
                    <label>Time picker:</label>
                    <div
                      className="input-group date"
                      id="timepicker"
                      data-target-input="nearest"
                    >
                      <input
                        type="text"
                        className="form-control datetimepicker-input"
                        data-target="#timepicker"
                      />
                      <div
                        className="input-group-append"
                        data-target="#timepicker"
                        data-toggle="datetimepicker"
                      >
                        <div className="input-group-text">
                          <i className="far fa-clock" />
                        </div>
                      </div>
                    </div>
                    {/* /.input group */}
                  </div>
                  {/* /.form group */}
                </div>
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

export default ComEquipFrom;
