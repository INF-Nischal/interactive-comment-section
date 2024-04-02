import Image from "next/image";
import data from "../../data.json";

export default function AddComment() {
  const User = data.currentUser;

  return (
    <div className="flex flex-col gap-4 bg-white p-4 rounded-lg">
      <textarea
        className="w-full border-slate-400 border-2 rounded-lg h-[72px] px-4 py-2 resize-none focus:outline-moderate-blue md:hidden"
        placeholder="Add a comment"
      ></textarea>
      <div className="flex gap-5 justify-between">
        <Image
          src={"" + User?.image?.png}
          alt="profile"
          width={32}
          height={32}
          className="h-[32px] w-[32px]"
        />

        <textarea
          className="w-full border-slate-400 border-2 rounded-lg h-[72px] px-4 py-2 resize-none focus:outline-moderate-blue hidden md:block"
          placeholder="Add a comment"
        ></textarea>

        <button className="px-6 h-[42px] py-2 uppercase bg-moderate-blue text-white rounded-md hover:bg-light-grayish-blue">
          Send
        </button>
      </div>
    </div>
  );
}
