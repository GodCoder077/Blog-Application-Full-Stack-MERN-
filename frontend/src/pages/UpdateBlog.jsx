import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-dropdown-menu'
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateBlog = () => {
    const navigate = useNavigate();
    const editor = useRef(null);
    const params = useParams();
    return (
        <div className='md:ml-[320px] pt-20 px-3 pb-10'>
            <div className='max-w-6xl mx-auto mt-8'>
                <Card className="w-full bg-white dark:bg-gray-800 p-5 -space-y-2">
                    <h1 className='text-4xl font-bold'>Basic Blog Information</h1>
                    <p>Make changes to your blogs here. Click publish when you are done.</p>
                    <div className="space-x-2">
                        <Button>Publish</Button>
                        <Button variant="destructive">Remove Blog</Button>
                    </div>
                    <div className="pt-8">
                        <Label className='mb-1'>Title</Label>
                        <Input type="text" placeholder="Enter blog title" name="title" className="dark:border-gray-300" />
                    </div>
                    <div className="">
                        <Label className='mb-1'>Subtitle</Label>
                        <Input type="text" placeholder="Enter blog subtitle" name="subtitle" className="dark:border-gray-300" />
                    </div>
                    <div>
                        <Label className='mb-1'>Description</Label>
                        <JoditEditor
                            ref={editor}
                            className='jodit-toolbar'
                        />
                    </div>
                    <div className="mt-4">
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
                                    <SelectItem value="gaming">Gaming</SelectItem>
                                    <SelectItem value="cooking">Cooking</SelectItem>
                                    <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label className='mb-1'>Thumbnail</Label>
                        <Input
                            type="file"
                            id="file"
                            accept="image/*"
                            className="w-fit dark:border-gray-300"
                        />
                    </div>

                    <div className='flex gap-3 mt-3'>
                        <Button variant="outline" onClick={()=>navigate(-1)}>Back</Button>
                        <Button>Save</Button>

                    </div>
                </Card>
            </div>
        </div>
    )
}

export default UpdateBlog
