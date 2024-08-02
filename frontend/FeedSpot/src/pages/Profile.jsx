import React, { useState } from 'react';
import { Heading, Card, Avatar, Box, Text, Flex, TextArea, Button,TextField,DropdownMenu} from '@radix-ui/themes';

const Profile = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = (birthdate) => {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleBirthdateChange = (e) => {
    const selectedDate = e.target.value;
    setBirthdate(selectedDate);
    const calculatedAge = calculateAge(selectedDate);
    setAge(calculatedAge);
  };

  return (
    <div className='py-4 pl-[10%]'>
      <Card className='max-w-4xl'>
        <Box className='mx-32 my-6'>
          <Heading color='gray' as='h2' weight='medium' className='mb-6'>Profile</Heading>
          <Box maxWidth="500px" className='mb-4'>
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
                <Button radius='full' size='2'>Change photo</Button>
              </Flex>
            </Card>
          </Box>
          <Heading color='gray' as='h2' weight='medium' className='mb-2'>Website</Heading>
          <TextField.Root placeholder="Website" className='max-w-lg rounded-lg mb-4' />
          <Heading color='gray' as='h2' weight='medium' className='mb-2'>Bio</Heading>
          <TextArea placeholder="Type your Bio" className='max-w-lg rounded-lg mb-4' />
          <Flex align='center' justify='between'>
            <Box>
              <Heading color='gray' as='h2' weight='medium' className='mb-2'>Your Birthday</Heading>
              <input
                type='date'
                className='border rounded-lg outline-none w-56'
                value={birthdate}
                onChange={handleBirthdateChange}
              />
            </Box>
            <Box>
              <Heading color='gray' as='h2' weight='medium' className='mb-2'>Age</Heading>
              <input
                type='text'
                className='border rounded-lg outline-none w-24'
                value={age}
                readOnly
              />
            </Box>
          </Flex>
        
        </Box>
      </Card>
    </div>
  );
}

export default Profile;

//set the username,avatar,name dynamic
//save the gender
