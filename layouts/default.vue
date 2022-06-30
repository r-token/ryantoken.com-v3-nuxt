<template>
  <div class="flex min-h-screen">
    <Sidebar />
    <div class="flex-1">
      <div class="flex justify-between py-3 px-6 bg-gray-50 border-b space-x-6">Ryan Token</div>
      <main class="p-4">
        <slot />
      </main>
    </div>
  </div>
</template>