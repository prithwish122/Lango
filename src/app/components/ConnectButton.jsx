import { useAccount, useConnect, useDisconnect, useSwitchChain } from "wagmi";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { formatAddress } from "@/app/lib/utils";
import { ChevronDown } from "lucide-react";

export const ConnectButton = () => {
const { address, isConnected, chain } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChain, chains } = useSwitchChain();

  const connector = connectors[0];

  return (
    <div>
      {isConnected ? (
        <div className="flex-col md:flex-row flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-white h-fit md:px-3 py-2 rounded-2xl font-semibold flex justify-center  items-center gap-1">
              {chain?.name.split(" ").slice(0, 2).join(" ")} <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full justify-center rounded-2xl">
              {chains.map(
                (c) =>
                  c.id !== chain?.id && (
                    <DropdownMenuItem
                      key={c.id}
                      onClick={() => switchChain({ chainId: c.id })}
                      className="cursor-pointer w-full flex justify-center rounded-2xl font-semibold"
                    >
                      {c.name}
                    </DropdownMenuItem>
                  )
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-white h-fit px-7 py-2 rounded-2xl font-semibold flex items-center gap-1">
              {formatAddress(address)} <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full flex justify-center rounded-2xl">
              <DropdownMenuItem
                onClick={() => disconnect()}
                className="text-red-400 cursor-pointer w-full flex justify-center rounded-2xl font-semibold"
              >
                Disconnect
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <Button
          className="bg-blue-500 rounded-xl hover:bg-blue-600 shadow-xl md:px-10 font-semibold"
          onClick={() => connect({ connector })}
        >
          Connect Wallet
        </Button>
      )}
    </div>
  )
}