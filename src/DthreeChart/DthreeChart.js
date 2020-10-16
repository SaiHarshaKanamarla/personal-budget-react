import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import axios from "axios";

function DthreeChart(props) {
  const [data, setdata] = useState([]);
  const { outerRadius = 240, innerRadius = 150 } = props

  const margin = {
    top: 0,
    right: 15,
    bottom: 5,
    left: 10,
  };

  const width = 2 * outerRadius + margin.left + margin.right;
  const height = 2 * outerRadius + margin.top + margin.bottom;

  const colorScale = d3
    .scaleSequential()
    .interpolator(d3.interpolateTurbo)
    .domain([0, data.length]);

  useEffect(() => {
    if(data.length === 0){
      axios.get("http://localhost:5000/budget").then((res) => {
        var data = res.data.myBudget;
        console.log(data);
        setdata(data);
      });
    }
  
    if (data.length > 0) {
      drawChart();
    }
  });

  function drawChart() {
    console.log(data);
    // Remove the old svg
    d3.select("#pie-container").select("svg").remove();

    // Create new svg
    const svg = d3
      .select("#pie-container")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g");
    svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    const arcGenerator = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

    const pieGenerator = d3
      .pie()
      .padAngle(0)
      .value((d) => d.budget);

    const arc = svg.selectAll().data(pieGenerator(data)).enter();

    // Append arcs
    arc
      .append("path")
      .attr("d", arcGenerator)
      .style("fill", (_, i) => colorScale(i))
      .style("stroke", "#ffffff")
      .style("stroke-width", 0);

    // Append text labels
    arc
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .text((d) => d.data.title)
      .style("fill", (_, i) => colorScale(data.length))
      .style("fill", "white")
      .attr("transform", (d) => {
        const [x, y] = arcGenerator.centroid(d);
        return `translate(${x}, ${y})`;
      });
  }

  return <div id="pie-container" />;
}

export default DthreeChart;