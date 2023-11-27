import React from "react";
import { Carousel } from "react-bootstrap";
import { Box, Image } from "@chakra-ui/react";
import hero1 from "../assets/images/hero/1.jpeg";
import hero2 from "../assets/images/hero/2.jpeg";
import hero3 from "../assets/images/hero/3.jpeg";
import hero4 from "../assets/images/hero/4.jpeg";
import hero5 from "../assets/images/hero/5.jpeg";
import hero6 from "../assets/images/hero/6.jpeg";

const HeroCarousel = () => {
  return (
    <Carousel style={{ height: "500px", width: "100%" }}>
      {/* First Item */}
      <Carousel.Item>
        <Box w="100%" h="500px">
          <Image objectFit="cover" src={hero1} alt="First slide" />
        </Box>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Second Item */}
      <Carousel.Item>
        <Box w="100%" h="500px">
          <Image src={hero2} alt="First slide" />
        </Box>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Third Item */}
      <Carousel.Item>
        <Box w="100%" h="500px">
          <Image src={hero3} alt="First slide" />
        </Box>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Forth Item */}
      <Carousel.Item>
        <Box w="100%" h="500px">
          <Image src={hero4} alt="First slide" />
        </Box>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Fifth Item */}
      <Carousel.Item>
        <Box w="100%" h="500px">
          <Image src={hero5} alt="First slide" />
        </Box>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Sixth Item */}
      <Carousel.Item>
        <Box w="100%" h="500px">
          <Image src={hero6} alt="First slide" />
        </Box>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;
