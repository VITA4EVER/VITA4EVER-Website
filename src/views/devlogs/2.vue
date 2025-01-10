<template class="m-1">
    <div class="prose lg:prose-xl m-5">
      <div>
          <h1>Mirage DEVLOG - 15-2-2024</h1>
          <h3>Some improvements were made to the server, some planning of the development process was done, and with the help of our rom-hacker we made some speculations on how to make the development easier.</h3>
      </div>
  
      <ol class="list-group list-group-numbered">
          <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                  <div class="fw-bold">Server Bug Fixes:</div>
                  <p>Fixing minor bugs, improving stability of the server and it's components.</p>
              </div>
          </li>
          <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                  <div class="fw-bold">Exploring Development Paths:</div>
                   <p>We researched some possibilities to mimic matchmaking of other similar games on PlayStation Vita system.</p>
              </div>
          </li>
          <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                  <div class="fw-bold">TLS Protocol downgrade:</div>
                  TLS version in the TCP server was downgraded to 1.1, to match the version that the game uses.
              </div>
          </li>
          <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                  <div class="fw-bold">Planning</div>
                  By using software called Obsidian we structured the development process that we will follow.
              </div>
          </li>
          <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                  <div class="fw-bold">TCP Logging Improvement</div>
                  Added more advanced logging into the TCP server to ensure that no requests will be missed.
              </div>
          </li>
      </ol>

      <h3>Game Content Decryption</h3>
      <div class="ms-2 me-auto">
          <div class="fw-bold">Mai Dump Tool:</div>
          <p>With our research (And data from our rom-hacker) we found the best way to decrypt KZV. To perform this opperation, we suggest that you use Mai Dump Tool.</p>
          <div class="fw-bold">A possibility of using older np_communicator version.</div>
          <p>We speculate that using an older np_communicator version would make the development of the server easier. The older version is pretty much a drop in replacement of the new version.</p>
      </div>
    </div>
</template>

<script>
export default {
name: 'DevlogTwo',
}
</script>

<style>
</style>