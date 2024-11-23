import SectionHeading from "@/components/Helper/SectionHeading";
import { blogs } from "@/data/data";
import React from "react";
import BlogCard from "./BlogCard";

interface Blog {
  id: number;
  date: string;
  comment: string;
  title: string;
  shortDescription: string;
  image: string;
}

const Blog = () => {
  return (
    <div className="bg-gray-100 pt-16 pb-16">
      <div className="mx-auto w-[80%]">
        <SectionHeading heading="Latest Blog" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-center mt-16">
          {blogs.map((blog: Blog,i) => {
            return (
              <div
                key={blog.id}
                data-aos="zoom-out"
                data-aos-delay={`${i * 150}`}
                data-anchor-placement="top-center"
              >
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <BlogCard blog={blog} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
