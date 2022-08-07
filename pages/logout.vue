<template>
  <div class="p-2 min-h-screen bg-gray-900 select-none">
    <div class="lg:flex items-center gap-2 w-full mt-14 mx-auto lg:w-1/2">
      <center class="py-5 p-2 lg:w-1/2">
        <Logo class="py-2 hidden" />
      </center>

      <div class="px-8 py-3 bg-white rounded-xl lg:w-1/2">
        <div class="text-gray-900 text-center pt-2 text-xl">
        Successfully logged out.
        </div>

        <div class="py-2">
          <nuxt-link to="/login">
            <Buttonprimary title="Login Again" />
          </nuxt-link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>