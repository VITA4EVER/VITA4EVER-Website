<template class="m-1">
  <div class="prose lg:prose-xl m-5">
      <div>
        <h1>Mirage DEVLOG - 29/2/2024</h1>
        <h3></h3>
      </div>

      <ol class="list-group list-group-numbered">
        <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">Startup Reconfiguration</div>
                The DNS server and the multiplexer were readjusted to remove some current issues.
            </div>
        </li>

        <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
              <div class="fw-bold">DNS Server Refactoring</div>
              Refactoring of the DNS server code was performed.
          </div>
        </li>

        <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">TCP, HTTP and UDP APIs Rework</div>
                <p>TCP, HTTP, UDP APIs was reworked.</p>
            </div>
        </li>

        <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">Multiplexer Rework</div>
                Cmux implementation was reworked.
            </div>
        </li>

    </ol>

    <h3>Server Visualization (VITA2VITA4EVER)</h3>


    <div style="text-align: center;">
      <img src="@/assets/devlogpictures/3.png" style="width:90%; height:90%;">
    </div>

    <p style="font-size: larger;">The visualization on the canvas above depicts a complex network of nodes and edges that represent the architecture of a server system designed to restore multiplayer functionality for the Killzone Mercenary game on the PlayStation Vita. The network is text-center around the "Killzone Mercenary (Vita client)" node, which is positioned at the top left corner, indicating its central role in the process.

      From the Killzone Mercenary client, a connection leads to the "Our DNS server" node, witch means that the game client communicates with a custom DNS server for its network requests. The DNS server then interacts with a series of decision nodes, represented by "Is the request for us?" and subsequent nodes for "Yes" and "No" outcomes. This setup indicates a filtering process to determine whether the incoming request is relevant to the server system or should be forwarded elsewhere, such as to Google's DNS server, which is depicted at the bottom left of the canvas.
      
      Upon receiving a "Yes" response, the request moves through a "Multiplexer" node, which likely serves to route the request to the appropriate handler based on its type (TCP, HTTP, or UDP). This is followed by a series of nodes labeled "TCP.go", "HTTP.go", and "UDP.go", indicating the different protocols the server can handle. These nodes are connected in a loop back to the "Multiplexer", suggesting a feedback mechanism to ensure that the request is correctly processed and routed.</p>
    <h3>Startup Order</h3>

      <div class="row d-flex flex-wrap align-items-center justify-content-center" style="gap: 10px;">
        <div class="image" style="text-align: center;">
          <img src="@/assets/devlogpictures/3-2.png" alt="VITA4EVER Startup Order">
        </div><br>

        <div class="text" style="font-size: larger;">
          <p>The startup order, visualized as an canvas, starts with a central node representing the initiation of the VITA4EVER server. This is the primary action that sets the entire sequence in motion. From this central node, a series of nodes branch out, each representing a different component of the server setup. These components include the multiplexer, DNS server, and various server types such as HTTP, UDP, and TCP servers.

            The nodes are connected by arrows, indicating the flow of the startup process. The arrows show that the VITA4EVER server starts first, followed by the multiplexer. From the multiplexer, the process branches out to start the HTTP, UDP, and TCP servers simultaneously. After these servers are initiated, the DNS server is started, and finally, the sequence concludes with a node indicating the completion of the startup process.
            
            This visual representation is akin to a flowchart, where each node represents a step in the startup sequence, and the arrows represent the transition from one step to the next. The use of different colors for each node helps to visually distinguish between the different components and the sequence in which they are started. This visual tool effectively communicates the startup order and dependencies between different server components, providing a clear and concise overview of the server's startup process.</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
name: 'DevlogThree',
}
</script>

<style>
</style>