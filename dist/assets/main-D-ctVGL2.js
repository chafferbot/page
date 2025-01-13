import{a as re,i as w}from"./vendor-JypmclGX.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelectorAll(".nav-item .nav-link");if(t){const i=window.location.pathname;t.forEach(n=>{n.closest(".nav-item").classList.toggle("active",i.endsWith(n.getAttribute("href").substring(1)))})}const e=document.querySelector(".mobile-menu"),s=document.querySelector(".mobile-menu-open-btn"),r=document.querySelector(".mobile-menu-close-btn");e&&s&&(s.addEventListener("click",()=>{e.classList.add("is-open")}),r&&r.addEventListener("click",()=>{e.classList.remove("is-open")}),e.addEventListener("click",i=>{i.target.classList.contains("mobile-nav-link")&&e.classList.remove("is-open")}))});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".mobile-menu"),e=document.querySelector(".mobile-menu-open-btn");t&&e?(console.log("Кнопка знайдена!"),e.addEventListener("click",()=>{t.classList.toggle("is-open")})):console.error("Елементів немає!")});const ie={baseURL:"https://your-energy.b.goit.study/api",timeout:1e4,headers:{"Content-Type":"application/json"}},ne=["Body parts","Muscles","Equipment"];class oe{constructor(){this.api=re.create(ie),this.api.interceptors.response.use(e=>e.data,e=>Promise.reject(e))}handleDefaultError(e){switch(e.status){case 400:return"Please check your input and try again.";case 404:return"This training page took a rest day. Please try again.";case 500:return"Our fitness server needs a quick breather. Please try again.";default:if(e.response){const{data:r}=e.response;return r.message||"Something unexpected happened"}else return e.request?e.request.statusText:`Error: ${e.message}`}}async getExercises(e={}){if(!e.page||!e.limit||typeof e.page!="number"||typeof e.limit!="number")return"Please specify page and items per page";try{return await this.api.get("/exercises",{params:e})}catch(s){switch(s.status){case 409:return"Select a filter to view results";case 500:return"Our fitness server needs a quick breather. Please try again.";default:return this.handleDefaultError(s)}}}async addRating(e,s,r,i){const n={rate:s,email:r,review:i};try{return await this.api.patch(`/exercises/${e}/rating`,n)}catch(o){switch(o.status){case 404:return"Exercise not found. Try exploring similar ones.";case 409:return"Looks like your email is already part of this exercise community!";default:return this.handleDefaultError(o)}}}async getExerciseById(e){try{return await this.api.get(`/exercises/${e}`)}catch(s){switch(s.status){case 404:return"Exercise not found. Try exploring similar ones.";case 409:return"Looks like your email is already part of this exercise community!";default:return this.handleDefaultError(s)}}}async getExercisesByFilter(e={}){if(!e.page||!e.limit||typeof e.page!="number"||typeof e.limit!="number")return"Please specify page and items per page";if(!ne.includes(e.filter))return"Filter not found. Check out our available categories";try{return await this.api.get("/filters",{params:e})}catch(s){switch(s.status){case 404:return"The way to exercises not found. Try exploring similar ones.";default:return this.handleDefaultError(s)}}}async orderSubscription(e){if(!e)return"Email is not provided";try{return await this.api.post("/subscription",{email:e})}catch(s){switch(s.status){case 404:return"The way to subscription not found. Try exploring similar ones.";case 409:return"Looks like such a subscription is already part of this community!";default:return this.handleDefaultError(s)}}}async getExercisesByIdList(e){if(!e.length)return"Please specify list of exercises to get";const s=e.map(async i=>await this.getExerciseById(i));return(await Promise.allSettled(s)).filter(i=>i.status==="fulfilled").map(i=>i.value)}async getQuote(){try{return await this.api.get("/quote")}catch(e){return this.handleDefaultError(e)}}}const b=new oe,T=getComputedStyle(document.documentElement),ae=T.getPropertyValue("--color-popup-bg").trim(),ce=T.getPropertyValue("--color-popup-txt").trim(),le=T.getPropertyValue("--color-popup-main").trim(),de=T.getPropertyValue("--color-popup-line").trim();class ue{constructor(){w.settings({timeout:5e3,resetOnHover:!0,position:"topLeft",transitionIn:"fadeInDown",transitionOut:"fadeOutUp",progressBar:!0,progressBarColor:de,backgroundColor:ae,titleColor:le,messageColor:ce,theme:"dark"})}success(e,s){w.success({title:e,message:s})}error(e,s){w.error({title:e,message:s})}warning(e,s){w.warning({title:e,message:s})}settings(e){w.settings(e)}}const f=new ue,N=new Date().toISOString().slice(0,10),$=document.querySelector(".blockquote-text"),B=document.querySelector(".quote-author"),x=JSON.parse(localStorage.getItem("quoteOfDay"));x&&x.date===N?($.innerHTML=x.quote,B.innerHTML=x.author):b.getQuote().then(t=>{typeof t!="string"?(localStorage.setItem("quoteOfDay",JSON.stringify({quote:t.quote,author:t.author,date:N})),$.innerHTML=t.quote,B.innerHTML=t.author):f.error("Error",t)}).catch(()=>{$.innerHTML="A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart.",B.innerHTML="Tom Brady"});let V=null;function me(){I=1,q=1,F=1}function pe(){q=1}function H(t){V!==t&&(me(),V=t)}let I=1;function ge(t){I=t}function G(){return I}async function fe(t,e,...s){v(t,e,ge,G,...s)}let q=1;function he(t){q=t}function U(){return q}async function ve(t,e,...s){v(t,e,he,U,...s)}let F=1;function ye(t){F=t}function J(){return F}async function be(t,e,...s){v(t,e,ye,J,...s)}function v(t,e,s,r,...i){const n=document.querySelector(".pagination");n.innerHTML="";const o=r(),d=C();n.appendChild(d);const u=5;let l=Math.max(1,o-Math.floor(u/2)),m=Math.min(t,l+u-1);m-l+1<u&&(l=Math.max(1,m-u+1)),l>1&&(g(1),l>2&&E());for(let a=l;a<=m;a++)g(a);m<t&&(m<t-1&&E(),g(t));const L=k();n.appendChild(L);function g(a){const S=document.createElement("button");S.textContent=a,S.classList.add("page-button"),a===o&&S.classList.add("active"),S.addEventListener("click",async()=>{s(a),await e(...i),v(t,e,s,r,...i)}),n.appendChild(S)}function E(){const a=document.createElement("span");a.textContent="...",a.classList.add("ellipsis"),n.appendChild(a)}function C(){const a=document.createElement("button");return a.innerHTML="←",a.classList.add("page-button"),a.disabled=o===1,a.addEventListener("click",async()=>{o>1&&(s(o-1),await e(...i),v(t,e,s,r,...i))}),a}function k(){const a=document.createElement("button");return a.innerHTML="→",a.classList.add("page-button"),a.disabled=o===t,a.addEventListener("click",async()=>{o<t&&(s(o+1),await e(...i),v(t,e,s,r,...i))}),a}}const c="/page/assets/icons-DfGzQ-YE.svg";class j{constructor(e,s=null){this.parentModal=s,this.backdrop=document.createElement("div"),this.backdrop.classList.add("backdrop"),this.modal=document.createElement("div"),this.modal.classList.add("modal"),this.content=document.createElement("div"),this.content.classList.add("modal-content"),this.content.innerHTML=e,this.closeButton=document.createElement("button"),this.closeButton.innerHTML=` 
        <svg width="12" height="12">
            <use class="modal-close-icon" href="${c}#icon-close-modal"></use>
        </svg>
    `,this.closeButton.classList.add("close-modal-btn"),this.modal.appendChild(this.content),this.modal.appendChild(this.closeButton),this.backdrop.appendChild(this.modal),this.handleClose=this.closeModal.bind(this),this.closeButton.addEventListener("click",this.handleClose),this.backdrop.addEventListener("click",this.handleClose),document.addEventListener("keydown",this.handleClose),document.body.appendChild(this.backdrop)}openModal(){if(this.parentModal)this.parentModal.backdrop.classList.remove("is-open");else{const e=window.innerWidth-document.documentElement.clientWidth;document.body.style.paddingRight=`${e}px`}document.body.classList.add("modal-no-scroll"),this.backdrop.classList.add("is-open")}toggleModalVisibility(){this.backdrop.classList.toggle("is-open")}closeModal(e){if(!e||e.type==="keydown"&&e.key!=="Escape"||!this.backdrop.classList.contains("is-open")||e.target.closest(".modal-content"))return;document.removeEventListener("keydown",this.handleClose),this.backdrop.classList.remove("is-open"),this.parentModal?this.parentModal.backdrop.classList.add("is-open"):(document.body.classList.remove("modal-no-scroll"),document.body.style.paddingRight="");const s=sessionStorage.getItem("favorites2del");if(s){const r=document.querySelector(".favorites");if(r){const i=r.querySelector(`.exercise-card[data-id="${s}"]`);i&&i.remove()}sessionStorage.removeItem("favorites2del")}this.backdrop.remove()}}class Le{constructor(e,s=null){this.exerciseId=e,this.parentModal=s;const r=this.getFormHTML(e);this.modal=new j(r.outerHTML,s),this.modal.openModal();const i=this.modal.modal.querySelector(".rating-form"),n=i.querySelector(".rating-form__rating");i.addEventListener("submit",async o=>this.handleSubmit(o)),n.addEventListener("click",o=>this.handleRatingClick(o))}getFormHTML(e){const s=document.createElement("div");s.classList.add("rating-form__container");const r=document.createElement("form");r.classList.add("rating-form");const i=`
            <h2 class="rating-form__title">Rating</h2>
            <div class="rating-form__rating">
                <span class="rating-form__value">0.0</span>
                <input type="radio" id="rating-1" class="visually-hidden" name="rating" value="1" required>
                <label for="rating-1">
                    <svg width="24" height="24">
                        <use class="rating-star__empty" href="${c}#icon-star-18"></use>
                    </svg>
                </label>
                <input type="radio" id="rating-2" class="visually-hidden" name="rating" value="2" required>
                <label for="rating-2">
                    <svg width="24" height="24">
                        <use class="rating-star__empty" href="${c}#icon-star-18"></use>
                    </svg>
                </label>
                <input type="radio" id="rating-3" class="visually-hidden" name="rating" value="3" required>
                <label for="rating-3">
                    <svg width="24" height="24">
                        <use class="rating-star__empty" href="${c}#icon-star-18"></use>
                    </svg>
                </label>
                <input type="radio" id="rating-4" class="visually-hidden" name="rating" value="4" required>
                <label for="rating-4">
                    <svg width="24" height="24">
                        <use class="rating-star__empty" href="${c}#icon-star-18"></use>
                    </svg>
                </label>
                <input type="radio" id="rating-5" class="visually-hidden" name="rating" value="5" required>
                <label for="rating-5">
                    <svg width="24" height="24">
                        <use class="rating-star__empty" href="${c}#icon-star-18"></use>
                    </svg>
                </label>
            </div>
            <input type="email" class="footer-input rating-form__email" name="email" placeholder="Email" required>
            <textarea class="footer-input rating-form__comment" name="comment" placeholder="Your comment" required></textarea>
            <input type="hidden" value="${e}" name="exerciseId">
            <button type="submit" class="footer-button rating-form__send">Send</button>
            `;return r.innerHTML=i,s.appendChild(r),s}handleRatingClick(e){e.stopPropagation();const s=e.target;if(s.tagName!=="INPUT")return;const r=s.value,i=e.currentTarget.querySelectorAll("label");i.forEach(o=>{o.classList.remove("active")});for(let o=0;o<r;o++)i[o].classList.add("active");const n=e.currentTarget.querySelector(".rating-form__value");n.textContent=r+".0"}handleEscapeKey(e){e.key==="Escape"&&(this.modal.closeModal(),this.parentModal&&this.parentModal.toggleModalVisibility(),document.removeEventListener("keydown",this.handleEsc))}async handleSubmit(e){e.preventDefault();const s=e.target,r=s.elements.exerciseId.value,i=parseInt(s.elements.rating.value),n=s.elements.email.value,o=s.elements.comment.value;if(!i||!n||!o){f.error("Error:","All fields are required");return}if(!n.match(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){f.error("Error:","Invalid email");return}try{const d=await b.addRating(r,i,n,o);d instanceof Object?(f.success("Success:","Rating added successfully"),this.modal.backdrop.classList.remove("is-open"),this.parentModal&&(this.parentModal.closeModal(),z(r)),this.modal.closeModal()):f.error("Error:",d)}catch(d){f.error("Error:",d)}}}Ee();function W(){const t=document.querySelector(".all-time"),e=document.querySelector(".calories"),s=Math.floor((localStorage.getItem("timer")||0)/60),r=localStorage.getItem("burntCalories")||0;t.innerText=`${s||0} min`,e.innerText=Math.floor(Number(r)/1e3||0).toString(),s>110&&(t.style.color="green")}W();function Ee(){const t=localStorage.getItem("lastUpdate"),e=new Date().toDateString();t!==e&&(localStorage.setItem("lastUpdate",e),localStorage.setItem("timer",0),localStorage.setItem("burntCalories",0))}function z(t){_e(t).then(e=>{const s=Se(e),r=new j(s),i=r.modal.querySelector(".add-to-favorite-btn"),n=r.modal.querySelector(".give-rating-btn"),o=r.modal.querySelector(".start-btn"),d=r.modal.querySelector(".timer");let u,l,m;i.addEventListener("click",L=>{L.stopPropagation(),K(t)?Y(t):Me(t),i.innerHTML=Q(t)}),n.addEventListener("click",L=>{r.toggleModalVisibility(),new Le(t,r)}),o.addEventListener("click",L=>{if(o.classList.contains("start-btn"))o.classList.remove("start-btn"),o.classList.add("stop-btn"),o.textContent="STOP",u=Date.now(),m=setInterval(()=>{const g=Date.now();d.textContent=Te(Math.floor((g-u)/1e3))},1e3);else{o.classList.remove("stop-btn"),o.classList.add("start-btn"),o.textContent="START",l=Date.now(),clearInterval(m);const g=l-u,E=Math.floor(g/1e3),C=Number(localStorage.getItem("timer"))||0;localStorage.setItem("timer",C+E);const k=Number(localStorage.getItem("burntCalories"))||0;localStorage.setItem("burntCalories",k+E*(e.burnedCalories||0)),localStorage.setItem("lastUpdate",new Date().toDateString()),W()}}),r.openModal()})}function Se(t){return`
        <div class="exercise-info__wrapper">
            <img class="exercise-info__img" src="${t.gifUrl}" alt="${t.name}" width="270" height="259">
            <div class="exercise-info__content">
                <h3 class="exercise-info__title">${t.name}</h3>
                <div class="exercise-info__rating">
                    ${xe(t.rating)}
                </div>
                <ul class="exercise-info__params">
                    ${we(t)}
                </ul>
               <p class="exercise-info__description">${t.description}</p>
            </div>

            <div class="exercise-btn-block">
                <div class="timer-block">
                    <button class="exercise-info__button time-btn start-btn">START</button>
                    <p class="timer"></p>
                </div>

                <div class="exercise-info__actions">
                    <button class="exercise-info__button add-to-favorite-btn" data-id="${t._id}">
                        ${Q(t._id)}
                    </button>
                    <button class="exercise-info__button give-rating-btn">Give a rating</button>
                </div>
            </div>
        </div>
    `}function we(t){const e=[];return t.target&&e.push(`<li><span>Target</span><span class="details-target">${t.target}</span></li>`),t.bodyPart&&e.push(`<li><span>Body Part</span><span class="details-body-part">${t.bodyPart}</span></li>`),t.equipment&&e.push(`<li><span>Equipment</span> ${t.equipment}</li>`),t.popularity&&e.push(`<li><span>Popular</span> ${t.popularity}</li>`),t.burnedCalories&&e.push(`<li><span>Burned Calories</span><span class="details-calories">${t.burnedCalories}</span></li>`),e.join("")}function xe(t){const e=[];t=t.toFixed(1);const s=Math.floor(t),r=t-s,i=`<span class="exercise-info__rating-text">${t}</span>`;for(let n=0;n<s;n++)e.push(`<svg width="18" height="18">
                <use class="rating-star__full" href="${c}#icon-star-18"></use>
            </svg>`);if(r>0){const n=r*100;e.push(`<svg width="18" height="18">
                <defs>
                    <linearGradient id="myGradient">
                        <stop offset="${n}%" stop-color="var(--color-stars-full)" />
                        <stop offset="0%" stop-color="var(--color-stars-empty)" />
                    </linearGradient>
                </defs>
                <use class="rating-star" href="${c}#icon-star-18" fill="url('#myGradient')"></use>
            </svg>`)}for(;e.length<5;)e.push(`<svg width="18" height="18">
                <use class="rating-star__empty" href="${c}#icon-star-18"></use>
            </svg>`);return`${i}<div class="exercise-info__rating-stars">${e.join("")}</div>`}function Me(t){const e=localStorage.getItem("favorites");if(!e)localStorage.setItem("favorites",JSON.stringify([t]));else{const s=JSON.parse(e);if(s.includes(t))return;s.push(t),localStorage.setItem("favorites",JSON.stringify(s))}sessionStorage.removeItem("favorites2del")}function Y(t,e=!1){const s=localStorage.getItem("favorites");if(!s)return;const i=JSON.parse(s).filter(o=>o!==t);localStorage.setItem("favorites",JSON.stringify(i));const n=document.querySelector(".favorites");if(n)if(e){const o=n.querySelector(`.exercise-card[data-id="${t}"]`);o&&o.remove()}else sessionStorage.setItem("favorites2del",t)}function K(t){const e=localStorage.getItem("favorites");return e?JSON.parse(e).includes(t):!1}function Q(t){const e=K(t);return`
        ${e?"Remove from favorites":"Add to favorites"}
        <svg width="20" height="20">
            <use class="modal-close-icon" href="${c}#${e?"icon-trash":"icon-heart"}"></use>
        </svg>
    `}async function _e(t){return await b.getExerciseById(t)}function Te(t){const e=Math.floor(t/60),s=t%60;return`${e.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`}function A(t){t.innerHTML='<div class="loader"></div>'}function Z(t){const e=t.querySelector(".loader");e&&e.remove()}const O=document.querySelector(".exercises-form"),h=document.querySelector(".group-list");let p="muscles",y="",_="";O&&O.addEventListener("submit",qe);function X(){return screen.width>767?10:8}function qe(t){if(t.preventDefault(),_=t.target.elements.search.value.trim(),!_){alert("Please, enter a search words");return}ee(),t.target.elements.search.value=""}async function ee(){const t=G();A(h);const e=X(),s=await b.getExercises({page:t,limit:e,[p]:y,keyword:_});te(h,s.results),H("search"),fe(s.totalPages,ee,p,y,_),Z(h)}async function D(t,e){const s=J();switch(t){case"muscles":p="muscles";break;case"equipment":p="equipment";break;case"bodypart":p="bodypart";break}y=e,A(h);try{const r=X(),i=await b.getExercises({page:s,limit:r,[p]:y});O.classList.remove("visually-hidden"),te(h,i.results),H("exercises"),be(i.totalPages,D,p,y)}catch(r){$e(),f.error("Error",r)}finally{Z(h)}}function te(t,e){const s=t.classList.contains("favorites"),r=e.map(n=>`
<li class="exercise-card" data-id=${n._id}>
  <div class="top-row">
  <div class="rating">
        <p class="badge">WORKOUT</p>
        ${s?`
            <button type="button" class="remove-favorite" data-id=${n._id}>
                <svg width="16" height="16">
                    <use class="remove-favorite__icon" href="${c}#icon-trash"></use>
                </svg>
            </button>`:`<div class="rating-star">
                <span class='text-star'>${n.rating}</span>
                    <svg class="star-icon" width="18" height="18">
                        <use href="${c}#icon-star-18"></use>
                    </svg>
            </div>
        `}
        </div>
        <button class="start">
            Start
            <svg class="icon-arrow-right" width="13" height="13">
                    <use href="${c}#icon-arrow-right"></use>
                </svg>
        </button>
    </div>
    <div class="exercise-info">
    <div class="icon-wrapper">
    <svg class="arrow-running-icon" width="14" height="16">                     
        <use href="${c}#icon-running-stick-figure"></use>
    </svg>
</div>
        <p class="exercise-name">${n.name}</p>
    </div>
    <div class="details">
        <p>Burned calories: <span class="details-calories">${n.burnedCalories} / ${n.time} min</span></p>
        <p>Body part: <span class="details-calories">${n.bodyPart}</span></p>
        <p>Target: <span class="details-target">${n.target}</span></p>
    </div>
</li>`).join("");t.innerHTML=r,document.querySelectorAll(".exercise-card .start").forEach(n=>{n.addEventListener("click",Ce)}),s&&document.querySelectorAll(".remove-favorite").forEach(o=>{o.addEventListener("click",ke)})}function Ce(t){const e=t.target.closest(".exercise-card").dataset.id;z(e)}function ke(t){const s=t.target.closest(".exercise-card").dataset.id;Y(s,!0)}function $e(){h.innerHTML=""}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".exercises-input"),e=document.querySelector(".clear-button");t&&e&&(e.style.display="none",t.addEventListener("input",()=>{t.value.trim()!==""?e.style.display="flex":e.style.display="none"}),e.addEventListener("click",()=>{t.value="",D(p,y),e.style.display="none",t.focus()}))});let M="";document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".group-list"),e=document.querySelector(".section-title");t&&(t.addEventListener("click",s=>{const r=s.target.closest(".group-list__item");r&&(D(M,r.dataset.name),e.innerHTML=`Exercises / <span class='exercises-category' id='categoryValue'>${r.dataset.name}</span>`)}),R())});const Be=({filter:t,name:e,imgURL:s})=>`
    <li
      class="group-list__item"
      data-name="${e}"
    >
      <img
        class="group-list__item-image"
        src="${s}"
        alt="${e}"
        width="335"
        height="225"
        loading="lazy"
      >
      <div class="group-list__item-image-filter"></div>
      <div class="group-list__item-title">
        ${e}
      </div>
      <div class="group-list__item-subtitle">
        ${t}
      </div>
    </li>
  `,Oe=t=>t.map(Be).join(""),Pe=t=>{const e=document.querySelector(".group-list");if(!e)return;const s=Oe(t);e.innerHTML=s},He=async t=>await b.getExercisesByFilter(t),R=async(t="Muscles",e=1,s=screen.width>767?12:9)=>{t=t.trim(),e=U(),M=t.toLowerCase(),M==="body parts"&&(M="bodypart"),A(document.querySelector(".group-list"));const r=await He({filter:t,page:e,limit:s});Pe(r.results),H("category"),ve(r.totalPages,R,t)},se=Array.from(document.querySelectorAll(".exercises-menu-button")),Ie=t=>{const e=document.querySelector(".section-title"),s=document.querySelector(".exercises-form");e.innerHTML="Exercises",se.forEach(r=>{r.classList.remove("active")}),t.classList.add("active"),s.classList.add("visually-hidden"),pe(),R(t.textContent)};se.forEach(t=>t.addEventListener("click",()=>Ie(t)));const P=document.getElementById("scrollToTop");window.addEventListener("scroll",()=>{window.scrollY>300?P.style.display="flex":P.style.display="none"});P.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});export{te as a,Z as b,A as r,f as t,b as y};
//# sourceMappingURL=main-D-ctVGL2.js.map
