// apps/backend/next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Włącz Turbopack (domyślne w 16, ale explicite)
  experimental: {
    turbopack: true,
  },
  // Bez transpilePackages – Turbopack obsługuje Prisma natywnie
  // Bez serverExternalPackages – unika konfliktu
  // Bez webpack() – Turbopack tego nie lubi
};

export default nextConfig;
