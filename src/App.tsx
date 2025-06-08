import Button from "./components/ui/Button";
import PlusIcon from "./icons/PlusIcon";

function App() {
  return (
    <>
      <Button size="md" variant="primary" text="Click Me" onClick={() => {}} />{" "}
      <Button
        startIcon={<PlusIcon size={6} />}
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
