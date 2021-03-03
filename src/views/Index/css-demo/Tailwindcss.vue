<template>
  <div>
    <h2>tailwindcss</h2>

    <div>其实也不一定完全使用这个库，我们可以借鉴一下这个方案为我们解决了哪些痛点，以及思路，然后应用到我们的项目中，解决项目中的一些痛点。</div>

    <div class="md:flex mt-4">
      <div class="md:flex-shrink-0">
        <img class="rounded-lg md:w-56" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Woman paying for a purchase">
      </div>
      <div class="mt-4 md:mt-0 md:ml-6">
        <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">Marketing</div>
        <a href="#" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Finding customers for your new business</a>
        <p class="mt-2 text-gray-600">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
      </div>
    </div>
    
  </div>
</template>

<script>
import 'tailwindcss/dist/utilities.css'
export default {
  name: "Tailwindcss",
  data() {
    return {
      
    };
  },
  methods: {},

  mounted() {},

  computed: {
 
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
