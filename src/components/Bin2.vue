<template>
  <div class="screen">
    <HeaderBar @menu-action="handleMenuAction" />

    <div class="bin-card">
      <div class="bin-image">
        <img :src="selectedItem.image" alt="bin" />
      </div>
    </div>

    <footer class="footer">
      <h3 class="bin-title">Bin</h3>
      <h1 class="bin-code">{{ selectedItem.name }}</h1>
      <div class="input-wrapper">
        <transition name="fade">
          <div v-if="errorMessage" class="error-card">
            {{ errorMessage }}
          </div>
        </transition>
        <input type="text" v-model="bin" class="userinput" />
      </div>
      <p>Say four six</p>
    </footer>
  </div>
</template>

<script>
import HeaderBar from "./HeaderBar.vue";

export default {
  name: "Bin",
  components: { HeaderBar },
  data() {
    return {
      selectedItem: {
        name: "2053",
        image: "/Images/bin2.jpg",
      },
      bin: "",
      errorMessage: "",
      errorTimeout: null,
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
      this.$router.push("/apple"); 
    },
    showError(message) {
      this.errorMessage = message;
      if (this.errorTimeout) clearTimeout(this.errorTimeout);
      this.errorTimeout = setTimeout(() => {
        this.errorMessage = "";
      }, 1500);
    },
  },
  watch: {
    bin(value) {
      const input = value.trim().replace(/\s+/g, ""); 
      if (input === "46") {
        this.confirmSelection();
      } else if (input.length >= 2) {
        this.showError("Invalid check digit");
      }
    },
  },
  mounted() {
    this.speak(`bin ${this.selectedItem.name}`);
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

.bin-card {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 5px;
  width: 100%;
  height: 500px;
}

/* White box containing image with padding */
.bin-image {
  position: relative;
  width: 25%;
  height: 100%;
  background-color: #fff;
  border-radius: 16px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Image inside white box */
.bin-image img {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  height: 100%;
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

.bin-title {
  color: #ff7a00;
  font-size: 18px;
  font-weight: 600;
}

.bin-code {
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
.input-wrapper {
  position: relative;
  width: 25%;
}
.userinput {
  width: 100%;
  padding: 10px 12px;
  border: 2px solid var(--border-color);
  border-radius: 6px;
  font-size: 14px;
  color: var(--text-color);
  outline: none;
  caret-color: var(--orange);
  background-color: var(--hf-bg);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s, transform 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

.error-card {
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.85);
  color: white;
  font-size: 13px;
  padding: 6px 14px;
  border-radius: 6px;
  box-shadow: var(--active-shadow);
  animation: popIn 0.3s ease;
  z-index: 10;
}

@keyframes popIn {
  0% {
    transform: translate(-50%, -8px);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, 0);
    opacity: 1;
  }
}
/* ✅ Desktop responsive adjustments */
@media (max-width: 768px) {
  .bin-image {
    width: 100%;
  }

  .bin-code {
    font-size: 42px;
  }

  .ready-btn {
    width: 100%;
  }
}
</style>
