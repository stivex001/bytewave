// "use client";

// import axios from "axios";
// import clsx from "clsx";
// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import { BlogImageView } from "@/components/Blog/BlogImageView";
// import { useSearch } from "@/contexts/SearchContext";
// import { Spinner } from "@/components/Spinner";
// import { Category, CategoryTypes } from "@/components/Blog/Category";

// export interface BlogProps {
//   activity: {
//     total_likes: number;
//     total_comments: number;
//     total_reads: number;
//     total_parent_comments: number;
//   };
//   blog_id: string;
//   title: string;
//   banner: string;
//   des: string;
//   tags: string[];
//   author: {
//     personal_info: {
//       fullname: string;
//       email: string;
//       password: string;
//       username: string;
//       bio: string;
//       profile_img: string;
//     };
//     social_links: {
//       twitter: string;
//       instagram: string;
//       facebook: string;
//       github: string;
//       website: string;
//       youtube: string;
//     };
//     account_info: {
//       total_posts: number;
//       total_reads: number;
//     };
//     _id: string;
//     google_auth: boolean;
//     blogs: string[];
//     joinedAt: string;
//     updatedAt: string;
//     __v: number;
//   };
//   publishedAt: string;
//   content: string;
//   draft: boolean;
// }

// const categories = [
//   "all",
//   "global tech news",
//   "african tech news",
//   "interviews",
//   "feature articles",
//   "sponsored posts",
//   "newsletters",
// ];

// const Blog = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [blogs, setBlogs] = useState<BlogProps[] | null>(null);
//   const [filteredBlogs, setFilteredBlogs] = useState<any | null>(null);
//   const [error, setError] = useState("");
//   const pageCategory = useSearchParams().get("category");
//   const [activeCategory, setActiveCategory] = useState(
//     pageCategory || categories[0]
//   );
//   const { setBlogs: setSearchBlogs } = useSearch();

//   const getPosts = async () => {
//     setIsLoading(true);
//     try {
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_BASE_URL}all-blogs`,
//         { page: 1 },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       setBlogs(
//         response?.data?.blogs.filter((b: any) => {
//           return !b.draft;
//         })
//       );
//       setSearchBlogs(
//         response?.data?.blogs.filter((b: any) => {
//           return !b.draft;
//         })
//       );

//       setIsLoading(false);
//     } catch {
//       setError("Error Fetching data");
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     getPosts();
//   }, []);

//   useEffect(() => {
//     const allCategories: any = {};

//     blogs?.map((b) => {
//       if (!allCategories[b.tags[0]]) {
//         allCategories[b.tags[0]] = [b];
//       } else {
//         allCategories[b.tags[0]] = [...allCategories[b.tags[0]], b];
//       }
//     });

//     setFilteredBlogs(allCategories);
//   }, [blogs]);

//   if (isLoading)
//     return (
//       <div className="h-screen w-full flex items-center justify-center">
//         <Spinner />
//       </div>
//     );

//   if (error)
//     return (
//       <div className="h-screen w-full flex items-center justify-center">
//         An error has occured. Please reload page.
//       </div>
//     );

//   if (filteredBlogs && blogs)
//     return (
//       <div className="w-full px-8 sm:px-14 md:px-20 pb-10">
//         <div className="w-full mt-10 hidden xl:block">
//           <div className="w-full h-10 text-white border-b-2 border-b-black bg-black">
//             {categories.map((cat, idx) => {
//               return (
//                 <button
//                   key={idx}
//                   type="button"
//                   className={clsx({
//                     "h-full px-4 capitalize text-sm transition-all duration-300":
//                       true,
//                     "bg-white text-black": activeCategory === cat,
//                   })}
//                   onClick={() => {
//                     setActiveCategory(cat);
//                   }}
//                 >
//                   {cat}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//         {activeCategory === "all" && (
//           <div className="h-[450px] flex mt-10 gap-5">
//             <div
//               className={clsx({
//                 "w-full h-full": true,
//                 "lg:w-4/6": blogs.length > 2,
//               })}
//             >
//               <BlogImageView blog={blogs[0]} size="lg" />
//             </div>
//             {blogs.length > 2 && (
//               <div className="hidden lg:flex w-2/6 h-full flex-col gap-5">
//                 <div className="w-full flex-1">
//                   <BlogImageView blog={blogs[1]} size="sm" />
//                 </div>
//                 <div className="w-full flex-1">
//                   <BlogImageView blog={blogs[2]} size="sm" />
//                 </div>
//               </div>
//             )}
//           </div>
//         )}

//         {activeCategory === "all" && (
//           <div className="w-full">
//             {Object.keys(filteredBlogs).map((k, idx) => {
//               return (
//                 <div key={idx} className="w-full">
//                   <Category
//                     blogs={filteredBlogs[k]}
//                     category={k as CategoryTypes}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         )}
//         {activeCategory !== "all" && (
//           <div className="w-full">
//             <Category
//               blogs={filteredBlogs[activeCategory]}
//               category={activeCategory as CategoryTypes}
//               hideHeader
//             />
//           </div>
//         )}
//         {!filteredBlogs[activeCategory]?.length && activeCategory !== "all" && (
//           <div className="w-full h-20 text-gray-400 flex items-center justify-center">
//             No blogs
//           </div>
//         )}
//       </div>
//     );
// };

// export default Blog;

import React from 'react'

type Props = {}

const Blogs = (props: Props) => {
  return (
    <div>Blogs</div>
  )
}

export default Blogs
