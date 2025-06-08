import Button from "./components/ui/Button";
import PlusIcon from "./icons/PlusIcon";
import ShareIcon from "./icons/ShareIcon";

function App() {
  return (
    <>
      <Button
        startIcon={<ShareIcon size={"md"} />}
        size="md"
        variant="primary"
        text="Share Link"
        onClick={() => {}}
      />{" "}
      <Button
        startIcon={<PlusIcon size={"md"} />}
        size="md"
        variant="secondary"
        text="Add Content"
        onClick={() => {}}
      />{" "}
      <h1 className="text-purple-600">Hello</h1>
    </>
  );
}

export default App;
