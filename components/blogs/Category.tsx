"use client"

import clsx from "clsx";
import { BlogImageView } from "./BlogImageView";
import { QuillInterpreter } from "../Quill";
import { format } from "date-fns";
import ContactTextInput from "../form-input/contact-form-input";
import { useRouter } from "next/navigation";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { SubscribeInCategory } from "./SubscribeInCategory";
import { BlogProps } from "./categories";



export type CategoryTypes =
  | "global tech news"
  | "african tech news"
  | "interviews"
  | "feature articles"
  | "sponsored posts"
  | "newsletters";

export interface CategoryProps {
  category: CategoryTypes;
  blogs: BlogProps[];
  view?: boolean;
  hideHeader?: boolean;
}

export const Category = ({
  category,
  blogs,
  view,
  hideHeader,
}: CategoryProps) => {
  const router = useRouter();
  const postUrl =
    "https://bytewave-technologies.us8.list-manage.com/subscribe/post?u=6f6ca4485e89ddd387b05bed3&id=caff34d3e2";

  return (
    <div className={clsx({ "flex mt-10 lg:mt-12 gap-5": true })}>
      <div
        className={clsx({
          "flex flex-col gap-5": true,
          "w-full lg:w-4/6": category === "newsletters" && !view,
          "w-full": category !== "newsletters",
        })}
      >
        {!view && !hideHeader && (
          <div className="w-full bg-black h-10 flex items-center px-8 text-white capitalize">
            {category}
          </div>
        )}

        {blogs?.map((b, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center gap-5 md:gap-8 cursor-pointer"
              onClick={() => router.push(`/blog/${b.blog_id}`)}
            >
              <div className="w-[350px] h-64">
                <BlogImageView blog={b} size="sm" hideInfo view={false}/>
              </div>
              <div className="flex-1 flex flex-col gap-5">
                <h1 className="text-2xl font-bold">
                  {b && <QuillInterpreter text={b.title} />}
                </h1>
                <p className="text-gray-600">
                  {typeof b.content === "string" && (
                    <QuillInterpreter text={b.des} />
                  )}
                </p>
                <div
                  className={clsx({
                    "flex items-center gap-4 text-sm text-gray-600": true,
                  })}
                >
                  <div className="flex items-center gap-2 capitalize">
                    {b?.author.personal_info.fullname}
                  </div>
                  <div className="flex items-center gap-2">
                    {b && format(new Date(b?.publishedAt), "dd MMMM, yyyy")}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {category === "newsletters" && !view && (
        <div className="flex-1 hidden lg:flex flex-col gap-5">
          <div className="w-full bg-black h-10 flex items-center px-8 text-white">
            Subscribe to our newsletters
          </div>

          <div className="w-full">
            <MailchimpSubscribe
              url={postUrl}
              render={({ subscribe, status, message }) => (
                <SubscribeInCategory
                  status={status}
                  message={message}
                  onValidated={(formData: any) => subscribe(formData)}
                />
              )}
            />
          </div>
        </div>
      )}
    </div>
  );
};
