<template>
  <div class="screen">
    <!-- Header -->
    <HeaderBar @menu-action="handleMenuAction" />
    <h2 class="title">{{ selectedItem.name }}</h2>
    <!-- Image Section -->
    <div class="bin-card">
      <div class="bin-image">
        <img :src="selectedItem.image" alt="Bin" />
      </div>
    </div>

    <!-- Footer Section -->
    <footer class="footer">
      <!-- Aisle, Shelf, Bin Details -->
      <div class="bin-details">
        <div class="detail">
          <span class="label">Aisle</span>
          <span class="value">{{ details.aisle }}</span>
        </div>
        <div class="detail">
          <span class="label">Shelf</span>
          <span class="value">{{ details.shelf }}</span>
        </div>
        <div class="detail">
          <span class="label">Bin</span>
          <span class="value">{{ details.bin }}</span>
        </div>
      </div>

      <!-- Quantity Info -->
      <div class="bin-qty">
        <div class="detail">
          <span class="label">Open</span>
          <span class="value">{{ details.open }}</span>
        </div>
        <div class="detail">
          <span class="label">Picked</span>
          <span class="value">{{ details.picked }}</span>
        </div>
        <div class="detail">
          <span class="label">Total</span>
          <span class="value">{{ details.total }}</span>
        </div>
      </div>

      <!-- Input + Scan Button -->
      <div class="scan-section">
        <input
          v-model="pickQuantity"
          placeholder="Pick Quantity"
          type="text"
          class="userinput"
        />
        <transition name="fade">
          <div v-if="errorMessage" class="error-card">
            {{ errorMessage }}
          </div>
        </transition>

        <button class="scan-btn" @click="handleScan">SCAN</button>
        <p>Scan or Speak Quantity</p>
      </div>
    </footer>
  </div>
</template>

<script>
import HeaderBar from "./HeaderBar.vue";
export default {
  name: "Banana",
  components: { HeaderBar },
  data() {
    return {
      selectedItem: {
        name: "Banana",
        image: "/Images/banana.webp",
      },
      details: {
        aisle: "AA6",
        shelf: "-",
        bin: "1912",
        open: 7,
        picked: 0,
        total: 7,
      },
      pickQuantity: "",
      errorMessage: "",
    };
  },
  methods: {
    handleMenuAction(action) {
      if (action === "signoff") this.$router.push("/");
    },
    confirmSelection() {
      this.$router.push("/aisle21");
    },
    speak(text) {
      const msg = new SpeechSynthesisUtterance(text);
      msg.lang = "en-US";
      msg.rate = 1;
      msg.pitch = 1;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(msg);
    },
    showError(message) {
      this.errorMessage = message;
      if (this.errorTimeout) clearTimeout(this.errorTimeout);
      this.errorTimeout = setTimeout(() => {
        this.errorMessage = "";
      }, 1500);
    },
    handleScan() {
      const input = this.pickQuantity.trim();

      if (!input) return;

      const qty = parseInt(input, 10);

      // ✅ Validate number
      if (isNaN(qty) || qty <= 0) {
        return;
      }

      // ✅ Check if picking more than available
      if (qty > this.details.open) {
        this.showError("Quantity exceeds available");
        return;
      }

      // ✅ Update values
      this.details.picked += qty;
      this.details.open -= qty;

      // ✅ Speak remaining
      if (this.details.open > 0) {
        this.speak(`${this.details.open} ${this.selectedItem.name} remaining`);
      } else {
        this.confirmSelection();
      }

      this.pickQuantity = "";
    },
  },

  mounted() {
    this.speak(`Pick ${this.details.open} ${this.selectedItem.name}`);
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
  margin: 0 auto;
  font-size: 15px;
}
/* ===== Image Section ===== */
.bin-card {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 5px;
  width: 100%;
  height: 300px;
}

.bin-image {
  width: 25%;
  height: 100%;
  background: #fff;
  border-radius: 16px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.bin-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* ===== Footer Section ===== */
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  gap: 5px;
}

/* ===== Details ===== */
.bin-details,
.bin-qty {
  display: flex;
  justify-content: space-between;
  width: 25%;
  height: 100%;
  padding: 0 25px;
}

.detail {
  text-align: center;
}

.label {
  display: block;
  color: #ff7a00;
  font-weight: 600;
  font-size: 16px;
}

.value {
  display: block;
  font-weight: bold;
  font-size: 18px;
}

/* ===== Input + Scan ===== */
.scan-section {
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative;
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

.scan-btn {
  background-color: #ff7a00;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
}

.scan-btn:hover {
  background-color: #e86d00;
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
/* ===== Responsive ===== */
@media (max-width: 768px) {
  .bin-image {
    width: 100%;
  }

  .bin-code {
    font-size: 40px;
  }

  .scan-btn,
  .input-field {
    width: 100%;
  }

  .bin-details,
  .bin-qty {
    width: 100%;
  }
  .scan-section {
    width: 100%;
  }
}
</style>
