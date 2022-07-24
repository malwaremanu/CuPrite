<template>
  <div class="min-h-screen bg-gray-900 select-none">
    <div class="bg-gray-900 p-2 flex items-center">
      <button class="p-2 text-white text-center">
        <NuxtLink to="/">
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </NuxtLink>
      </button>

      <div class="text-white p-2">
        <div class="text-lg font-semibold">Masters Page</div>
      </div>
    </div>

    <div class="text-white p-4 grid lg:grid-cols-4 md:grid-cols-2 gap-2">
      <NuxtLink to="/masters/party">
        <div
          class="p-4 border border-gray-600 hover:border-gray-400 rounded-xl shadow-xl flex items-center gap-3"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2640/2640740.png"
            class="bg-white h-14 rounded-xl p-1"
          />
          <div class="text-xl">Parties</div>
        </div>
      </NuxtLink>
      <NuxtLink to="/masters/self">
        <div
          class="p-4 border border-gray-600 hover:border-gray-400 rounded-xl shadow-xl flex items-center gap-3"
        >
          <img
            src="https://cdn-icons.flaticon.com/png/512/4300/premium/4300059.png?token=exp=1658639480~hmac=9f8c56d78b14a312a4fa654ff8098708"
            class="bg-white h-14 rounded-xl p-1"
          />
          <div class="text-xl">Our Company</div>
        </div>
      </NuxtLink>

      <NuxtLink to="/masters/emp">
        <div
          class="p-4 border border-gray-600 hover:border-gray-400 rounded-xl shadow-xl flex items-center gap-3"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2405/2405283.png"
            class="bg-white h-14 rounded-xl p-1"
          />
          <div class="text-xl">Employees</div>
        </div>
      </NuxtLink>

      <NuxtLink to="/masters/visa">
        <div
          class="p-4 border border-gray-600 hover:border-gray-400 rounded-xl shadow-xl flex items-center gap-3"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/7058/7058467.png"
            class="bg-white h-14 rounded-xl p-1"
          />
          <div class="text-xl">Visa Tracking</div>
        </div>
      </NuxtLink>
    </div>

    <Footer />
  </div>
</template>

<script>
</script>
