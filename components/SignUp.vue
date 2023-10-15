<script setup>
const user = useSupabaseUser()
</script>
<template>
    <link rel="stylesheet" href= "assets/login.css">
    <h2 id="siteHead">The SKRRt Scheduler</h2>
    <h3 id="loginTitle">Log In</h3>
    <div class="login-background">
        <h3 id="username-label">Username</h3>
        <input type="text" placeholder="Select a Unique Username!" id="username-input">
        
        <h3 id="password-label">Password</h3>
        <input type="text" placeholder="Choose a Strong Password!" id="password-input">

        <input type="submit" value="Let's Go!" id="submit-login">

        <p id="nav-signup">Don't have an account? Register <a href="signup.html">here.</a></p>
    </div>
</template>