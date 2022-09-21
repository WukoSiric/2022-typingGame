<script>

</script>

<!--CODE FOR MENU-->


<div class="container">
    <ul>
        <li style="--clr:#fff">
            <a href="/home" data-text="&nbsp;Home&nbsp;">&nbsp;Home&nbsp</a>
        </li>

        <li style="--clr:#fff">
            <a href="/about-us" data-text="&nbsp;About&nbsp;Us&nbsp;">&nbsp;About&nbsp;Us&nbsp</a>
        </li>

        <li style="--clr:#fff">
            <a href="/our-projects" data-text="&nbsp;Projects&nbsp;">&nbsp;Projects&nbsp</a>
        </li>

        <li style="--clr:#fff">
            <a href="/hire-us" data-text="&nbsp;Hire&nbsp;Us&nbsp;">&nbsp;Hire&nbsp;Us&nbsp</a>
        </li>
    </ul>
</div>


<style>

    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@1,500&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 13vh;
        max-width: max-content;
        min-width: 100%;
        position: sticky;
    }

    .container[data-position='top'] {
        top: 1rem;
    }

    ul {
        position: relative;
        display: flex;
        gap: 30px;
        justify-content: space-evenly;
    }

    ul li {
        position: relative;
        list-style: none;
    }

    ul li a {
        position: relative;
        font-size: 3.5em;
        font-weight: bold;
        text-decoration: none;
        line-height: 1em;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: transparent;
        -webkit-text-stroke: 1px rgba(255, 255, 255, 0.8);
    }

    ul li a::before {
        content: attr(data-text);
        position: absolute;
        color: white;
        width: 0;
        overflow: hidden;
        transition: 1s;
        border-right: 8px solid var(--clr);
        -webkit-text-stroke: 1px var(--clr);
    }

    ul li a:hover::before {
        width: 100%;
        filter: drop-shadow(0 0 25px var(--clr));
    }

</style>