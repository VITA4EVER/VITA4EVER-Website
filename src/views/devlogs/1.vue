<template class="m-1">
  <div class="prose lg:prose-xl m-5">
        <div>
            <br>
            <h1>Mirage DEVLOG - 15-1-2024</h1>
            <h3>Small improvements to some systems, especially in logging that will improve the debugging process.</h3>
        </div>

        <ol class="list-group list-group-numbered">
          <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">DNS Server Improvement:</div>
              Added more comprehensive logging into the DNS server.
            </div>
          </li>
          <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">API Logging Enhancements:</div>
              Added more debugging features into UDP and TCP APIs.
            </div>
          </li>
          <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">UDP IPv4 Resolution</div>
              Fixed IPv4 bidning issue for UDP server, changed the bind address to 0.0.0.0
            </div>
          </li>
          <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">LogBox Encoding Fix</div>
              Fixed an encoding anomaly within the LogBox module. (/ToolBox/LogBox/)
            </div>
          </li>
        </ol>

        <h3>Concurrent Protocol Support:</h3>
        <p>Added cmux multiplexer, to bind addresses more effectively.</p>

        <h3>Logging Methodology Expansion:</h3>
        <p>Added more logging levels INFO and DEBUG to LogBox module (/ToolBox/LogBox/)</p>
      </div>
</template>

<script>
export default {
name: 'DevlogOne',
}
</script>

<style>
</style>