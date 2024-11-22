export interface LeaderboardItem {
  wallet: string;
  name: string;
  wins: number;
  dt: string;
}

export const Leaderboard: LeaderboardItem[] = [
    {
        wallet: "0xb794f5ea0ba39494ce839613fffba74279579268",
        name: "India",
        wins : 1550,
        dt: "2024-06-10"
    },
    {
        wallet: "0xb794f5ea0ba39494ce839613fffba74279579268",
        name: "USA",
        wins : 2310,
        dt: "2024-06-27"
    },
    {
        wallet: "0xb794f5ea0ba39494ce839613fffba74279579268",
        name: "Chaina",
        wins : 350,
        dt: "2021-08-17"
    },
    {
        wallet: "0xb794f5ea0ba39494ce839613fffba74279579268",
        name: "Japan",
        wins : 2100,
        dt: "2021-10-23"
    },
    {
        wallet: "0xb794f5ea0ba39494ce839613fffba74279579268",
        name: "London",
        wins : 1250,
        dt: "2022-01-22"
    },
    {
        wallet: "0xb794f5ea0ba39494ce839613fffba74279579268",
        name: "Canada",
        wins : 5250,
        dt: "2022-01-21"
    }
  // ... rest of the data
];
