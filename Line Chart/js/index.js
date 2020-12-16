document.addEventListener("DOMContentLoaded", () => {
  Highcharts.chart("container", {
    xAxis: {
      categories: ["Apples", "Mango", "Oranges"],
    },
    series: [
      {
        name: "Akshay",
        data: [1, 2, 4],
      },
      {
        name: "Rinku",
        data: [2, 4, 8],
      },
    ],
  });
});
