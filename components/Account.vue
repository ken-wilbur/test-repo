<script setup>
const supabase = useSupabaseClient()

const loading = ref(true)
const username = ref('')
const email = ref('')
const canvasKey = ref('')

loading.value = true
const user = useSupabaseUser()

let { data } = await supabase
  .from('profiles')
  .select(`username, email, canvasKey`)
  .eq('id', user.value.id)
  .single()

if (data) {
  username.value = data.username
  email.value = data.email
  canvasKey.value = data.canvasKey
}

loading.value = false

async function updateProfile() {
  try {
    loading.value = true
    const user = useSupabaseUser()

    const updates = {
      id: user.value.id,
      username: username.value,
      canvasKey: canvasKey.value,
      updated_at: new Date(),
    }

    let { error } = await supabase.from('profiles').upsert(updates, {
      returning: 'minimal', // Don't return the value after inserting
    })
    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
    this.$router.push({ path: 'pages/default.html' });
  }
}

async function signOut() {
  try {
    loading.value = true
    let { error } = await supabase.auth.signOut()
    if (error) throw error
    user.value = null
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form class="form-widget" @submit.prevent="updateProfile">
    <div>
      <label for="email">Email</label>
      <input id="email" type="text" :value="user.email" disabled />
    </div>
    <div>
      <label for="username">Username</label>
      <input id="username" type="text" v-model="username" />
    </div>
    <div>
      <label for="canvasKey">Your Canvas API Key</label>
      <input id="canvasKey" type="text" v-model="canvasKey" />
    </div>

    <div>
      <input
        type="submit"
        class="button primary block"
        :value="loading ? 'Loading ...' : 'Update'"
        :disabled="loading"
      />
    </div>

    <div>
      <button class="button block" @click="signOut" :disabled="loading">Sign Out</button>
    </div>
  </form>
</template>