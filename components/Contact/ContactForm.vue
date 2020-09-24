<template>
  <div class="relative w-full md:w-2/3 px-4 md:px-0">
    <p class="text-4xl font-semibold">Kontakt</p>

    <form @submit.prevent="submitForm">
      <label
        class="block mt-4 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="name"
        >Name:</label
      >
      <input
        class="block w-full bg-gray-100 border-2 border-gray-100 text-gray-800 py-1 px-3 focus:border-blue-300"
        type="text"
        name="name"
        v-model="name"
      />
      <label
        class="block mt-4 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="_replyto"
      >
        E-Mail:
      </label>
      <input
        class="block w-full bg-gray-100 border-2 border-gray-100 text-gray-800 py-1 px-3 focus:border-blue-300"
        type="text"
        name="_replyto"
        v-model="email"
      />
      <label
        class="block mt-4 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="message"
      >
        Nachricht:
      </label>
      <textarea
        class="block w-full bg-gray-100 border-2 border-gray-100 text-gray-800 py-1 px-3 focus:border-blue-300"
        name="message"
        v-model="message"
        rows="10"
      ></textarea>
      <button
        class="my-4 py-4 bg-green-500 w-full text-green-100"
        type="submit"
      >
        Abschicken
      </button>
    </form>

    <div
      v-if="sending"
      class="flex items-center bg-blue-600 border-l-4 border-blue-700 py-2 px-3 shadow-md mb-2"
    >
      <!-- <div class="text-blue-500 rounded-full bg-white mr-3"> -->
      <div class="w-8 h-8 border-4 border-white rounded-full loader mr-3"></div>
      <div class="text-white max-w-xs">Sending...</div>
      <!-- </div> -->
    </div>

    <div
      v-if="success"
      class="flex items-center bg-green-500 border-l-4 border-green-700 py-2 px-3 shadow-md mb-2"
    >
      <!-- icons -->
      <div class="text-green-500 rounded-full bg-white mr-3">
        <svg
          width="1.8em"
          height="1.8em"
          viewBox="0 0 16 16"
          class="bi bi-check"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
          />
        </svg>
      </div>
      <!-- message -->
      <div class="text-white max-w-xs">Mail successfully sent</div>
    </div>

    <div
      v-if="error"
      class="flex items-center bg-red-500 border-l-4 border-red-700 py-2 px-3 shadow-md mb-2"
    >
      <!-- icons -->
      <div class="text-red-500 rounded-full bg-white mr-3">
        <svg
          width="1.8em"
          height="1.8em"
          viewBox="0 0 16 16"
          class="bi bi-x"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
          />
          <path
            fill-rule="evenodd"
            d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
          />
        </svg>
      </div>
      <!-- message -->
      <div class="text-white max-w-xs">Konnte Nachricht nicht schicken...</div>
    </div>

    <div
      v-if="error"
      class="flex flex-col bg-red-500 border-l-4 border-red-700 py-2 px-3 shadow-md mb-2"
    >
      <p class="block text-white text-left">Fehler:</p>
      <ul class="text-left text-white max-w-xs">
        <li v-for="error in errors" :key="error.code">
          {{ error.code }}: {{ error.message }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
@keyframes loader-rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loader {
  border-right-color: transparent;
  animation: loader-rotate 1s linear infinite;
}
</style>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      endpoint: "https://formspree.io/xqkgknly",
      status: "",
      sending: false,
      success: false,
      error: false,
      errors: [],
    };
  },
  methods: {
    async submitForm() {
      this.sending = true;
      this.error = false;
      this.success = false;

      const data = {
        _replyto: this.email,
        name: this.name,
        message: this.message,
      };

      try {
        const response = await this.$axios.$post(this.endpoint, data, {
          Accept: "application/json",
        });
        this.success = true;
        this.error = false;
      } catch (e) {
        this.error = true;
        this.errors = e.response.data.errors;
        this.success = false;
      } finally {
        this.sending = false;
      }
    },
  },
};
</script>
