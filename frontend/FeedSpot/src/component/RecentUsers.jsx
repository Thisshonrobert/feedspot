import React from "react";
import { Avatar, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { Button } from "@/components/ui/button";
const RecentUsers = () => {
  return (
    <Card>
      <Heading size="2" color="gray">
        Recent Users
      </Heading>
      <User/>
      <User/>
      <User/>
    </Card>
  );
};

const User = ()=>{
    return(
<Flex align="center" className="px-1 py-1" gap="4">
        <Avatar
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          radius="full"
          fallback="A"
          className="my-2"
        />
        <Flex direction="column" gap="1">
          <Heading as="h2" size="3">
            {"username"}
          </Heading>
          <Text color="gray" size="2">
            @{"name"}
          </Text>
        </Flex>
        <Button variant="secondary">See Profile</Button>
      </Flex>
    )
}

export default RecentUsers;

// fetch from backend use Map