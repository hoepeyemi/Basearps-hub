import WalletWrapper from './walletwrapper';

export default function LoginButton() {
  return (
    <WalletWrapper
      className="min-w-[90px]"
      text="Log in"
      withWalletAggregator={true}
    />
  );
}
