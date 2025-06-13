import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import CreateContentModal from "../components/CreateContentModal";
import PlusIcon from "../icons/PlusIcon";
import ShareIcon from "../icons/ShareIcon";
import Sidebar from "../components/Sidebar";
import useContent from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../config";

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const content = useContent();
  console.log("Content in Dashboard:", content);

  async function shareBrain() {
    const response = await axios.post(
      BACKEND_URL + "/api/v1/brain/share",
      { share: true },
      {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    console.log("Response from shareBrain:", response.data);
    const shareUrl = response.data.link;

    navigator.clipboard
      .writeText(shareUrl)
      .then(() => {
        alert("copied to clipboard");
      })
      .catch((err) => {
        console.log(err);
      }); 
  }

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
            onClick={shareBrain}
            startIcon={<ShareIcon size={"md"} />}
            variant="secondary"
            text="Share Brain"
          />
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
          {content ? (
            content.map((item) => (
              <Card
                key={item.id}
                type={item.type}
                title={item.title}
                link={item.link}
              />
            ))
          ) : (
            <p>No content available</p>
          )}

          {/* Example Cards */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
