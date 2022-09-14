

// import { Button, Checkbox, FormControl, FormLabel, Input, Stack, RadioGroup, Radio } from "@chakra-ui/react";
// import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/layout';

// export default function Login() {
//     return (
//         <Box
//             w={["25rem"]}
//             p={[8, 10]}
//             mt={['20', '10vh']}
//             mx='auto'
//             h="31rem"
//             border={['none', '1px']}
//             borderColor={['', 'gray.300']}
//             borderRadius={10}
//         >
//             <VStack spacing={4} align='flex-start' w='full'>



//                 <VStack spacing={1} align={['flex-start', 'center']} w='full'>
//                     <Heading>Login</Heading>
//                     <Text>Enter your e-mail and password to login</Text>
//                 </VStack>

//                 <FormControl>
//                     <FormLabel>E-mail Address</FormLabel>
//                     <Input rounded='none' variant='filled' placeholder="enter your email" />
//                 </FormControl>

//                 <FormControl>
//                     <FormLabel>Password</FormLabel>
//                     <Input rounded='none' variant='filled' type='password' placeholder="enter your password" />
//                 </FormControl>

//                 <HStack w='full' justify='space-between'>
//                     <Checkbox>Remember me.</Checkbox>

//                     <Button variant='link' colorScheme='blue'>
//                         Forgot Password?
//                     </Button>
//                 </HStack>
//                 <RadioGroup defaultValue='1'>
//                     <Stack>

//                         <Radio value='3'>No education</Radio>
//                         <Radio value='2'>10th</Radio>
//                         <Radio value='3'>12th</Radio>
//                     </Stack>
//                 </RadioGroup>

//                 <Button rounded='none' colorScheme='blue' w={['full', 'auto']} alignSelf='end'>
//                     Login
//                 </Button>

//             </VStack>
//         </Box>
//     );
// }

import React from "react";
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsPinterest } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { BsVimeo } from 'react-icons/bs';

import {
    Box, Image, Badge, Text, Stack,
    useColorMode, Flex,
}
    from "@chakra-ui/react";

function App() {

    // Hook to toggle dark mode
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div className="app">
            <Box w="300px" rounded="20px"display='flex'>
                <Image src=
                    "https://assets.ajio.com/medias/sys_master/root/20210202/QzLN/60188a1ff997dd5c40e3a64c/-473Wx593H-460825304-clearblack-MODEL.jpg"
                    alt="Card Image" boxSize="300px">
                </Image>
                <Box p={5}>
                    <Stack align="center">
                        <Badge variant="solid" colorScheme="blue"
                            rounded="full" px={1}>
                            LIFESTYLE
                        </Badge>
                    </Stack>
                    <Stack align="center">
                        <Text as="h2" fontWeight="normal" my={2} >
                            10 Habits That Will Change Your Live for the Better

                        </Text>
                        <Text fontWeight="light">
                            Structured gripped tape invisible moulded cups for
                            suppor firm hold strong powermesh front liner sport
                            detail. Warmth comfort hangs loosely from the body
                            large pocket at the front full button…
                        </Text>

                        <Flex display='flex' justify='space-evenly' align-items='center' width='89px'> <BsFacebook />
                            <BsTwitter />
                            <BsPinterest />
                        </Flex>
                    </Stack>
                </Box>




                <Box w="300px" rounded="20px">
                    <Image src=
                        "https://i.pinimg.com/564x/20/db/77/20db7774ae8d8e8ffcbab7819329333d.jpg"
                        alt="Card Image" boxSize="300px">
                    </Image>
                    <Text fontWeight="light">3 Compelling Reasons to Schedule More Nothing</Text>

                    <Text>Follow as</Text>
                    <Flex display='flex' justify='space-evenly' align-items='center' width='200px'> <BsFacebook />
                        <BsTwitter />
                        <BsPinterest />
                        <AiFillYoutube />
                        <BsVimeo />
                    </Flex>



                    <Box w="300px" rounded="20px" h="250px">
                        <Image src=
                            "https://momlovesbest.com/wp-content/uploads/2019/10/Best-Girls-Bikes.jpg"
                            alt="Card Image" boxSize="300px">
                        </Image>
                        <Text fontWeight="light">3 Compelling Reasons to Schedule More Nothing</Text>

                        <Text>Follow as</Text>
                        <Flex display='flex' justify='space-evenly' align-items='center' width='200px'> <BsFacebook />
                            <BsTwitter />
                            <BsPinterest />
                        </Flex></Box>


                    <Box w="300px" rounded="20px" height="220px">
                        <Image src=
                            "https://www.ttrweekly.com/site/wp-content/uploads/2022/02/Radhanagar-Beach.jpg"
                            alt="Card Image" boxSize="300px">
                        </Image>
                    </Box>
                </Box>
            </Box>
        </div >
    );
}
export default App;

