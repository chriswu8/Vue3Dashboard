<template>
    <div class="w-screen h-screen flex">
        <div class="sidebar bg-sky-900 text-zinc-100">
            <!-- Content of the sidebar -->
            <h1 class="text-2xl font-bold">Dashboard</h1>
            <hr>
            <Nav />
        </div>
        <div class="content flex-1">
            <!-- Main content -->
            <p class="mt-4 italic">
                "Success is not final, failure is not fatal: It is the courage to continue that counts."
                - Winston Churchill
            </p>
            <Cards />
        </div>
    </div>
</template>
  
<script>
import Nav from '@/components/Nav.vue';
import Cards from '@/components/Cards.vue';

export default {
    components: {
        Nav,
        Cards,
    },
};
</script>
  
<style>
.sidebar {
    width: 8cm;
    padding: 2rem;
}

.content {
    flex: 1;
}
</style>
  