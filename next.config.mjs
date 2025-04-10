const isGithubPages = process.env.NODE_ENV === "production";

const repo = "your-repo-name"; // 👈 replace with your GitHub repo name

module.exports = {
  output: "export",
  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}/` : "",
};
