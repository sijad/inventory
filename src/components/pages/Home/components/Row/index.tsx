export default function Row(): JSX.Element {
  return (
    <div className="flex items-center space-x-3">
      <img
        className="w-8"
        src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
        alt="bitcoin logo"
      />
      <div className="flex-1 leading-4">
        <div className="font-bold header">Bitcoin</div>
        <div className="text-xs">BTC</div>
      </div>
      <div className="flex items-center flex-1">
        <div className="flex-1 leading-4">
          <div className="text-sm font-bold">0.3445233</div>
          <div className="text-xs text-gray-800 dark:text-gray-500">
            $ 332,233.42
          </div>
        </div>
        <div className="flex-1 hidden leading-4 md:block">
          <div className="text-sm font-bold">$ 3,323.00</div>
          <div className="text-xs text-green">+13%</div>
        </div>
      </div>
    </div>
  );
}
