'use client'
import React from "react";
import { Grid, Text, Box, Flex, useBreakpointValue } from "@chakra-ui/react";
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

const AdminTaskChart = ({ chartType }) => {
  let chartdata = [];

  switch (chartType) {
    case "Week":
      chartdata = [
        { name: "Mon", Views: 190, Enroll: 120 },
        { name: "Tue", Views: 150, Enroll: 105 },
        { name: "Wed", Views: 215, Enroll: 125 },
        { name: "Thu", Views: 190, Enroll: 100 },
        { name: "Fri", Views: 115, Enroll: 92 },
        { name: "Sat", Views: 100, Enroll: 110 },
        { name: "Sun", Views: 125, Enroll: 105 },
      ];
      break;
    case "Month":
      chartdata = [
        { name: "Jan", Views: 120, Enroll: 90 },
        { name: "Feb", Views: 130, Enroll: 95 },
        { name: "Mar", Views: 205, Enroll: 85 },
        { name: "April", Views: 140, Enroll: 100 },
        { name: "May", Views: 135, Enroll: 92 },
        { name: "Jun", Views: 180, Enroll: 115 },
        { name: "July", Views: 145, Enroll: 15 },
        { name: "Aug", Views: 115, Enroll: 111 },
        { name: "Sep", Views: 125, Enroll: 105 },
        { name: "Oct", Views: 195, Enroll: 5 },
        { name: "Nov", Views: 25, Enroll: 65 },
        { name: "Dec", Views: 15, Enroll: 55 },
      ];
      break;
    case "Quarter":
      chartdata = [
        { name: "Q1", Views: 120, Enroll: 90 },
        { name: "Q2", Views: 130, Enroll: 95 },
        { name: "Q3", Views: 205, Enroll: 85 },
        { name: "Q4", Views: 140, Enroll: 100 },
        
      ];
      break;
    case "Year":
      chartdata = [
        { name: "2017", Views: 120, Enroll: 90 },
        { name: "2018", Views: 130, Enroll: 95 },
        { name: "2019", Views: 205, Enroll: 85 },
        { name: "2020", Views: 140, Enroll: 110 },
        { name: "2021", Views: 135, Enroll: 92 },
        { name: "2022", Views: 180, Enroll: 110 },
        { name: "2023", Views: 145, Enroll: 105 },
        { name: "2024", Views: 145, Enroll: 105 },
      ];
      break;
    default:
      chartdata = [];
  }

  const maxHeight = Math.max(
    ...chartdata.map((entry) => entry.Views),
    ...chartdata.map((entry) => entry.Enroll)
  );
  const chartWidth = useBreakpointValue({ base: "320px", md: "500px" });

  return (
    <Grid
      backgroundColor="#fff"
      borderRadius="8px"
      boxShadow="0 4px 12px rgba(0,0,0,0.1)"
      templateRows="auto 1fr"
      gap={3}
      padding={3}
      border="1px solid #e0e0e0"
      width={chartWidth}
    >
      <Flex justifyContent="space-between" alignItems="center" paddingX="10px">
        <Text fontSize="12px" fontWeight="bold">
          Tasks/Assinment
        </Text>
        <Flex fontSize="12px" fontWeight="bold" alignItems="center">
          <Text marginRight="10px">
            <span style={{ color: "#C3DDFD" }}>&#x25cf;</span>Views{" "}
          </Text>
          <Text>
            <span style={{ color: "#4483F8" }}>&#x25cf;</span>Enroll{" "}
          </Text>
        </Flex>
      </Flex>
      <Box border="1px solid #e0e0e0" borderRadius="8px" padding="7px">
        <ResponsiveContainer width="100%" height={maxHeight + 50}>
          <BarChart data={chartdata}>
            <CartesianGrid stroke="#ccc" strokeDasharray="0" />
            <XAxis dataKey="name" fontSize="12px" />
            <YAxis fontSize="12px" />
            <Tooltip contentStyle={{ fontSize: "12px" }} />
            <Legend verticalAlign="top" wrapperStyle={{ fontSize: "12px" }} />
            <Bar
              dataKey="Views"
              fill="#C3DDFD"
              barSize={10}
              name="Views"
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="Enroll"
              fill="#4483F8"
              barSize={10}
              name="Enroll"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Grid>
  );
};

export default AdminTaskChart;