import { useState } from "preact/hooks";

interface CovertionSwitchProps {
  setConversionType: (type: boolean) => void;
}

export default function CovertionSwitch(
  { setConversionType }: CovertionSwitchProps,
) {
  const [conversionType, setLocalConversionType] = useState(true);

  const handleSwitch = () => {
    const newConversionType = !conversionType;
    setLocalConversionType(newConversionType);
    setConversionType(newConversionType);
  };

  return (
    <div class="flex flex-row gap-[0.1rem] rounded-xl overflow-hidden">
      <button
        onClick={handleSwitch}
        class={`${
          conversionType
            ? "bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-700 hover:dark:bg-zinc-600"
            : "bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 hover:dark:bg-zinc-700"
        } transition-colors py-2 px-6`}
      >
        Emoji
      </button>
      <button
        onClick={handleSwitch}
        class={`${
          !conversionType
            ? "bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-700 hover:dark:bg-zinc-600"
            : "bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 hover:dark:bg-zinc-700"
        } transition-colors py-2 px-6`}
      >
        Emoticon
      </button>
    </div>
  );
}
