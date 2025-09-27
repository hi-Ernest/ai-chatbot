import "server-only";

// Configure proxy for server-side only
if (process.env.HTTPS_PROXY) {
  try {
    const { ProxyAgent, setGlobalDispatcher } = require("undici");
    setGlobalDispatcher(new ProxyAgent(process.env.HTTPS_PROXY));
    console.log(`Proxy configured: ${process.env.HTTPS_PROXY}`);
  } catch (error) {
    console.error("Failed to configure proxy:", error);
  }
}
