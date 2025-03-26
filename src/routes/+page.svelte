<script lang="ts">
import { steps } from '../config/steps.js';
import type { Item } from '../types/index.ts';

const store = steps;
function reset() {
    selStep1 = selStep2 = selStep3 = selStep4 = undefined;
}
let selStep1: string | undefined = undefined;
let selStep2: string | undefined = undefined;
let selStep3: string | undefined = undefined;
let selStep4: string | undefined = undefined;
function setStep1(id: string) {
    selStep1 = id;
    selStep2 = selStep3 = selStep4 = undefined;
}
function setStep2(id: string) {
    selStep2 = id;
    selStep3 = selStep4 = undefined;
}
function setStep3(id: string) {
    selStep3 = id;
    selStep4 = undefined;
}
function setStep4(id: string) {
    selStep4 = id;
}
</script>


{#snippet button(props: Item, bgColor: string | undefined, sel: string | undefined, f: any)}

<button id="{props.id}" class:hidden={!!sel} class:active={sel === props.label} on:click={() => f(props.label)} style="--bgColor: {bgColor}">{props.label}</button>
{/snippet}

{#snippet saluto()}
<div class="saluto">
    Ricorda di scrivere il genere{#if selStep1 === 'Verbo'},
    {:else} 
    &nbsp;ed{/if} il numero 
    {#if selStep1 === 'Verbo'}
     e la persona ;)                
    {/if}
</div>
{/snippet}

<h1>L'analisi grammaticale è bellissssima!!</h1>
<h2 class="risultato">
    Risultato: {selStep1} <span>{selStep2} {selStep3} {selStep4}</span><br>
</h2>
<div class="_1">
{#each store as step1}
    {@const bgColor = step1.bgColor}
    {@render button(step1, bgColor, selStep1, setStep1)}
    {#if step1.opz}
    <div class="_2">
        {#each step1.opz as step2}
        {@render button(step2, bgColor, selStep2, setStep2)}
        {#if step2.opz}
        <div class="_3">
            {#each step2.opz as step3}
            {@render button(step3, bgColor, selStep3, setStep3)}
            {#if step3.opz}
            <div class="_4">
                {#each step3.opz as step4}
                {@render button(step4, bgColor, selStep4, setStep4)}
                {@render saluto()}
                {/each}
            </div>
            {:else if selStep2 !== 'Proprio'}
                {@render saluto()}
            {/if}
            {/each}
        </div>
        {:else}
        {@render saluto()}
        {/if}
        {/each}
    </div>
    {/if}
{/each}
</div>

{#if !!selStep1}
<button class="reset" on:click={reset}>Torna indietro</button>
{/if}

<style>
h1 {
    background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Butterfly", cursive;
    font-size: 4rem;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 4rem;
    text-align: center;
}
h2 {
    text-align: center;
}
.risultato span {
    text-transform: lowercase;
}
button {
    background-color: var(--bgColor);
    border: none;
    border-radius: 10px;
    cursor: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="%23F00" stroke="%23FFF" stroke-width="2" stroke-linejoin="round" d="M12 8S9.75 5 7 5a4.5 4.5 0 0 0-4.5 4.5C2.5 14.5 12 20 12 20s9.5-5.5 9.5-10.5A4.5 4.5 0 0 0 17 5c-2.75 0-5 3-5 3Z"></path></svg>'), auto;
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
    margin-block: 10px;
    width: clamp(10rem, 12rem, 15rem); 
    padding: 10px 15px;

    &.hidden {
        display: none;
    }

    &.active {
        border: 1px solid red;

        + div {
            display: block;
        }
   }
   &.reset {
        background-color: aquamarine;
        margin: auto;
        margin-block-start: 40px;
   }
}
.saluto {
    background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-size: 3rem;
    margin-block: 40px;
    text-align: center;
}
div > div {
    display: none;
    margin-inline-start: 15px;
}
</style>




