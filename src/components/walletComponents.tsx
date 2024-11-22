'use client';
import {
  Address,
  Avatar,
  EthBalance,
  Identity,
  Name,
} from '@coinbase/onchainkit/identity';
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownBasename,
  WalletDropdownDisconnect,
  WalletDropdownFundLink,
  WalletDropdownLink,
} from '@coinbase/onchainkit/wallet';
import LoginButton from './login';

type WalletWrapperParams = {
  text?: string;
  className?: string;
  withWalletAggregator?: boolean;
};
export default function WalletComponents({
  className,
  text,
  withWalletAggregator = false,
}: WalletWrapperParams) {
  return (
    <>
<Wallet>
  <ConnectWallet withWalletAggregator>
    <Avatar className="h-6 w-6" />
    <Name />
  </ConnectWallet>
  <WalletDropdown>
    <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
      <Avatar />
      <Name />
      <Address />
      <EthBalance />
    </Identity>
    <WalletDropdownFundLink />
    <WalletDropdownBasename />

    <WalletDropdownLink 
      icon="wallet" 
      href="https://keys.coinbase.com"
    >
      Wallet
    </WalletDropdownLink>
    {/* <WalletDropdownFundLink /> */}

    <WalletDropdownDisconnect />
  </WalletDropdown>
</Wallet>
{/* <LoginButton /> */}
{/* <ConnectWallet /> */}
    </>
  );
}
