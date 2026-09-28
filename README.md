# Hornero OS website

Official website for Hornero OS: what it is, what it looks like, how to
install it, and where it comes from.

Scaffolded from the `nextjs-starter` template
(`create-awesome-node-app`, same as
[ulises-jeremias/website](https://github.com/ulises-jeremias/website)),
then rewritten as HorneroOS content. Template auth/feature examples
were removed; the App Router + TypeScript + ESLint/Prettier setup stays.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Gates

```bash
npm run lint
npm run type-check
npm run build
```

## Pages

- `/` — hero, pillars, roots teaser
- `/showroom` — screenshots from `public/showroom`
- `/roots` — heritage, credits, comparison table
- `/install` — profiles, requirements, installer status

Technical documentation lives in
[HorneroOS/docs](https://github.com/HorneroOS/docs).
