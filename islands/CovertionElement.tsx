import { useState } from "preact/hooks";
import ConvertionSwitch from "./CovertionSwitch.tsx";

export default function CovertionElement() {
  const [conversionType, setConversionType] = useState(true);

  const handleInputChange = async (event: Event) => {
    const input = (event.target as HTMLInputElement).value;
    const endpoint = conversionType
      ? `e2e-api.deno.dev/${input}`
      : `e2e-api.deno.dev/reverse/${input}`;
    try {
      const response = await fetch(`https://${endpoint}`);
      let result = await response.text();
      if (conversionType === false) {
        result = result.replace(/,/g, "/");
      }
      const resultElement = document.getElementById("result");
      if (resultElement) {
        resultElement.innerText = result;
      }
    } catch (error) {
      console.error("Error fetching conversion result:", error);
      const resultElement = document.getElementById("result");
      if (resultElement) {
        resultElement.innerText = "Error";
      }
    }
  };

  const handleConversionSwitch = (newConversionType: boolean) => {
    setConversionType(newConversionType);
    const inputElement = document.getElementById("input");
    const resultElement = document.getElementById("result");
    if (resultElement) {
      resultElement.innerText = "";
    }
    if (inputElement && inputElement instanceof HTMLInputElement) {
      inputElement.value = "";
    }
  };

  const handleCopyClick = () => {
    const resultElement = document.getElementById("result");
    const copyButton = document.getElementById("copy");
    if (resultElement) {
      navigator.clipboard.writeText(resultElement.innerText).then(() => {
        console.log("Text copied to clipboard");
        if (copyButton) {
          copyButton.innerText = "Copied!";
          setTimeout(() => {
            copyButton.innerText = "Copy";
          }, 1000);
        }
      }).catch((error) => {
        console.error("Error copying text to clipboard:", error);
      });
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === " ") {
      handleCopyClick();
    }
  };

  globalThis.addEventListener("keydown", handleKeyDown);

  return (
    <section class="flex flex-col gap-1 w-full sm:h-[80%] lg:h-max rounded-xl overflow-hidden">
      <section class="bg-zinc-100 dark:bg-zinc-900 p-10 flex flex-col justify-center items-center gap-4 w-full h-full">
        <h2 class="font-bold text-sm">Select a conversion type</h2>
        <ConvertionSwitch setConversionType={handleConversionSwitch} />

        <h2 class="font-bold text-sm mt-4">Input</h2>
        <input
          type="text"
          class="border border-gray-300 dark:border-gray-700 p-2 rounded w-full bg-zinc-200 dark:bg-zinc-800"
          id="input"
          placeholder="Enter an emoji or emoticon"
          onChange={handleInputChange}
        />
      </section>

      <section class="bg-zinc-100 dark:bg-zinc-900 p-10 flex flex-col justify-center items-center gap-4 size-full">
        <h2 class="font-bold text-sm">Result</h2>
        <p id="result" class="text-3xl font-black">Empty</p>
        <button
          class="bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 hover:dark:bg-zinc-700 py-2 px-6 rounded-xl w-max transition-colors"
          id="copy"
          onClick={handleCopyClick}
        >
          Copy
        </button>
      </section>
    </section>
  );
}
