import { useState } from 'react';
import axios from 'axios';
import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    IconProps,
    Icon,
  } from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

  const { log } = console;
  
  export default function Form() {
    const[name, setName] = useState();
    const[email, setEmail] = useState();
    const[phone, setPhone] = useState();
    const[message, setMessage] = useState();

    const handleSubmit = async (event) => {
      event.preventDefault();

      const teamPayload = {
        name,
        email,
        phone,
        message
      }

        log("Payload: ", teamPayload)

        //Send over to server
        try {
          const { data } = await axios({
            url:"/api/formSubmit",
            method: "POST",
            data: teamPayload
          });

          log("Response Back :", data);
        } catch (error) {
          log("Error :", error)
        }
    }

    return (
      <Box position={'relative'}>
        <Container
          as={SimpleGrid}
          maxW={'7xl'}
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 10, lg: 16 }}>
          <Stack spacing={{ base: 10, lg: 20 }}>
            <div className='lg:w-full w-9/12 lg:h-[60vh] h-screen m-auto'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13537.850176100364!2d115.8166837!3d-31.975474400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32a4f1dca835c1%3A0x1cf1d4e921213b28!2sUWA%20Motorsport!5e0!3m2!1sen!2sau!4v1686298463878!5m2!1sen!2sau" style={{border:"0", width:"100%", height:"100%", "borderRadius": "12px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </Stack>
          <div className='lg:w-full w-9/12 m-auto'>
            <Stack
              bg={'gray.50'}
              rounded={'xl'}
              p={{ base: 4, sm: 6, lg: 8 }}
              spacing={{ base: 8 }}
              maxW={{ lg: 'lg' }}>
              <Stack spacing={4}>
                <Heading
                  color={'gray.800'}
                  lineHeight={1.1}
                  fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
                  Want to get in touch?
                </Heading>
                {/* <Text color={'black'} fontSize={{ base: 'sm', sm: 'lg' }}>
                  We’re looking for amazing engineers just like you! Become a part
                  of our rockstar engineering team and skyrocket your career!
                </Text> */}
              </Stack>
              <Box as={'form'} mt={10}>
                <Stack spacing={4}>
                  <Input
                    placeholder="Full Name"
                    value={name}
                    onChange={({ target }) => setName(target?.value)} 
                    bg={'gray.100'}
                    border={0}
                    color={'gray.500'}
                    _placeholder={{
                      color: 'gray.500',
                    }}
                  />
                  <Input
                    placeholder="Email"
                    value={email}
                    onChange={({ target }) => setEmail(target?.value)} 
                    bg={'gray.100'}
                    border={0}
                    color={'gray.500'}
                    _placeholder={{
                      color: 'gray.500',
                    }}
                  />
                  <Input
                    placeholder="Phone Number"
                    value={phone}
                    onChange={({ target }) => setPhone(target?.value)} 
                    bg={'gray.100'}
                    border={0}
                    color={'gray.500'}
                    _placeholder={{
                      color: 'gray.500',
                    }}
                  />
                  <Input
                    placeholder="Message"
                    value={message}
                    onChange={({ target }) => setMessage(target?.value)} 
                    bg={'gray.100'}
                    border={0}
                    className=''
                    color={'gray.500'}
                    _placeholder={{
                      color: 'gray.500',
                      height: '196px'
                    }}
                  />
                </Stack>
                <Button
                  onClick={handleSubmit}
                  fontFamily={'heading'}
                  mt={8}
                  w={'full'}
                  bg="#01002B"
                  color={'white'}
                  _hover={{
                    bg: '#000000',
                    boxShadow: 'xl',
                  }}>
                  Submit
                </Button>
              </Box>
              form
            </Stack>
            <div className='lg:flex lg:visible hidden'>
              <div className='my-auto'>
                <div className='pt-10 px-10 flex items-center'>
                  <FontAwesomeIcon icon={faLocationDot} size="xl" />
                  <p className='pl-4 text-2xl'>25 Fairway, Crawley WA 6009</p>
                </div>
                <div className='py-8 px-10 flex items-center'>
                  <FontAwesomeIcon icon={faPhone} size="xl" />
                  <p className='pl-4 text-2xl'>(+61) 0434 448 003</p>
                </div>
                <div className='px-10 flex items-center'>
                  <FontAwesomeIcon icon={faEnvelope} size="xl" />
                  <p className='pl-4 text-2xl'>uwamotorsportev@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Box>
    );
  }