import Button from "./components/Button";
import PlusIcon from "./icons/PlusIcon";
import ShareIcon from "./icons/ShareIcon";

const App = () => {
  return (
    <div>
      <Button
        startIcon={<PlusIcon size={"md"} />}
        variant="primary"
        text="Add Content"
      />
      <Button
        startIcon={<ShareIcon size={"md"} />}
        variant="secondary"
        text="Share Link"
      />
    </div>
  );
};

export default App;
