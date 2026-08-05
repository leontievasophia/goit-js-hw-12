import{a as w,S as v,i as n}from"./assets/vendor-Dx0MPrJo.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const S="56829621-3cae891e55e3954ecb90dc401",P="https://pixabay.com/api/";async function m(o,r){return(await w.get(P,{params:{page:r,per_page:15,key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const y=document.querySelector(".gallery"),h=document.querySelector(".loader"),g=docement.querySelector(".load-btn"),q=new v(".gallery a");function p(o){const r=o.map(e=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img
              class="gallery-image"
              src="${e.webformatURL}"
              alt="${e.tags}"
            />
          </a>

          <div class="image-info">
            <p>
              <b>Likes</b>
              ${e.likes}
            </p>
            <p>
              <b>Views</b>
              ${e.views}
            </p>
            <p>
              <b>Comments</b>
              ${e.comments}
            </p>
            <p>
              <b>Downloads</b>
              ${e.downloads}
            </p>
          </div>
        </li>
      `).join("");y.insertAdjacentHTML("beforeend",r),q.refresh()}function M(){y.innerHTML=""}function b(){h.classList.remove("is-hidden")}function f(){h.classList.add("is-hidden")}function u(){g.classList.remove("is-hidden")}function i(){g.classList.add("is-hidden")}const B=document.querySelector(".form"),E=document.querySelector(".load-btn");let l="",a=1;const L=15;i();f();B.addEventListener("submit",async o=>{if(o.preventDefault(),l=o.currentTarget.elements["search-text"].value.trim(),!!l){a=1,M(),i(),b();try{const r=await m(l,a);if(r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}p(r.hits);const e=Math.ceil(r.totalHits/L);a<e?u():(i(),n.info({message:"We're sorry, but you've reached the end of search results."}))}catch{n.error({message:"Something went wrong. Please try again later!"})}finally{f()}}});E.addEventListener("click",async()=>{a+=1,i(),b();try{const o=await m(l,a);p(o.hits);const r=Math.ceil(o.totalHits/L);a<r?u():(i(),n.info({message:"We're sorry, but you've reached the end of search results."}));const e=document.querySelector(".gallery-item");if(e){const c=e.getBoundingClientRect().height;window.scrollBy({top:c*2,behavior:"smooth"})}}catch{a-=1,n.error({message:"Something went wrong. Please try again later!"}),u()}finally{f()}});
//# sourceMappingURL=index.js.map
