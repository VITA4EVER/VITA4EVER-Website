<template>
    <div class="hero min-h-screen" style="background-image: url('https://i.postimg.cc/c1gJYQc8/Mercenary.jpg');">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="text-neutral-content text-center">
      <div class="">
        <h1 class="mb-5 text-5xl font-bold mt-10">KZV Status</h1>
        <div class="mb-5">
          <h1 class="text-4xl font-bold">Active Matches</h1>

          <div class="text-center flex flex-wrap justify-center align-middle gap-2 mt-8">
            <div class="card glass w-96 h-[400px] m-2" v-for="match in matches" :key="match">
              <figure>
                <!-- TODO: Replace the placeholder photo with the pictures from the map_images array. -->
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Placeholder!" />
              </figure>
              <div class="card-body">
                <h1 class="text-3xl font-bold">{{match.map}}</h1>
                <p>Hosted by: {{match.host_nickname}}</p>
                <p>Player count: {{match.player_count}}</p>
                <p>Gamemode: {{match.gamemode}}</p>
              </div>
            </div>

          </div>

          <h1 class="text-4xl font-bold mt-12 mb-4">Top 50 - Leaderboard</h1>

          <div v-for="entry in leaderboard" :key="entry" class="m-2">
            <div tabindex="0" class="collapse collapse-arrow bg-base-100 border-accent border">
              <div class="collapse-title font-semibold">{{entry.nickname}} - {{entry.earned_money}}</div>
              <div class="collapse-content text-sm">
                <p>Eliminations - {{entry.eliminations}}</p>
                <p>Kill/Death Ratio - {{entry.kill_death_ratio}}</p>
                <p>Victory Number - {{entry.victory_number}}</p>
                <p>Time Played (Seconds) - {{entry.time_played_seconds}}</p>
                <p>Accuracy - {{entry.accuracy}}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KillzoneStatus',
  data() {
    return {
      // TODO: Await for Enzo to provide images for maps.
      map_images: {
        "Blood Gracht": "",
        "Inlet": "",
        "Marketplace": "",
        "Refinery": "",
        "Shoreline": "",
        "Skyline": "",
        "Tharsis Depot": "",
        "Zenith": "",
      },

      // Dummy matches data, TODO: Add an API request to PSNE and fetch real matches.
      matches: [
        {"host_nickname": "TestNickname", "map": "Tharsis Depot", "gamemode": "Guerilla Warfare", "player_count": 4, },
        {"host_nickname": "TestNickname2", "map": "Marketplace", "gamemode": "Guerilla Warfare", "player_count": 3, },
        {"host_nickname": "TestNickname3", "map": "Blood Gracht", "gamemode": "Guerilla Warfare", "player_count": 7, },
        {"host_nickname": "TestNickname4", "map": "Shoreline", "gamemode": "Guerilla Warfare", "player_count": 1, },
      ],


      // Dummy leaderboards data, TODO: Add an API request to Mirage and load the real data.
      leaderboard: [
        {"nickname": "TestNickname5", "earned_money": 7000, "eliminations": 7, "kill_death_ratio": 3, "victory_number": 2, "time_played_seconds": 3000, "accuracy": 20},
        {"nickname": "TestNickname3", "earned_money": 6000, "eliminations": 17, "kill_death_ratio": 3, "victory_number": 2, "time_played_seconds": 3000, "accuracy": 14},
        {"nickname": "TestNickname", "earned_money": 4000, "eliminations": 11, "kill_death_ratio": 3, "victory_number": 2, "time_played_seconds": 3000, "accuracy": 34},
        {"nickname": "TestNickname2", "earned_money": 3000, "eliminations": 12, "kill_death_ratio": 3, "victory_number": 2, "time_played_seconds": 3000, "accuracy": 36},
        {"nickname": "TestNickname6", "earned_money": 2000, "eliminations": 20, "kill_death_ratio": 3, "victory_number": 18, "time_played_seconds": 3000, "accuracy": 50},
        {"nickname": "TestNickname4", "earned_money": 1000, "eliminations": 5, "kill_death_ratio": 3, "victory_number": 2, "time_played_seconds": 3000, "accuracy": 43},
      ]
    }
  }
}
</script>