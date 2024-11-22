import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText, ctaLink }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        color: "white",
        backgroundColor: "rgb(16, 18, 35)",
        marginTop: "20px",
        paddingTop: "50px",
      }}
    >
      <div className="hero">
        <p className="hero_title">
         
          Unlock real-world crypto ROCK PAPER SCISSORS online game
          </p>
        
        <p className="hero_cont">
        Do you have a dispute with your friend?
        <br/>
Resolve it online!
        </p>

        <button
          className="btn"
          style={{
            margin: "auto",
            color: "black",
          }}
          onClick={() => {
            window.open('https://basearpsrps-i5xh.vercel.app/play', '_blank');
          }}
        >
          Play Now
        </button>
      </div>

      
    </div>
  );
};

export default Hero;
