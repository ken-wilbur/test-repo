<script setup>
const supabase = useSupabaseClient()

const loading = ref(false)
const email = ref('')

const handleLogin = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithOtp({
      email: email.value 
    })
    if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
    loading.value = false
  }
}
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

<<<<<<< HEAD
        <input type="submit" value="Let's Go!" id="submit-login" :blocked = @handleLogin()>
=======
        <h3 id="key-label">Authentication Key <i class="fa-solid fa-circle-info" id="key-info" onClick={pressedInfo()}></i></h3>
        <input type="text"  id="key-input" placeholder="Click the 'i' above to locate your canvas authentication key!">
>>>>>>> 6ca8680bae5b28c1b12ba0421c45bb6b2b038090

        <input type="submit" value="Lets Go!" id="submit-login">
        <p id="nav-login">Back to <a href="login.html">login</a></p>
    </div>
</template>