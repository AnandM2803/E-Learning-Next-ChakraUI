'use client'
import { Box, Text, Link, Button, Image } from '@chakra-ui/react';
import { FaCircle } from 'react-icons/fa';

function DashPopularLessons() {
    return (
        <Box marginLeft={'-11px'}  width={'720px'} height={'auto'} backgroundColor={'#EBF7FF'} borderRadius={'10px'}>
            <Box display={'flex'} justifyContent={'space-between'} paddingLeft={'8px'} paddingTop={'8px'} paddingRight={'8px'}>
                <Text color='black' fontWeight='bold'>Popular Lessons</Text>
                <Link href={'/dashboard/courses'}>
                <Button bg='#ACE1AF' _hover={{ bg: 'white' }} fontSize='12px'>View All</Button>
                </Link>
            </Box>
            {/* 1st Row */}
            <Box display={'flex'}>
                {/* 1st Card */}
                <Box>
                    <Box backgroundColor={'white'} height={'140px'} width={'300px'} marginLeft={'15px'} display={'flex'} justifyContent={'space-between'}>
                        <Box paddingTop={'8px'} paddingLeft={'20px'}>
                            <Image src='/popularlesspython.png' borderRadius='50%' width={'60px'} height={'60px'} />
                        </Box>
                        <Box paddingTop={'10px'} paddingRight={'15px'}>
                            <Text fontSize={'11px'} marginLeft={'3px'}>Python pro Exam</Text>
                            <Box>
                                <Box display={'flex'} justifyContent={'space-between'} paddingTop={'10px'} paddingRight={'10px'}>
                                    <Text fontSize={'9px'} style={{ marginTop:'3px' }} color={'blue'}> <FaCircle /> </Text>
                                    <Text fontSize={'11px'} marginLeft='2px'>12 topics</Text>
                                    <Box display={'flex'}>
                                        <Text fontSize={'9px'} style={{ marginTop:'4px' }} marginLeft='10px' color={'orange'}> <FaCircle /> </Text>
                                        <Text fontSize={'11px'} marginLeft='2px'> +200 Students</Text>
                                    </Box>
                                </Box>
                                <Box display={'flex'} justifyContent={'space-between'} paddingTop={'10px'} paddingRight={'10px'}>
                                    <Text fontSize={'9px'} style={{ marginTop:'3px' }} color={'blue'}> <FaCircle /> </Text>
                                    <Text fontSize={'11px'} marginLeft='4px'>03/29/2023</Text>
                                    <Box display={'flex'}>
                                        <Text fontSize={'9px'} style={{ marginTop:'4px' }} marginLeft='10px' color={'orange'}> <FaCircle /> </Text>
                                        <Text fontSize={'11px'} marginLeft='2px'> +200 Students</Text>
                                    </Box>
                                </Box>
                            </Box>
                            <br />
                            <Button borderRadius={'20px'} backgroundColor={'#A7ECEE'} width={'100px'} height={'28px'} fontSize='12px'>Enroll Now</Button>
                        </Box>
                    </Box>
                </Box>
                {/* 2nd Card */}
                <Box>
                    <Box backgroundColor={'white'} height={'140px'} width={'300px'} marginLeft={'15px'} display={'flex'} justifyContent={'space-between'}>
                        <Box paddingTop={'10px'} paddingLeft={'20px'}>
                            <Image src='/popularlessjava.png' borderRadius='50%' width={'60px'} height={'60px'} />
                        </Box>
                        <Box paddingTop={'10px'} paddingRight={'15px'}>
                            <Text fontSize={'11px'} marginLeft={'3px'}>Java pro Exam</Text>
                            <Box>
                                <Box display={'flex'} justifyContent={'space-between'} paddingTop={'10px'} paddingRight={'10px'}>
                                    <Text fontSize={'9px'} style={{ marginTop:'3px' }} color={'blue'}> <FaCircle /> </Text>
                                    <Text fontSize={'11px'} marginLeft='2px'>10 topics</Text>
                                    <Box display={'flex'}>
                                        <Text fontSize={'9px'} style={{ marginTop:'4px' }} marginLeft='10px' color={'orange'}> <FaCircle /> </ Text>
                                        <Text fontSize={'11px'} marginLeft='2px'> +150 Students</Text>
                                    </Box>
                                </Box>
                                <Box display={'flex'} justifyContent={'space-between'} paddingTop={'10px'} paddingRight={'10px'}>
                                    <Text fontSize={'9px'} style={{ marginTop:'3px' }} color={'blue'}> <FaCircle /> </Text>
                                    <Text fontSize={'11px'} marginLeft='4px'>03/29/2023</Text>
                                    <Box display={'flex'}>
                                        <Text fontSize={'9px'} style={{ marginTop:'4px' }} marginLeft='10px' color={'orange'}> <FaCircle /> </Text>
                                        <Text fontSize={'11px'} marginLeft='2px'> +200 Students</Text>
                                    </Box>
                                </Box>
                            </Box>
                            <br />
                            <Button borderRadius={'20px'} backgroundColor={'#A7ECEE'} width={'100px'} fontSize='12px' height={'28px'}>Enroll Now</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            {/* 2nd Row */}
            <Box display={'flex'}>
                {/* 1st Card */}
                <Box>
                    <Box backgroundColor={'white'} height={'140px'} width={'300px'} marginLeft={'15px'} marginTop={'10px'} display={'flex'} justifyContent={'space-between'}>
                        <Box paddingTop={'10px'} paddingLeft={'20px'}>
                            <Image src='/popularlessreact.png' borderRadius='50%' width={'60px'} height={'60px'} />
                        </Box>
                        <Box paddingTop={'10px'} paddingRight={'15px'}>
                            <Text fontSize={'11px'} marginLeft={'3px'}>React pro Exam</Text>
                            <Box>
                                <Box display={'flex'} justifyContent={'space-between'} paddingTop={'10px'} paddingRight={'10px'}>
                                    <Text fontSize={'9px'} style={{ marginTop:'3px' }} color={'blue'}> <FaCircle /> </Text>
                                    <Text fontSize={'11px'} marginLeft='2px'>15 topics</Text>
                                    <Box display={'flex'}>
                                        <Text fontSize={'9px'} style={{ marginTop:'4px' }} marginLeft='10px' color={'orange'}> <FaCircle /> </Text>
                                        <Text fontSize={'11px'} marginLeft='2px'> +180 Students</Text>
                                    </Box>
                                </Box>
                                <Box display={'flex'} justifyContent={'space-between'} paddingTop={'10px'} paddingRight={'10px'}>
                                    <Text fontSize={'9px'} style={{ marginTop:'3px' }} color={'blue'}> <FaCircle /> </Text>
                                    <Text fontSize={'11px'} marginLeft='4px'>03/29/2023</Text>
                                    <Box display={'flex'}>
                                        <Text fontSize={'9px'} style={{ marginTop:'4px' }} marginLeft='10px' color={'orange'}> <FaCircle /> </Text>
                                        <Text fontSize={'11px'} marginLeft='2px'> +200 Students</Text>
                                    </Box>
                                </Box>
                            </Box>
                            <br />
                            <Button borderRadius={'20px'} backgroundColor={'#A7ECEE'} width={'100px'} height={'28px'} fontSize='12px'>Enroll Now</Button>
                        </Box>
                    </Box>
                </Box>
                {/* 2nd Card */}
                <Box>
                    <Box backgroundColor={'white'} height={'140px'} width={'300px'} marginLeft={'15px'} marginTop={'10px'} display={'flex'} justifyContent={'space-between'}>
                        <Box paddingTop={'10px'} paddingLeft={'20px'}>
                            <Image src='/popularlessnode.png' borderRadius='50%' width={'60px'} height={'60px'} />
                        </Box>
                        <Box paddingTop={'10px'} paddingRight={'15px'}>
                            <Text fontSize={'11px'} marginLeft={'3px'}>Node pro Exam</Text>
                            <Box>
                                <Box display={'flex'} justifyContent={'space-between'} paddingTop={'10px'} paddingRight={'10px'}>
                                    <Text fontSize={'9px'} style={{ marginTop:'3px' }} color={'blue'}> <FaCircle /> </Text>
                                    <Text fontSize={'11px'} marginLeft='2px'>20 topics</Text>
                                    <Box display={'flex'}>
                                        <Text fontSize={'9px'} style={{ marginTop:'4px' }} marginLeft='10px' color={'orange'}> <FaCircle /> </Text>
                                        <Text fontSize={'11px'} marginLeft='2px'> +250 Students</Text>
                                    </Box>
                                </Box>
                                <Box display={'flex'} justifyContent={'space-between'} paddingTop={'10px'} paddingRight={'10px'}>
                                    <Text fontSize={'9px'} style={{ marginTop:'3px' }} color={'blue'}> <FaCircle /> </Text>
                                    <Text fontSize={'11px'} marginLeft='4px'>03/29/2023</Text>
                                    <Box display={'flex'}>
                                        <Text fontSize={'9px'} style={{ marginTop:'4px' }} marginLeft='10px' color={'orange'}> <FaCircle /> </Text>
                                        <Text fontSize={'11px'} marginLeft='2px'> +200 Students</Text>
                                    </Box>
                                </Box>
                            </Box>
                            <br />
                            <Button borderRadius={'20px'} backgroundColor={'#A7ECEE'} width={'100px'} height={'28px'} fontSize='12px'>Enroll Now</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default DashPopularLessons;
