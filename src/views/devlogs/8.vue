<template>
  <div class="prose lg:prose-xl m-5">
      <div>
        <br>
        <h1>Mirage DEVLOG - 5/4/2024</h1>
        <h3>This devlog focuses on the classes used in the GUM files such as the gNetManager, gGame, and others. We also explain the levels of control that we have.</h3>
      </div>

      <div class="card text-bg-dark" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Simplified explanation</h5>
          <p class="card-text">gNetManager Component

            The gNetManager is a special tool in the game that helps with online features. It's like a manager for all the network-related tasks, such as connecting to the internet, joining a game, or inviting friends. Here are some of its key functions:
            
            In simple terms, the gNetManager is like a control panel for all the online features of the game, allowing you to manage how you connect to the internet, join games, and interact with other players.</p>
        </div>
      </div><br>

      <h2>Advanced devlog information:</h2>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/8-1.png" style="width:40%; height:40%;">
      </div>

      <h2>Control level:</h2>
      <h4>We have different control levels over the game. On the level one we have the PS Vita system, livearea not much of a control over there.On the level 2 we have the user interface that is made using the GUM files that are XML + Lua files. We can write our own lua code, and most of the matchmaking is done on this level. This is also the level that we have the most control over.The third layer is the compiled C++ code of the game, and other low level game assets.</h4>

      <h1>Methods in Lua classes inside of the GUM files:</h1>
      <div>
        <h1>gNetManager</h1>
        <!-- gNetManager pice -->
        <div id="gnetmanagerinfo" style="margin-left: 10px;">
          <h2>The gNetManager is a low-level component that manages network system-related tasks such as 3G mode, party gathering, PSN Login, invitation dialogues, and matchmaking. It is supposedly written in C++, but we can call its functions and methods from Lua code.</h2>
          <h3>Here's a breakdown of some of its most important functions:</h3>

          <h3>The gNetManager:Set3GAllowed() function controls the ability to use 3G connectivity.</h3>

          <div style="text-align: center;">
            <img src="@/assets/devlogpictures/8-2.png" style="width:20%; height:30%;">
          </div>

          <h3>The function gNetManager:HasBootEventArrived() returns true or false, indicating if the boot event has occurred.</h3>

          <div style="text-align: center;">
            <img src="@/assets/devlogpictures/8-3.png" style="width:20%; height:30%;">
          </div>

          <h3>The function gNetManager:IsInPrivateGame() returns the value of true or false if the game is private.</h3>

          <div style="text-align: center;">
            <img src="@/assets/devlogpictures/8-4.png" style="width:20%; height:30%;">
          </div>

          <h3>The gNetManager:Login() function logs into the PSN.</h3>

          <div style="text-align: center;">
            <img src="@/assets/devlogpictures/8-5.png" style="width:20%; height:30%;">
          </div>

          <h3>The gNetManager:CancelLogin() function cancels the PSN login process.</h3>

          <div style="text-align: center;">
            <img src="@/assets/devlogpictures/8-6.png" style="width:20%; height:30%;">
          </div>

          <h3>The gNetManager:IsInPartyGathering() function returns true or false, indicating whether the user is in a party.</h3>

          <div style="text-align: center;">
            <img src="@/assets/devlogpictures/8-7.png" style="width:20%; height:30%;">
          </div>

          <h3>The gNetManager:SetPartyGatheringGameMode() function sets the party mode, taking a single argument of the game mode type, which can be retrieved, for example, with gGameLauncher:GetGameMode()</h3>

          <div style="text-align: center;">
            <img src="@/assets/devlogpictures/8-8.png" style="width:20%; height:30%;">
          </div>

          <h3>The gNetManager:StopInviteDialog() function stops the invite dialogue process.</h3>

          <div style="text-align: center;">
            <img src="@/assets/devlogpictures/8-9.png" style="width:20%; height:30%;">
          </div>

          <h3>The gNetManager:SwapPlayersTeam(playerInTeamOne, playerInTeamTwo) function swaps the players' teams. To get the players, you need to define a variable like this: local playerInTeamTwo = sender:GetLobbyPlayerIdForSwap(1). Obtain the sender with local sender = event:GetSender().</h3>

          <div style="text-align: center;">
            <img src="@/assets/devlogpictures/8-10.png" style="width:20%; height:30%;">
          </div>

          <h3>The gNetManager:LeavePartyGathering function is designed to leave the party. It accepts one argument of type bool, but even if it's false it still seems to leave the party - needs further investigation.</h3>

          <div style="text-align: center;">
            <img src="@/assets/devlogpictures/8-11.png" style="width:20%; height:30%;">
          </div>

          <h3>The gNetManager:CreateJoinPartyGathering() function initializes and facilitates party joining.</h3>

          <div style="text-align: center;">
            <img src="@/assets/devlogpictures/8-12.png" style="width:20%; height:30%;">
          </div>

          <h3>The gNetManager:IsSessionMaster() function checks if the current user is the owner of the party/game, returning true if they are, otherwise false.</h3>

          <div style="text-align: center;">
            <img src="@/assets/devlogpictures/8-13.png" style="width:20%; height:30%;">
          </div>

          <h3>The gNetManager:ForceShowingEula() displays the EULA.</h3>
        </div>
      </div>
</div>
</template>

<script>
export default {
name: 'DevlogEight',
}
</script>

<style>
</style>