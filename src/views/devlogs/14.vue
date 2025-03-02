<template>
    <div class="prose lg:prose-xl m-6">
        <h1>Mirage DEVLOG - 31/1/2025</h1>
        <p style="font-size: x-large;">Thid devlog outlines news and development of Mirage and PSNE.</p>

        <h2>Simplified Video</h2>
        <p>We made a really simple video about this devlog. There's not much in it, but if you don't care for deep understanding, maybe it will be a good solution for you.</p>
        <iframe width="320" height="180" src="https://youtu.be/rkzO3IdOPtk"></iframe>

        <h2>What is PSNE?</h2>
        <img src="@/assets/images/PSNELogo.webp">
        <p>PSNE is a PlayStation Network Emulator that is designed to work under the PlayStation Vita system.</p>

        <h2>What is Mirage?</h2>
        <img src="@/assets/images/MirageLogo.webp" alt="Mirage Picture"/>
        <p>Mirage is a dedicated Killzone Mercenary server. It handles some stuff game functions, like:</p>
        <ol>
            <li><b>Leaderboard</b> - Leaderboards are handled by the dedicated server, and not PSN.</li>
            <li><b>Rank</b> - The vaulor card rank system is also handled by the dedicated server.</li>
            <li><b>Initiation</b> - When the game boots up and connects to servers, it specifically connects to the dedicated server.</li>
        </ol>

        <h2>What is np_matching2?</h2>
        <p>np_matching2 is a P2P multiplayer protocol that is a part of Killzone Mercenary multiplayer infrastructure. It is a part of PSN. It is also used in many other games besides Killzone Mercenary.</p>

        <h2>What is P2P?</h2>
        <p>
            P2P means that one of the players will be a host, and other player will connect to this "host". Unlike P2S, the server is used only for matchmaking.
            <br>
            Here's a picture that maybe will help you to understand:
        </p>
        <img src="https://i.postimg.cc/k5JXvWMr/p2p-network-vs-server-2458509988.jpg">

        <h2>Why do we need PSNE?</h2>
        <p>Since np_matching is PSN based, we can use PSNE in order to access the APIs of it, and restore the matchmaking. We still need Mirage in order to restore the init, leaderboard and rank systems.</p>

        <h2>What about the cipher issue?</h2>
        <p>Cipher issue was not an issue. I'm joking of course. PlayStation Vita HTTP library did not know what to do when the certificates mismatch, so it threw an error about ciphers.</p>
        <p>The issue was fixed by using a custom plugin to disable the certificate checking.</p>

        <h2>What about DNS?</h2>
        <p>No DNS. Instead we are using a plugin on the taihen framework to replace the values of the server addresses in the code.</p>

        <h2>Small website update</h2>
        <p>The website was reworked, like a lot. Devlogs styles are still not really up-to-date compare to other parts of the website, but they are usable.</p>

        <h2>Admin UIs</h2>
        <p>A work was started on PSNE admin UI, and another admin UI that we will talk about later.</p>

        <h2>Lots of changes to PSNE</h2>
        <p>Lots of changes to PSNE were made. For now details are private.</p>

        <h2>Open Source?</h2>
        <p>Both PSNE and Mirage will be open sourced under AGPL license. Our official website is already open source, also under AGPL.</p>

        <h2>How much longer?</h2>
        <p>We do not have this information, please, do not ask.</p>
    </div>
</template>

<script>
export default {
name: 'DevlogFourteen',
}
</script>
