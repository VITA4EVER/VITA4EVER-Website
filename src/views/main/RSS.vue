<template>
    <div class="hero min-h-screen" :style="{ backgroundImage: `url(${require('@/assets/backgrounds/RSS.webp')})` }">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="text-neutral-content text-center">
        <h1 class="mb-5 text-5xl font-bold">News</h1>
        <p>If you want to add this feed to your RSS reader, please use <a class="underline text-yellow-400" href="https://vita4ever.github.io/Feed.xml">this link</a>.</p>

            <div class="text-center flex flex-wrap justify-center align-middle gap-2 mt-8 ml-2 mr-2">

                <div v-for="article in articles" :key="article" class="card glass min-w-10 max-w-96 h-[320px] m-2">
                    <div class="card-body">
                      <h2 class="text-center font-bold text-2xl">{{article.title}}</h2>
                      <h3>{{article.date}}</h3>
                      <div v-html="article.content.slice(0,180) + '...'" class="text-left"></div>
                      <button class="btn btn-accent mt-auto" @click="fillAndShowModal(article)">Expand</button>
                    </div>
                </div>

            </div>

        </div>
    </div>

    <!-- Content modal -->
    <dialog id="content_modal" class="modal">
        <!-- Bg Blur -->
        <div class="absolute w-screen h-screen blur-xl"></div>

        <!-- Main content -->
        <div class="modal-box min-w-12 max-w-5xl glass">
            <h1 class="text-3x1 font-bold text-center" style="font-size: 1.875rem;">{{article_modal_title}}</h1>
            <h3 class="text-center" style="font-size: 1.25rem;">{{article_modal_date}}</h3>
            <div v-html="article_modal_content" class="prose mt-4 mb-4 text-white" style="max-width: 48rem;"></div>

            <form method="dialog" class="self-center">
                <button class="btn btn-accent">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" version="1.1" id="left-arrow-svg" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 8.3781337,6.6474507 C 8.8320279,6.1943152 8.8326473,5.4590326 8.3795273,5.0051384 7.9263918,4.5512443 7.1911093,4.5506249 6.7372151,5.0037449 Z M 0.34082841,11.389262 c -0.45389417,0.453213 -0.45451352,1.188387 -0.001394,1.642374 0.45313545,0.453832 1.18841794,0.454452 1.64231224,0.0014 z M 1.955889,11.364333 c -0.4677213,-0.438968 -1.20263223,-0.415432 -1.64147607,0.05218 -0.43884385,0.467767 -0.41544772,1.202632 0.0522735,1.641445 z m 4.8071842,7.695174 c 0.4677213,0.438967 1.2026322,0.415432 1.641476,-0.05218 0.4388439,-0.467768 0.4154477,-1.202632 -0.052274,-1.641445 z M 1.1612877,11.049856 c -0.64135737,0 -1.1612902398849,0.519948 -1.1612902398849,1.16129 0,0.641342 0.5199328698849,1.16129 1.1612902398849,1.16129 z m 16.0567733,1.16129 v 1.16129 h 0.0036 z m 3.967896,1.629832 0.818788,-0.823587 v 0 z m 0.491459,3.961548 c 0.0017,0.641342 0.523199,1.159742 1.164541,1.158039 0.641342,-0.0017 1.159742,-0.5232 1.158039,-1.164542 z M 6.7372151,5.0037449 0.34082841,11.389262 1.9817471,13.03303 8.3781337,6.6474507 Z M 0.36668647,13.057959 6.7630732,19.059507 8.3522757,17.365881 1.955889,11.364333 Z M 1.1612877,13.372436 H 17.218061 v -2.32258 H 1.1612877 Z m 16.0603343,0 c 1.178323,-0.0036 2.309884,0.46111 3.145548,1.291974 l 1.637575,-1.647019 C 20.732125,11.752204 19.00908,11.044436 17.2145,11.049856 Z m 3.145548,1.291974 c 0.835665,0.830865 1.306994,1.959639 1.310246,3.138116 l 2.32258,-0.0065 c -0.005,-1.794426 -0.722632,-3.513445 -1.995251,-4.778632 z" fill="#000000" id="path1" style="fill:#f9f9f9;stroke-width:1.54839"/>
                    </svg>
                    Go back
                </button>
            </form>
        </div>

    </dialog>

</template>

<script>

/*

    POSSIBLE TODO:
    Fetch the number of the article from the URL, so when the page fully loads, the modal with the article will pop up without the user have to select the article from the list.

*/

export default {
    name: 'RSS',
    data() {
        return {
            articles: [
                {"title": "The articles are loading.", "date": "", "content": "Please wait"}

            ],
            article_modal_title: "Error!",
            article_modal_date: "",
            article_modal_content: "<p>For some reason the article did not display in the modal. <b>Contact an admin</b> for support.</p>" // I'm pretty sure that it will be impossible to cause this error, but who knows what might happen? It's better to notify the user if something is wrong.
        }
    },
    methods: {
        fillAndShowModal(article) {
            this.article_modal_title = article.title
            this.article_modal_date = article.date
            this.article_modal_content = article.content

            var content_modal = document.getElementById("content_modal")
            content_modal.showModal()
        },
        async fetchXmlString() {
            try {
                const response = await fetch('https://vita4ever.github.io/Feed.xml');
                if (response.ok) {
                    // Parse the response as text
                    const xmlString = await response.text();

                    return xmlString;

                } else {
                    console.error('Failed to fetch file:', await response.text());
                    return null;
                }
            } catch (error) {
                console.error('Error fetching file:', error);
                return null;
            }
        },
        xmlToJson(xmlString) {
            try {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

                const items = xmlDoc.getElementsByTagName("item");
                const actualJson = [];

                for (let i = 0; i < items.length; i++) {
                    const item = items[i];
                    const title = item.getElementsByTagName("title")[0].textContent;
                    const author = item.getElementsByTagName("author")[0].textContent;
                    const pubDate = item.getElementsByTagName("pubDate")[0].textContent;
                    const content = item.getElementsByTagName("content")[0].textContent;

                    actualJson.push({
                        "title": title,
                        "author": author,
                        "date": pubDate,
                        "content": content
                    });
                }

                return actualJson;
            } catch (error) {
                console.error("Error translating XML:", error);
            }
        }
    },
    async mounted() {
        var xml_string = await this.fetchXmlString();
        var final_json = this.xmlToJson(xml_string);
        await console.log(final_json);
        this.articles = final_json
    },
}
</script>