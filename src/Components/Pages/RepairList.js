import React, { useState, useEffect } from "react";
import axios from "axios";

export default function RepairList() {
  const [dataArray, setDataArrary] = useState({ Listdata: [] });
  useEffect(() => {
    const fetData = async () => {
      await axios
        .get(`http://202.80.228.46:3000/api/RegistRepairs`)
        .then((respon) => setDataArrary({ Listdata: respon.data }));
      // alert(JSON.stringify(data));
      // setDataArrary(respon.data);
    };

    fetData();
  }, []);
  //console.log(dataArray.Listdata);
  return <div>รายการซ่อม</div>;
}
