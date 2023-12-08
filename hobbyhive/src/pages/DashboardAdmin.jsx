import React from "react";
import { useEffect } from "react";
import * as echarts from "echarts";

const DashboardAdmin = () => {
    useEffect(() => {
        // Initialize ECharts instance
        const chart = echarts.init(document.getElementById("myChart"));

        // Specify the chart configuration item and data
        var xAxisData = [];
        var data1 = [];
        var data2 = [];
        for (var i = 0; i < 100; i++) {
            xAxisData.push("A" + i);
            data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
            data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
        }
        const option = {
            legend: {
                data: ["bar", "bar2"],
            },
            xAxis: {
                data: xAxisData,
                splitLine: {
                    show: false,
                },
            },
            yAxis: {},
            series: [
                {
                    name: "bar",
                    type: "bar",
                    data: data1,
                    emphasis: {
                        focus: "series",
                    },
                    animationDelay: function (idx) {
                        return idx * 10;
                    },
                },
                {
                    name: "bar2",
                    type: "bar",
                    data: data2,
                    emphasis: {
                        focus: "series",
                    },
                    animationDelay: function (idx) {
                        return idx * 10 + 100;
                    },
                },
            ],
            animationEasing: "elasticOut",
            animationDelayUpdate: function (idx) {
                return idx * 5;
            },
        };

        // Set the chart option
        chart.setOption(option);

        // Cleanup when the component is unmounted
        return () => {
            chart.dispose();
        };
    }, []);
    return (
        <>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-8 py-2 leading-9 tracking-wider">
                <span className="text-primary">Welcome&nbsp;</span>
                <span className="text-gray-900">to </span>
                <span className="text-secondary">Dashboard</span>
            </h1>
            <div className="w-full">
                <div className="grid grid-rows-2">
                    <div className="grid grid-cols-2">
                        <div
                            id="myChart"
                            style={{ width: "600px", height: "400px" }}
                        ></div>
                        {/* <div
                            id="myChart"
                            style={{ width: "600px", height: "400px" }}
                        ></div> */}
                    </div>
                    <div className="">
                        {/* <div
                            id="myChart"
                            style={{ width: "600px", height: "400px" }}
                        ></div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardAdmin;
