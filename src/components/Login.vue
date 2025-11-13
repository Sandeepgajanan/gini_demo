<template>
  <div class="login-container">
    <div class="login-card">
      <!-- Desktop Icons -->
      <div class="login-icons desktop-icons">
        <div class="login-icon">
          <i class="ri-file-close-line"></i>
          <span class="icon_desc">Exit</span>
        </div>
        <div class="login-icon">
          <i class="ri-settings-3-fill"></i>
          <span class="icon_desc">Settings</span>
        </div>
        <div class="login-icon">
          <i class="ri-heart-fill"></i>
          <span class="icon_desc">Configure</span>
        </div>
      </div>

      <!-- Mobile Hamburger Icon -->
      <div class="mobile-icons">
        <i class="ri-more-2-fill" @click="toggleMenu"></i>
        <div v-show="menuOpen" class="popup-menu">
          <div class="popup-item" @click="toggleMenu">
            <i class="ri-file-close-line"></i> Exit
          </div>
          <div class="popup-item" @click="toggleMenu">
            <i class="ri-settings-3-fill"></i> Settings
          </div>
          <div class="popup-item" @click="toggleMenu">
            <i class="ri-heart-fill"></i> Configure
          </div>
        </div>
      </div>

      <!-- Logo -->
      <div class="login-logo">
        <img src="/Images/logo.png" alt="logo" />
      </div>

      <span class="welcome-text">HI,WELCOME BACK</span>

      <!-- Form -->
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="input-wrapper">
          <span class="scan-badge">Scan Badge</span>
          <input type="text" v-model="scanbadge" class="userinput" />
        </div>

        <button type="submit" class="submit">
          <span>Login</span>
          <transition name="fade">
            <div v-if="errorMessage" class="error-card">
              {{ errorMessage }}
            </div>
          </transition>
        </button>

        <div class="login-footer">
          <div class="ft">
            <span>Language</span>
            <span class="highlight">EN_US</span>
          </div>
          <div class="ft">
            <span>Version</span>
            <span class="highlight">24.06.0.24</span>
          </div>
        </div>
      </form>
    </div>

    <!-- Partner Logos -->
    <div class="login-partners">
      <img src="/Images/SAP_Partner.png" alt="SAP Partner" />
      <img src="/Images/netweaver.png" alt="SAP Certified" />
      <img src="/Images/SAPS4HANA.jpg" alt="SAP Certified" />
      <img src="/Images/honeywell.png" alt="Honeywell" />
      <img src="/Images/datalogic.png" alt="Datalogic" />
      <img src="/Images/Zebra_Technologies.png" alt="Zebra" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scanbadge: "",
      menuOpen: false,
      errorMessage: "",
      errorTimeout: null,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    handleLogin() {
      if (!this.scanbadge.trim()) {
        this.errorMessage = "scan badge";
        if (this.errorTimeout) clearTimeout(this.errorTimeout);

        this.errorTimeout = setTimeout(() => {
          this.errorMessage = "";
        }, 1000);

        return;
      }

      this.errorMessage = "";
      this.$router.push("/voice");
    },
    handleClickOutside(event) {
      // Close the popup menu if click happens outside the hamburger or menu
      const menu = this.$el.querySelector(".popup-menu");
      const icon = this.$el.querySelector(".ri-more-2-fill");
      if (
        menu &&
        !menu.contains(event.target) &&
        !icon.contains(event.target)
      ) {
        this.menuOpen = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style scoped>
.login-container {
  background-image: url("/Images/newBKG.png");
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  width: 100vw;
  background-size: cover;
  background-position: bottom;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  padding: 10px;
}

.login-card {
  background: var(--sidebar-bg);
  padding: 32px;
  border-radius: 16px;
  box-shadow: var(--active-shadow);
  max-width: 400px;
  width: 100%;
  z-index: 2;
  text-align: center;
}

/* Top Icons */
.login-icons {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  margin-bottom: 20px;
}

.login-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-bg);
  width: 120px;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  color: var(--text-color);
  transition: transform 0.2s ease;
}

.login-icon i {
  color: var(--orange);
  font-size: 16px;
}

.icon_desc {
  font-size: 12px;
  margin-left: 4px;
  white-space: nowrap;
}

.login-icon:hover {
  transform: scale(1.05);
}

/* Logo */
.login-logo {
  height: 100px;
  background-color: var(--logo-bg);
  padding: 2px;

  border-radius: 10px;
  width: fit-content;
  margin: 20px auto;
}
.login-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Form */
.login-form {
  background-color: var(--main-bg);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  position: relative;
}
.welcome-text {
  display: inline-block;
  margin-bottom: 20px;
  color: var(--text-color);
}

.input-wrapper {
  position: relative;
  width: 100%;
}

.scan-badge {
  position: absolute;
  top: -6px;
  left: 12px;
  background: var(--hf-bg);
  color: var(--orange);
  padding: 0 6px;
  font-size: 10px;
  font-weight: 600;
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

.submit {
  background: var(--orange);
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
  transition: 0.3s;
  font-size: 14px;
  position: relative;
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
.submit:hover {
  background: #e66a00;
}

/* Footer */
.login-footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 13px;
  color: var(--text-color);
}
.login-footer .highlight {
  color: var(--light-orange);
  font-weight: 500;
}

/* Partner Logos */
.login-partners {
  position: absolute;
  right: 16px;
  top: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.login-partners img {
  width: 100px;
  height: 40px;
  object-fit: contain;
  opacity: 0.7;
}
.ft {
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 12px;
}

/* Mobile View */
@media (max-width: 768px) {
  .desktop-icons {
    display: none;
  }
  .mobile-icons {
    display: flex;
    justify-content: flex-end;
    position: relative;
    color: var(--text-color);
  }
  .popup-menu {
    position: absolute;
    top: 25px;
    right: 0;
    background-color: var(--sidebar-bg);
    border-radius: 8px;
    box-shadow: var(--active-shadow);
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    z-index: 5;
  }
  .popup-item {
    padding: 6px 10px;
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    cursor: pointer;
    color: var(--text-color);
  }
  .popup-item:hover {
    background-color: rgba(255, 122, 0, 0.1);
  }
  .login-partners {
    display: none;
  }
}

@media (min-width: 769px) {
  .mobile-icons {
    display: none;
  }
}
</style>
