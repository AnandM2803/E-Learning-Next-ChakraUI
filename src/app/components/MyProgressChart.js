"use client";
import React from "react";
import { Grid, Text, Box, useMediaQuery } from "@chakra-ui/react";
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
  const [isMobile] = useMediaQuery("(max-width: 600px)");

  return (
    <Grid
      templateRows="auto 1fr"
      gap={3}
      padding={isMobile ? 2 : 3}
      border="1px solid #e0e0e0"
      borderRadius="8px"
      templateColumns={isMobile ? "1fr" : "auto"}
    >
      <Text fontSize={isMobile ? "10px" : "12px"} fontWeight="bold" textAlign="center">
        Weekly Learning Progress
      </Text>
      <Box border="1px solid #e0e0e0" borderRadius="8px" padding={isMobile ? "10px" : "14px"}>
        <ResponsiveContainer width="100%" height={isMobile ? 200 : 230}>
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
            <XAxis dataKey="name" fontSize={isMobile ? "10px" : "12px"} />
            <YAxis
              label={{ value: "Points", angle: -90, position: "insideLeft", fontSize: isMobile ? "10px" : "12px" }}
              fontSize={isMobile ? "10px" : "12px"}
            />
            <Tooltip contentStyle={{ fontSize: isMobile ? "10px" : "12px" }} />
            <Legend verticalAlign="top" wrapperStyle={{ fontSize: isMobile ? "10px" : "12px" }} />
            <Bar dataKey="Completed" fill="#4a90e2" barSize={isMobile ? 10 : 12} name="Completed Courses" />
            <Bar dataKey="InProgress" fill="#50e3c2" barSize={isMobile ? 10 : 12} name="Courses in Progress" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Grid>
  );
};

export default MyProgressChart;
