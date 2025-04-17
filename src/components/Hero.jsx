---
import { Input } from 'free-astro-components'
import Search from './Search.astro'
---



<section class='hero bg-[#eceef2] relative overflow-hidden'>
    <img src='../../src/assets/background-gear-pattern-dark.svg' alt='Testsigma Gear Logo' class='absolute -bottom-20 right-0 w-fit h-[97%]'>
    <div class='container-common flex flex-col justify-center items-center gap-10 py-20 lg:!py-32 relative'>
        <div>
            <h1 class='text-center text-4xl lg:!text-6xl pb-5'>
                Testsigma Knowledge Base
            </h1>
            <p class='text-center text-xl'>
                Find comprehensive documentation, guides, and resources for all Testsigma products and tools.
            </p>
        </div>
        <Search class='searchBarHome' />
    </div>
</section>

<style>
.searchBarHome{
    height: 45px;
    width: 90%;
    border-radius: 999px;
    border-color: #09C0A1;
    border-width: 1px;
}
.searchBarHome:hover{
    border-color: #09C0A1;
}

</style>