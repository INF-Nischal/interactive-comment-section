"use client";

import { useState, useContext } from "react";
import Image from "next/image";
import { Comment } from "../../types/commentTypes";
import ReplyComment from "./ReplyComment";
import data from "../../data.json";
import { ModalContext } from "../modals/DeleteModal";
import { ModalContextType } from "@/types/modalTypes";
import Likes from "./Likes";

export default function Comment({
  content,
  createdAt,
  score,
  user,
  replies,
  replyingTo,
}: Comment) {
  const [showReply, setShowReply] = useState(true);
  const [showEdit, setShowEdit] = useState(false);
  const [editComment, setEditComment] = useState<string>("" + content);

  const { handleModal } = useContext<ModalContextType>(ModalContext);

  const handleReply = () => {
    setShowReply(!showReply);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  return (
    <div className="flex flex-col">
      <div className="flex gap-5 p-5 w-full bg-white rounded-lg">
        <div className="hidden md:block">
          <Likes score={score} />
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={"" + user?.image?.png}
                alt="profile"
                width={24}
                height={24}
              />
              <p className="text-sm font-bold text-grayish-blue">
                {user?.username}
              </p>
              {data.currentUser &&
              data.currentUser.username === user?.username ? (
                <span className="bg-blue-500 text-slate-50 font-bold text-sm px-1">
                  you
                </span>
              ) : (
                ""
              )}
              <span className="text-sm text-gray-400">{createdAt}</span>
            </div>
            <div className="hidden md:block">
              {data.currentUser &&
              data.currentUser.username === user?.username ? (
                <div className="flex gap-6">
                  <button
                    className="flex items-center gap-2 rounded-md text-sm font-bold text-soft-red hover:text-pale-red"
                    onClick={handleModal}
                  >
                    <Image
                      src={"/icon-delete.svg"}
                      alt="icon"
                      width={12}
                      height={12}
                    />
                    <span>Delete</span>
                  </button>
                  <button
                    className="flex items-center gap-2 rounded-md text-sm font-bold text-moderate-blue hover:text-light-grayish-blue"
                    onClick={handleEdit}
                  >
                    <Image
                      src={"/icon-edit.svg"}
                      alt="icon"
                      width={12}
                      height={12}
                    />
                    Edit
                  </button>
                </div>
              ) : (
                <button
                  className="flex gap-1.5 items-center text-moderate-blue hover:text-light-grayish-blue"
                  onClick={handleReply}
                >
                  <Image
                    src={"/icon-reply.svg"}
                    alt="icon"
                    width={12}
                    height={12}
                  />
                  <span className="text-sm font-bold">Reply</span>
                </button>
              )}
            </div>
          </div>
          {showEdit ? (
            <div className="flex flex-col gap-4">
              <textarea
                className="w-full border-slate-400 border-2 rounded-lg h-[72px] px-4 py-2 resize-none focus:outline-moderate-blue text-sm"
                value={editComment}
                onChange={(e) => setEditComment(e.target.value)}
              ></textarea>
              <div className="flex justify-end">
                <button
                  className="px-6 h-[42px] py-2 uppercase bg-moderate-blue text-white rounded-md hover:bg-light-grayish-blue"
                  onClick={handleEdit}
                >
                  Update
                </button>
              </div>
            </div>
          ) : (
            <div className="text-sm">
              {replyingTo ? (
                <span className="text-moderate-blue font-bold">
                  @{replyingTo}
                </span>
              ) : (
                ""
              )}{" "}
              {content}
            </div>
          )}
          <div className="flex justify-between items-center mt-4 md:hidden">
            <div>
              <Likes score={score} />
            </div>
            {data.currentUser &&
            data.currentUser.username === user?.username ? (
              <div className="flex gap-6">
                <button
                  className="flex items-center gap-2 rounded-md text-sm font-bold text-soft-red hover:text-pale-red"
                  onClick={handleModal}
                >
                  <Image
                    src={"/icon-delete.svg"}
                    alt="icon"
                    width={12}
                    height={12}
                  />
                  <span>Delete</span>
                </button>
                <button
                  className="flex items-center gap-2 rounded-md text-sm font-bold text-moderate-blue hover:text-light-grayish-blue"
                  onClick={handleEdit}
                >
                  <Image
                    src={"/icon-edit.svg"}
                    alt="icon"
                    width={12}
                    height={12}
                  />
                  Edit
                </button>
              </div>
            ) : (
              <button
                className="flex gap-1.5 items-center"
                onClick={handleReply}
              >
                <Image
                  src={"/icon-reply.svg"}
                  alt="icon"
                  width={12}
                  height={12}
                />
                <span className="text-sm font-bold text-moderate-blue hover:text-light-grayish-blue">
                  Reply
                </span>
              </button>
            )}
          </div>
        </div>
      </div>

      <div hidden={showReply}>
        <ReplyComment username={user?.username} />
      </div>

      {replies && replies.length > 0 ? (
        <div className="pl-8 py-4">
          <div className="border-l-2 border-l-light-gray flex flex-col gap-4 pl-8">
            {replies?.map((reply) => (
              <Comment
                key={reply.id}
                content={reply.content}
                createdAt={reply.createdAt}
                score={reply.score}
                user={reply.user}
                replyingTo={reply.replyingTo}
              />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
