<template>
  <div class="bg-gray-100 py-16 px-6 text-center">
    <!-- Heading -->
    <h2 class="text-4xl font-bold text-gray-900">
      Your Business, Built for Success—Without the Stress
    </h2>
    <p class="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
      Vantage provides a complete, hands-free business setup, including custom
      websites, sales funnels, and seamless integrations, designed to save you
      time, reduce stress, and drive success.
    </p>

    <!-- Cards -->
    <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <!-- Starter Business Setup -->
      <div class="bg-white p-6 rounded-xl shadow-lg text-center">
        <img
          src="https://cdn.prod.website-files.com/6747ba7d00a7b28d5ad57ac4/674b3b977011356956596dec_Leonardo_Phoenix_A_minimalist_and_vibrant_onepage_website_disp_0.jpg"
          alt="Starter Business Setup"
          class="mx-auto rounded-full w-28 h-28 object-cover"
        />
        <h3 class="text-xl font-semibold mt-4">Starter Business Setup</h3>
        <p class="text-gray-600 mt-2">
          Ideal for startups, this package offers a website, social media
          branding, and scaling guidance for an affordable online presence.
        </p>
        <BusStart />
      </div>

      <!-- Website + Sales Funnel Combo -->
      <div class="bg-white p-6 rounded-xl shadow-lg text-center">
        <img
          src="https://cdn.prod.website-files.com/6747ba7d00a7b28d5ad57ac4/674b3b321d78a6be7f466833_Leonardo_Phoenix_A_dynamic_image_showing_a_glowing_website_hom_1.jpg"
          alt="Website + Sales Funnel Combo"
          class="mx-auto rounded-full w-28 h-28 object-cover"
        />
        <h3 class="text-xl font-semibold mt-4">Website + Sales Funnel Combo</h3>
        <p class="text-gray-600 mt-2">
          A responsive website, sales funnel, and strategic consultation combine
          to drive traffic, capture leads, and boost conversions.
        </p>
        <Middle />
      </div>

      <!-- Full-Service Website Package -->
      <div class="bg-white p-6 rounded-xl shadow-lg text-center">
        <img
          src="https://cdn.prod.website-files.com/6747ba7d00a7b28d5ad57ac4/674b3aa3aa9025ffb59b991e_Leonardo_Phoenix_A_sleek_modern_laptop_with_a_vibrant_multip_0.jpg"
          alt="Full-Service Website Package"
          class="mx-auto rounded-full w-28 h-28 object-cover"
        />
        <h3 class="text-xl font-semibold mt-4">Full-Service Website Package</h3>
        <p class="text-gray-600 mt-2">
          A custom, hassle-free website solution with design, SEO, mobile
          optimization, and 30-day support to meet your brand’s goals.
        </p>
        <Final />
      </div>
    </div>
  </div>
</template>
