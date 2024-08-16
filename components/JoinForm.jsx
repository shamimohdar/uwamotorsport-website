import { useState } from 'react';
import axios from 'axios';
import {
    Box,
    Button,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Text,
    Textarea,
    Stack,
    InputGroup,
    SimpleGrid,
    useToast
  } from '@chakra-ui/react';
import { sendContactForm } from "../lib/api";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

  const initValues = { name: "", email: "", subject: "", message: "" };
  const initState = { isLoading: false, error: "", values: initValues };
  
  export default function Form() {
    const toast = useToast();
    const [state, setState] = useState(initState);
    const [touched, setTouched] = useState({});

    const { values, isLoading, error } = state;

    const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

    const handleChange = ({ target }) =>
      setState((prev) => ({
        ...prev,
        values: {
          ...prev.values,
          [target.name]: target.value,
        },
    }));

    const handleSubmit = async () => {
      setState((prev) => ({
        ...prev,
        isLoading: true,
      }));
      try {
        await sendContactForm(values);
        setTouched({});
        setState(initState);
        toast({
          title: "Message sent.",
          status: "success",
          duration: 2000,
          position: "top",
        });
      } catch (error) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: error.message,
        }));
      }
    };

    return (
      <Box position={'relative'}>
        <Container
          as={SimpleGrid}
          maxW={'7xl'}
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 10, lg: 16 }}>
          <Stack spacing={{ base: 10, lg: 20 }}>
            <div className='lg:w-full w-9/12 lg:h-[60vh] h-screen'>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13537.850176100364!2d115.8166837!3d-31.975474400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32a4f1dca835c1%3A0x1cf1d4e921213b28!2sUWA%20Motorsport!5e0!3m2!1sen!2sau!4v1686298463878!5m2!1sen!2sau" 
                style={{border:"0", width:"100%", height:"100%", "borderRadius": "12px"}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
              />
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
                {error && (
                  <Text color="red.300" my={4} fontSize="xl">
                    {error}
                  </Text>
                )}
              </Stack>

              <Box as={'form'} mt={10}>
                <Stack spacing={4}>
                <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
                  <FormLabel color={'#000000'}>Name</FormLabel>
                  <Input
                    // placeholder="Full Name"
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                    onBlur={onBlur}
                    bg={'gray.100'}
                    border={0}
                    color={'black'}
                    _placeholder={{
                      color: 'black',
                    }}
                  />
                  <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>
                <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
                  <FormLabel color={'#000000'}>Email</FormLabel>
                  <Input
                    // placeholder="Email"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={onBlur}
                    isRequired={true}
                    bg={'gray.100'}
                    border={0}
                    color={'black'}
                    _placeholder={{
                      color: 'black',
                    }}
                  />
                  <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>
                <FormControl
                  mb={5}
                  isRequired
                  isInvalid={touched.subject && !values.subject}
                >
                  <FormLabel color={'#000000'}>Subject</FormLabel>
                  <Input
                    // placeholder="Subject"
                    type="text"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    onBlur={onBlur}
                    bg={'gray.100'}
                    border={0}
                    color={'black'}
                    _placeholder={{
                      color: 'black',
                    }}
                  />
                  <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>
                <FormControl
                  isRequired
                  isInvalid={touched.message && !values.message}
                  mb={5}
                >
                  <FormLabel color={'#000000'}>Message</FormLabel>
                  <Textarea 
                  // placeholder="Message"
                  type="text"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={onBlur}
                  isRequired={true}
                  bg={'gray.100'}
                  border={0}
                  color={'black'}
                  errorBorderColor="red.300"
                  resize={'none'}
                  _placeholder={{
                    color: 'black'
                  }} />
                <FormErrorMessage>Required</FormErrorMessage>
              </FormControl>
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
                  }}
                  isLoading={isLoading}
                  disabled={
                    !values.name || !values.email || !values.subject || !values.message
                  }>
                  Submit
                </Button>
              </Box>
              form
            </Stack>
            <div className='lg:flex lg:visible hidden my-auto'>
              <div>
                <div className='pt-10 px-10 flex items-center'>
                <div className='w-6 h-6'>
                  <FontAwesomeIcon icon={faLocationDot} size="lg" />
                </div>
                  <p className='pl-4 text-lg'>35 Stirling Hwy, Crawley WA 6009</p>
                </div>
                <div className='py-8 px-10 flex items-center'>
                <div className='w-6 h-6'>
                  <FontAwesomeIcon icon={faPhone} size="lg" />
                </div>
                  <p className='pl-4 text-lg'>(+61) 0434 448 003</p>
                </div>
                <div className='px-10 flex items-center'>
                  <div className='w-6 h-6'>
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  </div>
                  <p className='pl-4 text-lg'>uwamotorsportev@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Box>
    );
  }