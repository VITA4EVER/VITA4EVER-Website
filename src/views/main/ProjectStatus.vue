<template>
    <div class="hero min-h-screen">
        <div class="hero-overlay"></div>
        <div class="hero-content text-neutral-content text-center">
            <div class="text-left">
                <h1 class="mb-5 text-5xl font-bold text-center">Project Status</h1>
                <p class="text-center">On this page you can quickly see what's going on with the development.</p>
                <p class="text-center">Press on the collapses to see additional information.</p><br>

                <div tabindex="0" class="collapse collapse-arrow bg-primary border-amber-600 border mb-2">
                    <div class="collapse-title font-semibold"><p class="text-2xl">Mirage (KZV Server) - <span class="text-amber-600 font-bold">In Development</span></p></div>
                    <div class="collapse-content text-sm">
                      Mirage, a private server for Killzone Mercenary, is still in development. Please refer to news for additional information.
                    </div>
                </div>

                <div tabindex="0" class="collapse collapse-arrow bg-primary border-amber-600 border mb-2">
                    <div class="collapse-title font-semibold"><p class="text-2xl">PSNE (PlayStation Network Emulator) - <span class="text-amber-600 font-bold">In Development</span></p></div>
                    <div class="collapse-content text-sm">
                      PSNE is still in active development, a replacement for official PSN on PlayStation Vita.
                    </div>
                </div>

                <div tabindex="0" class="collapse collapse-arrow bg-primary border-red-600 border mb-2">
                    <div class="collapse-title font-semibold"><p class="text-2xl">Messaging App Restoration - <span class="text-red-600 font-bold">Not yet in development</span></p></div>
                    <div class="collapse-content text-sm">
                      Private servers for PS Vita Messaging app are not being developed yet. We are planning to revive them later.
                    </div>
                </div>

                <p class="text-center">Want to see what we are doing? Check out <a class="text-yellow-500 underline" href="https://vita4ever.github.io/#/devlogs">devlogs</a> and <a class="text-yellow-500 underline" href="https://vita4ever.github.io/#/rss">news</a>!</p>
            </div>
        </div>
    </div>
</template>