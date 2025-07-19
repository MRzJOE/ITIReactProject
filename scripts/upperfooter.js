const nestmart= document.createElement("div")
nestmart.id = "nestmart";
const nestMartPhoto=document.createElement("img");
nestMartPhoto.id="nestMartPhoto";
nestMartPhoto.src="../assets/footer.svg";
nestmart.appendChild(nestMartPhoto);
document.body.appendChild(nestmart);
const features = document.createElement('div');
features.id = "features";
const srcPhotos=['../assets/feature1.svg','../assets/feature2.svg','../assets/feature3.svg','../assets/feature4.svg','../assets/feature5.svg'];
const pars=["Best Prices & Offers","Great Daily Deal","Free Delivery","Wide Assortment","Easy Returns"];
for(let i=0;i<srcPhotos.length;i++){
    const featurediv=document.createElement('div');
    
    const feature=document.createElement('div');
    feature.className="feature";
    const img=document.createElement('img');
    const p=document.createElement('p');
    p.innerText=pars[i];
    img.src=srcPhotos[i];
    feature.appendChild(img);
    feature.appendChild(p);
    featurediv.appendChild(feature);
    features.appendChild(featurediv);
   
}
document.body.appendChild(features);
