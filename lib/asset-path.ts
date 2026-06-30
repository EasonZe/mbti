/* 中文标注：静态资源路径工具，自动适配 GitHub Pages 的 basePath 路径。 */
export function withBasePath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${basePath}${normalizedPath}`;
}
