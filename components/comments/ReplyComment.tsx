"use client";

import { useState } from "react";
import { TUser } from "@/types/commentTypes";
import Image from "next/image";
import data from "@/data.json";

export default function ReplyComment({ username }: TUser) {
  const [replyComment, setReplyComment] = useState<string>(
    "@" + username + " "
  );

  const currentUser = data.currentUser;

  return (
    <div className="flex flex-col gap-5 bg-white rounded-lg p-4 mt-2">
      <textarea
        className="w-full border-2 rounded-md h-[72px] px-4 py-2 resize-none focus:outline-moderate-blue text-sm placeholder:text-blue-300 md:hidden"
        value={replyComment}
        onChange={(e) => {
          setReplyComment(e.target.value);
        }}
      />
      <div className="flex gap-4 justify-between">
        <Image
          src={"" + currentUser?.image?.png}
          alt="profile"
          width={32}
          height={32}
          className="h-[32px] w-[32px]"
        />
        <textarea
          className="w-full border-2 rounded-md h-[72px] px-4 py-2 resize-none focus:outline-moderate-blue text-sm placeholder:text-blue-300 hidden md:block"
          value={replyComment}
          onChange={(e) => {
            setReplyComment(e.target.value);
          }}
        />
        <button className="px-6 h-[42px] py-2 uppercase bg-moderate-blue text-white rounded-md hover:bg-light-grayish-blue text-md">
          Reply
        </button>
      </div>
    </div>
  );
}
