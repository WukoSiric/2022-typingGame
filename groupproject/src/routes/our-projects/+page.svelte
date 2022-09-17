<script lang='ts'>

let resources = [
    {
        link: 'https://kit.svelte.dev/', 
        styling: 'background-image: url(https://miro.medium.com/max/1000/1*joB4ddC9_-3okvy0r8_CPQ.png); background-color: #ff3c00', 
        name: 'Introduction to SvelteKit', 
        description: 'Lorem Ipsum'
    },

    {
        link: 'https://kit.svelte.dev/', 
        styling: 'background-image: url(https://miro.medium.com/max/1000/1*joB4ddC9_-3okvy0r8_CPQ.png); background-color: #ff3c00', 
        name: 'Introduction to SvelteKit', 
        description: 'Lorem Ipsum'
    },

    {
        link: 'https://kit.svelte.dev/', 
        styling: 'background-image: url(https://miro.medium.com/max/1000/1*joB4ddC9_-3okvy0r8_CPQ.png); background-color: #ff3c00', 
        name: 'Introduction to SvelteKit', 
        description: 'Lorem Ipsum'
    }
];

</script>

<title>Svelte Materials</title>
    <div class="page">
    <div class="cards-container">
        {#each resources as resource}
        <div class="card-wrapper">
            <a href="{resource.link}" target="_blank" class="card">
                <div class="card-background" style="{resource.styling}"></div>
                <div class="card-content">
                    <p class="border">{resource.name}</p>
                </div>
            </a>
            
            <div class="description-content">
                <p>{resource.description}</p>
            </div>
        </div>
        {/each}
    </div>
</div>

<style>

    * {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .page {
        padding: 30px;
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(53,51,80,1) 39%, rgba(157,156,170,1) 93%, rgba(197,197,205,1) 100%, rgba(220,220,225,1) 100%, rgba(255,255,255,1) 100%);
        height: 100%;
    }

    .cards-container {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .card-wrapper {
        flex: 1;
        display: flex;
        margin: auto;
        gap: 40px;
        width: 95%;
        
    }

    .card {
        position: relative;
        padding: 5%;
        background-size: contain;
        flex: 1.5;
        text-decoration: none;
    }

    .description-content {
        flex: 1;
        /* From https://css.glass */
        background: rgba(255, 255, 255, 0.15);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5.6px);
        -webkit-backdrop-filter: blur(5.6px);
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card-background {
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 24px;
        filter: brightness(0.75) saturate(1.2) contrast(0.85);
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        transform-origin: center;
        transition: .2s;
    }
    
    .card:hover .card-background {
        transform: scale(1.05) translateZ(0);
    }

    .cards-container:hover>.card:not(:hover) .card-background {
        filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
    }

    @media(min-width: 960px) {
        .cards-container {
            grid-template-columns: repeat(2, 2fr);
        }
    }

    .card-content {
        padding: 24px;
        position: relative;
        display: flex;
        font-family: Arial, Helvetica, sans-serif;
        max-height: 100%;
        max-width: 100%;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex: 2;
    }

    p {
        color: #fff;
        font-size: 2vw;
        display: flex;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-shadow: 0 0 10px rgba(3, 3, 3, 1);
        text-align: center;
        
    }

    .border {
        border: 5px solid #fff;
    }

    .cards-container:hover>.card:not(:hover) p {
        opacity: 0;
    }

    .card:hover p {
        opacity: 100;
    }

</style>