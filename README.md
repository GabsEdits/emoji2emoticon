<div align="center">
<h1>E2E&VV</h1>
<small>Emoji to Emoticon and Vice Versa</small>
<p>Convert emojis to emoticons and vice versa.</p>
<mark>Made for Highseas.</mark>
</div>

## Links

- Frontend: [e2e.gxbs.dev](https://e2e.gxbs.dev)
- API: [e2e-api.deno.dev](https://e2e-api.deno.dev)

## API

For the API, I used [Deno](https://deno.com) and
[Hoco](https://jsr.io/@hoco/hoco).

### Examples

For converting an emoji to an emoticon:

```http
GET https://e2e-api.deno.dev/{emoji}
```

`{emoji}` is the emoji you want to convert. For example, if you want to convert
the emoji `😂` to an emoticon, you would use:

```http
GET https://e2e-api.deno.dev/😂
```

For converting an emoticon to an emoji:

```http
GET https://e2e-api.deno.dev/reverse/{emoticon}
```

`{emoticon}` is the emoticon you want to convert. For example, if you want to
convert the emoticon `:-)` to an emoji, you would use:

```http
GET https://e2e-api.deno.dev/reverse/:-)
```

### Development

Make sure you have [Deno](https://deno.com) installed.

To start the server, run:

```bash
deno run -NR mod.ts
```

> ![NOTE] Make sure you are in the `api` directory.

## Frontend

### Development

The project is build using [Fresh](https://fresh.deno.dev) and
[Deno](https://deno.com).

### Installation

```bash
deno install
```

### Scripts

- `start`: Start the development server (`deno task start`)
- `build`: Build the project (`deno task build`)
- `preview`: Serve the build project (`deno task preview`)

## License

This project is licensed under the Unlicense - see the [LICENSE](LICENSE.txt)
file for more information.
