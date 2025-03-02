<template>
    <div class="hero min-h-screen" style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);">
        <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-neutral-content text-center">
                <div class="justify-center text-center align-middle">
                    <div class="text-center">
                        <h1 class="font-bold text-4xl m-2">Devlogs</h1>
                        <h4>Development information in more details.</h4>
                    </div>
            
                    <div class="m-6">
                      <ul class="steps steps-vertical">
                        <li class="step step-accent"><RouterLink to="/devlogs/1" class="underline">Mirage - 15/1/2024</RouterLink></li>
                        <li class="step step-accent"><RouterLink to="/devlogs/2" class="underline">Mirage - 15/2/2024</RouterLink></li>
                        <li class="step step-accent"><RouterLink to="/devlogs/3" class="underline">Mirage - 29/2/2024</RouterLink></li>
                        <li class="step step-accent"><RouterLink to="/devlogs/4" class="underline">Mirage - 14/3/2024</RouterLink></li>
                        <li class="step step-accent"><RouterLink to="/devlogs/5" class="underline">Mirage - 24/3/2024</RouterLink></li>
                        <li class="step step-accent"><RouterLink to="/devlogs/6" class="underline">Mirage - 27/3/2024</RouterLink></li>
                        <li class="step step-accent"><RouterLink to="/devlogs/7" class="underline">Mirage - 3/4/2024</RouterLink></li>
                        <li class="step step-accent"><RouterLink to="/devlogs/8" class="underline">Mirage - 5/4/2024</RouterLink></li>
                        <li class="step step-accent"><RouterLink to="/devlogs/9" class="underline">Mirage - 20/4/2024</RouterLink></li>
                        <li class="step step-accent"><RouterLink to="/devlogs/10" class="underline">Mirage - 24/4/2024</RouterLink></li>
                        <li class="step step-accent"><RouterLink to="/devlogs/11" class="underline">Mirage - 26/4/2024</RouterLink></li>
                        <li class="step step-accent"><RouterLink to="/devlogs/12" class="underline">Mirage - 15/6/2024</RouterLink></li>
                        <li class="step step-accent"><RouterLink to="/devlogs/13" class="underline">Mirage - 3/7/2024</RouterLink></li>
                        <li class="step step-accent"><RouterLink to="/devlogs/14" class="underline">Mirage + PSNE - 31/1/2025</RouterLink></li>
                      </ul>
                    </div>
                  </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'DevlogsPage'
}
</script>