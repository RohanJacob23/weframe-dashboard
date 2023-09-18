import Content from "@/components/Content";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main className="px-14 py-8 min-h-[calc(100vh-4rem)]">
      {/* upper section */}
      <Title />

      {/* Content section */}
      <Content />
    </main>
  );
}
