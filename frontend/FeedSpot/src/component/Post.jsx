import React, { useEffect, useState } from "react";
import {
  Avatar,
  Card,
  Flex,
  Heading,
  Text,
  Box,
  Dialog,
} from "@radix-ui/themes";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { CiShare1 } from "react-icons/ci";
import { Share } from "./Share";

export default function Post() {
  const [likes_count, setLikeCount] = useState(0);
  const currentUrl = window.location.href;

  // useEffect(()=>{
  //  axios.get(`http://localhost:3000/api/v1/like/${id}`,
  //{
  //headers:{
  //  Authorization:'Bearer'+localstorage.getItem('token')
  //}}).then((response)=>setLikeCount(response.data.likes_count));

  // },[])

  // const handleClick =async()=>{
  //   const like = axios.post(`http://localhost:3000/api/v1/liked/${id}`,{
  //     headers:{
  //      Authorization:'Bearer'+localstorage.getItem('token')
  //   }})
  //   setLikeCount(like.data.likes_count)
  // }

  return (
    <Card className="mt-4 mr-4">
      <Flex gap="3" align="center" className="px-8 py-4">
        <Avatar
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          radius="full"
          fallback="A"
        />
        <Flex direction="column" gap="1">
          <Heading as="h3" size="4">
            {"username"}
          </Heading>
          <Text color="gray" size="1">
            {"posted At"}
          </Text>
        </Flex>
      </Flex>
      <Box maxWidth="640px" className="mx-14 ">
        <Card>
          <Text as="p" wrap="pretty" className="px-10 py-3">
            The goal of typography is to relate font size, line height, and line
            width in a proportional way that maximizes beauty and makes reading
            easier and more pleasant.
          </Text>
          <Box className="image-container " mx="auto">
            <img
              className="post-image border rounded-xl"
              alt="your post"
              src={
                "data:image/jpeg;base64,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"
              }
            />
          </Box>
          <Flex
            justify="between"
            direction="row"
            align="center"
            className="m-3"
          >
            <Button
              //  onClick={handleClick}
              className={
                "rounded-full  h-0 flex px-2 py-4  hover:text-gray-800 bg-transparent dark:bg-white"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="gray"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                />
              </svg>
              <div className="text-black">{likes_count}</div>
            </Button>
            <Dialog.Root>
            <Dialog.Trigger asChild>
                <Button>
                    <CiShare1 />
                    Share
                </Button>
            </Dialog.Trigger>
            <Dialog.Content maxWidth='240px'>
              <Dialog.Title>Share With</Dialog.Title>
                <Share shareUrl={currentUrl} />
            </Dialog.Content>
        </Dialog.Root>
          </Flex>
        </Card>
      </Box>
      
    </Card>
  );
}
