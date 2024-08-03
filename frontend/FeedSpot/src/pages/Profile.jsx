import { Avatar, Box, Button, Card, Flex, Heading, Text, TextArea, TextField } from '@radix-ui/themes';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className='py-4 pl-[12%]'>
      <Card className='max-w-4xl'>
        <Box className='mx-40 my-6'>
          <Heading color='gray' as='h2' weight='medium' className='mb-6'>Profile</Heading>
          <Box maxWidth="500px" className='mb-4 '>
            <Card>
              <Flex justify='between' align='center'>
                <Flex gap="3" align="center">
                  <Avatar
                    size="3"
                    src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                    radius="full"
                    fallback="T"
                  />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      {'Name'}
                    </Text>
                    <Text as="div" size="2" color="gray">
                      {'Username'}
                    </Text>
                  </Box>
                </Flex>
                <Button radius='full' size='2' className='px-[10%]'>Change photo</Button>
              </Flex>
            </Card>
          </Box>
          <Heading color='gray' as='h2' weight='medium' className='mb-2'>Website</Heading>
          <TextField.Root placeholder="Website" className='max-w-lg rounded-lg mb-4 bg-gray-100' />
          <Heading color='gray' as='h2' weight='medium' className='mb-2'>Bio</Heading>
          <TextArea placeholder="Type your Bio" className='max-w-lg rounded-lg mb-4 bg-gray-100' />
          <Flex align='center' justify='between'>
            <Box>
              <Heading color='gray' as='h2' weight='medium' className='mb-2'>Your Birthday</Heading>
              <TextField.Root 
                className='border rounded-lg outline-none w-56 bg-gray-100'
                value={'09/09/3003'}
              />
            </Box>
            <Box>
              <Heading color='gray' as='h2' weight='medium' className='mb-2'>Age</Heading>
              <TextField.Root 
                className='border rounded-lg outline-none w-24 bg-gray-100'
                value={'1'}
                readOnly
              />
            </Box>
          </Flex>
          <Button onClick={()=>navigate('/editprofile')} size='3' radius='full' className='mt-8 px-[10%] ml-56'>Edit Profile</Button>
        </Box>
      </Card>
    </div>
  );
}

export default Profile;

//set the username,avatar,name dynamic

