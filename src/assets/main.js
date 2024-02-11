const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCtYLUTtgS3k1Fg4y5tAhLbw&part=snippet%2Cid&order=date&maxResults=5';

const content = null || document.getElementById("content");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ed42b82ddcmsh9558b09d5216370p13f7b8jsn3cbcc7e9a28b',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

// funciones anonimas autoejecutables!!!
(async ()=> {
  try{
      const videos = await fetchData(API);
      let view = `
      ${videos.items.map(video => `
        <div class="group relative">
          <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
            </h3>
          </div>
        </div>
      `).slice(0, 5).join("")}`;
    
      content.innerHTML = view;
  } catch (err) {
    console.log(err);
  }
})();