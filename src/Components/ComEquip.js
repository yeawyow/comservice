import React, { Component } from "react";
import Axios from "axios";
import { MDBDataTable } from "mdbreact";

export default class ComEquip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],

      isLoading: true,

      tableRows: []
    };
  }
  async componentDidMount() {
    const result = await Axios.get("http://202.80.228.46:3000/api/CompEquips")
      .then(result => result.data)

      .then(data => {
        // console.log(data);

        // if (err) throw err;

        this.setState({ posts: data });
      })
      .then(async () => {
        this.setState({ tableRows: this.assemblePosts() });

        console.log(this.state.tableRows);
      });
  }
  assemblePosts = () => {
    let posts = this.state.posts.map(post => {
      return {
        number: post.id,
        comName: post.comName,
        attribute: post.attribute,
        serialNumber: post.serialNumber
      };
    });

    return posts;
  };

  render() {
    const data = {
      columns: [
        {
          label: "#",

          field: "number"
        },
        { label: "ชื่อเครื่อง", field: "comName" },
        {
          label: "รายละเอียด",

          field: "attribute"
        },

        {
          label: "หมายเลขครุภัณฑ์",

          field: "serialNumber"
        },

        {
          label: "Body",

          field: "body"
        }
      ],

      rows: this.state.tableRows
    };

    return (
      <div>
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">รายการครุภัณฑ์คอมพิวเตอร์</h1>
                </div>

                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Dashboard v3</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <section className="content">
            <div className="container-fluid">
              <div className="card">
                <div className="card-body table-responsive p-0">
                  <MDBDataTable striped bordered hover data={data} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
