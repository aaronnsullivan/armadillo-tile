export async function onRequest(context) {
  const { env } = context;
  const client_id = env.GITHUB_CLIENT_ID;
  const client_secret = env.GITHUB_CLIENT_SECRET;

  try {
    const url = new URL(context.request.url);
    const code = url.searchParams.get('code');
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'user-agent': 'cloudflare-functions-github-oauth',
        'accept': 'application/json',
      },
      body: JSON.stringify({ client_id, client_secret, code }),
    });
    const result = await response.json();

    if (result.error) {
      return new Response(JSON.stringify(result), { status: 401 });
    }

    const html = `
      <script>
        const receiveMessage = (message) => {
          window.opener.postMessage(
            'authorization:github:success:${JSON.stringify({
              token: result.access_token,
              provider: 'github',
            })}',
            message.origin
          );
          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      </script>`;

    return new Response(html, { headers: { 'content-type': 'text/html' } });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}