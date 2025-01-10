<template>
  <div class="prose lg:prose-xl m-5">
      <div>
        <br>
        <h1>Mirage DEVLOG - 3/4/2024</h1>
        <h3></h3>
      </div>

      <h2>Exploring the Core Networking GUM File</h2>

      <h3>At the top we can see some imports of other GUM files and some data tags.</h3>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/7-1.png" style="width:90%; height:90%;">
      </div>

      <h3>After that comes the script tag that holds Lua code</h3>
      <h3>At the start we can see some variables, with 2 of the commented out.</h3>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/7-2.png" style="width:90%; height:90%;">
      </div>

      <h3>The OnPageOn function is triggered upon page load, initiating retrieval of data tags previously declared at the start of the document, including but not limited to the login and game launcher identifiers. Following this data acquisition, it invokes the update state procedure to manage application state transitions.</h3>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/7-3.png" style="width:90%; height:90%;">
      </div>

      <h3>The update state function contains the variables that manage state of the sertain components such as gNPLoginState, gConnectionState, gServerLoginState and gRequest login state.</h3>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/7-4.png" style="width:90%; height:90%;">
      </div>

      <h3>Subsequent to the preliminary sections, the IsLoggedIn function is introduced, emitting a Boolean value indicative of the user's authentication status. Additionally, developer commentary embedded within the source code is visible, providing insight into the logic implemented, as GUM files are interpreted rather than compiled, permitting direct examination of the source along with its annotations.</h3>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/7-5.png" style="width:90%; height:90%;">
      </div>

      <h3>Following, the SetNextPage function is introduced. It accepts two parameters: event and next_screen. This function illustrates the evolution from a deprecated method of assigning the next screen directly via variable assignment to utilizing a dedicated function for this purpose.</h3>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/7-6.png" style="width:90%; height:90%;">
      </div>

      <h3>Subsequently introduced is the SetFallbackPage function, designed to designate a fallback interface. It necessitates two parameters: an event and a fallback screen. As indicated by the embedded commentary, an earlier, now deprecated methodology for setting fallback interfaces has been phased out.</h3>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/7-7.png" style="width:90%; height:90%;">
      </div>

      <h3>SetConnectionFallbackPage is a function that assigns a fallback page. It requires two parameters: event, and fallback_screen</h3>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/7-8.png" style="width:90%; height:90%;">
      </div>

      <h2>The primary authentication function serves as the gateway to the user authentication process, leveraging the gNetManager's Login method.</h2>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/7-9.png" style="width:90%; height:90%;">
      </div>

      <h3>Function CheckLoginOpenNextScreen is a deprecated method responsible for verifying user authentication and subsequently redirecting to the next interface. If authentication is not confirmed, it performs a login operation. This function has been retired and is thus commented out.</h3>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/7-10.png" style="width:90%; height:90%;">
      </div>

      <h3>The NonCriticalGate procedure is tasked with an evaluation based on two parameters: event and dialog. It discerns the current connection type; where the connection type equals 0, the Login function is invoked. Conversely, if the connection type equates to 1, it ascertains the user's authentication status—if unauthenticated, it prompts the user for login credentials. Absent any qualifying conditions, the procedure transitions to the subsequent interface.</h3>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/7-11.png" style="width:90%; height:90%;">
      </div>

      <h3>The CriticalGate function is deemed vital. It mirrors the functionality of the NonCriticalGate but introduces an additional connection type.</h3>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/7-12.png" style="width:90%; height:90%;">
      </div>

      <h3>The function retrieves dialogue type names based on provided data types.</h3>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/7-13.png" style="width:90%; height:90%;">
      </div>

      <h3>The LoginDataChangedCallback function is a callback method designed to handle changes in login data within a network-based application. This function is triggered when there are updates to the login data, which could be due to various reasons such as changes in connection status, login errors, or successful login attempts. The function is crucial for managing the application's response to these changes, ensuring that the user interface and application state are updated accordingly.<br>

        The function begins by calling UpdateState(), which presumably updates the global variables representing the current state of the network connection, login status, and server login status. This is a common practice in event-driven programming, where the state of the application is frequently updated in response to external events or changes in data.<br>
        
        Next, the function checks for specific error conditions related to the network connection, login process, and server login process. These conditions are represented by the variables gConnectionState, gNPLoginState, gServerLoginState, and gRequestLoginState, which are compared against predefined error codes such as kNetConnectionError, kNpLoginError, kServerLoginError, and kRequestError. If any of these conditions are met, it indicates that an error has occurred during the login process.<br>
        
        Upon detecting an error, the function retrieves the error code from the login data using gLoginTag:GetData("requeststatenode/error_code/text()"). This error code is then used to determine the specific type of error that occurred. Depending on the error code, the function may display a dialog to the user with an appropriate error message and then return to a fallback screen. This is done using the gMenu:DoAction method, which presumably triggers a user interface action such as displaying a dialog.<br>
        
        If the login process is successful (i.e., gRequestLoginState is kRequestComplete and gCancelled is false), the function proceeds to handle the successful login. This includes displaying a success dialog and proceeding to the next screen in the application. If the login process is still in progress (e.g., logging into the server), the function displays a connecting dialog to inform the user of the ongoing process.</h3>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/7-14.png" style="width:90%; height:90%;">
      </div>

      <h3>The LoginDataChangedCallback function is a callback method that updates the application's state based on changes in login data. It checks for various error conditions related to network connection, login process, and server login process. If an error is detected, it displays an appropriate error dialog to the user and returns to a fallback screen. If the login is successful, it proceeds to the next screen</h3>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/7-15.png" style="width:90%; height:90%;">
      </div>

      <h3>The LoginDataChangedCallback function updates the application's state in response to login data changes. It checks for errors in the login process and displays error dialogs if necessary. If the login is successful, it proceeds to the next screen. This function ensures the application responds appropriately to login data changes, maintaining a smooth user experience.</h3>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/7-16.png" style="width:90%; height:90%;">
      </div>

      <h3>The function CancelCreating is designed to terminate the creation process.</h3>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/7-17.png" style="width:90%; height:90%;">
      </div>

      <h3>The ConfirmPartyLaunch function is designed to handle the confirmation of launching a party match in a game. It takes an event e as an argument, which is expected to contain information about the user's action, such as whether they have confirmed the action or not.</h3>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/7-18.png" style="width:90%; height:90%;">
      </div>

      <h3>The LauncherDataChangedCallback function is designed to handle changes in the game launcher's data, specifically focusing on error states related to launching a game.</h3>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/7-19.png" style="width:90%; height:90%;">
      </div>

      <h3>CancelConnectKZVServer function is a comprehensive handler for cancelling a connection attempt to a KZV server. It ensures that the application's state is correctly updated to reflect the cancellation, logs the action for debugging purposes, and navigates the user to a fallback screen to maintain a smooth user experience.</h3>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/7-20.png" style="width:90%; height:90%;">
      </div>]

      <h3>The ConnectedKZVServer function is a handler for a successful connection to a KZV server. It marks the event as handled, retrieves the identifier of the next screen to be displayed after a successful connection, and then proceeds to that screen. This function ensures that the application smoothly transitions to the appropriate screen following a successful server connection.</h3>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/7-21.png" style="width:90%; height:90%;">
      </div>

      <h3>The NonCriticalConnectKZVServer function is designed to handle the process of attempting to connect to a server in a non-critical manner. It takes an event e as an argument, which is presumably triggered by some user action or system event related to connecting to a server. In summary, this function is responsible for handling the process of attempting to connect to a server in a non-critical manner, deciding whether to proceed with the login process or to fallback to a different screen based on the success of the connection attempt.</h3>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/7-22.png" style="width:90%; height:90%;">
      </div>

      <h3>The CriticalConnectKZVServer function is designed to handle the connection process to a server in a critical scenario. It takes an event e as an argument, which is expected to contain information about the connection attempt. In summary, this function is a critical part of the network connection logic, handling both successful and unsuccessful connection attempts by either proceeding to the login process or falling back to a predefined screen, respectively.</h3>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/7-23.png" style="width:90%; height:90%;">
      </div>

      <h3>The FadeOut function sets the gFadeOut variable to true.</h3>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/7-24.png" style="width:90%; height:90%;">
      </div>

      <h3>The Proceed function is designed to handle the transition between different screens within a game interface. It takes a single argument, screen, which represents the identifier of the screen to which the game should proceed. In summary, the Proceed function is responsible for managing screen transitions within the game interface, ensuring that the game exits the login gate and proceeds to the specified screen if it's different from the current one, while also handling the case where the game is already on the target screen.</h3>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/7-25.png" style="width:90%; height:90%;">
      </div>

      <h3>The ConnectionPreferences function is designed to handle the user's choice regarding network connection preferences within a game interface. It takes an event e as an argument, which is expected to contain information about the user's selection from a set of options. The function then retrieves the value of the selected option, which can be "auto", "always", or "never", and assigns a corresponding integer value to connectionType. Based on this value, the function sets the connection type in the game's player settings, saves these settings, and triggers a non-critical gate action in the game's menu system. This action likely involves displaying a dialog or performing a check related to the network connection preference set by the user.</h3>

      <div style="text-align: center;">
        <img src="@/assets/devlogpictures/7-26.png" style="width:90%; height:90%;">
      </div>

      <!--IM SO TIRED OF WRITING THIS! Finally the end!-->
      <!-- UPDATE after reading this when testing website styles so many month later: OMG, I wrote all of that? It must have been hell to write all of that, and I'm sure that I did it prob at around 3 AM... I should really stop destroying my sleep, but thats mostly the only free time that I got, kinda bad.-->

      <h2>This is the end of the network.gum file</h2>
</div>
</template>

<script>
export default {
name: 'DevlogSeven',
}
</script>