
<script lang='ts'>

export let title:string = ''
export let message:string = ''
export let openModal:boolean=false


</script>

<script context="module">
  export const hydrate = true;
</script>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-3" class="modal-toggle" bind:checked={openModal}/>
<div class='modal'  on:click>
  <div class="modal-box ml-12 relative bg-neutral text-primary w-[700px] max-w-5xl">
    <h3 class="text-2xl text-center font-bold">{title}</h3>
    <p class="py-8 text-center">{message}</p>
  </div>
</div>



<style>

</style>