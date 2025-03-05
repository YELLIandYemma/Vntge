<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <!-- Contact Section -->
    <main class="flex flex-wrap items-center justify-center flex-grow p-10">
      <div
        class="w-full max-w-4xl bg-gray-100 shadow-xl rounded-lg p-8 flex gap-8"
      >
        <!-- Left Side -->
        <div class="w-1/2">
          <h2 class="text-3xl font-bold text-gray-900">Let’s Get in Touch</h2>
          <p class="text-gray-700 mt-3">
            Not sure what to say? Just say ‘Hi’ and tell us how we can help.
          </p>
          <h3 class="font-semibold text-lg mt-5">
            Don’t feel comfortable sending a message?
          </h3>
          <p class="text-gray-700 mt-1">
            Call us at
            <span class="text-blue-600 font-bold">+91 63607 56271</span>
          </p>
        </div>

        <!-- Right Side (Contact Form) -->
        <div
          class="w-1/2 bg-white p-6 rounded-lg shadow-md border border-gray-300 flex flex-col"
        >
          <h3 class="text-xl font-semibold text-gray-800 mb-4">
            Want to talk to us quickly?
          </h3>
          <form @submit.prevent="sendMessage" class="flex flex-col gap-4">
            <input
              v-model="name"
              type="text"
              placeholder="Your Name"
              class="input-field border-b-2"
              required
            />
            <input
              v-model="email"
              type="email"
              placeholder="Your Email"
              class="input-field border-b-2"
              required
            />
            <textarea
              v-model="message"
              placeholder="Your Message"
              class="input-field h-24"
              required
            ></textarea>
            <button
              type="submit"
              class="w-full bg-blue-600 text-white py-2 rounded-lg mt-3 hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useSupabaseClient } from "#imports";

const supabase = useSupabaseClient();
const name = ref("");
const email = ref("");
const message = ref("");

const sendMessage = async () => {
  const { error } = await supabase
    .from("Contact")
    .insert([{ Name: name.value, Email: email.value, Message: message.value }]);
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
