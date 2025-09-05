import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-dropdown-menu'
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setBlog, setLoading } from '@/redux/blogSlice';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import axios from 'axios';

const UpdateBlog = () => {
    const navigate = useNavigate();
    const editor = useRef(null);
    const dispatch = useDispatch();
    const params = useParams();
    const id = params.blogId;
    const {blog, loading} = useSelector(store => store.blog);
    const selectBlog = blog.find(blog => blog._id === id);  
    const [content, setContent] = useState(selectBlog.description);
    const [blogData, setBlogData] = useState({
        title: selectBlog?.title,
        subtitle: selectBlog?.subtitle,
        description: content,
        category: selectBlog?.category,
    })
    const [previewThumbnail, setPreviewThumbnail] = useState(selectBlog?.thumbnail);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setBlogData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const selectCategory = (value) => {
        setBlogData({...blogData, category: value});
    }

    const selectThumbnail = (e) => {
        const file = e.target.files?.[0];
        if(file){
            setBlogData({...blogData, thumbnail: file});
            const fileReader = new FileReader();
            fileReader.onloadend=()=>setPreviewThumbnail(fileReader.result);
            fileReader.readAsDataURL(file);
        }
    }

    const updateBlogHandle = async () =>{
        const formData = new FormData();
        formData.append("title", blogData.title);
        formData.append("subtitle", blogData.subtitle);
        formData.append("description", content);
        formData.append("category", blogData.category);
        formData.append("file", blogData.thumbnail);
        try {
            dispatch(setLoading(true));
            const res = await axios.put(`http://localhost:8000/api/v1/blog/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true
            })
            if(res.data.success){
                toast.success(res.data.message);
                console.log(blogData);                
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }finally{
            dispatch(setLoading(false));
        }
    }
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
                        <Input type="text"
                         placeholder="Enter blog title" 
                         name="title" 
                         value={blogData.title}
                         onChange={handleChange}
                         className="dark:border-gray-300" />
                    </div>
                    <div className="">
                        <Label className='mb-1'>Subtitle</Label>
                        <Input type="text" 
                        placeholder="Enter blog subtitle" 
                        name="subtitle" 
                        value={blogData.subtitle}
                        onChange={handleChange}
                        className="dark:border-gray-300" />
                    </div>
                    <div>
                        <Label className='mb-1'>Description</Label>
                        <JoditEditor
                            ref={editor}
                            value={content || blogData.description}
                            onChange={newContent => setContent(newContent)}
                            className='jodit-toolbar'
                        />
                    </div>
                    <div className="mt-4">
                        <Label className={"mb-1"}>Category</Label>
                        <Select onValueChange = {selectCategory} className="dark:border-gray-300">
                            <SelectTrigger className="w-[180px] dark:border-gray-300">
                                <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Category</SelectLabel>
                                    <SelectItem value="Web Development">Web Development</SelectItem>
                                    <SelectItem value="Blogging">Blogging</SelectItem>
                                    <SelectItem value="Sustainabilty">Sustainabilty</SelectItem>
                                    <SelectItem value="Technology">Technology</SelectItem>
                                    <SelectItem value="Gaming">Gaming</SelectItem>
                                    <SelectItem value="Cooking">Cooking</SelectItem>
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
                            onChange= {selectThumbnail}
                            accept="image/*"
                            className="w-fit dark:border-gray-300"
                        />
                        {
                            previewThumbnail && (
                                <img src={previewThumbnail} alt="Blog Thumbnail " className='w-64 my-2'/>
                            )
                        }
                    </div>

                    <div className='flex gap-3 mt-3'>
                        <Button className="cursor-pointer" variant="outline" onClick={()=>navigate(-1)}>Back</Button>
                        <Button className="cursor-pointer" onClick={updateBlogHandle}>
                            {
                                loading ? <><Loader2 className='mr-2 w-4 h-4 animate-spin'/>Please Wait...</> : "Save"
                            }
                        </Button>

                    </div>
                </Card>
            </div>
        </div>
    )
}

export default UpdateBlog
