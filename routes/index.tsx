import CovertionElement from "../islands/CovertionElement.tsx";

export default function Home() {
  return (
    <main class="mt-20 h-[90vh]">
      <div class="absolute top-5 right-5 flex flex-row gap-2 items-center justify-center">
        <a
          href="https://github.com/GabsEdits/emoji2emoticon"
          target="_blank"
          class="text-black dark:text-zinc-300 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 hover:dark:bg-zinc-700 hover:text-black dark:hover:text-white px-3 py-2 rounded-xl transition-colors"
        >
          <i class="fab fa-github text-xl"></i>
        </a>
        <a
          href="https://e2e-api.deno.dev"
          target="_blank"
          class="text-black dark:text-zinc-300 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 hover:dark:bg-zinc-700 hover:text-black dark:hover:text-white px-3 py-2 rounded-xl transition-colors"
        >
          <i class="fas fa-server text-xl"></i>
        </a>
      </div>
      <div class="flex flex-col gap-2 justify-center items-center">
        <h1 class="font-black text-3xl">
          Emoji to Emoticon
        </h1>
        <small class="mb-10">
          Convert emojis to emoticons and <b>vice versa</b>
        </small>
      </div>

      <CovertionElement />

      <footer class="flex flex-col gap-3 mt-10 items-center justify-center">
        <p>
          Made with {Math.random() < 0.5 ? "❤️" : "<3"} for{" "}
          <a
            class="font-black underline text-black dark:text-white transition-opacity hover:opacity-50 hover:text-black dark:hover:text-white"
            href="https://highseas.hackclub.com"
          >
            Highseas
          </a>
        </p>
        <p class="flex flex-col gap-1 sm:hidden lg:block">
          <small class="opacity-50">
            <i class="fas fa-lightbulb"></i> <b>Pro-Tip:</b>{" "}
            Press Space to copy the result
          </small>
        </p>
      </footer>
    </main>
  );
}
