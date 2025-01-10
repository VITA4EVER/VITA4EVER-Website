<template>
  <div class="prose lg:prose-xl m-5">
      <div>
        <br>
        <h1>Mirage DEVLOG - 20/4/2024</h1>
        <h3>This devlog is about a gModule class in the GUM files, and it's functionality.</h3><br>
      </div>

      <div>
      
        <h2 id="gmodule">gModule</h2>

        <div>
          <h3>The gModule is a specialized class that oversees various aspects of the game. Primarily, it handles dialogues, checks if the game is a demo version, and facilitates transitioning to the next screen using specific functions. While the gModule is versatile and capable of performing numerous tasks, it appears somewhat unconventional that developers have incorporated such a wide range of unrelated functions within it. In this devlog, we will highlight the key functions of the gModule.</h3>

          <h3>The function gModule:OpenScreen() opens the screen that you need to specify as an argument</h3>

          <h3>The function gModule:IsDemo() returns true or false based on whether it is the demo version.</h3>

          <h3>The function gModule:SummaryFinished() marks the summary as completed.</h3>

          <h3>The function gModule:IsRunningOnPS3() returns true or false based on whether the game is running on PlayStation 3. The developers of the game have access to builds that can run on PS3, leveraging the Killzone 3 engine initially crafted for the PS3. They can build for various platforms such as PS3, PC, and PlayStation Vita.</h3>

          <h3>The function gModule:GetPlayerNumber() retrieves the player's ID number in multiplayer mode. This function will be crucial if we intend to utilize the PSN implementation of the game, which is one of our desired approaches.</h3>

          <h3>The function gModule:IsInShop() returns a boolean value indicating whether the player is currently in the shop.</h3>

          <h3>The function gModule:GetCurrentScreen() retrieves the current screen.</h3>

          <h3>The function gModule:GetNextScreen() retrieves the next screen in line.</h3>

          <h3>The function gModule:SetIsInShop() accepts a boolean argument to indicate whether the player is in the shop.</h3>
          
          <h3>The function gModule:PlayDialogue("Menu_Shop_Enter_Dialogue_"..random_ten) initiates the dialogue playback. Further investigation is required to delve deeper into its functionality</h3>
    
          <h3>The function gModule:StopDialogue() halts the currently playing dialogue.</h3>

          <h3>The function gModule:QueueDialogue("TU_SP_Shop_Loadout_0001") schedules the specified dialogue to play at a later time.</h3>

          <h3>The function gModule:GetRegion() is significant as it provides the game's region information. Currently, we are aware of several regions, including REGION_JAPAN, REGION_KOREA, and REGION_AMERICA.</h3>

          <h3>The function gModule:IsBetaTrial() returns a boolean value indicating whether the game is in beta trial mode.</h3>

          <h3>The function gModule:PerformInitialSave() executes the initial save process.</h3>  

          <h3>The function gModule:SetMovie("KZV_Title_Intro_RUS_TM") configures the movie display. In this instance, we are setting the initial movie to the Russian version.</h3>

          <h3>The function gModule:HideDevelopmentMenuOptions() checks whether the game is in developer mode and returns a boolean value accordingly.</h3>

          <h3>The function gModule:SetLeaderboardListType(kLeaderboardListType_AllTime_TopPlayers) configures the leaderboard type to display the all-time top players.</h3>

          <h3>Here's a really important function for the leaderboards.</h3>
        </div>
    </div>
</div>
</template>

<script>
export default {
name: 'DevlogNine',
}
</script>

<style>
</style>