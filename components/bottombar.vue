<template>
  <div>
    <nav
      class="
        bg-white
        px-2
        sm:px-4
        py-2.5
        dark:bg-gray-900
        fixed
        w-full
        z-20
        top-0
        left-0
        border-b border-gray-200
        dark:border-gray-600
      "
    >
      <div
        class="container flex flex-wrap justify-between items-center mx-auto"
      >
        <div class="flex items-center">
          <Small-logo />
        </div>
        <div class="flex md:order-2">
          <nuxt-link
            to="/login"
            class="
              text-white
              bg-primary-700
              hover:bg-primary-800
              focus:ring-4 focus:outline-none focus:ring-primary-300
              rounded-lg
              text-sm
              px-5
              py-2.5
              text-center
              mr-3
              md:mr-0
              dark:bg-primary-600
              dark:hover:bg-primary-700
              dark:focus:ring-primary-800
              flex items-center font-semibold gap-2
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>

            Logout
          </nuxt-link>

          <button
            @click="show_bar = !show_bar"
            type="button"
            class="
              inline-flex
              items-center
              p-2
              text-sm text-gray-500
              rounded-lg
              md:hidden
              hover:bg-gray-100
              focus:outline-none focus:ring-2 focus:ring-gray-200
              dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
            "
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="
            justify-between
            items-center
            w-full
            md:flex md:w-auto md:order-1
          "
          :class="show_bar ? '' : 'hidden'"
          id="navbar-sticky"
        >
          <ul
            class="
              flex flex-col
              p-4
              mt-4
              bg-gray-50
              rounded-lg
              border border-gray-100
              md:flex-row
              md:space-x-8
              md:mt-0
              md:text-sm
              md:font-medium
              md:border-0
              md:bg-white
              dark:bg-gray-800
              md:dark:bg-gray-900
              dark:border-gray-700
            "
          >
            <li>
              <nuxt-link to="/purchase" class="link">
                Purchase Order
              </nuxt-link>
            </li>

            <li>
              <nuxt-link to="/emps/passports" class="link">
                Passports
              </nuxt-link>
            </li>


            <li>
              <nuxt-link to="/masters" class="link">
                Masters
              </nuxt-link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
    <div class="mt-[70px]"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show_bar: false,
    }
  },
}
</script>
<style lang="postcss" scoped>
.btn_nav {
  @apply text-white hover:text-gray-100 rounded-xl text-center;
}

.btn_nav div {
  @apply mt-1 text-xs;
}

.link {
  @apply block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700;
}
</style>