const newsapi= async ()=>{
    const apiKey = "378ee1a1ab1e49899e0893f1c4d48b6f"
    const url = "https://newsapi.org/v2/top-headlines?country=tr&apiKey=" + apiKey;
    
    try {
        const  res= await fetch(url)
        if(!res.ok){
            hata()
            throw new Error("İKAZ")

        }
        const data= await res.json()
        console.log(data.articles);
        render(data.articles)
        

    } catch (error) {
        console.log(error);
 }
    }
    const hata= (e)=>{
        document.querySelector("#news-list").innerHTML= `
       ${e} doğru giriniz `
    }
    const render= (veri)=>{
        veri.forEach((a)=>{
            let {
                author,
                description,
                urlToImage,
                url
            }= a
            document.querySelector("#news-list").innerHTML +=`
            <div class="card" style="width: 18rem;">
            <img src="${urlToImage}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${author}</h5>
    <p class="card-text">${description}</p>
  </div>
  <div class="card-body">
    <a href="${url}" target="_blank" class="card-link">tıkla</a>
  </div>
</div> `;})
    }


newsapi()










































