const is = ('serviceWorker' in navigator);

console.log({ is });

if (is)
{
    navigator
        .serviceWorker
        .register('sw.js')
        .then((...args)=>{
            console.log(...args);
        })
        .catch((ex)=>{
            console.log(ex);
        });
}