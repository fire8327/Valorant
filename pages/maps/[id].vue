<template>
    <div class="flex flex-col gap-[100px]">
        <h1 class="font-medium text-[64px] font-Roboto">MAP - ASCENT</h1>
        <p class="font-Roboto text-2xl font-normal">Ascent is a launch map that was also the fourth map to be released in VALORANT. An open playground for small wars of position and attrition divide two sites on Ascent. 
            Each site can be fortified by irreversible bomb doors; once they’re down, you’ll have to destroy them or find another way. Yield as little territory as possible.
        </p>
        <img src="https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png" class="lg:max-w-[900px] object-contain mx-auto border-black border-[5px]" alt="">
        <ul class="flex flex-col gap-9">
            <li>
                <p class="font-Roboto text-2xl font-normal">
                    Ascent is a map set in Italy that features a large, open middle area that both teams can skirmish over. 
                    Mid is a playground for diverse ability use and successfully controlling the area opens additional routes for Attackers to both Spike sites.
                </p>
            </li>
            <li>
                <p class="font-Roboto text-2xl font-normal">
                    The map's 'unique' feature is mechanical doors leading into sites. Each site has one door (A Link for A and Market for B) that is opened at the start of 
                    each round. Players can use a switch on the site side of the door (Next to the door on A and on a table in Toolshed on B) to close or open the door. 
                    These doors are impenetrable while closed, but players can damage the doors to eventually destroy them, leaving the doorway permanently open.
                </p>
            </li>
            <li>
                <p class="font-Roboto text-2xl font-normal">
                    Map coordinates at 45°26'BF" N 12°20'Q" E in San Marco, Venice, Italy.
                    The map contains landmarks from this location such as St. Mark's Campanile and St. Mark's Basilica.
                </p>
            </li>
        </ul>
        <img src="https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/displayicon.png" class="lg:max-w-[700px] object-contain mx-auto" alt="">
        <h2 class="font-medium text-[64px] font-Roboto">CALLOUTS</h2>
        <div class="grid grid-cols-4 gap-x-16 gap-y-10">
            <div class="flex items-center gap-8 before:bg-[#ff4655] before:rounded-full before:h-4 before:w-4 before:border-[#101822] before:border-[2px]">
                <NuxtLink to="#" class="text-2xl font-semibold font-Source-Code">A Site</NuxtLink>
            </div>
            <div class="flex items-center gap-8 before:bg-[#ff4655] before:rounded-full before:h-4 before:w-4 before:border-[#101822] before:border-[2px]">
                <NuxtLink to="#" class="text-2xl font-semibold font-Source-Code">Catwalk</NuxtLink>
            </div>
            <div class="flex items-center gap-8 before:bg-[#ff4655] before:rounded-full before:h-4 before:w-4 before:border-[#101822] before:border-[2px]">
                <NuxtLink to="#" class="text-2xl font-semibold font-Source-Code">Lobby</NuxtLink>
            </div>
            <div class="flex items-center gap-8 before:bg-[#ff4655] before:rounded-full before:h-4 before:w-4 before:border-[#101822] before:border-[2px]">
                <NuxtLink to="#" class="text-2xl font-semibold font-Source-Code">Site</NuxtLink>
            </div>
            <div class="flex items-center gap-8 before:bg-[#ff4655] before:rounded-full before:h-4 before:w-4 before:border-[#101822] before:border-[2px]">
                <NuxtLink to="#" class="text-2xl font-semibold font-Source-Code">B Site</NuxtLink>
            </div>
            <div class="flex items-center gap-8 before:bg-[#ff4655] before:rounded-full before:h-4 before:w-4 before:border-[#101822] before:border-[2px]">
                <NuxtLink to="#" class="text-2xl font-semibold font-Source-Code">Courtyard</NuxtLink>
            </div>
            <div class="flex items-center gap-8 before:bg-[#ff4655] before:rounded-full before:h-4 before:w-4 before:border-[#101822] before:border-[2px]">
                <NuxtLink to="#" class="text-2xl font-semibold font-Source-Code">Main</NuxtLink>
            </div>
        </div>
    </div>
    <div>
         {{ route.params.id }}
    </div>
</template>

<script setup>
    const route = useRoute()
</script>
