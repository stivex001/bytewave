"use client";

import dynamic from "next/dynamic";
const ReactQuill = dynamic(import("react-quill"), { ssr: false });
//import ReactQuill from "react-quill";
import parse from "html-react-parser";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";

//import "../app/quill.bubble.css";
//import ReactQuill from "react-quill";

export const QuillInterpreter = ({
  text,
  truncate,
  truncateLength,
}: {
  text: string;
  truncate?: boolean;
  truncateLength?: number;
}) => {
  const trim = (text: string) => {
    const textString = text.replace(/<(.|\n)*?>/g, "");

    const subText = textString.substring(0, truncateLength);
    return `${subText}...`;
  };

  useEffect(() => {
    if (truncate && text.length > 0 && truncateLength) {
      text;
    }
  }, []);

  return (
    <div className="text-justify">
      {truncate && truncateLength && typeof text === "string" && text.length ? (
        <p>{trim(text)}</p>
      ) : (
        <p>{typeof text === "string" && parse(text)}</p>
      )}
    </div>
  );
};

export const BlogContent = ({ text }: { text: string }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (typeof window !== "undefined") {
    return <ReactQuill theme="bubble" value={text} readOnly={true} />;
  }
  return <></>;
};
