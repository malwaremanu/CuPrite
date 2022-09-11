<template>
  <div class="min-h-screen grid grid-cols-2">
    <div class="bg-center bg-cover" 
    style="background-image: url('https://images.unsplash.com/photo-1517089152318-42ec560349c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80')" >
    </div>

    <div class="bg-gray-900 grid gap-4 content-center p-6">

      <center>
        <img src="~/assets/cuprite.png" class="py-3 w-1/2" />
      </center>

      <nuxt-link to="/login">
        <Buttonsecondary title="Login" />
      </nuxt-link>

      <nuxt-link to="/register">
        <Buttonsecondary title="Register" />
      </nuxt-link>

      <Footer />

    </div>


  </div>
</template>

<script>
export default {}
</script>