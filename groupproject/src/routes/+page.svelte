<script lang="ts">
    function hexToRgb(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } :  {
    r: parseInt("0"),
    g: parseInt("0"),
    b: parseInt("0")
  };
}

let sidebarItemsinitial = [
    {color: 'f7650a', href: 'youtube.com', data: '&nbsp;Home&nbsp;', text: '&nbsp;Home&nbsp;', rgb: {r:0,g:0,b:0}},
    {color: 'ff6493', href: 'about-us', data: '&nbsp;About&nbsp;', text: '&nbsp;About&nbsp;', rgb: {r:0,g:0,b:0}},
    {color: '0ef70a', href: 'our-projects', data: '&nbsp;Our&nbsp;Projects&nbsp;', text: '&nbsp;Our&nbsp;Projects&nbsp;', rgb: {r:0,g:0,b:0}},
    {color: 'eb170a', href: 'youtube.com', data: '&nbsp;Hire&nbsp;Us&nbsp;', text: '&nbsp;Hire&nbsp;Us&nbsp;', rgb: {r:0,g:0,b:0}}
];

let sidebarItems = sidebarItemsinitial.map(item => {
    item.rgb = hexToRgb(item.color);
    return item
})
</script>

<title>Home Page</title>

<div class="navContainer">
    <ul>
        <!-- <div class="navWord">
            <li style="--clr:#; background-color: rgba({hexToRgb("f7650a").r}, {hexToRgb("f7650a").g}, {hexToRgb("f7650a").b}, 0.5);"> 
                <a href="youtube.com" data-text=""></a>
            </li>
        </div> -->
        {#each sidebarItems as item}
            <li style="--clr:#{item.color}">
                <a href="{item.href}" data-text="{item.data}">{@html {item.text}}</a>
            </li>
        {/each}
    </ul>
</div>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .navContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        max-width: max-content;
        background-color: #000;
        padding: 20px;
        
    }

    .navWord {
        justify-content: center;
        min-width: 100%;
        
    }

    ul {
        position: relative;
        display: flex;
        min-height: 100vh;
        min-width: 100%;
        gap: 30px;
        justify-content: space-evenly;
        flex-direction: column;
    }

    ul li {
        position: relative;
        list-style: none;
        min-width: 100%;
        display: flex;
    }

    ul li a {
        position: relative;
        font-size: 2em;
        width: 100%;
        font-weight: bold;
        text-decoration: none;
        line-height: 1em;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: transparent;
        min-width: 100%;
        flex: 1;
        -webkit-text-stroke: 1px rgba(225, 225, 225, 0.5);
    }

    ul li a::before {
        content: attr(data-text);
        position: absolute;
        color: white;
        width: 0;
        flex: 1;
        word-wrap: initial;
        overflow: hidden;
        transition: 1s;
        border-right: 8px solid var(--clr);
        -webkit-text-stroke: 1px var(--clr);
        flex: 1;
    }

    ul li a:hover::before {
        width: 100%;
        flex: 1;
        background: var(--clr);
        opacity: 30%;
    }

</style>
