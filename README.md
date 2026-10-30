# TechCanyon

Static fintech blog for **[techcanyon.online](https://techcanyon.online)** — six categories, Markdown posts, optional video player.

## Local

```bash
cd /Users/soufiyan/develop/techcanyon
cp .env.example .env.local
npm install
npm run dev
```

## Static build (Cloudflare Pages)

```bash
npm run build
```

Output folder: **`out/`**

### Cloudflare Pages settings

| Setting | Value |
|--------|--------|
| Framework preset | Next.js (static) / None |
| Build command | `npm run build` |
| Build output directory | `out` |
| Env var | `NEXT_PUBLIC_SITE_URL=https://techcanyon.online` |

Connect the Git repo, then add custom domain **techcanyon.online**.

## Add an article

Create `content/posts/your-slug.md` with frontmatter (`title`, `slug`, `category`, `date`, `excerpt`) and push.

Optional:

```yaml
video: https://example.com/video.mp4
cover: https://images.unsplash.com/...
```

## External media (Site X → TechCanyon)

Static watch page (client-side query param):

```
https://techcanyon.online/watch?v=https://site-x.com/file.mp4
```

Playback still requires the source to allow your domain (CORS / hotlink rules).
