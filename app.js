const apıKey = "b8be44bad60e41999ade61d01547e3bd";
const url = "https://newsapi.org/v2/top-headlines?country=tr&apiKey=" + apıKey;

const news = async () => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            hata();
            throw new Error("ikaz");

        }
        const data = await res.json();
        console.log(data.articles)

        ekranaBas(data.articles)



    } catch (err) {
        console.log(err);
    }
}
const hata = (e) => {
    document.querySelector("#new-list").innerHTML = `${e} is not found`
}


const ekranaBas = (veri) => {
    veri.forEach((a) => {
        let {
            author,
            description,
            url,
            urlToImage
        } = a
        document.querySelector(
            "#news-list"
        ).innerHTML += `<div class="card" style="width: 18rem;">
  <img src="${urlToImage}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${author}</h5>
    <p class="card-text">${description}</p>
  </div>
  <div class="card-body">
    <a href="${url}" target="_blank" class="card-link">tıkla</a>
  </div>
</div> 
`;
    })
}



news();




























