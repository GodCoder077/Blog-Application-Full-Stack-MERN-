import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage } from '@/components/ui/avatar';

const BlogView = () => {
    const params = useParams();
    const blogId = params.blogId;
    const { blog } = useSelector(store => store.blog);
    const selectedBlog = blog.find(blog => blog._id === blogId)
    return (
        <div className='pt-14'>
            <div className='max-w-6xl mx-auto p-10'>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">
                                Home
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/docs/components">
                                Components
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{selectedBlog?.title}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                {/* Blog header */}
                <div className="my-8">
                    <h1 className='text-4xl font-bold tracking-tight mb-4'>{selectedBlog?.title}</h1>
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center space-x-4">
                            <Avatar>
                                <AvatarImage src={selectedBlog?.author?.photoUrl} alt={selectedBlog?.author?.name} />
                            </Avatar>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogView
