import { FC } from "react";
import { useDodos } from "src/context/Dodos";
import { useWallet } from "src/context/Wallet";
import { DODO_STATE } from "src/program/dodo";

export const Home: FC = () => {
  const { balance, connect, wallet, disconnect } = useWallet();
  const { dodos, createDodo, updateDodo } = useDodos();

  console.log("___", dodos);
  const create = async () => {
    const dodo = await createDodo({
      title: "Hello dodo",
      tagline: "🔥 m",
      state: DODO_STATE.TODO,
      create_time: Date.now(),
      update_time: Date.now(),
    });

    console.log("___", dodo);

    // const _dodo = dodos[1];
    // await updateDodo(_dodo.publicKey, {
    //   ..._dodo.data,
    //   state: DODO_STATE.IN_PROGRESS,
    //   update_time: Date.now(),
    // });
  };

  return (
    <main>
      <h1>Balance: {balance}</h1>
      {!wallet?.connected && <button onClick={connect}>connect</button>}
      {wallet?.connected && (
        <>
          <button onClick={disconnect}>disconnect</button>
          <button onClick={create}>create</button>
        </>
      )}
    </main>
  );
};
