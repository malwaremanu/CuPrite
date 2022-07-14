<template>
  <div class="p-2 min-h-screen bg-ibps-900 select-none">
    <div class="bg-ibps-900">
      <button class="p-4 text-white text-center">
        <nuxt-link to="/">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>
        </nuxt-link>
      </button>
    </div>

    <div class="lg:flex items-center gap-2 w-full my-2 mx-auto lg:p-9">
      <center class="py-5 lg:w-1/3">
        <Logo />
      </center>

      <div class="p-4 lg:p-9 flex flex-col gap-5 bg-white rounded-2xl lg:w-2/3">
        <div class="flex justify-between text-ibps-800 text-sm font-light p-2 items-center">
          <div class="font-semibold text-lg">Initial Registration</div>

          <div>Login and Complete Profile</div>

          <div>Connect Candidates</div>
        </div>

        <div class="lg:flex items-center gap-5">
          <div class="w-full">
            <label>First Name</label>
            <input type="text" placeholder="Firstname" value />
          </div>

          <div class="w-full p-1">
            <label>Middle Name</label>
            <input type="text" placeholder="Middle Name" value />
          </div>

          <div class="w-full">
            <label>Last Name</label>
            <input type="text" placeholder="Last Name" value />
          </div>
        </div>

        <div class="md:flex items-center gap-5">
          <div class="w-full">
            <label>Mobile Number</label>
            <input type="text" placeholder="Mobile Number" value />
          </div>

          <div class="w-full">
            <label>Email Address</label>
            <input type="text" placeholder="Email Address" value />
          </div>
        </div>

        <div class="md:flex items-center gap-5">
          <div class="w-full">
            <label>&nbsp;</label>
            <Buttonprimary title="Request OTP" @click="alert('Requesting OTP')" />
          </div>

          <div class="w-full">
            <label>Enter OTP</label>
            <input type="password" value />
          </div>
        </div>

        <div class="md:flex items-center gap-5">
          <div class="w-full text-xs text-gray-400 text-center">
            <div>One time password OTP has been sent to your number 90xxxxxx90 and email address hx@xxxupal.dev</div>
            <div class="font-semibold" @click="alr">resend otp in 30 seconds</div>
          </div>

          <div class="w-full">
            <label>&nbsp;</label>
            <Buttonprimary title="Submit" />
          </div>
        </div>

      <div>

          
        </div>

      </div>
    </div>

    <Footer />
  </div>
</template>


<script>
export default {
}
</script>


<style lang="postcss" scoped>
input {
  @apply border border-ibps-400 w-full rounded-md py-2 px-3 text-sm;
}

div label {
  @apply text-gray-500 text-xs py-1;
}
</style>