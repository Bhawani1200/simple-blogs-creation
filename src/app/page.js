import Image from "next/image";
import Card from "./components/Card";
export default function Home() {
  return (
    <div className="flex flex-wrap justify-evenly">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}