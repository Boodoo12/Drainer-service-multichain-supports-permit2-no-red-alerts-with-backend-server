addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    const url = new URL(request.url);
    let assetPath = url.pathname === "/" ? "/index.html" : url.pathname;

    // Ensure the path starts with a leading slash
    if (!assetPath.startsWith("/")) {
        assetPath = "/" + assetPath;
    }

    try {
        // Use the fetch method to get the asset directly
        const response = await fetch(assetPath);
        if (!response.ok) {
            throw new Error("Asset not found");
        }
        return response;
    } catch (err) {
        return new Response("Asset not found", { status: 404 });
    }
}
