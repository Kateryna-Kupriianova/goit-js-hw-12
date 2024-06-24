import{i as c,S as R,a as q}from"./assets/vendor-c493984e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const g=document.querySelector(".gallery");g.style.display="grid";g.style.gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))";g.style.gap="16px";g.style.padding="16px";function C(o,s){if(!Array.isArray(o)){c.error({title:"Error",message:"displayImages expects an array but received:"+typeof o});return}const a=document.getElementById("imageResults");s===1&&(a.innerHTML=""),o.forEach(e=>{const t=document.createElement("a");t.classList.add("image-card"),t.href=e.largeImageURL,t.innerHTML=`
            
            <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy">
            
            <div class="info">
                <p><b>Likes:</b> ${e.likes}</p>
                <p><b>Views:</b> ${e.views}</p>
                <p><b>Comments:</b> ${e.comments}</p>
                <p><b>Downloads:</b> ${e.downloads}</p>
            </div>`,a.appendChild(t);const n=t;n.style.position="relative",n.style.overflow="hidden",n.style.borderRadius="8px",n.style.boxShadow="0 2px 8px rgba(0, 0, 0, 0.1)";const i=t.querySelector(".info");i.style.position="absolute",i.style.bottom="0",i.style.left="0",i.style.right="0",i.style.padding="8px",i.style.background="rgba(0, 0, 0, 0.6)",i.style.color="#fff",i.style.fontSize="14px"}),new R(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function M(){const o=document.getElementById("imageResults");o.innerHTML=""}async function b(o,s,a=1,u,e,t){const n="https://pixabay.com/",i="api/",v=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:a}),S=`${n}${i}?${v}`;T();try{const h=(await q.get(S)).data;h.hits.length===0?(a===1&&M(),c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),e()):(C(h.hits,a),h.totalHits>a*15?u():(e(),t()))}catch{c.error({title:"Error",message:"An error occurred while fetching images. Please try again!"}),e()}finally{$()}}const E=document.querySelector(".loader");function T(){E.classList.remove("hidden")}function $(){E.classList.add("hidden")}const x="44406774-b6929e0ee65f9835201f12742";let m=1,f="";const l=document.querySelector("form"),d=document.querySelector("input"),y=document.querySelector("button[type=submit]"),r=document.querySelector("button[type=button]"),F=document.createElement("style");F.innerHTML=`
.hidden {
    display: none;
}
`;document.head.appendChild(F);l.style.display="flex";l.style.justifyContent="center";l.style.gap="8px";l.style.height="40px";l.style.width="371px";l.style.margin="0 auto";l.style.fontFamily="Montserrat";l.style.fontSize="16px";d.style.width="272px";d.style.paddingLeft="16px";d.style.border="1px solid #808080";d.style.borderRadius="4px";d.style.color="#808080";y.style.width="91px";y.style.padding="0px";y.style.backgroundColor="#4E75FF";y.style.border="none";y.style.borderRadius="8px";y.style.color="#FFFFFF";r.style.width="125px";r.style.height="40px";r.style.padding="8px 16px 8px 16px";r.style.backgroundColor="#4E75FF";r.style.border="none";r.style.borderRadius="8px";r.style.color="#FFFFFF";r.style.display="flex";r.style.justifyContent="center";r.style.margin="0 auto";r.style.marginTop="10px";r.style.cursor="pointer";r.classList.add("hidden");function L(){r.classList.remove("hidden")}function p(){r.classList.add("hidden"),console.log("Кнопка схована:",r.classList.contains("hidden"))}function w(){c.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})}function O(){const o=document.querySelector(".image-card");if(o){const s=o.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}}document.addEventListener("DOMContentLoaded",()=>{p(),l.addEventListener("submit",async o=>{if(o.preventDefault(),f=d.value.trim(),f==="")p(),c.error({title:"Error",message:"Поле пошуку не може бути порожнім"});else{m=1,p();try{await b(x,f,m,L,p,w),d.value=""}catch(s){c.error({title:"Error",message:"An error occurred while fetching images. Please try again!"}),console.error("Error fetching images:",s)}}}),r.addEventListener("click",async()=>{m++;try{await b(x,f,m,L,p,w),O()}catch(o){c.error({title:"Error",message:"An error occurred while fetching more images. Please try again!"}),console.error("Error fetching more images:",o)}})});
//# sourceMappingURL=commonHelpers.js.map
