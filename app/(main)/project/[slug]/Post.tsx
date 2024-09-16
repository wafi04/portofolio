import { PostsData } from "@/app/api/post/types";
import { Button } from "@/components/ui/button";
import { TextOpacity } from "@/components/ui/text-opacity";
import { formatRelativeDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  post: PostsData;
}

export default function Post({ post }: Props) {
  return (
    <div className="space-y-5 w-full  h-full">
      <div className="space-y-2 ">
        <h1 className="text-[5vw] lg:text-[4vw] font-bold leading-none uppercase">
          {post.title}
        </h1>
        <p className="text-gray-600">
          {formatRelativeDate(post.createdAt as Date)}
        </p>
        <div className="flex gap-3">
          <Link href={`${post.urlGithub as string}`}>
            <Button className="bg-gray-800">Code</Button>
          </Link>
          <Link href={`${post.urlWebsite}`}>
            <Button className="bg-gray-800">Live Demo</Button>
          </Link>
        </div>
      </div>
      <Image
        src={post.content[0].url}
        alt="/"
        width={500}
        height={500}
        className="rounded-xl w-full  h-[400px]"
      />
      <div className="space-y-5">
        <TextOpacity desc={post.content[0].desc} title={post.title} />
      </div>
      <Button className="bg-blue-800 hover:bg-blue-500">
        <p>Techonology</p>
      </Button>
      <div className="flex w-full gap-3 overflow-x-auto ">
        {post.technology.map((item, index) => (
          <div key={index} className="mb-4">
            <Button className="bg-gray-800  text-blue-500 hover:text-white">
              {item}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
