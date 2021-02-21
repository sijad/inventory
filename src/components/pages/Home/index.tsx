import Container from "components/Container";
import PlusIcon from "components/icons/Plus";
import SearchIcon from "components/icons/Search";
import SettingIcon from "components/icons/Setting";
import { useInventory } from "inventory";
import Row from "./components/Row";

export default function Home(): JSX.Element {
  const { assets } = useInventory();

  return (
    <Container>
      <main className="max-w-3xl pt-5 m-auto">
        <div className="flex md:space-x-3">
          <div className="fixed bottom-0 left-0 flex items-center flex-1 w-full px-5 py-3 md:py-5 md:relative md:rounded-2xl card">
            <button className="px-1 py-3 mr-3 text-white rounded-lg bg-primary">
              <PlusIcon className="w-10 h-4" />
            </button>
            <div className="relative w-full">
              <SearchIcon className="absolute top-0 left-0 w-5 mt-2 ml-2 paragraph" />
              <input className="w-full py-2 pl-8 pr-2 rounded-lg on-surface paragraph" />
            </div>
          </div>
          <div className="flex items-center w-full p-5 md:w-64 rounded-2xl card">
            <div className="w-full">
              <p className="flex items-center text-lg font-bold header">
                $ 370,345
                <span className="ml-1 text-xs text-green">{"+13%"}</span>
              </p>
              <p className="text-sm paragraph">balance</p>
            </div>
            <button className="p-2 rounded-lg on-surface">
              <SettingIcon className="w-4" />
            </button>
          </div>
        </div>
        <div className="flex mt-5">
          <div className="w-full p-5 paragraph rounded-2xl card">
            <div className="flex items-center mb-2 text-xs text-gray-700 dark:text-gray-600 space-x-3">
              <div className="w-8" />
              <div className="flex-1">
                <div>Asset</div>
              </div>
              <div className="flex items-center flex-1">
                <div className="flex-1">
                  <div>Balance</div>
                </div>
                <div className="flex-1 hidden md:block">
                  <div>Profit</div>
                </div>
              </div>
            </div>
            <div className="w-full space-y-4">
              {assets.map((asset) => {
                return <Row key={asset.id} asset={asset} />;
              })}
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
}
