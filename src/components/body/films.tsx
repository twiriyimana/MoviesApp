import styled from "styled-components";

import poster1 from "../../assets/images/posters/image 202.png";
import poster2 from "../../assets/images/posters/image 77.png";
import poster3 from "../../assets/images/posters/image 78.png";
import poster4 from "../../assets/images/posters/image 91.png";
import poster5 from "../../assets/images/posters/Ce.png";

const movies = [
  {
    id: 1,
    // title: "Napoleon",
    image: poster1,
  },
  {
    id: 2,
    // title: "The Flash",
    image: poster2,
  },
  {
    id: 3,
    // title: "Oppenheimer",
    image: poster3,
  },
  {
    id: 4,
    // title: "John Wick",
    image: poster4,
  },
   {
    id: 5,
    // title: "Barbie",
    image: poster5,
  },
];

export const Films = () => {
  return (
    <section className="bg-black py-8">
      <div className="px-6 mb-6 flex justify-between items-center">
        <h2 className="text-white text-3xl font-bold">Trends</h2>
        <button className="px-4 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition">
          See All
        </button>
      </div>
      <div className="overflow-x-auto">
        <div className="flex gap-5 px-6 w-max">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="relative w-70 h-80 rounded-3xl overflow-hidden shrink-0 group cursor-pointer"
            >
              <img
                src={movie.image.toString()}
                // alt={movie.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
              <button className="absolute top-5 right-5 w-16 h-16 rounded-2xl bg-black/70 backdrop-blur-md text-white text-4xl font-light flex items-center justify-center hover:bg-red-600 transition">
                +
              </button>
              <div className="absolute bottom-5 left-5">
                <h2 className="text-white text-2xl font-bold">
                  {/* {movie.title} */}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
