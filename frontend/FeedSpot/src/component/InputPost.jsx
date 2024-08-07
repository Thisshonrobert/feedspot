import { Card } from '@radix-ui/themes';
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { Avatar, Flex } from '@radix-ui/themes';
import React, { useState } from 'react';



const InputPost = () => {
    const [content, setContent] = useState("")

  return (
    <Card >
    <Flex gap='3' align='center' className='px-8 py-4'>
      <Avatar
        src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
        radius='full'
        fallback="A"
      />
      <Input

        id="post-text"
        placeholder="What's Happening..?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

    </Flex>
    <Flex className='px-20 py-4' justify='between'>
      <Button>Add Photo</Button>
      <Button>Post</Button>
    </Flex>


  </Card>
  )
}

export default InputPost
