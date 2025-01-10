<template>
    <div class="prose lg:prose-xl m-5">
    <div class="card m-1 lightest card-background">
        <div class="card-body">
            <h1>Mirage DEVLOG - 3/7/2024</h1>
            <p style="font-size: x-large;">This devlog covers the progress made on Development Path A, including an analysis of our DNS server issues.</p>
        </div>
    </div>

    <div class="card m-1 lightest card-background">
        <div class="card-body">
            <h1>Website Update</h1>
            <p style="font-size: x-large;">The main VITA4EVER website has been upgraded from a non-JavaScript framework to Vue.js, resulting in faster load times, more efficient CSS, enhanced JavaScript, and improved content rendering performance. Various styling errors and poor CSS were refactored. The devlogs now utilize cards for better aesthetics and readability.</p>
        </div>
    </div>

    <div class="card m-1 lightest card-background">
        <div class="card-body">
            <h1>Backend Development</h1>
            <p style="font-size: x-large;">We have initiated the development of our backend database to store information about players, sessions, and more. For this we decided to use Supabase.</p>
            <ol>
                <li><p style="font-size: large;">A "matches" table was created to store matches.</p></li>
                <li><p style="font-size: large;">A "leaderboard" table was created to store leaderboard information.</p></li>
            </ol>

        </div>
    </div>

    <div class="card m-1 lightest card-background">
        <div class="card-body">
            <h1>Big Path A Change</h1>
            <p style="font-size: x-large;">Following an extensive analysis, we've determined that the current DNS server configuration is incompatible (In most cases) with the PlayStation Vita platform. Due to distinctive DNS handling procedures of the PS Vita system, we've opted for a more advanced solution: modifying the game's eboot.bin to update its hardcoded server address. This modification will enable the game to connect to our custom servers instead of the original ones.</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
name: 'DevlogThirdteen',
}
</script>

<style>
</style>