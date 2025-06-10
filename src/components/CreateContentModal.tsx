import React from "react";
import CrossIcon from "../icons/CrossIcon";
import Button from "./Button";

const CreateContentModal = ({ open, onClose }) => {
  return (
    <div>
      {open && (
        <div
          onClick={onClose}
          className="fixed h-screen w-screen top-0 left-0 flex items-center justify-center bg-slate-500 opacity-60"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col justify-center"
          >
            <span className="bg-white opacity-100 p-4 rounded">
              <div className="flex justify-end">
                <div onClick={onClose} className="cursor-pointer">
                  <CrossIcon size="md" />
                </div>
              </div>
              <div>
                <Input onChange={() => {}} placeholder="Add Link" />
                <Input onChange={() => {}} placeholder="Add title" />
                {/* <Input /> */}
              </div>
              <div className="flex justify-center ">
                {" "}
                <Button variant="primary" text="Submit" />
              </div>{" "}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateContentModal;

interface InputProps {
  onChange: () => void;
  placeholder?: string;
}

function Input({ onChange, placeholder }: InputProps) {
  return (
    <div>
      <input
        placeholder={placeholder}
        type="text"
        className="px-4 py-2 rounded border m-2 "
        onChange={onChange}
      />
    </div>
  );
}
