import Content from "@/components/Content";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main className="p-4 sm:px-8 sm:py-6 md:px-14 md:py-8 min-h-[calc(100vh-4rem)]">
      {/* upper section */}
      <Title />

      {/* Content section */}
      <Content />
    </main>
  );
}
