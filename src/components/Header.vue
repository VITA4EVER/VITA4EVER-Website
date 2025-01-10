<template>
  <div class="navbar bg-primary border-b-[1px] border-indigo-600">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content glass rounded-box z-[1] mt-3 w-32 p-2 shadow"> <!-- Start of mobile dropdown -->

          <button class="btn bg-white text-black"><a href="/">Home</a></button>
          <button class="btn bg-red-600 text-white"><a href="/credits">Credits</a></button>
          <button class="btn bg-indigo-500 text-white"><a href="/devlogs">Devlogs</a></button>

        </ul> <!-- End of mobile dropdown -->
      </div>
      <a class="btn btn-ghost text-xl" href="/">VITA4EVER</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 gap-2"> <!-- Start of the center navbar -->
        <li class="border-2 rounded-xl"><a href="/">Home</a></li>
        <li class="border-2 rounded-xl border-red-600"><a href="/credits">Credits</a></li>
        <li class="border-2 rounded-xl border-indigo-500"><a href="/devlogs">Devlogs</a></li>
      </ul> <!-- End of the center navbar -->
    </div>
    <div class="navbar-end">
      <!-- No need for anything here yet. -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>