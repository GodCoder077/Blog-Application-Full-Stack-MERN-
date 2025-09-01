import { Card } from '@/components/ui/card'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'
import userLogo from "../assets/user.jpg"
import { Link } from 'react-router-dom'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea'

const Profile = () => {
    return (
        <div className='pt-20 md:ml-[320px] h-screen'>
            <div className='max-w-6xl mx-auto mt-8'>
                <Card className="flex md:flex-row flex-col gap-10 p-6 md:p-10 dark:bg-gray-800 mx-4 md:mx-0">
                    {/* Image Section */}
                    <div className='flex flex-col items-center justify-center md:w-[400px]'>
                        <Avatar className='w-40 h-40 '>
                            <AvatarImage src={userLogo} className='rounded-full border-2 border-gray-200 object-cover' />
                        </Avatar>
                        <h1 className='text-center font-semibold text-xl text-gray-700 dark:text-gray-300 my-3'> Mern Stack Developer</h1>
                        <div className='flex gap-4 items-center'>
                            <Link><FaFacebook className='w-6 h-6 text-gray-800 dark:text-gray-300' /></Link>
                            <Link><FaLinkedin className='w-6 h-6 text-gray-800 dark:text-gray-300' /></Link>
                            <Link><FaGithub className='w-6 h-6 text-gray-800 dark:text-gray-300' /></Link>
                            <Link><FaInstagram className='w-6 h-6 text-gray-800 dark:text-gray-300' /></Link>
                        </div>
                    </div>
                    {/* Info Section */}
                    <div>
                        <h1 className='font-bold text-center md:text-start text-4xl mb-7'>Welcome User</h1>
                        <p><span className='font-semibold'>Email{" "}:{" "}</span>raks96758@gmail.com</p>
                        <div className='flex flex-col gap-2 items-start justify-start my-5'>
                            <Label>About Me</Label>
                            <p className='border dark:border-gray-600 p-6 rounded-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi molestias dolore hic iste magnam. Consectetur soluta vitae tempora praesentium animi. Lorem ipsum dolor sit amet.</p>
                        </div>


                        <Dialog>
                            <form>
                                <DialogTrigger asChild>
                                    <Button className='cursor-pointer'>Edit Profile</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle className="text-center">Edit profile</DialogTitle>
                                        <DialogDescription className="text-center">
                                            Make changes to your profile here.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="flex gap-2">
                                            <div>
                                                <Label htmlFor="name" className="text-right mb-1">First Name</Label>
                                                <Input id="name" name="firstName" placeholder="First Name"
                                                    type="text"
                                                    className="col-span-3 text-gray-500"
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="username-1" className="text-right mb-1">Last Name</Label>
                                                <Input id="name" name="lastName" placeholder="Last Name"
                                                    type="text"
                                                    className="col-span-3 text-gray-500"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid gap-4 py-4">
                                        <div className="flex gap-2">
                                            <div>
                                                <Label htmlFor="facebook" className="text-right mb-1">Facebook</Label>
                                                <Input id="facebook" name="facebook" placeholder="Enter a URL"
                                                    type="text"
                                                    className="col-span-3 text-gray-500"
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="linkedin" className="text-right mb-1">Linkedin</Label>
                                                <Input id="linkedin" name="linkedin" placeholder="Enter a URL"
                                                    type="text"
                                                    className="col-span-3 text-gray-500"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid gap-4 py-4">
                                        <div className="flex gap-2">
                                            <div>
                                                <Label htmlFor="github" className="text-right mb-1">Github</Label>
                                                <Input id="github" name="github" placeholder="Enter a URL"
                                                    type="text"
                                                    className="col-span-3 text-gray-500"
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="instagram" className="text-right mb-1">Instagram</Label>
                                                <Input id="instagram" name="instagram" placeholder="Enter a URL"
                                                    type="text"
                                                    className="col-span-3 text-gray-500"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <Label className="text-right mb-1">Description</Label>
                                            <Textarea
                                                id='bio'
                                                name='bio'
                                                placeholder="Enter a description"
                                                className="col-span-3 text-gray-500"
                                            />
                                        </div>
                                        <div>
                                            <Label className="text-right mb-1">Picture</Label>
                                            <Input id="file" type="file" accept="image/*" className="cursor-pointer w-[277px]" />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <DialogClose asChild className="cursor-pointer">
                                            <Button className="cursor-pointer" variant="outline">Cancel</Button>
                                        </DialogClose>
                                        <Button className="cursor-pointer " type="submit">Save changes</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </form>
                        </Dialog>


                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Profile
