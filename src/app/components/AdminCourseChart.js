import React from "react";
import { Grid, Text, Box, Flex } from "@chakra-ui/react";
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
  { name: "Mon", Views: 120, Enroll: 90 },
  { name: "Tue", Views: 130, Enroll: 95 },
  { name: "Wed", Views: 205, Enroll: 85 },
  { name: "Thu", Views: 140, Enroll: 100 },
  { name: "Fri", Views: 135, Enroll: 92 },
  { name: "Sat", Views: 180, Enroll: 110 },
  { name: "Sun", Views: 145, Enroll: 105 },
];

const AdminCourseChart = () => {
  const maxHeight = Math.max(
    ...data.map((entry) => entry.Views),
    ...data.map((entry) => entry.Enroll)
  );

  return (
    <Grid
      backgroundColor="#fff"
      borderRadius="8px"
      boxShadow="0 4px 12px rgba(0,0,0,0.1)"
      templateRows="auto 1fr"
      gap={2}
      padding={3}
      border="1px solid #e0e0e0"
      width="500px"
    >
      <Flex justifyContent="space-between" alignItems="center" paddingX="10px">
        <Text fontSize="12px" fontWeight="bold">
          Courses
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
      <Box padding="2px">
        <ResponsiveContainer width="100%" height={maxHeight + 50}>
          <BarChart data={data}>
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

export default AdminCourseChart;
