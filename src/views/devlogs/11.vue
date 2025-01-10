<template>

  <div class="prose lg:prose-xl m-5">

      <div tabindex="0" class="collapse collapse-arrow border-base-300 bg-red-600 border">
        <div class="collapse-title text-xl font-medium">This page is archived, press for info</div>
        <div class="collapse-content">
          <p>In order to make a custom launcher you will have to modify the .psarc files, and then modify the checksum in the eboot.bin. We do not have the information for where exactly to find the address of the checksum in the eboot.bin, and without it, all of the .psarc modifications will be rejected. We are not planning to continue the custom launcher, because of this reason.</p>
        </div>
      </div>

      <div>
        <br>
        <h1>Mirage DEVLOG - 26/4/2024</h1>
        <h3>In this devlog, we discuss the process of developing a custom launcher for Killzone Mercenary that connects to the VITA4EVER servers and enables game playability.</h3><br>
      </div>

      <div>
        <h1>In simple terms:</h1>
        <h3>We are hard at work developing our own custom launcher to connect you to our service. Below, we address some common queries about this project.</h3>
      </div><br>

      <h1>Our plan:</h1>
      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/11-1.png" style="width:20%; height:30%;">
      </div><br>
      <h3>The initial step involves examining the GUM files to understand the purpose of each file and how the game operates internally. Subsequently, it is essential to document the key methods from classes such as gGame, gModule, and gNetManager. The next task is to create custom GUM files that will enhance and substitute the functionality of the existing networking code. Following this, we will develop a custom server using Ruby, which is considered the simplest part of the process. Some adjustments will be required for the game's internal networking. Once these steps are completed, alpha testing will commence.</h3>

      <h1>Q&A Section</h1>

      <div style="background-color: black;">
        <h1>Why custom launcher?</h1>
        <h3>The rationale for developing a custom launcher is straightforward. Creating a custom launcher enables us to exert full control over the game's internal matchmaking, which is particularly beneficial for organizing events.</h3><br>

        <h1>Open source?</h1>
        <h3>We will release our custom launcher under open source terms using our proprietary license. Note that all contributions will be owned by us; contributors should be aware of this.</h3><br>

        <h1>How to install?</h1>
        <h3>We will release a detailed and easy-to-follow installation guide. Currently, the only prerequisite is a modified PS Vita system. Fortunately, various methods are available today to alter your Vita without a PC.</h3><br>

        <h1>How soon?</h1>
        <h3>We don't have a specific deadline for this project. Creating a custom launcher is complex, and we will take the necessary time to ensure quality and organization.</h3><br>

        <h1>When more?</h1>
        <h3>We will publish additional news about the custom launcher when we believe they are stable enough for release and when we are certain that no further changes will occur. As soon as the base of the custom launcher is fully developed, we will make it available on GitHub, where it can be further enhanced.</h3>

      </div>
</div>
</template>

<script>
export default {
name: 'DevlogEleven',
}
</script>

<style>
</style>