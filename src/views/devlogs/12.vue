<template>
  <div class="prose lg:prose-xl m-5">
      <div>
        <br>
        <h1>Mirage DEVLOG - 15/6/2024</h1>
        <h3>This devlog discusses changes in our development paths, changes in server A, and development path B.</h3><br>
      </div>

      <h1 style="text-align: center;">Development paths explanation:</h1>

      <div tabindex="0" class="collapse collapse-arrow border-base-300 bg-orange-500 border">
        <div class="collapse-title text-xl font-medium">Some information is not up to date here! Press for info</div>
        <div class="collapse-content">
          <p>DPA: Using DNS server is impossible for redirecting regular server requests, but it is possible to use it to change the ELUA. It is better to instead change the IP address of the server inside of the eboot.bin file to redirect the requests to Mirage.</p>
        </div>
      </div>
      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/12.png">
      </div>

      <h1 style="text-align: center;">Development path A:</h1>
      <div class="bg-gray-800 rounded-xl">
        <h1>Server progress:</h1>

        <ol class="list-group list-group-numbered">
          <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                  <div class="fw-bold">Full server rewrite</div>
                  Upon completion of the initial phase, we have initiated the comprehensive overhaul of our server infrastructure. Key components, including the initiation process, DNS server, TCP and HTTP servers, router have been successfully upgraded and are now operational.
              </div>
          </li>
          <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">Server A V0.2</div>
                Server A revision 0.2 is written. We are currently conducting an in-depth analysis of the game's packets to obtain more information for development path A.
            </div>
          </li>
        </ol>
      </div>

      <h1 style="text-align: center;">Development path B:</h1>

      <div tabindex="0" class="collapse collapse-arrow border-base-300 bg-red-600 border">
        <div class="collapse-title text-xl font-medium">Dev plan B is archived! Press for info</div>
        <div class="collapse-content">
          <p>In order to make a custom launcher you will have to modify the .psarc files, and then modify the checksum in the eboot.bin. We do not have the information for where exactly to find the address of the checksum in the eboot.bin, and without it, all of the .psarc modifications will be rejected. We are not planning to continue the custom launcher, because of this reason. Our rom hacker does not have enough resources to work on the custom launcher.</p>
        </div>
      </div>

      <div class="bg-gray-800 rounded-xl">
        <div class="m-2">
          <h1 style="text-align: center;">Custom launcher development</h1>
          <h3>The primary v4e_main folder was established to house our custom GUM files and additional resources for the custom launcher.</h3>
          <h3>We are currently working on Operation Butter, a simple example code injection. It is an important step in creating a custom launcher.</h3>
          
          <h1>Things done on OP : Butter:</h1>

          <ol class="list-group list-group-numbered">
            <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Attempt to use create a custom .psarc file using PSArcTool</div>
                    We have utilized PSArcTool to generate a customized  .psarc file. Following the creation process, the VitaShell correctly identified and processed the file. Preliminary observations indicate that the newly generated file employs ZLIB compression methodology, mirroring the characteristics of the standard  .psarc files commonly found in Killzone Mercenary.
                </div>
            </li>
            <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">Attempt to effect a straightforward modification in the .psarc file. The subsequent use of rePatch enabled the manipulation and alteration of the targeted game data.</div>
                    The effort to modify the .psarc file through rePatch and subsequent application of changes to the targeted game resulted in an unanticipated outcome – the game experienced a crash upon execution. Upon repeated attempts, it was discovered that the root cause lay with PSArcTool itself. Employing Total Commander in conjunction with its psarc plugin allowed for the creation of an altered file which successfully bypassed the original crashing issue. Nevertheless, a new challenge arose: the applied modifications were altogether ignored by the game, rendering them ineffective.
                </div>
            </li>
            <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                  <div class="fw-bold">Modifying Aspect Ratio and psarc Version</div>
                  We attempted to modify the version of psarc and the aspect ratio, but neither change resolved the issue where the game ignores our custom .psarc file. The aspect ratio setting altered the file size.
              </div>
            </li>
            </ol>

          <h3>The game conducts a hash verification on each file before loading, thus disregarding any custom content unless manipulation of the target hash value within the game's eboot.bin takes place.</h3>
        </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
name: 'DevlogTwelve',
}
</script>

<style>
</style>