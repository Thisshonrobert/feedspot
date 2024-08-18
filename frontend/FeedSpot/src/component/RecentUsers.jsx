import React, { useEffect, useState } from "react";
import { Avatar, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Grid } from "@mui/material";

const RecentUsers = () => {
  const [recentUsers, setRecentUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/recent-three",
          {
            headers: {
              'Authorization': "Bearer " + localStorage.getItem('token')
            }
          }
        );
        setRecentUsers(res.data.recentUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [recentUsers]);

  return (
    <Card>
      <Heading size="2" color="gray">
        Recent Users
      </Heading>
      <Grid container justify="center" spacing={4}>
            {recentUsers.map((recentUser) => (
              <Grid item key={recentUser._id} >
                <User user={recentUser} />
              </Grid>
            ))}
      </Grid>
    </Card>
  );
};

const User = ({user})=>{
    return(
<Flex align="center" className="px-1 py-1" gap="4">
        <Avatar
          src={user.user_image}
          radius="full"
          fallback="A"
          className="my-2"
        />
        <Flex direction="column" gap="1">
          <Heading as="h2" size="3">
            {user.user_name}
          </Heading>
          <Text color="gray" size="2">
            @{user.name}
          </Text>
        </Flex>
        <Button variant="secondary">See Profile</Button>
      </Flex>
    )
}

export default RecentUsers;

// fetch from backend use Map