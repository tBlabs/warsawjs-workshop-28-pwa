const CACHE_NAME = 'pwa-1.0.0';

self.addEventListener('install', (evt) =>
{
    console.log('installed');
    evt.waitUntil(startCaching);
});

async function startCaching()
{
    try
    {
        const cache = await caches.open(CACHE_NAME);
        self.skipWaiting();
        await cache.add('/*');
    }
    catch (error)
    {
        console.log(error);
    }
}

self.addEventListener('activate', (evt =>
{
    evt.waitUntil(startActivating);
}));

async function startActivating()
{
    try
    {
        const keys = await caches.keys();
        const deleted = keys
            .filter(key != CACHE_NAME)
            .map(key => caches.delete(key));
        return await Promise.all(deleted);
    } 
    catch (error)
    {
        console.log(error);
    }
}

self.addEventListener('fetch', (evt)=>{
    console.log('FETCH', evt);

    evt.respondWith(()=>cacheFallbackNetworkStrategy(evt));
});

async function cacheFallbackNetworkStrategy(evt)
{
    const cache = await caches.open(CACHE_NAME);
    const resource = await cache.match(evt.request);
    if (resource)
    {
        return resource;
    }

    const response = await fetch(evt.request);
    await cache.put(request. response.clone());
    return response;
}
