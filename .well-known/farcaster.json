export default function handler(req, res) {
  const manifest = {
    accountAssociation: {
      header: "eyJmaWQiOjUyNjk5NiwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDQ4YURERTk1ZkY1OGNjQzRBRTkxYjM3YzY4NkVmQTA3OTFhMDUxMDcifQ",
      payload: "eyJkb21haW4iOiJiYXNlaXEtc2V2ZW4udmVyY2VsLmFwcCJ9",
      signature: "0Y7W6Fv05SKmv/oazJIPXUwZlrjFfcHcWNQKyVh6ogRiarUxKBVfVZ2CHhxNVbL09fbV5ixbIbiIDmq4cNor6xw="
    },
    frame: {
      version: "1",
      name: "BaseIQ",
      subtitle: "test your Base brainpower.",
      description: "BaseIQ - Test your knowledge about Base blockchain",
      homeUrl: "https://baseiq-seven.vercel.app/",
      iconUrl: "https://baseiq-seven.vercel.app/icon.png",
      splashImageUrl: "https://baseiq-seven.vercel.app/screenshot.png",
      splashBackgroundColor: "#0100ff",
      primaryCategory: "games",
      tags: ["game", "quiz", "base", "baseapp", "miniapp"],
      heroImageUrl: "https://baseiq-seven.vercel.app/hero.png",
      screenshotUrls: [
        "https://baseiq-seven.vercel.app/screenshot.png"
      ],
      tagline: "test your Base brainpower.",
      ogTitle: "test your Base brainpower.",
      ogDescription: "BaseIQ - Test your knowledge about Base blockchain",
      ogImageUrl: "https://baseiq-seven.vercel.app/hero.png"
    }
  };

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(manifest);
}
