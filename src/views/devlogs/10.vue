<template>
  <div class="prose lg:prose-xl m-5">
      <div>
        <br>
        <h1>Mirage DEVLOG - 24/4/2024</h1>
        <h3>This development log delves into essential GUM file classes.</h3><br>
      </div>

      <nav id="navbar-example2" class="navbar text-bg-dark px-3 mb-3">
        <a class="navbar-brand" href="#" style="color: #ffffff !important;">Bookmark Navigation</a>
        <ul class="nav nav-pills">
           <li >
             <button type="button" style="color: #ffffff !important; margin-right: 10px;" class="btn btn-warning"><a style="color: #ffffff !important;" href="#groot">gRoot</a></button>
           </li>
           <li >
             <button type="button" style="color: #ffffff !important;" class="btn btn-warning"><a style="color: #ffffff !important;" href="#gmenu">gMenu</a></button>
           </li>
        </ul>
       </nav>

      <h1 id="groot">gRoot</h1>

      <div>

        <h3>The gRoot:GetTag function retrieves user interface-related XML tags from GUM files, for instance, allowing for button retrieval.</h3>

        <div style="text-align: center;">
          <img src="@/assets/devlogpictures/10-1.png" style="width:20%; height:30%;">
        </div>

        <h3>Here's an illustrative example of retrieving a tag. In this example, by calling gRoot:GetTag("mp_default_lvl_panel"):SetVisible(false), we set the visibility of a specific component to false.</h3>

        <div style="text-align: center;">
          <img src="@/assets/devlogpictures/10-2.png" style="width:20%; height:30%;">
        </div>

        <h3>We can also get the XML child count like here in gRoot:GetTag( "lvl_list" ):GetChildCount()</h3>

        <div style="text-align: center;">
          <img src="@/assets/devlogpictures/10-3.png" style="width:20%; height:30%;">
        </div>

        <h3>Or set label gRoot:GetTag( "levels" )</h3>

        <div style="text-align: center;">
          <img src="@/assets/devlogpictures/10-4.png" style="width:20%; height:30%;">
        </div>

        <h3>We can also set attributes like in gRoot:GetTag("restart_cp_btn"):SetAttribute("onright", "focus(shop_btn)")</h3>

        <div style="text-align: center;">
          <img src="@/assets/devlogpictures/10-5.png" style="width:20%; height:30%;">
        </div>
      </div>

      <h1 id="gmenu">gMenu</h1>
      <div>

        <h3>The gMenu is capable of initiating dialogues as shown in gMenu:DoAction("dialog(dlg_quitgame, dialogquitscript, OnDialogClose)")</h3>

        <div style="text-align: center;">
          <img src="@/assets/devlogpictures/10-6.png" style="width:20%; height:30%;">
        </div>

        <h3>Alternatively, use gMenu:StopMusicStream(3.0) to cease music playback.</h3>

        <div style="text-align: center;">
          <img src="@/assets/devlogpictures/10-7.png" style="width:20%; height:30%;">
        </div>

        <h3>We can also perform certain actions like calling a function from a script with gMenu:DoAction( "script( background_script, SetBackBtnFunc( \"BackToMainMenu\" ) )" )</h3>

        <div style="text-align: center;">
          <img src="@/assets/devlogpictures/10-8.png" style="width:20%; height:30%;">
        </div>

        <h3>We can also play any sound with gMenu:PlaySound( sound_to_play_string, true )</h3>

        <div style="text-align: center;">
          <img src="@/assets/devlogpictures/10-9.png" style="width:20%; height:30%;">
        </div>  

        <h3>This segment is interesting and appears important. It's a method to acquire the player's online ID: gPlayerOnlineId = gMenu:GetPageParameter("onlineId")</h3>

        <div style="text-align: center;">
          <img src="@/assets/devlogpictures/10-10.png" style="width:20%; height:30%;">
        </div>  

        <h3>The game includes a sound grouping feature that allows addition of sounds to specific groups using gMenu:AddSoundToGroup("Frontend_Ambient_lp", "FE_Ambience")</h3>

        <div style="text-align: center;">
          <img src="@/assets/devlogpictures/10-11.png" style="width:20%; height:30%;">
        </div>  

        <h3>We can also obtain a boolean from the function gMenu:SoundGroupIsPlaying("FE_Ambience") to check if a specific sound group is currently playing.</h3>

        <div style="text-align: center;">
          <img src="@/assets/devlogpictures/10-12.png" style="width:20%; height:30%;">
        </div>  

        <h3>You can easily play any sound group with gMenu:PlaySoundGroup("any_sound_group_name").</h3>

        <div style="text-align: center;">
          <img src="@/assets/devlogpictures/10-13.png" style="width:20%; height:30%;">
        </div>  

        <h3>The gMenu:StopSoundGroup method allows halting a sound group's playback, exemplified as gMenu:StopSoundGroup("FE_Ambience", true).</h3>

        <div style="text-align: center;">
          <img src="@/assets/devlogpictures/10-14.png" style="width:20%; height:30%;">
        </div>  

        <h3>Explore the functionality of gMenu:ActivateMixSnapshot("FMV")</h3>

        <div style="text-align: center;">
          <img src="@/assets/devlogpictures/10-15.png" style="width:20%; height:30%;">
        </div>  
      </div>
</div>
</template>

<script>
export default {
name: 'DevlogTen',
}
</script>

<style>
</style>