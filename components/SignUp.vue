<script setup>
const user = useSupabaseUser()
</script>
<template>
    <link rel="stylesheet" href= "assets/signup.css">
    <h2 id="siteHead">The SKRRt Scheduler</h2>
    <h3 id="signupTitle">Sign Up Below!</h3>
    <div class="signup-background">
        <h3 id="username-label">Username</h3>
        <input type="text" placeholder="Select a Unique Username!" id="username-input">
        
        <h3 id="password-label">Password</h3>
        <input type="text" placeholder="Choose a Strong Password!" id="password-input">

        <h3 id="key-label">Authentication Key <i class="fa-solid fa-circle-info" id="key-info" onClick={pressedInfo()}></i></h3>
        <input type="text"  id="key-input" placeholder="Click the 'i' above to locate your canvas authentication key!">

        <input type="submit" value="Lets Go!" id="submit-login">
        <p id="nav-login">Back to <a href="login.html">login</a></p>
    </div>
</template>