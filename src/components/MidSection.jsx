import React from "react";
import { blogLists } from "../constants";
import BlogCard from "./BlogCard";
import Button from "./Button";

const MidSection = () => {
  return (
    <div className="pb-20 bg-light-gray ">
      <section
        id="blog"
        className=" h-full pt-40  flex flex-col justify-between items-center "
      >
        <h1 className="text-primary-violet text-5xl font-bold mb-20">
          We're different
        </h1>
        <ul className="w-full relative">
          {blogLists.map((blogList) => (
            <li
              key={blogList.id}
              className="flex flex-col justify-center items-center gap-6 w-full mb-10"
            >
              <BlogCard
                imgUrl={blogList.imgUrl}
                blogTitle={blogList.blogTitle}
                blog={blogList.blog}
              />
            </li>
          ))}
        </ul>
      </section>

      <aside className="bg-light-gray">
        <div className="bg-primary-violet bg-bg-hww-mob bg-no-repeat bg-right-top w-[90%] m-auto px-4 py-14  flex flex-col md:flex-row grid-cols-2  gap-8 justify-around items-center">
          <h3 className=" text-center text-5xl p-10  font-bold md:w-1/2 md:text-left  ">
            Find out more about how we work
          </h3>
          <Button text="HOW WE WORK" />
        </div>
      </aside>
    </div>
  );
};

export default MidSection;
