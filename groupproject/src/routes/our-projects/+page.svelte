<script lang='ts'>
	import { each } from "svelte/internal";

let resources = [
    {link: 'https://kit.svelte.dev/', styling: 'background-image: url(https://miro.medium.com/max/1000/1*joB4ddC9_-3okvy0r8_CPQ.png); background-color: #ff3c00', name: 'Introduction to SvelteKit'}
];

let descriptions = [
    {text: 'asd'}
];

</script>

<title>Svelte Materials</title>

<body>
    <div class="cards-container">
        {#each resources as resource}
            <a href="{resource.link}" target="_blank" class="card">
                <div class="card-background" style="{resource.styling}"></div>
                <div class="card-content">
                    <p>{resource.name}</p>
                </div>
            </a>
        {/each}

        <div class="description-container"></div>
        {#each descriptions as description}
        <div class="card">
            <div class="description-background" style="#fff"></div>
            <div class="description-background">
                    <p>{description.text}</p>
                </div>
            </div>
        {/each}
    </div>
</body>

<style>

    body {
        padding: 50px;
        background-color: #131416;
    }

    .cards-container {
        display: grid;
        flex-direction: column;
        margin: auto;
        max-width: 1200px;
        
        gap: 10px;
    }

    .card {
        position: relative;
        padding: 10%;
        background-size: contain;
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

    .description-background {
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
        background: #fff;
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
    }

    p {
        color: #fff;
        font-size: 2vw;
        display: flex;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-shadow: 0 0 10px rgba(3, 3, 3, 1);
        position: absolute;
        text-align: center;
        border: 5px solid #fff;
        
    }

    .cards-container:hover>.card:not(:hover) p {
        opacity: 0;
    }

    .card:hover p {
        opacity: 100;
    }

</style>