"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import {
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoInstagram, BiSearch } from "react-icons/bi";

import Link from "next/link";

import { useSearch } from "@/contexts/SearchContext";
import { Spinner } from "@/components/Spinner";
import { BlogImageView } from "@/components/blogs/BlogImageView";
import { BlogContent } from "@/components/Quill";
import { SocialLinks } from "@/components/blogs/SocialLinks";
import { Category, CategoryTypes } from "@/components/blogs/Category";
import CTA from "@/components/blogs/CTA";
import { BlogProps, categories } from "@/components/blogs/categories";

const BlogView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blog, setBlog] = useState<BlogProps | null>(null);
  const [categoryBlogs, setCategoryBlogs] = useState<any | null>(null);
  const [error, setError] = useState("");
  const pathname = usePathname();
  const [isLoadingExtra, setIsLoadingExtra] = useState(true);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const { setBlogs: setSearchBlogs } = useSearch();
  const router = useRouter();

  const getCatgoryPosts = async () => {
    setIsLoadingExtra(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}all-blogs`,
        { page: 1 },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setCategoryBlogs(
        response?.data?.blogs.filter((b: any) => {
          return (
            !b.draft &&
            b.tags[0] === blog?.tags[0] &&
            b.blog_id !== blog?.blog_id
          );
        })
      );
      setSearchBlogs(
        response?.data?.blogs.filter((b: any) => {
          return !b.draft;
        })
      );
      setIsLoadingExtra(false);
    } catch {
      setError("Error Fetching data");
      setIsLoadingExtra(false);
    }
    setIsLoadingExtra(false);
  };

  const getBlog = async () => {
    console.log(`${process.env.NEXT_PUBLIC_BASE_URL}get-blog`);
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}get-blog`,
        { blog_id: pathname.split("/")[2] },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setBlog(response?.data?.blog);
      setIsLoading(false);
    } catch {
      setError("Error Fetching data");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    !blog && pathname && getBlog();
    blog && !categoryBlogs && getCatgoryPosts();
  }, [blog, getBlog, getCatgoryPosts, pathname]);

  if (isLoading)
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Spinner />
      </div>
    );
  if (error)
    return (
      <div className="h-screen w-full flex items-center justify-center">
        An error has occured. Please reload page.
      </div>
    );
  if (blog)
    return (
      <div className="w-full pb-20">
        <div className="max-w-[1440px]  mx-auto h-full px-8 sm:px-14 md:px-20 flex flex-col mb-16">
          <div className="my-3">
            <Link href={"/blog"} className="underline text-purple-primary">
              Back
            </Link>
          </div>

          <div className="w-full mt-10 hidden xl:block">
            <div className="w-full h-10 text-white border-b-2 border-b-[#15192C] bg-[#15192C] flex justify-between items-center px-7">
              {categories.map((cat, idx) => {
                return (
                  <button
                    key={idx}
                    type="button"
                    className={clsx({
                      "h-full px-4 capitalize text-sm transition-all duration-300 hover:underline":
                        true,
                    })}
                    onClick={() => {
                      setActiveCategory(cat);
                      router.push(`/blog?category=${cat}`);
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
              <BiSearch className="" size={24} />
            </div>
          </div>

          <div className="h-[450px] flex mt-10 gap-5">
            <div
              className={clsx({
                "w-full h-full": true,
              })}
            >
              <BlogImageView blog={blog} size="lg" view={true} hideInfo={false} />
            </div>
          </div>

          <div className="w-full flex mt-10">
            <div className="hidden xl:flex w-32 flex-col ml-10 gap-7 mt-10">
              <FacebookShareButton url={pathname}>
                <div className="relative bg-gray-100 w-7 h-7 rounded-full flex items-center justify-center">
                  <FaFacebook size={15} className="text-sky-500" />
                  <span className="absolute text-[10px] bg-gray-100 h-4 px-2 left-full ml-2">
                    share
                  </span>
                </div>
              </FacebookShareButton>
              <TwitterShareButton url={pathname}>
                <div className="relative bg-gray-100 w-7 h-7 rounded-full flex items-center justify-center">
                  <FaXTwitter size={15} className="text-black" />
                  <span className="absolute text-[10px] bg-gray-100 h-4 px-2 left-full ml-2">
                    share
                  </span>
                </div>
              </TwitterShareButton>
              <LinkedinShareButton url={pathname}>
                <div className="relative bg-gray-100 w-7 h-7 rounded-full flex items-center justify-center">
                  <FaLinkedinIn size={15} className="text-sky-500" />
                  <span className="absolute text-[10px] bg-gray-100 h-4 px-2 left-full ml-2">
                    share
                  </span>
                </div>
              </LinkedinShareButton>
              <InstapaperShareButton url={pathname}>
                <div className="relative bg-gray-100 w-7 h-7 rounded-full flex items-center justify-center">
                  <BiLogoInstagram size={15} className="text-red-500" />
                  <span className="absolute text-[10px] bg-gray-100 h-4 px-2 left-full ml-2">
                    share
                  </span>
                </div>
              </InstapaperShareButton>
            </div>

            <div className="xl:w-5/6 self-end xl:pr-14">
              <BlogContent text={blog?.content} />

              <div className="w-4/6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-5 mt-16">
                <FacebookShareButton url={pathname} className="w-full">
                  <div className="w-full bg-sky-500 hover:bg-sky-500/60 duration-200 transition rounded-[7px] justify-center items-center inline-flex gap-2 py-2 cursor-pointer whitespace-nowrap">
                    <FaFacebook size={20} className="text-white" />
                    <span className="text-center text-white text-base font-bold tracking-tight">
                      Share
                    </span>
                  </div>
                </FacebookShareButton>
                <TwitterShareButton url={pathname} className="w-full">
                  <div className="w-full bg-sky-500 hover:bg-sky-500/60 duration-200 transition rounded-[7px] justify-center items-center inline-flex gap-2 py-2 cursor-pointer whitespace-nowrap">
                    <FaXTwitter size={20} className="text-white" />
                    <span className="text-center text-white text-base font-bold tracking-tight">
                      Share
                    </span>
                  </div>
                </TwitterShareButton>
                <LinkedinShareButton url={pathname} className="w-full">
                  <div className="w-full bg-sky-500 hover:bg-sky-500/60 duration-200 transition rounded-[7px] justify-center items-center inline-flex gap-2 py-2 cursor-pointer whitespace-nowrap">
                    <FaLinkedinIn size={20} className="text-white" />
                    <span className="text-center text-white text-base font-bold tracking-tight">
                      Share
                    </span>
                  </div>
                </LinkedinShareButton>
                <InstapaperShareButton url={pathname} className="w-full">
                  <div className="w-full bg-red-600 hover:bg-red-600/60 duration-200 transition  rounded-[7px] justify-center items-center inline-flex gap-2 py-2 cursor-pointer whitespace-nowrap">
                    <BiLogoInstagram size={20} className="text-white" />
                    <span className="text-center text-white text-base font-bold tracking-tight">
                      Share
                    </span>
                  </div>
                </InstapaperShareButton>
              </div>

              <div className="mt-16">
                <div className="flex gap-2 xl:w-3/5">
                  <img
                    src={blog.author.personal_info.profile_img}
                    className="w-24 h-24 bg-gray-200 rounded-full border border-gray-200"
                  />
                  <div className="flex flex-col mt-2">
                    <p className="text-lg font-bold truncate capitalize">
                      {blog.author.personal_info.username}
                    </p>
                    <p className="text-gray-500 text-xs mt-3">
                      {blog.author.personal_info.bio}
                    </p>
                  </div>
                </div>
                <div className="mt-4 ml-2">
                  <SocialLinks links={blog.author.social_links} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <CTA />

        <div className="w-full h-full px-8 sm:px-14 md:px-20">
          <div className="w-full flex flex-col">
            {isLoadingExtra ? (
              <div className="mt-10">
                <Spinner />
              </div>
            ) : (
              <></>
            )}
            {categoryBlogs?.length > 0 && (
              <p className="mt-10">You may also like;</p>
            )}
            {categoryBlogs?.length > 0 && (
              <Category
                blogs={categoryBlogs}
                category={blog.tags[0] as CategoryTypes}
                view
              />
            )}
          </div>
        </div>
      </div>
    );
};

export default BlogView;
