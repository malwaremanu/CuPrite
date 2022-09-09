<template>
  <div class="min-h-screen grid grid-cols-2">
    <div class="h-screen grid content-center ">
      <center class="border">
        <img src="~/assets/cuprite.png" class="h-28 py-3 hidden" />
      </center>
    </div>

    <div class="bg-gray-900 grid gap-4 content-center p-6">      
      <nuxt-link to="/login">
        <Buttonsecondary title="Login" />
      </nuxt-link>

      <nuxt-link to="/register">
        <Buttonsecondary title="Register" />
      </nuxt-link>
    </div>

    <Footer />
  </div>
</template>

<script>
export default {}
</script>