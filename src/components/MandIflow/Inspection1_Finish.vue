
<script>
    import HeaderBar from "../HeaderBar.vue";
    import '@/assets/screen_style.css';export default {
  name: "Finish",
  components: { HeaderBar },
  data() {
    return {
      selectedItem: {
        name: "Submit Checklist",
        image: "/Images_M&I/finish.png",
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
      this.$router.push("/workflow");
    },
  },
    mounted() {
    this.speak(`Equipment check passed`);
  },
};
</script>

<template>
  <div class="screen">
    <HeaderBar @menu-action="handleMenuAction" />

    <div class="finish-card">
      <div class="finish-image">
        <img :src="selectedItem.image" alt="finish" />
      </div>
    </div>

    <footer class="footer">
      <h3 class="finish-title">Equipment check passed</h3>
      <button class="ready-btn" @click="confirmSelection">FINISH</button>
      <p style="color:purple">Hint: Say Finish to go back</p>
    </footer>
  </div>
</template>

<style>

    
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

</style>