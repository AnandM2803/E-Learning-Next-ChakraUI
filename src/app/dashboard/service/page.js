'use client'
import { Heading, Box, Text,Link } from "@chakra-ui/react";

const mainboxcontainer={
  bg:"#FEFFD2" ,
  p:'4px',
   shadow:"md" , //shadow for border with medium border
  rounded:"md" , //boderraduis with medium
  mb:'4px'
}
const boxcontainermain={
p:'4',
 bg:"#FEFFD2",
  minHeight:"85vh" ,
  rounded:"md"
}

const gotohome={
  color:'black',
  fontSize:'20px',
position:'relative',
left:'500px',
top:'40px',
  p:'4px',
  _hover:{
    background: 'linear-gradient(90deg, #a53a1f, #2851ac)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',

  }
}

const ServiceCard = ({ serviceName }) => (
  <Box sx={mainboxcontainer}>
    <Heading as="h4" size="md" mb={2}>
      {serviceName}
    </Heading>
    <Text>
      Detailed description about {serviceName} goes here. You can add more details to make it look informative.
    </Text>
  </Box>
);

const Services = () => (
  <Box sx={boxcontainermain}>
    <Heading  fontSize='33px' mb={6} textAlign="center">
      Services
    </Heading>
    <Heading  fontSize='28px' fontWeight="normal" mt={6} mb={4} textAlign="center">
      We offer a wide range of services to help you with your business needs:
    </Heading>
    <Box
      display={{ md: "flex" }}
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="flex-start"
      rowGap='20px'
      columnGap='5px'
    >
      <Box w={{ base: "full", md: "48%" }} mb={{ base: 4, md: 0 }}>
        <ServiceCard serviceName="Web Design" />
      </Box>
      <Box w={{ base: "full", md: "48%" }} mb={{ base: 4, md: 0 }}>
        <ServiceCard serviceName="Digital Marketing" />
      </Box>
      <Box w={{ base: "full", md: "48%" }} mb={{ base: 4, md: 0 }}>
        <ServiceCard serviceName="SEO Services" />
      </Box>
      <Box w={{ base: "full", md: "48%" }} mb={{ base: 4, md: 0 }}>
        <ServiceCard serviceName="Content Creation" />
      </Box>
    </Box>
    <Link href="/dashboard" sx={gotohome}>Go to Dashboard</Link>
  </Box>
);

export default Services;
