import React from "react";
import Image from "next/image";
import { BiCalendar, BiMessage } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

type Blog = {
  id: number;
  date: string;
  comment: string;
  title: string;
  shortDescription: string;
  image: string;
};

type BlogCardProps = {
  blog: Blog;
};
const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div className="bg-white overflow-hidden rounded-md">
      <div>
        <Image
          src={blog.image}
          alt={blog.title}
          width={300}
          height={400}
          className="w-full h-60 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BiCalendar className="text-rose-600" />
              <span className="text-sm text-gray-700">{blog.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <BiMessage className="text-rose-600" />
              <span className="text-sm text-gray-700">{blog.comment}</span>
            </div>
          </div>
          <h1 className="mt-6 font-bold hover:underline cursor-pointer mb-2 text-gray-700 text-lg">
            {blog.title}
          </h1>
                          <p className="text-gray-500 text-base">{blog.shortDescription}</p>
                          <div className="mt-4 flex items-center hover:text-red-500 space-x-2 cursor-pointer">
                                <span className="font-bold">Read More</span>
                                <BsArrowRight className="w-4 h-4" />

                          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
