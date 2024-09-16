import { Metadata, ResolvingMetadata } from "next";
import React from "react";
import path from "path";
import Post from "./Post";
import { GetPostById } from "@/actions/getPost";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await GetPostById(decodeURIComponent(params.slug));
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.content[0].desc,
  };
}

export default async function Page({ params }: Props) {
  const post = await GetPostById(decodeURIComponent(params.slug));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="relative gap-5 p-10 flex w-full">
      <Post post={post} />
    </div>
  );
}
