import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "datatables.net-dt/js/dataTables.dataTables.min.js";
import dataSet from "./dataSet";

const Table = () => {
  const tableRef = useRef();

  useEffect(() => {
    $(tableRef.current).DataTable({
      data: dataSet,
      columns: [
        { title: "Name" },
        { title: "Occupation" },
        { title: "City" },
        { title: "ZIP" },
        { title: "Birthday" },
        { title: "Salary" },
      ],
    });
  }, []);
  return <table ref={tableRef}></table>;
};

export default Table;
