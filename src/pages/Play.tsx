import React, { useEffect, useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import { toast } from "react-toastify";


import Navbar from "../components/navbar";
import SelectBet from "../components/selectBet";
import CheckBet from "../components/checkBet";
import {
  useActiveAccount,
  useReadContract,
  useSendTransaction,
} from "thirdweb/react";
import {
  createThirdwebClient,
  defineChain,
  getContract,
  prepareContractCall,
  readContract,
  sendTransaction,
} from "thirdweb";
import { useMutation } from "@apollo/client";
import Claim from "../components/claim";
import { baseSepolia } from "thirdweb/chains";



interface UserData {
  wallet: string;
  name: string;
  wins: number;
  dt: string;
}

const userData: UserData = {
  wallet: "0xb794f5ea0ba39494ce839613fffba74279579268",
  name: "India",
  wins: 1550,
  dt: "2024-06-10",
};

const Play: React.FC = () => {
    const [isBetState, setIsBetState] = useState(true);
    const [currentBetPrice, setCurrentBetPrice] = useState(0);
    const [currentBetType, setCurrentBetType] = useState("");
    const [lastResult, setLastResult] = useState(3);
  
    const resetBetPrice = (value) => {
      setCurrentBetPrice(value);
    };
  
    const resetBetType = (value) => {
      setCurrentBetType(value);
    };
  
    const account = useActiveAccount();
  
    const client = createThirdwebClient({
      clientId: "ba2e7656b75e87c1bce4fcd279c2ac5e",
    });
  
    const contract = getContract({
      client,
      chain: defineChain(84532),
      address: "0xB65635D9d00d76D77Bd6B0684fe69d8dfb58E0c2",
    });
  
    console.log(account);
  
    const { mutate: sendTransaction, data: transactionResult } =
      useSendTransaction();
  
    const approve = (spender, amount) => {
      const transaction = prepareContractCall({
        contract,
        method:
          "function approve(address spender, uint256 amount) returns (bool)",
        params: [spender, amount],
      });
      sendTransaction(transaction);
    };
  
    const stake = async (_amount) => {
      console.log("staking:", _amount);
  
      const transaction = prepareContractCall({
        contract,
        method: "function stake(uint256 _amount) payable",
        params: [_amount],
      });
      sendTransaction(transaction);
      console.log(transactionResult, "stake");
    };
  
    const onClickPlayButton = async () => {
      console.log(
        "currentBet ======================> ",
        currentBetPrice,
        currentBetType
      );
      if (currentBetPrice <= 0) {
        toast.warning("Please select bet price.");
        return;
      }
      if (currentBetType === "") {
        toast.warning("Please select rock, paper or scissors .");
        return;
      }
      approve(account?.address ?? '', currentBetPrice * 20);
      stake(currentBetPrice);
  
      setIsBetState(false);
    };
  
    const onClickPlayAgainButton = () => {
      setCurrentBetPrice(0);
      setCurrentBetType("");
      setIsBetState(true);
      setLastResult(3);
    };
  
    const tokenContract = getContract({
      client,
      chain: baseSepolia,
      address: "0x454faef0661850EE675B97F6C81445D203B4ef10",
    });
  
    const balance = async () => {
      const data = await readContract({
        address: tokenContract.address,
        abi: tokenContract.abi,
        functionName: "balanceOf",
        args: [account?.address ?? ''],
      } as any);
      console.log(data, "balance");
    };
    return (
      <div
        style={{
          backgroundColor: "rgb(16, 18, 35)",
          minHeight: "100dvh",
          height: "fit-content",
        }}
      >
        <Navbar />
        <Container
          sx={{
            paddingTop: { xs: "60px", sm: "80px", md: "150px" },
            display: "flex",
            flexDirection: "column",
            color: "white",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              width: "100%",
              maxWidth: '550px',
              marginTop: "40px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "",
                justifyContent: "space-between",
              }}
            >
              <h3
                style={
                  {
                    // height: "fit-content",
                    // margin: "auto",
                  }
                }
              >
                Position
              </h3>
              <h3 className=" ">Wallet</h3>
              <h3 className="">wins</h3>
            </div>
  
            <div
              style={{
                display: "flex",
                gap: "",
                justifyContent: "space-between",
              }}
            >
              <h3
                style={{
                  marginLeft: "20px",
                }}
              >
                1
              </h3>
              <h3 className=" ">
                {userData.wallet.slice(0, 4)}...
                {userData.wallet.slice(38, 42)}
              </h3>
              <h3 className="">{userData.wins}</h3>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: '10px', }}>
            <div 
              style={{
                display: "flex",
                gap: '6px',
                alignItems: 'center',
              }}
            >
              <p
                 style={{
                  fontSize: "20px",
                  textAlign: 'center',
                }}
              >
                  {"0"} bsETH
              </p>
              <Claim contract={contract} account={typeof account === 'string' ? account : ''} />
            </div>
          </div>
  
          {isBetState ? (
            <SelectBet
              resetBetPrice={resetBetPrice}
              resetBetType={resetBetType}
            />
          ) : (
            <CheckBet
              selectedBetType={currentBetType}
              onClickPlayAgainButton={onClickPlayAgainButton}
              lastResult={lastResult}
            />
          )}
          {isBetState && (
            <button
              className="btn"
              onClick={onClickPlayButton}
              style={{
                borderRadius: "20px",
                // fontSize: { xs: "16px", sm: "28px", md: "36px" },
                padding: "16px 50px",
                fontWeight: "700",
                marginTop: "60px",
                fontSize: "24",
              }}
            >
              Play
            </button>
          )}
        </Container>
      </div>
    );
  }
  
  export default Play;
  