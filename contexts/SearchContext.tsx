"use client";

import { BlogProps } from "@/components/blogs/categories";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";


interface SearchContextProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  blogs: BlogProps[];
  setBlogs: React.Dispatch<React.SetStateAction<BlogProps[]>>;
}

const SearchContext = createContext<SearchContextProps>(
  {} as SearchContextProps
);

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [blogs, setBlogs] = useState<BlogProps[]>([]);

  return (
    <SearchContext.Provider
      value={{ searchQuery, setSearchQuery, blogs, setBlogs }}
    >
      {children}
    </SearchContext.Provider>
  );
};
