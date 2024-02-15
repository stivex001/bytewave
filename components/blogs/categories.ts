export const categories = [
  "all",
  "global tech news",
  "african tech news",
  "interviews",
  "feature articles",
  "sponsored posts",
  "newsletters",
];

export interface BlogProps {
  activity: {
    total_likes: number;
    total_comments: number;
    total_reads: number;
    total_parent_comments: number;
  };
  blog_id: string;
  title: string;
  banner: string;
  des: string;
  tags: string[];
  author: {
    personal_info: {
      fullname: string;
      email: string;
      password: string;
      username: string;
      bio: string;
      profile_img: string;
    };
    social_links: {
      twitter: string;
      instagram: string;
      facebook: string;
      github: string;
      website: string;
      youtube: string;
    };
    account_info: {
      total_posts: number;
      total_reads: number;
    };
    _id: string;
    google_auth: boolean;
    blogs: string[];
    joinedAt: string;
    updatedAt: string;
    __v: number;
  };
  publishedAt: string;
  content: string;
  draft: boolean;
}

export const blogTags = [
  "Global Tech News",
  "African Tech News",
  "Interviews",
  "Feature Articles",
  "Sponsored Posts",
  "Newsletters",
];
