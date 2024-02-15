"use client"

import clsx from "clsx";
import { QuillInterpreter } from "../Quill";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { BlogProps } from "./categories";

interface ImageViewProps {
  size: "sm" | "lg";
  hideInfo?: boolean;
  blog: BlogProps;
  view?: boolean;
}

export const BlogImageView = ({
  size,
  hideInfo,
  blog,
  view,
}: ImageViewProps) => {
  const router = useRouter();
  return (
    <div
      className={clsx({
        "relative w-full h-full bg-black bg-center bg-no-repeat bg-cover transition-all ease-in-out duration-300 group cursor-pointer":
          true,
        "hover:-translate-x-2": !view,
      })}
      style={{
        backgroundImage: `url('${blog?.banner}')`,
      }}
      onClick={() => router.push(`/blog/${blog.blog_id}`)}
    >
      <div className="absolute w-full h-full left-0 top-0 bg-black opacity-40 group-hover:opacity-0 transition-all ease-in-out duration-300"></div>
      <div
        className={clsx({
          "absolute w-full left-0 bottom-0 flex flex-col text-white": true,
          "gap-2 p-4 md:p-10": size === "lg",
          "gap-1 p-3": size === "sm",
        })}
      >
        {!view && (
          <div
            className={clsx({
              "w-max bg-purple-primary capitalize": true,
              "px-12 py-2": size === "lg",
              "px-6 py-1": size === "sm",
            })}
          >
            {blog?.tags[0]}
          </div>
        )}
        <h1
          className={clsx({
            hidden: hideInfo,
            "text-3xl font-bold": size === "lg",
            "text-xl font-bold truncate": size === "sm",
          })}
        >
          {blog && <QuillInterpreter text={blog?.title} />}
        </h1>
        {view && (
          <p
            className={clsx({
              "text-white": true,
              hidden: hideInfo,
              "text-sm font-bold": size === "lg",
              "text-sm font-bold truncate": size === "sm",
            })}
          >
            {blog && <QuillInterpreter text={blog?.des} />}
          </p>
        )}
        <div
          className={clsx({
            hidden: hideInfo,
            "hidden sm:flex items-center gap-4 text-sm": true,
          })}
        >
          <div
            className={clsx({
              "flex items-center gap-2": true,
              "w-2/6": size === "sm",
            })}
          >
            <p className=" capitalize truncate overflow-ellipsis">
              {blog?.author.personal_info.fullname}
            </p>
          </div>
          <div
            className={clsx({
              "flex items-center gap-2": true,
              "w-2/6": size === "sm",
            })}
          >
            <p className="truncate overflow-ellipsis">
              {blog && format(new Date(blog?.publishedAt), "dd MMMM, yyyy")}
            </p>
          </div>

          <div
            className={clsx({
              "flex items-center gap-2": true,
              "w-2/6": size === "sm",
            })}
          >
            <p className="truncate overflow-ellipsis text-xs">
              {blog?.activity.total_reads} views
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
