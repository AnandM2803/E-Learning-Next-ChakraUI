'use client'
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading ,Link } from "@chakra-ui/react";

const boxmaincontainer={
h:"85vh",
  display:"flex",
 justifyContent:"center",
  alignItems:"center",
   bg:"#FFF6F6"
}
const boxsubcontainer={
maxW:"xl" ,
p:'6px',
boxShadow:"10px",
rounded:"md",
bg:"#FFF9D0"
}
const gotohome={
  color:'black',
  fontSize:'20px',
position:'relative',
left:'10px',
top:'5px',
  p:'4px',
  _hover:{
    background: 'linear-gradient(90deg, #a53a1f, #2851ac)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',

  }
}

const GetCertificate = () => 
  (
    <Box sx={boxmaincontainer}>
      <Box  sx={boxsubcontainer}>
        <Heading as="h1" mb={6} textAlign="center">
          Get Your Certificate
        </Heading>
        <VStack spacing={4}>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="course">
            <FormLabel>Course</FormLabel>
            <Input type="text" />
          </FormControl>
          <Button bg="#A0DEFF" width="full" color='black'>
            Generate Certificate
          </Button>
          <Link href="/dashboard" sx={gotohome}>Go to Dashboard</Link>
        </VStack>
      </Box>
    </Box>
  );

export default GetCertificate;
