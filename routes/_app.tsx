import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Convert emojis to emoticons, and vice versa."
        />
        <meta name="author" content="Gabriel Cozma" />
        <meta name="keywords" content="emoji, emoticon, convert, tool" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <title>Emoji to Emoticon</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <div id="app">
          <Component />
        </div>
      </body>
    </html>
  );
}
