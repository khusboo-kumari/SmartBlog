import React from 'react'
import { Card, CardContent } from './ui/card'
import { Badge } from "@/components/ui/badge"
import { Avatar } from './ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { FaRegCalendarAlt } from "react-icons/fa"
import usericon from '@/assets/images/user.png'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { RouteBlogDetails } from '@/helpers/RouteName'

const BlogCard = ({ props }) => {
    return (
        <Link to={RouteBlogDetails(props.category.slug, props.slug)}>
            <Card className="w-80 h-[350px] flex flex-col pt-5 shadow-md overflow-hidden">
                <CardContent className="flex flex-col h-full">
                    
                    {/* Author Section */}
                    <div className='flex items-center justify-between mb-3'>
                        <div className='flex items-center gap-2'>
                            <Avatar>
                                <AvatarImage src={props.author.avatar || usericon} />
                            </Avatar>
                            <span className="text-sm font-medium">{props.author.name}</span>
                        </div>
                        {props.author.role === 'admin' &&
                            <Badge variant="outline" className="bg-violet-500">Admin</Badge>
                        }
                    </div>

                    {/* Image */}
                    <div className="w-full h-[150px]">
                        <img 
                            src={props.featuredImage} 
                            alt="Blog Thumbnail" 
                            className="w-full h-full object-cover rounded"
                        />
                    </div>

                    {/* Blog Details */}
                    <div className="flex flex-col justify-between flex-grow mt-3">
                        <p className='flex items-center gap-2 text-sm text-gray-500'>
                            <FaRegCalendarAlt />
                            <span>{moment(props.createdAt).format('DD-MM-YYYY')}</span>
                        </p>
                        <h2 className='text-lg font-semibold line-clamp-2 overflow-hidden text-ellipsis whitespace-nowrap'>
                            {props.title}
                        </h2>
                    </div>

                </CardContent>
            </Card>
        </Link>
    )
}

export default BlogCard
