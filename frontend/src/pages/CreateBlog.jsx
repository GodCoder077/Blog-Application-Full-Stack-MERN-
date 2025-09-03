import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button'

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  return (
    <div className='p-4 md:pr-10 h-screen md:ml-[320px] pt-20'>
      <Card className="md:p-10 p-4 dark:bg-gray-800">
        <h1 className='text-2xl font-bold'>Let's create a blog</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa dignissimos eaque dicta a soluta itaque saepe, animi cum optio enim.</p>
        <div className='mt-5'>
          <div>
            <Label className={"mb-1"}>Title</Label>
            <Input type="text" placeholder="Your blog name" className="bg-white dark:bg-gray-700 w-[50%]"/>
          </div>
          <div className="mt-4 mb-5">
            <Label className={"mb-1"}>Category</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Category</SelectLabel>
                  <SelectItem value="apple">Web Development</SelectItem>
                  <SelectItem value="banana">Blogging</SelectItem>
                  <SelectItem value="blueberry">Sustainabilty</SelectItem>
                  <SelectItem value="grapes">Technology</SelectItem>
                  <SelectItem value="pineapple">Gaming</SelectItem>
                  <SelectItem value="pineapple">Cooking</SelectItem>
                  <SelectItem value="pineapple">Digital Marketing</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2">
            <Button>Create</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default CreateBlog
