"use client";
import React from "react";
import { Grid, Text, Box } from "@chakra-ui/react";
import { PiChartLineUp } from "react-icons/pi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Week 1",
    InProgress: 120,
    Completed: 90,
  },
  {
    name: "Week 2",
    InProgress: 130,
    Completed: 100,
  },
  {
    name: "Week 3",
    InProgress: 180,
    Completed: 120,
  },
];

const MyProgressChart = () => {
  return (
    <Grid templateRows="auto 1fr" gap={3} padding={3} border="1px solid #e0e0e0" borderRadius="8px">
      <Text fontSize="12px" fontWeight="bold" textAlign="center">
        Weekly Learning Progress
      </Text>
      <Box border="1px solid #e0e0e0" borderRadius="8px" padding="14px">
        <ResponsiveContainer width="90%" height={230}>
          <BarChart
            data={data}
            margin={{
              top: 18,
              right: 28,
              left: 18,
              bottom: 18,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" fontSize="12px" />
            <YAxis
              label={{ value: "Points", angle: -90, position: "insideLeft", fontSize: "12px" }}
              fontSize="12px"
            />
            <Tooltip contentStyle={{ fontSize: "12px" }} />
            <Legend verticalAlign="top" wrapperStyle={{ fontSize: "12px" }} />
            <Bar dataKey="Completed" fill="#4a90e2" barSize={12} name="Completed Courses" fontSize="12px" />
            <Bar dataKey="InProgress" fill="#50e3c2" barSize={12} name="Courses in Progress" fontSize="12px" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Grid>
  );
};

export default MyProgressChart;
