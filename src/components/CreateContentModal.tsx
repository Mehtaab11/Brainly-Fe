import React from "react";
import CrossIcon from "../icons/CrossIcon";

const CreateContentModal = ({ open, onClose }) => {
  return (
    <div>
      {open && (
        <div className="fixed h-screen w-screen top-0 left-0 flex items-center justify-center bg-slate-500 opacity-60">
          <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 p-4 rounded">
              <div className="flex justify-end">
                <CrossIcon size="md" />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateContentModal;
