<template>
    <div class="hero min-h-screen" :style="{ backgroundImage: `url(${require('@/assets/backgrounds/Credits.webp')})` }">
     <div class="hero-overlay bg-opacity-60"></div>
        <div class="text-neutral-content text-center">
            <h1 class="text-5xl font-bold mb-9">Credits</h1>

            <div class="text-center flex flex-wrap justify-center align-middle gap-6">
                <div class="card glass w-[22rem] m-1">
                    <figure>
                      <img src="https://avatars.githubusercontent.com/u/31539311?v=4" height="352px" width="352px"/>
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title">Obleck</h2>
                      <p>Lead Developer, ROM-Hacker</p>
                      <div class="card-actions justify-center">
                        <button class="btn btn-accent"><a href="https://github.com/olebeck">Github</a></button>
                      </div>
                    </div>
                </div>

                <div class="card glass w-[22rem] m-1">
                    <figure>
                      <img src="https://avatars.githubusercontent.com/u/168193923?v=4"/>
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title">EftzL06</h2>
                      <p>Discord Server Staff</p>
                      <p>Hardcore Vita fan playing Killzone Mercenary since 2015!</p>
                      <div class="card-actions justify-center">
                        <button class="btn btn-accent"><a href="https://youtube.com/@enzogamesbrasil3714">YouTube</a></button>
                      </div>
                    </div>
                </div>

                <div class="card glass w-[22rem] m-1">
                    <figure>
                      <img src="https://avatars.githubusercontent.com/u/112289353?v=4" class="p-2"/>
                    </figure>
                    <div class="card-body mt-4">
                      <h2 class="card-title">Alex Brown Sobinec</h2>
                      <p>Lead Developer</p>
                      <div class="card-actions justify-center">
                        <button class="btn btn-accent"><a href="https://sobinec.vercel.app">Website</a></button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'CreditsPage'
}
</script>
