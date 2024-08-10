import { Card } from '@radix-ui/themes';
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { Avatar, Flex } from '@radix-ui/themes';
import React, { useState } from 'react';
import { TextField, Dialog } from '@radix-ui/themes';



const InputPost = () => {
    const [content, setContent] = useState("")
    const [img, setImg] = useState('');
    const [newImg, setNewImg] = useState('');
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleImageSave = () => {
      setImg(newImg);
      setIsDialogOpen(false);
    };

  return (
    <Card className='mr-4'>
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
      <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <Dialog.Trigger>
          <Button>Add Photo</Button>
        </Dialog.Trigger>
        <Dialog.Content maxWidth="450px">
        <Dialog.Title>Enter Photo Link</Dialog.Title>
        <Dialog.Description size="2" mb="4">
                      Enter the URL of the new  photo.
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
      <Button>Post</Button>
    </Flex>


  </Card>
  )
}

export default InputPost
