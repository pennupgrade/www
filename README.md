# Things to talk about

## Tooling

### Bun

You may have heard of npm, pnpm, or Yarn. However, this project uses Bun as the package manager and local development server. It is extremely fast, modern, and cross-platform. Install Bun through [their website](https://bun.sh/).

### Biome

Biome is used as the formatter, linter, and to apply some other automatic code fixes. Follow the [Getting Started section](https://biomejs.dev/guides/getting-started/) for installation instructions. Make sure to also get the [VS Code extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome).

> [!IMPORTANT]
> Note that as of Biome 2.2.2, Biome does not fully support Astro files. To circumvent some issues related to this, additional entries have been added to the `overrides` field in `biome.json` as recommended [by the docs here](https://biomejs.dev/internals/language-support/#html-super-languages-support).

# Astro Starter Kit: Minimal

```sh
bun create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
