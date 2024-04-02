import React from "react";
import { useState } from "react";
import Image from "next/image";

const Likes = ({ score }: { score: number }) => {
  const [likes, setLikes] = useState<number>(score);

  const handleIncrease = () => {
    setLikes(likes + 1);
  };

  const handleDecrease = () => {
    if (likes === 0) {
      return;
    } else {
      setLikes(likes - 1);
    }
  };

  return (
    <div className="flex flex-row gap-4 h-[36px] md:flex-col items-center justify-between py-3 px-3 md:h-[90px] bg-slate-100 rounded-md">
      <button onClick={handleIncrease}>
        <Image
          src={"/icon-plus.svg"}
          alt="icon"
          width={12}
          height={12}
          className="fill-moderate-blue"
        />
      </button>
      <span className="font-bold text-xs w-[24px] text-center text-moderate-blue">
        {likes}
      </span>
      <button onClick={handleDecrease}>
        <Image src={"/icon-minus.svg"} alt="icon" width={12} height={12} />
      </button>
    </div>
  );
};

export default Likes;
