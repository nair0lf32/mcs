if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let n={};const c=e=>s(e,d),o={module:{uri:d},exports:n,require:c};i[d]=Promise.all(a.map((e=>o[e]||c(e)))).then((e=>(r(...e),n)))}}define(["./workbox-b45ff455"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"e7d47b01bc67f2b0cf3d416e0087b372"},{url:"about/index.html",revision:"83d7baa3ee1b169c38b542b8885685fb"},{url:"anemie-microcytaire/index.html",revision:"bdf6c40e9db4b46f8ebe8927b4c0ebea"},{url:"anemie/index.html",revision:"5b5fd8a9b6617e9f5cbbfe0ba501155b"},{url:"arthrite/index.html",revision:"f3ffa011332a183e191f5407ba2587d8"},{url:"arthrose/index.html",revision:"8a84b74e30e762a12f55f4d609399bfe"},{url:"assets/css/style.css",revision:"12eff67090769a4825c20544144ed859"},{url:"assets/images/android-chrome-192x192.png",revision:"e50e8b52da2aa749b2010dcb4fd313e3"},{url:"assets/images/android-chrome-512x512.png",revision:"613ced4fdd53152951328d933336b170"},{url:"assets/images/apple-touch-icon.png",revision:"e48bb2523e38f1bca02e689702a62bf7"},{url:"assets/images/favicon-16x16.png",revision:"bd654f229bf3c5365a945ffb0d67a9c8"},{url:"assets/images/favicon-32x32.png",revision:"c9234f764a305550234295064d899e82"},{url:"assets/images/favicon.ico",revision:"f94e1ee9efe0e457c699d1d5e6c99b0d"},{url:"assets/images/github_icon.png",revision:"4fea192f6d32a895ab650462d7715862"},{url:"assets/images/icon-search.png",revision:"91a91f740b9a1179b286654446aaebe2"},{url:"assets/images/mail_icon.png",revision:"d4e91d1803a4371abb044f3211fcdd6f"},{url:"assets/images/mcs-404.png",revision:"1521bbf3b79aad705a23330c77875d31"},{url:"assets/images/MCS.png",revision:"7fe2d3be6485b79761b3234d09890366"},{url:"assets/images/Thumbs.db",revision:"f63f5fd5a6c961e55c9a14c5bc71e0f8"},{url:"assets/images/twitter_icon.png",revision:"fa696cfc52610ef6df08a0c2895ecc18"},{url:"assets/images/whatsapp_icon.png",revision:"18f2412a109c6af7a3f2e7d9a3a8961e"},{url:"assets/js/main.js",revision:"35dbddec7d6094b3c5e18b48e0bf7913"},{url:"assets/posts-assets/anemie.jpg",revision:"ebfe99701a8e5559b411ff6c66b90c97"},{url:"assets/posts-assets/etoile-maigne.webp",revision:"86230f4bcc55c76f33dea5c3c33e607c"},{url:"assets/posts-assets/hemogramme.jpg",revision:"d222e7f4775f37d100817d97a16a5203"},{url:"assets/posts-assets/Observation-psychiatrie.pdf",revision:"e2d3c96becd239388c2b1a244c1d1a87"},{url:"assets/posts-assets/Thumbs.db",revision:"25edddd861cb4b99c5cb347ea379d34f"},{url:"cardiologie/index.html",revision:"8cc610a6fece5ed08976376553c03b43"},{url:"cheatsheets/index.html",revision:"a1ba12489dbd843599df64a1dc044f34"},{url:"chirurgiepediatrique/index.html",revision:"797f7ccbdb89b92c5e8a068a06ddd656"},{url:"chirurgieviscerale/index.html",revision:"018f2ba88050cdd3ed0c0a32f295626e"},{url:"dermatologie/index.html",revision:"e7503f4f4a3e5ec46dc402830c80ac9c"},{url:"endocrinologie/index.html",revision:"ff6c437879becf34eb2e2c5fbe0145dc"},{url:"examen-rhumatologique/index.html",revision:"eaac648a0e8a0bbb07fbcb1c65b1aafa"},{url:"exemple/index.html",revision:"94e4bf5f4f2ce75a4dc4c9333b1eb893"},{url:"feed.xml",revision:"6f9c3e2235e7f3f9333b19cffc84c4b1"},{url:"généralités/index.html",revision:"9f513af9f6342959e3449956a5596b1c"},{url:"gonarthrose/index.html",revision:"a9d368785ffe0ec82001b9af1f6b7ee8"},{url:"goutte/index.html",revision:"7d0e0de9518f91eb9f17e8103453e4c6"},{url:"gynecologie/index.html",revision:"31b19a58ef0794589951d8cb86050fcb"},{url:"hematologie/index.html",revision:"ef0f301132e72be5df784440bacad159"},{url:"hepatogastroenterologie/index.html",revision:"7be43f34bd1d1731d309e6ab5a4ac8a7"},{url:"index.html",revision:"d462a1de1a89d1e1259e4f1408f5aef0"},{url:"infectiologie/index.html",revision:"1e1780e6ff1c44c38a22ed5054cafcee"},{url:"lombosciatique/index.html",revision:"80d877c84f766016bd7ae7e5eff38464"},{url:"manifest.json",revision:"65b2e9103b5d8e9422e809806fd08737"},{url:"mpr/index.html",revision:"07c6b20008f0e5e0eca68ce9d1622a43"},{url:"nephrologie/index.html",revision:"b7ef6056b46d9b73bb03a7cdd477be1c"},{url:"neurologie/index.html",revision:"4d27477249d6bbf29c1d6cf0f4408ea4"},{url:"observation/index.html",revision:"a3f235ba056b2a8c6869dfb4636fca88"},{url:"ophtalmologie/index.html",revision:"36a28f0f61904613351abd607ac1dc7a"},{url:"orl/index.html",revision:"45cdfa5f80099527d1742b47cad1512f"},{url:"osteoporose/index.html",revision:"ebf954d710c15add6a67b4f6878c9ddd"},{url:"pediatrie/index.html",revision:"02011fac13de60e734278fb0588867ed"},{url:"pneumologie/index.html",revision:"fbbe8d920968138fdb60ef757579ec50"},{url:"polyarthriterhumatoide/index.html",revision:"2c2c5b65ff7540b24a3d3788d830220f"},{url:"psychiatrie/index.html",revision:"9c97b5e1f7d69c557e145efa3fba79a0"},{url:"README.md",revision:"c08cc44a993cb44494bf9139144cc6a2"},{url:"rhumatologie/index.html",revision:"784c172a565abef74af7e60ef2993a6c"},{url:"service-worker.js",revision:"d4158e20e5b358012a2469f8c4a40a16"},{url:"spondylarhrites/index.html",revision:"6039c0ef146039b142cd316a1e608d6f"},{url:"spondylodiscites/index.html",revision:"784d6c2f6f2831dcb6b0da59d0a80ccb"},{url:"traumatologie/index.html",revision:"aa09e59cfac03b7ba9fb716041367477"},{url:"urgences-reanimation/index.html",revision:"66b478f585a45de1f6c7e7a323d57e33"},{url:"urologie/index.html",revision:"a24aed60e1ad3fc8c183b60f13b5ae4f"},{url:"workbox-b45ff455.js",revision:"9bfeff618b535714a1b38a8628fdaa72"},{url:"workbox-config.js",revision:"d47e073d8283b30a7182703fbe02a807"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=service-worker.js.map
