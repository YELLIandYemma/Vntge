<template>
  <section id="about-section" class="py-16 bg-gray-100">
    <div
      class="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12"
    >
      <!-- Left: Image -->
      <div class="w-full md:w-1/2">
        <img
          src="https://cdn.prod.website-files.com/6747ba7d00a7b28d5ad57ac4/674b23e3be02a7c9cc93224f_Leonardo_Phoenix_An_artistic_representation_of_a_website_being_0.jpg"
          alt="About Us"
          class="rounded-lg shadow-lg transform transition-all duration-700 ease-in-out"
        />
      </div>

      <!-- Right: Text Content -->
      <div class="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          About Vantage
        </h2>
        <p class="text-gray-600 leading-relaxed">
          At <span class="text-blue-600 font-semibold">Vantage</span>, we build
          complete, hands-free business solutions. From crafting stunning
          websites to optimizing sales funnels, we handle it all. Our goal is to
          save you time, reduce stress, and drive success—so you can focus on
          growing your brand.
        </p>
        <p class="text-gray-600 mt-3">
          With a team of experts in web design, branding, and automation, we
          ensure that your business runs smoothly, efficiently, and profitably.
        </p>
        <button
          class="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Learn More
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Smooth fade-in animation */
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
.translate-y-10 {
  transform: translateY(10px);
}
.translate-y-0 {
  transform: translateY(0);
}
</style>
