import Button from "./components/Button";
import Card from "./components/Card";
import CreateContentModal from "./components/CreateContentModal";
import PlusIcon from "./icons/PlusIcon";
import ShareIcon from "./icons/ShareIcon";

const App = () => {
  return (
    <div className="p-4">
      <CreateContentModal onClose={() => {}} open={true} />

      <div className="flex items-center justify-end gap-4">
        {" "}
        <Button
          startIcon={<PlusIcon size={"md"} />}
          variant="primary"
          text="Add Content"
        />
        <Button
          startIcon={<ShareIcon size={"md"} />}
          variant="secondary"
          text="Share Brain"
        />
      </div>
      <div className="flex gap-4 mt-4">
        <Card
          type="youtube"
          title="First Video"
          link="https://www.youtube.com/watch?v=JgDNFQ2RaLQ"
        />
        <Card
          type="twitter"
          title="First Tweet"
          link="https://x.com/Wisdom_HQ/status/1932062870159999449"
        />
      </div>
    </div>
  );
};

export default App;
