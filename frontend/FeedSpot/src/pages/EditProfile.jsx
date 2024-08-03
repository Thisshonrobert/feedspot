import React, { useState } from 'react';
import { Avatar, Box, Button, Card, Flex, Heading, Text, TextArea, TextField, Dialog } from '@radix-ui/themes';

const EditProfile = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState('');
  const [img, setImg] = useState('');
  const [name,setName] = useState('');
  const [username,setUsername] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newImg, setNewImg] = useState('');

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

  const handleImageSave = () => {
    setImg(newImg);
    setIsDialogOpen(false);
  };

  return (
    <div className='py-4 pl-[12%]'>
      <Card className='max-w-4xl'>
        <Box className='mx-40 my-6'>
          <Heading color='gray' as='h2' weight='medium' className='mb-6'>Profile</Heading>
          <Box maxWidth="500px" className='mb-4'>
            <Card>
              <Flex justify='between' align='center'>
                <Flex gap="3" align="center">
                  <Avatar
                    size="3"
                    src={img}
                    radius="full"
                    fallback="X"
                  />
                  <Box>
                    <TextField.Root className='mb-2 h-6' radius='full' value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter name"/>
                      
                      <TextField.Root radius='full' className='h-6' value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="Enter username"/>
                  </Box>
                </Flex>
                <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <Dialog.Trigger asChild>
                    <Button radius='full' size='2' className='px-[10%]'>{img === '' ? 'Add Photo' : 'Change photo'}</Button>
                  </Dialog.Trigger>
                  <Dialog.Content maxWidth="450px">
                    <Dialog.Title>Edit Profile Photo</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                      Enter the URL of the new profile photo.
                    </Dialog.Description>
                    <Flex direction="column" gap="3">
                  
                        <TextField.Root
                          value={newImg}
                          onChange={(e) => setNewImg(e.target.value)}
                          placeholder="Enter image URL"
                        />
                      
                    </Flex>
                    <Flex gap="3" mt="4" justify="end">
                      <Dialog.Close asChild>
                        <Button variant="soft" color="gray">
                          Cancel
                        </Button>
                      </Dialog.Close>
                      <Dialog.Close asChild>
                        <Button onClick={handleImageSave}>Save</Button>
                      </Dialog.Close>
                    </Flex>
                  </Dialog.Content>
                </Dialog.Root>
              </Flex>
            </Card>
          </Box>
          <Heading color='gray' as='h2' weight='medium' className='mb-2'>Website</Heading>
          <TextField.Root placeholder="Website" className='max-w-lg rounded-lg mb-4 ' />
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
          <Button size='3' radius='full' className='mt-8 px-[10%] ml-56'>Submit</Button>
        </Box>
      </Card>
    </div>
  );
};

export default EditProfile;
