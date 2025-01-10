<template class="magrin-one-percent">
  <div class="prose lg:prose-xl m-5">
      <div>
        <br>
        <h1>Mirage DEVLOG - 24/3/2024</h1>
        <h3>In this devlog we studied the basics of .gum files, speculating if we could modify them to change the game's behaviour.</h3>
      </div>

      <h3>The GUM files also appear to contain the initial networking code necessary for the continuation of recreating the Killzone Mercenary servers.</h3>
      <h3>This update concentrates on the GUM files due to minimal changes on the server side since the last update. Currently, we may gather important information about KZV networking that we can find in the GUM files. GUM files mostly house some UI implementations, but they do have some basic server functions and if statements.</h3>

      <h2>Simple button example:</h2>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/5-1.png" style="width:90%; height:90%;">
      </div>

      <h3>GUM files are essentially XML and Lua files, incorporating a custom code management system. These files include networking code and all code related to any game menu.</h3>

      <h2>Grid example:</h2>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/5-2.png" style="width:90%; height:90%;">
      </div><br>  

      <h3>Here you can observe a straightforward button grid within the main menu, supplemented by a debug button we've introduced for experimental purposes.</h3>

      <h1>General GUM file example:</h1>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/5-3.png" style="width:90%; height:90%;">
      </div><br>

      <h2>This example elucidates the overall structure of GUM files.</h2>
      <h1 style="text-align: center;">Studying the GUM files may bring us some information that may be helpful for recreating KZV servers.</h1>
</div>
</template>

<script>
export default {
name: 'DevlogFive',
}
</script>