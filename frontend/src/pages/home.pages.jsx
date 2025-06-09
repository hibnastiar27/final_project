import { Navbar, Carousel, CardDestinasi } from "../components";

const destinations = [
  {
    id: 1,
    title: "Labuan Bajo",
    location: "NTT, Indonesia",
    image:
      "https://images.unsplash.com/photo-1619880889144-d6e252999afa?q=80&w=1974",
  },
  {
    id: 2,
    title: "Raja Ampat",
    location: "Papua Barat, Indonesia",
    image:
      "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?q=80&w=2070",
  },
  {
    id: 3,
    title: "Gunung Bromo",
    location: "Jawa Timur, Indonesia",
    image:
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=2071",
  },
  {
    id: 4,
    title: "Candi Borobudur",
    location: "Magelang, Indonesia",
    image:
      "https://images.unsplash.com/photo-1620549146396-9024d914cd99?q=80&w=2071",
  },
  {
    id: 5,
    title: "Pantai Kuta",
    location: "Bali, Indonesia",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 6,
    title: "Danau Toba",
    location: "Sumatera Utara, Indonesia",
    image:
      "https://images.unsplash.com/photo-1440558929809-1412944a6225?q=80&w=1929",
  },
  {
    id: 7,
    title: "Pantai Kuta",
    location: "Bali, Indonesia",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 8,
    title: "Danau Toba",
    location: "Sumatera Utara, Indonesia",
    image:
      "https://images.unsplash.com/photo-1440558929809-1412944a6225?q=80&w=1929",
  },
];

export const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="">
        <Carousel destinations={destinations} />
      </div>

      <section className="container px-4 py-6 mx-auto">
        <h2 className="mb-4 text-2xl font-bold">Rekomendasi</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destinations.map((dest) => (
            <CardDestinasi key={dest.id} {...dest} />
          ))}
        </div>
      </section>
    </div>
  );
};
