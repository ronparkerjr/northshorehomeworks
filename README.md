# North Shore Home Works

The site uses TanStack Start, React, TypeScript, and Tailwind CSS. The original and responsive site images are stored in `public/images`.

## Development

Use Bun to install dependencies and run the project.

```sh
bun install --frozen-lockfile
bun run dev
bun run test
```

## Production

Build the site with `bun run build`. The default Nitro build runs on Node.js with `node .output/server/index.mjs`. Deploy the complete `.output` directory, including its public assets, to a host that supports the server runtime.

Set `FORMSUBMIT_TO` as a private server environment variable to enable email delivery for estimate requests. Verify delivery on the deployment before switching the public domain.
