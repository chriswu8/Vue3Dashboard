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
            <Welcome />
            <Lessons />
            <Chat class="z-9999"/>
            <Quote />
            <Testimonials />
            <Timeline />
            <Video />
            <Footer />
            
        </div>
    </div>
</template>
  
<script>
import Nav from '@/components/Nav.vue';
import Chat from '@/components/Chat.vue';
import Quote from '@/components/Quote.vue';
import Welcome from '@/components/Welcome.vue';
import Lessons from '@/components/Lessons.vue';
import Testimonials from '@/components/Testimonials.vue';
import Timeline from '@/components/Timeline.vue';
import Video from '@/components/Video.vue';
import Footer from '@/components/Footer.vue';

export default {
    components: {
        Nav,
        Chat,
        Quote,
        Welcome,
        Lessons,
        Testimonials,
        Timeline,
        Video,
        Footer
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
    overflow-y: auto;
}
</style>
  