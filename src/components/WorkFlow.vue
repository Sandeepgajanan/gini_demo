<template>
  <div class="screen">
    <HeaderBar @menu-action="handleMenuAction" />
    <main class="workflow-main">
      <h2 class="title">Select Workflow</h2>

      <div class="workflow-grid">
        <div
          v-for="(item, index) in workflows"
          :key="index"
          class="workflow-card"
          @click="openPopup(item)"
        >
          <div class="card-top">
            <h3>{{ item.name }}</h3>
          </div>
          <div class="card-imgcontainer">
            <img :src="item.image" alt="" />
            <div class="card-bottom">Speak {{ index + 1 }}</div>
          </div>
        </div>
      </div>
    </main>

    <footer class="footer">
      <p>Tap any option or say 1, 2, 3 or 4</p>
    </footer>

    <!-- Popup -->
    <div v-if="selectedItem" class="popup-backdrop" @click.self="closePopup">
      <div class="popup">
        <h3 class="popup-title">Confirmation</h3>
        <p class="popup-text">{{ selectedItem.name }} Correct?</p>
        <img src="/Images/logo.png" alt="" class="popup-logo" />
        <div class="popup-buttons">
          <button class="btn-yes" @click="confirmSelection">YES</button>
          <button class="btn-no" @click="closePopup">NO</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderBar from "./HeaderBar.vue";
export default {
  name: "WorkFlow",
  components: { HeaderBar },
  data() {
    return {
      selectedItem: null,
      workflows: [
        { name: "Food items", image: "/Images/1.webp" },
        { name: "Spare parts", image: "/Images/2.webp" },
        { name: "Digital Checklist", image: "/Images/3.webp" },
        { name: "Case picking", image: "/Images/4.webp" },
      ],
      recognition: null,
    };
  },
  methods: {
    speak(text) {
      const msg = new SpeechSynthesisUtterance(text);
      msg.lang = "en-US";
      msg.rate = 1;
      msg.pitch = 1;
      msg.volume = 1;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(msg);
    },
    handleMenuAction(action) {
      if (action === "signoff") {
        this.$router.push("/");
      }
    },
    openPopup(item) {
      this.selectedItem = item;
      this.speak(`${item.name} correct?`);
    },
    closePopup() {
      this.selectedItem = null;
    },
    confirmSelection() {
      this.speak(`Welcome to ${this.selectedItem.name} workflow`);
      this.$router.push("/next-page"); // later you can replace with your next route
      this.selectedItem = null;
    },
  },
  mounted() {
    this.speak("Select workflow");
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

.title {
  text-align: center;
  margin: 16px 0;
  font-size: 20px;
  font-weight: 700;
}

.workflow-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  padding: 0 16px;
}

.workflow-card {
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  height: 200px;
}
.workflow-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
}

.card-top {
  background-color: #4000a5;
  color: white;
  text-align: center;
  padding: 6px;
  height: 40px;
  font-size: 15px;
  font-weight: 500;
}

.card-imgcontainer {
  flex: 1;
  overflow: hidden;
  position: relative;
}
.card-imgcontainer img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.card-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 14px;
  padding: 6px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

/* Popup */
.popup-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  width: 80%;
  max-width: 320px;
  border: 4px solid #ff7a00;
}

.popup-title {
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 8px;
}

.popup-text {
  font-size: 16px;
  margin-bottom: 12px;
}

.popup-logo {
  width: 100px;
  opacity: 0.3;
  margin: 10px auto;
}

.popup-buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 16px;
}

.btn-yes,
.btn-no {
  background-color: #ff7a00;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 24px;
  font-weight: bold;
  cursor: pointer;
}
.btn-no {
  background-color: #bbb;
}

.footer {
  text-align: center;
  padding: 16px;
  font-size: 14px;
  color: #333;
}

@media (min-width: 1024px) {
  .card-img {
    height: 160px;
  }
  .title {
    font-size: 28px;
  }
}
</style>