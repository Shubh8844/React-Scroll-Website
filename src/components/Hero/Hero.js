import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroP,
  HeroH1,
  HeroBtnWrapper,
  HeroContent,
  ArrowForward,
  ArrowRight
} from "./HeroElements.js";
import { Button } from "../ButtonElements.js";
export default function Hero() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          src="data:image/jpeg;base64,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"
          type="video/mp4"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account today and receive $250 credit towards your
          next payment
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}
