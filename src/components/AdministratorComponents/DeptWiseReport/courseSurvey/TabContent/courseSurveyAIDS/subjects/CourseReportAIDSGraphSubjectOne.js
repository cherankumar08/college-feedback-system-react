import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chart from "chart.js/auto";
import { fetchData } from "../../../../../../../Slice/chartSlice";

const CourseReportAIDSGraphSubjectOne = () => {
  const dispatch = useDispatch();
  const chartRef = useRef(null);
  const chartData = useSelector((state) => state.data.data[3]); // Access the third dataset

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (chartData) {
      const ctx = chartRef.current.getContext("2d");
      let myChart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: chartData.labels,
          datasets: [
            {
              // label: `Question ${chartData.labels[0]}`,
              data: chartData.data,
              backgroundColor: chartData.backgroundColor,
              borderColor: chartData.borderColor,
              borderWidth: 1,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
        },
      });

      // Destroy existing chart before creating a new one
      return () => {
        myChart.destroy();
      };
    }
  }, [chartData]);

  return (
    <div style={{ height: "350px", width: "700px" }} className="m-5">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default CourseReportAIDSGraphSubjectOne;
