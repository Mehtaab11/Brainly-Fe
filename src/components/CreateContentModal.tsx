import React, { useRef, useState } from "react";
import CrossIcon from "../icons/CrossIcon";
import Button from "./Button";
import Input from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum ContentType {
  YOUTUBE = "youtube",
  TWITTER = "twitter",
}

const CreateContentModal = ({ open, onClose }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(ContentType.YOUTUBE);

  const addContent = async () => {
    const link = linkRef.current?.value;
    const contentTitle = titleRef.current?.value;
    const contentType: ContentType = type;
    if (!link || !contentTitle || !contentType) {
      alert("Please fill in all fields");
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      alert("You are not logged in");
      return;
    }
    console.log(
      "link:",
      link,
      "title:",
      contentTitle,
      "contentType:",
      contentType,
      "token:",
      token
    );
    // Make sure to handle the case where the token is not available

    axios.post(
      BACKEND_URL + "/api/v1/content",
      {
        title: contentTitle,
        link: link,
        type: contentType,
      },
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    alert("Content added successfully");
    onClose();
  };

  return (
    <div className="h-full w-full">
      {open && (
        <>
          {" "}
          <div
            onClick={onClose}
            className="fixed h-screen w-screen top-0 left-0 flex items-center justify-center bg-slate-500 opacity-60"
          ></div>
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex fixed top-[30%] left-[45%] flex-col justify-center"
          >
            <span className="bg-white opacity-100 p-4 rounded">
              <div className="flex justify-end">
                <div onClick={onClose} className="cursor-pointer">
                  <CrossIcon size="md" />
                </div>
              </div>
              <div>
                <Input
                  label="Title"
                  referance={titleRef}
                  placeholder="Add title"
                />
                <Input
                  label="Link"
                  referance={linkRef}
                  placeholder="Add Link"
                />
                {/* <Input referance={typeRef} placeholder="Add Type" /> */}
                {/* <Input /> */}
              </div>
              <div className="flex my-4 justify-center gap-4 mt-4">
                <Button
                  size="sm"
                  onClick={() => setType(ContentType.YOUTUBE)}
                  variant={type === ContentType.YOUTUBE ? "selected" : "hollow"}
                  text="YouTube"
                />
                <Button
                  size="sm"
                  onClick={() => setType(ContentType.TWITTER)}
                  variant={type === ContentType.TWITTER ? "selected" : "hollow"}
                  text="Twitter"
                />
              </div>
              <div className="flex justify-center ">
                {" "}
                <Button onClick={addContent} variant="primary" text="Submit" />
              </div>{" "}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default CreateContentModal;
