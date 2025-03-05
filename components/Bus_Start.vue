<script setup>
import { useSupabaseClient } from "#imports";
import { ref } from "vue";

// Modal visibility
const isOpen = ref(false);

const supabase = useSupabaseClient();
const name = ref("");
const email = ref("");
const message = ref("");

// Open and close modal
const openModal = () => (isOpen.value = true);
const closeModal = () => (isOpen.value = false);

// Submit form
const sendMessage = async () => {
  const { error } = await supabase
    .from("Starter_Bus")
    .insert([
      { Name: name.value, Email: email.value, Deatails: message.value },
    ]);
  if (error) {
    console.error("Error sending message:", error);
  } else {
    alert("Message sent successfully!");
    name.value = "";
    email.value = "";
    message.value = "";
  }
};
</script>

<template>
  <!-- Book Now Button -->
  <button
    @click="openModal"
    class="text-blue-600 font-medium hover:underline hover:cursor-pointer"
  >
    Book now →
  </button>

  <!-- Popup Modal -->
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
  >
    <div
      class="bg-white p-6 rounded-lg shadow-lg max-w-md text-center relative"
    >
      <button
        @click="closeModal"
        class="absolute top-2 right-3 text-gray-500 text-xl hover:cursor-pointer"
      >
        &times;
      </button>
      <h2 class="text-xl font-semibold">Book Your Package</h2>

      <!-- Form Inputs -->
      <input
        v-model="name"
        type="text"
        placeholder="Your Name"
        class="border p-2 w-full mt-4"
      />
      <input
        v-model="email"
        type="email"
        placeholder="Your Email"
        class="border p-2 w-full mt-2"
      />
      <textarea
        v-model="message"
        placeholder="Business Details"
        class="border p-2 w-full mt-2"
      ></textarea>

      <!-- Submit Button -->
      <button
        @click="sendMessage"
        class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:cursor-pointer"
      >
        > Submit
      </button>
    </div>
  </div>
</template>
