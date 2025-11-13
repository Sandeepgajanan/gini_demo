<template>
  <div class="screen">
    <HeaderBar @menu-action="handleMenuAction" />

    <!-- Main Content -->
    <main class="main-content">
      <h2 class="welcome-text">Welcome to</h2>
      <img src="/Images/logo.png" alt="GINI Logo" class="gini-main-logo" />
      <h3 class="subtitle">Voice Platform</h3>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <button class="ready-btn" @click="readyaction">READY</button>
      <p class="footer-text">
        Speak ready or click on ready button to continue
      </p>
    </footer>
  </div>
</template>

<script>
import HeaderBar from "./HeaderBar.vue";
export default {
  name: "VoicePlatform",
  components: { HeaderBar },
  methods: {
    speakWelcome() {
      const message = new SpeechSynthesisUtterance(
        "Welcome to GiNi Voice Platform"
      );
      message.lang = "en-US"; // You can change accent or language here
      message.rate = 1; // 1 = normal speed
      message.pitch = 1; // 1 = normal tone
      message.volume = 1; // 0 to 1

      window.speechSynthesis.cancel(); // stop any previous speech
      window.speechSynthesis.speak(message);
    },
    handleMenuAction(action) {
      if (action === "signoff") {
        this.$router.push("/");
      }
    },
    readyaction() {
      this.$router.push("/workflow");
    },
  },
  mounted() {
    this.speakWelcome();
  },
};
</script>

<style scoped>
.screen {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  background-color: #edf0f3;
  color: #000;
}

/* Header */
.header {
  background: linear-gradient(90deg, #ff7a00, #ff9e32);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  height: 50px;
}

.header-left {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  width: 50px;
}
.header-left .code {
  font-weight: 600;
  font-size: 16px;
}
.header-left .level {
  font-size: 14px;
}

.header-center {
  width: 50px;
}
.gini-logo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.header-right .menu-btn {
  background: transparent;
  border: none;
  color: white;
  font-size: 22px;
  cursor: pointer;
}

/* Main content */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.welcome-text {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
}
.gini-main-logo {
  width: 160px;
  max-width: 70%;
  object-fit: contain;
  margin-bottom: 8px;
}
.subtitle {
  color: #ff7a00;
  font-size: 25px;
  margin-top: 10px;
  font-weight: 600;
}

/* Footer */
.footer {
  text-align: center;
  padding: 20px;
}
.ready-btn {
  width: 95%;
  background-color: #ff7a00;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 0;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
}
.ready-btn:hover {
  background-color: #ff8c1a;
}
.footer-text {
  font-size: 14px;
  margin-top: 10px;
  color: #333;
}

/* RESPONSIVE DESIGN */
@media (max-width: 768px) {
  .header {
    padding: 6px 12px;
  }
  .ready-btn {
    font-size: 16px;
  }
  .footer-text {
    font-size: 12px;
  }
  .gini-main-logo {
    width: 140px;
  }
}

@media (min-width: 1024px) {
  .welcome-text {
    font-size: 24px;
  }
  .subtitle {
    font-size: 20px;
  }
  .ready-btn {
    width: 240px;
    font-size: 20px;
  }
}
</style>
