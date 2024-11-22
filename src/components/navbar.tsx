import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Box, Button, IconButton, Typography, AppBar, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import WalletComponents from "./walletComponents"
import '@coinbase/onchainkit/styles.css'; 
import OnchainProviders from "src/OnchainProviders";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider, useQueryClient, useQuery } from "@tanstack/react-query";
import { http, WagmiProvider, createConfig } from 'wagmi';
import { base } from 'wagmi/chains';
import { mock } from 'wagmi/connectors';


interface NavbarProps {
  isConnected: boolean;
  address: string | undefined;
  onConnect: () => void;
  onDisconnect: () => void;
}

// const renderWithProviders = (component: JSX.Element) => {
export default function Navbar({}) {
    const navigate = useNavigate();
    const [balance, setBalance] = useState(0);
    const [backButton, setBackButton] = useState(false);
  
  
    const location = useLocation();
  
    useEffect(() => {
      console.log("***************location changed ", location);
      if (location.pathname === "/play") setBackButton(true);
      else setBackButton(false);
    }, [location]);
    const queryClient = new QueryClient();
  
  
    useEffect(() => {
      const interval = setInterval(() => {
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  
  
  
  
    // const account = useActiveAccount();
  
    return (
      <>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            width: "100vw",
            backgroundColor: "rgb(16, 18, 35)",
            padding: { xs: "0 10px", sm: "0 20px" },
            display: "flex",
            flexDirection: "row",
            borderBottom: "rgba(143, 143, 144, 0.14) 2px solid",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: "1",
            "& .MuiBox-root": {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            },
          }}
        >
          <Box
            sx={{
              cursor: "pointer",
              "& img": {
                margin: { xs: "20px 0px", sm: "20px 0px" },
  
                height: { xs: "32px", sm: "32px", md: "32px" },
              },
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            <img alt="" src="./logo192.png"
  
  
  
            />
            <Typography
              sx={{
                display: { xs: "none", sm: "flex" },
                fontSize: { sm: "20px", md: "24px" },
                fontWeight: "400",
                margin: "0.3rem",
                color: "white",
              }}
            >
              BASEARPS
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{
                marginLeft: { xs: "10px", sm: "20px", md: "30px" },
                "& .wallet-adapter-button": {
                  height: { xs: "42px", sm: "46px", md: "50px" },
                  borderRadius: "10px",
                  border: '2px white solid',
                  background: "transparent",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  color: "white",
                  fontSize: { xs: "16px", sm: "18px", md: "18px" },
                  fontWeight: "600",
                },
              }}
            >
         
                      <QueryClientProvider client={queryClient}>
<WalletComponents />
</QueryClientProvider>
            </Box>
            
          </Box>
        </Box>
      </>
    );
  }
