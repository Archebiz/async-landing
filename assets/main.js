const API='https://youtube-v31.p.rapidapi.com/search?channelId=UCba1vMvOHWlMddLARS382Zw&part=snippet%2Cid&order=date&maxResults=10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bb8151e29cmshdad230e9a271686p192b2ajsnfdb36f7cd295',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
const content= null || document.getElementById('content');

async function fetchData(urlApi){
    const response=await fetch(urlApi,options);
    const data=await response.json();
    return data;
};

(async ()=>{
    try{
        const videos=await fetchData(API)
        let view =`
        ${videos.items.map(video =>`
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <a href="https://www.youtube.com/watch?v=${video.id.videoId}"><img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full"></a>
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
        `).slice(0,4).join('')}
        `;
        content.innerHTML=view;
    }catch(error){
        console.log(error);
    };

})();