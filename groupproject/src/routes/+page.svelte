<script>
</script>

<title>Home Page</title>

<div class="navContainer">
    <ul>
        <li style="--clr:#f7650a">
            <a href="youtube.com" data-text="&nbsp;Home&nbsp;">&nbsp;Home&nbsp</a>
        </li>
        
        <li style="--clr:#ff6493">
            <a href="youtube.com" data-text="&nbsp;About Us&nbsp;">&nbsp;About Us&nbsp</a>
        </li>

        <li style="--clr:#0ef70a">
            <a href="youtube.com" data-text="&nbsp;Projects&nbsp;">&nbsp;Projects&nbsp</a>
        </li>

        <li style="--clr:#eb170a">
            <a href="youtube.com" data-text="&nbsp;Hire Us&nbsp;">&nbsp;Hire Us&nbsp</a>
        </li>
    </ul>
</div>

<style>
    * {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .navContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #3b2a27;
    }

    ul {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    ul li {
        position: relative;
        list-style: none;
    }

    ul li a {
        position: relative;
        font-size: 5em;
        font-weight: bold;
        text-decoration: none;
        line-height: 1em;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: transparent;
        -webkit-text-stroke: 1px rgba(225, 225, 225, 0.5);
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
