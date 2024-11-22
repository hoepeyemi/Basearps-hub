export const BET_TYPE_ROCK = "rock";
export const BET_TYPE_PAPER = "paper";
export const BET_TYPE_SCISSORS = "scissors";

interface TokenInfo {
  index: number;
  symbol: string;
  logo: string;
  betPrices: number[];
}

export const SUPPORTED_TOKEN_INFO: TokenInfo[] = [
  {
    index: 0,
    symbol: "ETH",
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=002",
    betPrices: [0.05, 0.1, 0.25, 0.5, 0.75, 1.0],
  },
];
export const VITE_WALLET_CONNECT_PROJECT_ID="ccf9c7b8543ae1237351c4095386be58"
export const REACT_PUBLIC_ONCHAINKIT_API_KEY="ccf9c7b8543ae1237351c4095386be58"
export const NEXT_PUBLIC_CDP_API_KEY="FoDCwjAGLk5mfwsHNyM8YpCVM1jz8gAs"


export const GLOBAL_STATE_SEED = "GLOBAL-STATE-SEED";
export const USER_STATE_SEED = "USER-STATE-SEED";
export const VAULT_SEED = "VAULT_SEED";

export const TREASURY_FEE = 3;
export const WIN_PERCENTAGE = [33, 66, 99];
export const REWARD_MUTIPLIER = [10, 0, 0];
