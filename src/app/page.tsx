import NavigationBar from "@/components/navigation/NavigationBar";
import Main from "./main/page";

export default function Home() {
  return (
    <div className="bg-background mx-4 md:mx-42">
      <NavigationBar />
      <Main />
    </ div>
  );
}
