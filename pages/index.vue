<template>
  <div class="p-2 min-h-screen bg-ibps-900 mx-auto">
    <div class="lg:flex items-center gap-2 w-full mx-auto">
      <center class="py-5 mt-14 lg:w-1/2">
        <Logo />
      </center>

      <div class="lg:w-1/2">
        <center class="p-2 flex flex-col gap-4 lg:w-1/2 mx-auto">
          <nuxt-link to="/login">
            <Buttonsecondary title="Login" />
          </nuxt-link>
          <nuxt-link to="/register">
            <Buttonsecondary title="Register" />
          </nuxt-link>
        </center>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {}
</script>