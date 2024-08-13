// import React, { useEffect, useRef } from "react";
// import Chart from "chart.js/auto";

// const CourseReportAIDSGraphSubjectFour = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const ctx = chartRef.current.getContext("2d");
//     let myChart = new Chart(ctx, {
//       type: "pie", // Change chart type to "bar"
//       data: {
//         labels: [
//           "Question-1",
//           "Question-2",
//           "Question-3",
//           "Question-4",
//           "Question-5",
//         ],
//         datasets: [
//           {
//             label: "Example Dataset",
//             data: [65, 59, 80, 81, 56],
//             backgroundColor: [
//               "rgba(255, 99, 132, 0.6)",
//               "rgba(54, 162, 235, 0.6)",
//               "rgba(255, 206, 86, 0.6)",
//               "rgba(75, 192, 192, 0.6)",
//               "rgba(153, 102, 255, 0.6)",
//             ],
//             borderColor: [
//               "rgba(255, 99, 132, 1)",
//               "rgba(54, 162, 235, 1)",
//               "rgba(255, 206, 86, 1)",
//               "rgba(75, 192, 192, 1)",
//               "rgba(153, 102, 255, 1)",
//             ],
//             borderWidth: 1,
//             barThickness: 135,
//           },
//         ],
//       },
//       options: {
//         maintainAspectRatio: false, // Disable aspect ratio to fit into container
//         responsive: true,
//         scales: {
//           y: {
//             beginAtZero: true,
//           },
//         },
//       },
//     });

//     // Destroy existing chart before creating a new one
//     return () => {
//       myChart.destroy();
//     };
//   }, []);

//   return (
//     <div style={{ height: "350px", width: "700px" }} className="m-5">
//       <canvas ref={chartRef}></canvas>
//     </div>
//   );
// };

// export default CourseReportAIDSGraphSubjectFour;



import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chart from "chart.js/auto";
import { fetchData } from "../../../../../../../Slice/chartSlice";

const CourseReportAIDSGraphSubjectFour = () => {
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

export default CourseReportAIDSGraphSubjectFour;