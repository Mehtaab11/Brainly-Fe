import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import CreateContentModal from "../components/CreateContentModal";
import PlusIcon from "../icons/PlusIcon";
import ShareIcon from "../icons/ShareIcon";
import Sidebar from "../components/Sidebar";
import useContent from "../hooks/useContent";

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const content = useContent();
  console.log("Content in Dashboard:", content);

  return (
    <div>
      <Sidebar />

      <div className="p-4 ml-72 min-h-screen bg-gray-100">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />

        <div className="flex items-center justify-end gap-4">
          {" "}
          <Button
            startIcon={<PlusIcon size={"md"} />}
            variant="primary"
            text="Add Content"
            onClick={() => {
              setModalOpen(true);
              console.log("clicked");
            }}
          />
          <Button
            startIcon={<ShareIcon size={"md"} />}
            variant="secondary"
            text="Share Brain"
          />
        </div>
        <div className="flex overflow-x-scroll scrollbar-hide gap-4 mt-4">
          { content ? content.map((item) => (
            <Card
              key={item.id}
              type={item.type}
              title={item.title}
              link={item.link}
            />
          )) : (
            <p>No content available</p>
          )}

          {/* Example Cards */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
