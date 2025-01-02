import CovertionElement from "../islands/CovertionElement.tsx";

export default function Home() {
  return (
    <main class="mt-20 h-[90vh]">
      <h1 class="font-black mb-1 text-3xl relative">
        Emoji to Emoticon
      </h1>
      <small class="mb-10 block">
        Convert emojis to emoticons and <b>vice versa</b>
      </small>

      <CovertionElement />

      <footer class="flex flex-col gap-3 mt-10 items-center justify-center">
        <div class="flex flex-row gap-2">
          <a
            href="https://github.com/GabsEdits/compliment-generator"
            target="_blank"
            class="underline text-zinc-600 dark:text-zinc-300 dark:hover:text-zinc-200 hover:text-zinc-950 transition-colors font-extrabold duration-500"
          >
            Source Code
          </a>

          <a
            href="https://funfact-api.deno.dev"
            target="_blank"
            class="underline text-zinc-600 dark:text-zinc-300 dark:hover:text-zinc-200 hover:text-zinc-950 transition-colors font-extrabold duration-500"
          >
            API
          </a>
        </div>

        <p>
          Made with {Math.random() < 0.5 ? "❤️" : "<3"} for{" "}
          <a
            class="font-black underline text-black dark:text-white transition-colors"
            href="https://highseas.hackclub.com"
          >
            Highseas
          </a>
        </p>
        <p class="flex flex-col gap-1 sm:hidden lg:block">
          <small>
            <b>Tip:</b> Press Space to copy the result
          </small>
        </p>
      </footer>
    </main>
  );
}
