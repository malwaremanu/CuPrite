<template>
    <aside class="w-64 m-5" aria-label="Sidebar">
        <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
            <ul class="space-y-2">
                <nuxt-link to="/dashboard">
                    <li>
                        <a href="#"
                            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 19l-7-7 7-7" />
                            </svg>
                            <span class="ml-3">Go Back</span>
                        </a>
                    </li>
                </nuxt-link>

                <li class="w-full text-left">
                    <button class="sidebar_btn">All Orders</button>
                </li>

                <li class="w-full text-left">
                    <nuxt-link to="/add_order"><button class="sidebar_btn">Create New</button></nuxt-link>
                </li>

                <li>
                    <button class="sidebar_btn">
                        <div>Draft</div>
                        <!-- <div class="sidebar_count">3</div> -->
                    </button>
                </li>

                <nuxt-link to="/masters/party">
                    <li>
                        <button class="sidebar_btn">
                            <div>Parties</div>
                            <!-- <div class="sidebar_count hidden">3</div> -->
                        </button>
                    </li>
                </nuxt-link>

                <li>
                    <button class="sidebar_btn">
                        <div>Products</div>
                        <!-- <div class="sidebar_count">3</div> -->
                    </button>
                </li>
            </ul>
        </div>
    </aside>
</template>
    