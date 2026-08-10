import styled from "styled-components";
import poster1 from "../../assets/images/posters/image 202.png";
import poster2 from "../../assets/images/posters/image 77.png";
import poster3 from "../../assets/images/posters/image 78.png";
import poster4 from "../../assets/images/posters/image 91.png";
import poster5 from "../../assets/images/posters/Ce.png";

const movies = [
  {
    id: 1,
    title: "Napoleon",
    image: poster1,
  },
  {
    id: 2,
    title: "The Flash",
    image: poster2,
  },
  {
    id: 3,
    title: "Oppenheimer",
    image: poster3,
  },
    {
      id: 4,
      title: "John Wick",
      image: poster4,
    },
  {
    id: 5,
    title: "Barbie",
    image: poster5,
  },
];

export const Movie = () => {
  return (
    <MovieSection>
      
      <div className="px-6 mb-4">
        <h1 className="text-white text-2xl font-bold">Movies</h1>
       
        <Navbar>
        <NavLinks>
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Movies</NavLink>
          <NavLink href="#">Series</NavLink>
        </NavLinks>
      </Navbar>
      </div>
      <div className="overflow-x-auto">
        <div className="flex gap-6 px-6 w-max">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card shrink-0">
              <img src={movie.image.toString()} alt={movie.title} />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </MovieSection>
  );
};

const MovieSection = styled.section`
  background-color: #000;
  padding: 24px;

  .movie-card {
    width: 270px;
    background: #111;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }

    img {
      width: 100%;
      height: 418px;
      object-fit: cover;
      display: block;
    }

    h3 {
      color: #fff;
      padding: 12px;
      margin: 0;
      text-align: center;
      font-size: 16px;
    }
  }
`;

const Navbar = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  border-bottom: 1px solid #1f2937;
  margin-bottom: 16px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 24px;
`;

const NavLink = styled.a`
  color: #9ca3af;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }
`;
