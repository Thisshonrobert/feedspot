import { Avatar, Container, DropdownMenu, Flex, Text } from '@radix-ui/themes';
import React from 'react';
import { GiButterfly } from "react-icons/gi";
import { useLocation } from 'react-router-dom';
import {SlideTabsExample} from './SlideTabs'; // Import the SlideTabs component
import StaggeredDropDown from './StaggeredDropdown'
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
          <SlideTabsExample />
          <StaggeredDropDown/>
        </Flex>
      </Container>
    </nav>
  );
}

export default NavBar;
{/* <DropdownMenu.Root>
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
</DropdownMenu.Root> */}