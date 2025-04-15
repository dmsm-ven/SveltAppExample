<script lang="ts">
    import { onMount } from 'svelte';

    let forecastData = $state([]);
    let selectedForeacast = $state();

    onMount(async() => {
         const url = "http://localhost:5146/weatherForecast";
         let response = await fetch(url);
         forecastData = await response.json();
         selectedForeacast = forecastData[0];
	});
</script>

<h1>Weather forecast api client</h1>

<div class="forecast-box">
    <div class="forecast-menu">
        <ul>
            {#each forecastData as forecast}
                <li class="{selectedForeacast.date === forecast.date ? 'active' : ''}" onclick={() => {
                    selectedDate = forecast.date;
                }}>{forecast.date}
                </li>
            {/each} 
        </ul>
    </div>
    <div class="forecast-content">
    {#if selectedForeacast}
    <h2>{selectedForeacast.date}</h2>
    <p><span>temperatureC:</span> {selectedForeacast.temperatureC}</p>
    <p><span>summary:</span> {selectedForeacast.summary}</p>
    <p><span>temperatureF:</span> {selectedForeacast.temperatureF}</p>
    {/if}
    </div>
</div>

<style>
    .forecast-box {
        display: grid;
        grid-template-columns: 1fr 3fr;
        justify-content: center;
        gap: 20px;
    }
    .forecast-menu {
        background: rgba(0,0,0,0.2);
    }
    .forecast-content {
        background: rgba(0,0,0,0.2);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .forecast-content span {
        font-weight: bold;
        color: royalblue;
    }
    

    h1 {
        text-align: center;
    }
    ul {
        list-style-type: none;
    }
    ul li {
        margin: 8px;
        cursor: pointer;
        color: royalblue;
    }
    ul li:hover {
        color: white;
    }
    li.active {
        color: yellow;
        
    }
    .btn-primary {
        background: red;
        border: none;
        margin: 4px 8px;
        color: white;
    }
</style>