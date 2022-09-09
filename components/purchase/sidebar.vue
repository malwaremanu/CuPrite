<template>
    <aside class="w-64 m-5" aria-label="Sidebar">
        <div class="text-xl my-2 text-white py-2 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ">
            <nuxt-link class="flex items-center gap-2 rounded-lg px-4" to="/dashboard">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                <div>Go Back</div>
            </nuxt-link>
            
        </div>

        <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
            <ul class="space-y-2">
                <li class="w-full text-left">
                    <button
                        class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left">
                        <span class="flex-1 ml-3 whitespace-nowrap">Kanban</span>
                    </button>
                </li>
                <li>
                    <a href="#"
                        class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                        <span
                            class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200">3</span>
                    </a>
                </li>              
            </ul>
        </div>
    </aside>
</template>
    