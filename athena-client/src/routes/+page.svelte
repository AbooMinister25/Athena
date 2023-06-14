<title>Athena</title>
<h1 style = "text-align: center;">Athena</h1>
<div class="navbar">
    <a href="+page.svelte">Home</a>
    <div class="dropdown">
        <button class="dropbtn">Addition</button>
        <div class="dropdown-content">
            <a href="+page.svelte">Single Digit</a>
            <a href="+page.svelte">Double Digit</a>
            <a href="+page.svelte">Triple Digit</a>
        </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn">Subtraction</button>
        <div class="dropdown-content">
            <a href="+page.svelte#">Single Digit</a>
            <a href="+page.svelte">Double Digit</a>
            <a href="+page.svelte">Triple Digit</a>
        </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn">Multiplication</button>
        <div class="dropdown-content">
            <a href="+page.svelte">Single Digit</a>
            <a href="+page.svelte">Double Digit</a>
            <a href="+page.svelte">Triple Digit</a>
        </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn">Division</button>
        <div class="dropdown-content">
            <a href="#">Single Digit</a>
            <a href="#">Double Digit</a>
            <a href="#">Triple Digit</a>
        </div>
    </div>
    <a href="">About Us</a>
</div>

<style lang="scss">
	@import 'node_modules/nord/src/sass/nord.scss';

	h1 
    {
		color: $nord11;
	}
    .navbar 
    {
        overflow: hidden;
        background-color: #81A1C1;
        padding:10px;
    }

    .navbar a 
    {
        float: left;
        font-size: 16px;
        color: #5E81AC;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    .dropdown 
    {
        float: left;
        overflow: hidden;
    }

    .dropdown .dropbtn 
    {
        font-size: 16px;  
        border: none;
        outline: none;
        color: #5E81AC;
        padding: 14px 16px;
        background-color: inherit;
        font-family: inherit;
        margin: 0;
    }

    .navbar a:hover, .dropdown:hover .dropbtn 
    {
        background-color: #88C0D0;
        color: #5E81AC;
    }

    .dropdown-content 
    {
        display: none;
        position: absolute;
        background-color: #88C0D0;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

    .dropdown-content a 
    {
        float: none;
        color: #81A1C1;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
    }

    .dropdown-content a:hover 
    {
        background-color: #5E81AC;
        color: #81A1C1;
    }

    .dropdown:hover .dropdown-content 
    {
        display: block;
    }
</style>
