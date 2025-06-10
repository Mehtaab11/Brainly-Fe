import React from "react";
import ShareIcon from "../icons/ShareIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

const Card = ({ title, link, type }: CardProps) => {
  return (
    <div>
      {" "}
      <div className="bg-white max-w-76 p-8 rounded-md min-h-48 min-w-72 border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-base ">
            <div className="pr-2 text-gray-500">
              <ShareIcon size="base" />
            </div>
            {title}
          </div>
          <div className="flex ">
            <div className="pr-2 text-gray-500">
              <a href={link}>
                {" "}
                <ShareIcon size="base" />
              </a>
            </div>
            <div className="pr-2 text-gray-500">
              <ShareIcon size="base" />
            </div>
          </div>
        </div>
        <div className="pt-4">
          {type === "youtube" && (
            <iframe
              className="w-full  mt-4 rounded-sm"
              src={link.replace("watch?v=", "embed/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
          {type === "twitter" && (
            <blockquote className="twitter-tweet">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
