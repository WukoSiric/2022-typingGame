<script lang="ts">

    import {fade} from 'svelte/transition';

    let images: string[] = [
        'https://tinyurl.com/imgof1yifan',
        'https://tinyurl.com/imgof2yifan',
        'https://tinyurl.com/4ebknb8e',
        'https://tinyurl.com/img1yifan',
        'https://tinyurl.com/img2yifan'
    ];

    let count: number = 0;

    function next() {
        count = (count + 1) % images.length;
        return count;
    }

    function back() {
        if (count == 0) {
            count = images.length - 1;
        } else {
            count = (count - 1) % images.length;
        }

        return count;
    }

</script>

<div class="carousel">
    <button on:click={() => back()}>
        <div class="control"> &lt; </div> <!--left-->
    </button>

    <span class="picture">
        {#each [images[count]] as src (count)}
            <img transition:fade {src} alt="" />	
        {/each}
    </span>

    <button on:click={() => next()}>
        <div class="control"> &gt; </div> <!--right-->
    </button>
</div>

<p>{count}</p>

<style>


* {
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    font-size: 2em;
    align-items: center;
    justify-content: center;
}

img {
    position: absolute;
}

.picture {
    min-width: 60vw;
    min-height: 70vh;
}
</style>

