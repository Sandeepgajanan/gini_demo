<template>
  <div class="screen">
    <HeaderBar @menu-action="handleMenuAction" />

    <div class="finish-card">
      <div class="finish-image">
        <img :src="selectedItem.image" alt="finish" />
      </div>
    </div>

    <footer class="footer">
      <h3 class="finish-title">Assignment Complete</h3>
      <button class="ready-btn" @click="confirmSelection">FINISH</button>
      <p style="color:purple">Hint: Say Finish to go back</p>
    </footer>
  </div>
</template>

<script>
import HeaderBar from "./HeaderBar.vue";
export default {
  name: "Finish",
  components: { HeaderBar },
  data() {
    return {
      selectedItem: {
        name: "AA6",
        image: "/Images/finish.webp",
      },
    };
  },
  methods: {
    speak(text) {
      const msg = new SpeechSynthesisUtterance(text);
      msg.lang = "en-US";
      msg.rate = 1;
      msg.pitch = 1;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(msg);
    },

    handleMenuAction(action) {
      if (action === "signoff") this.$router.push("/");
    },
    confirmSelection() {
      this.$router.push("/");
    },
  },
    mounted() {
    this.speak(`Assignment Complete`);
  },
};
</script>

<style scoped>
.screen {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100dvh;
  background-color: #edf0f3;
  color: #000;
}

.finish-card {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 5px;
  width: 100%;
  height: 300px;
}

/* White box containing image with padding */
.finish-image {
  position: relative;
  height: 50%;
  border-radius: 16px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Image inside white box */
.finish-image img {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  height: 100%;
}

/* Label on top of image */
.finish-label {
  position: absolute;
  top: 20px;
  left: 20px;
  background: white;
  color: black;
  font-weight: bold;
  font-size: 20px;
  padding: 4px 12px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  font-size: 14px;
  color: #333;
  gap: 12px;
}

.finish-title {
  color: #ff7a00;
  font-size: 18px;
  font-weight: 600;
}

.finish-code {
  font-size: 32px;
  font-weight: 800;
  color: #000;
}

.ready-btn {
  background-color: #ff7a00;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 12px 32px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s ease;
  width: 25%;
}

.ready-btn:hover {
  background-color: #e86d00;
}

/* ✅ Desktop responsive adjustments */
@media (max-width: 768px) {

  .finish-label {
    font-size: 26px;
    top: 24px;
    left: 24px;
  }

  .finish-code {
    font-size: 42px;
  }

  .ready-btn {
    width: 100%;
  }
}
</style>
