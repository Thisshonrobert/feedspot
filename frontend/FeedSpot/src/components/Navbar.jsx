import { Avatar, Button, Container, DropdownMenu, Flex, Text } from '@radix-ui/themes';
import React from 'react';
import { GiButterfly } from "react-icons/gi";
import { Link, useLocation } from 'react-router-dom';
const NavBar = () => {
  const location = useLocation();
  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
        <Flex align="center" gap="3" justify="between">
          <Flex direction="row" gap="1">
            <GiButterfly size='25' />
            <Text className="font-playwrite font-semibold text-2xl">FeedSpot</Text>
          </Flex>
          <Flex gap="4">
            <Link to="/">
              <Button variant={location.pathname === '/' ? 'solid' : 'outline'} radius='full' size='2' highContrast>
                Dashboard
              </Button>
            </Link>
            <Link to="/profile">
              <Button variant={location.pathname === '/profile' ? 'solid' : 'outline'} radius='full' size='2' highContrast>
                Profile
              </Button>
            </Link>
            <Link to="/newpost">
              <Button variant={location.pathname === '/newpost' ? 'solid' : 'outline'} radius='full' size='2' highContrast>
                New Post
              </Button>
            </Link>
          </Flex>
          <Flex direction='row' align='center' gap='3' >
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Avatar
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                radius='full'
                fallback="A"
              />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item >as {'this@gmail.com'}</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item color="red">Sign Out</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          {/* <FaGithub size='40'/> */}
          </Flex>
          
          
        </Flex>
      </Container>
    </nav>
  );
}

export default NavBar

// avatar and emailid should be rendered dynamically 