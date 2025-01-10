<template>
  <div class="prose lg:prose-xl m-5">
      <div>
        <h1>Mirage DEVLOG - 14/3/2024</h1>
      </div>

      <h3>General changes:</h3>

      <ol class="list-group list-group-numbered">
        <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Significant Enhancement in TCP Server Logging</div>
            The TCP server underwent a comprehensive rewrite, incorporating extensive logging mechanisms. This overhaul significantly improves the server's ability to accurately capture and process incoming requests, thereby enhancing its overall performance and reliability.
          </div>
        </li>

       <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
         <div class="ms-2 me-auto">
             <div class="fw-bold">Substantial Refinement of the TCP Server</div>
             Improvements in the code maintainability of the TCP server.
         </div>
       </li>

      <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">Hex Dump Logging Enhancement</div>
            The TCP server has been upgraded with a hex dump feature, witch allows it to log incoming requests in hexadecimal format for better analysis.
        </div>
      </li>

    </ol>
    <h5>Some depricated information such as the OP code parser and some TCP requests was removed from this devlog, because it is not up to date.</h5>
  </div>
</template>

<script>
export default {
name: 'DevlogFour',
}
</script>