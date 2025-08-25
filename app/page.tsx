import Gallery from "@/components/Gallery";

export default function Home() {
  const photos = [
    "chicago.jpg", "chicago-2.jpg", "chicago-3.jpg", "chicago-9.jpg",
    "chicago-5.jpg", "chicago-8.jpg", "chicago-4.jpg", "chicago-7.jpg",
    "oregon-2.jpg", "oregon-3.jpg", "oregon.jpg",
    "other.jpg", "other-2.jpg", "other-3.jpg", "other-4.jpg", "other-5.jpg",
    "other-6.jpg", "other-7.jpg", "other-8.jpg", "other-9.jpg", "other-10.jpg",
    "other-11.jpg",
    "road-trip.jpg", "road-trip-2.jpg",
    "san-diego.jpg", "san-diego-2.jpg", "san-diego-3.jpg", "san-diego-4.jpg",
    "san-diego-5.jpg", "san-diego-6.jpg", "san-diego-7.jpg", "san-diego-8.jpg",
    "san-diego-9.jpg", "san-diego-10.jpg"
  ];

  return (
    <main className="p-4">
      <Gallery photos={photos} />
    </main>
  );
}