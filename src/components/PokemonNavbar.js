import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const PokemonNavbar = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="https://www.seekpng.com/png/small/14-144204_pixel-pokeball-png-picture-black-and-white-stock.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Pokeverse | All Pokemon
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default PokemonNavbar;
