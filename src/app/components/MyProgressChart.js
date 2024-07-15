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
  const [isTablet] = useMediaQuery("(max-width: 960px)");

  const containerWidth = isMobile ? "70%" : (isTablet ? "80%" : "100%");

  return (
    <Grid
      templateRows="auto 1fr"
      gap={2}
      padding={isMobile ? 1 : 2}
      backgroundColor="#fff"
      borderRadius="8px"
      boxShadow="0 4px 12px rgba(0,0,0,0.1)"
      templateColumns={isMobile ? "1fr" : "auto"}
    >
      <Text
        fontSize={isMobile ? "10px" : "12px"}
        fontWeight="bold"
        textAlign="center"
        padding={isTablet ? "8px" : "0"}
      >
        Weekly Learning Progress
      </Text>
      <Box
        borderRadius="8px"
        padding={isMobile ? "8px" : "14px"}
        paddingBottom={isTablet ? "10px" : "14px"}
      >
        <ResponsiveContainer width={containerWidth} height={isMobile ? 200 : 230}>
          <BarChart
            data={data}
            margin={{
              top: 18,
              right: 28,
              left: 18,
              bottom: 18,
            }}
          >
            <CartesianGrid strokeDasharray="0" />
            <XAxis
              dataKey="name"
              fontSize={isMobile ? "10px" : "12px"}
              interval={isTablet ? 0 : "auto"}
            />
            <YAxis
              label={{
                value: "Points",
                angle: -90,
                position: "insideLeft",
                fontSize: isMobile ? "10px" : "12px",
              }}
              fontSize={isMobile ? "10px" : "12px"}
            />
            <Tooltip contentStyle={{ fontSize: isMobile ? "10px" : "12px" }} />
            <Legend
              verticalAlign="top"
              wrapperStyle={{ fontSize: isMobile ? "10px" : "12px" }}
            />
            <Bar
              dataKey="Completed"
              fill="#C3DDFD"
              barSize={isMobile ? 8 : 10}
              name="Completed Courses"
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="InProgress"
              fill="#4483F8"
              barSize={isMobile ? 8 : 10}
              name="Courses in Progress"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Grid>
  );
};

export default MyProgressChart;
