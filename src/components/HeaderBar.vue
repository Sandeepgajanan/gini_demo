<template>
  <header class="header">
    <div class="header-left">
      <div class="code">{{ code }}</div>
      <div class="level">{{ level }}</div>
    </div>

    <div class="header-center">
      <img src="/Images/logo.png" alt="GINI Logo" class="gini-logo" />
    </div>

    <div class="header-right">
      <button class="menu-btn" @click="toggleMenu">⋮</button>

      <!-- Dropdown -->
      <ul v-if="menuOpen" class="dropdown-menu">
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          @click="handleOption(item)"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderBar",
  props: {
    code: { type: String, default: "7001" },
    level: { type: String, default: "L1" },
  },
  data() {
    return {
      menuOpen: false,
      menuItems: [
        { label: "Again", action: "again" },
        { label: "Gini Help", action: "ginihelp" },
        { label: "Sign Off", action: "signoff" },
        { label: "Gini Standby", action: "ginistandby" },
        { label: "Gini Faster", action: "ginifaster" },
        { label: "Gini Slower", action: "ginislower" },
        { label: "Gini Louder", action: "ginilouder" },
        { label: "Gini Softer", action: "ginisofter" },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    handleOption(item) {
      console.log("Clicked:", item.action);
      this.menuOpen = false;
      // Optionally emit event to parent
      this.$emit("menu-action", item.action);
    },
  },
};
</script>

<style scoped>
.header {
  background: linear-gradient(90deg, #ff7a00, #ff9e32);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  height: 50px;
  position: relative;
}

.header-left {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  width: 50px;
}
.code {
  font-weight: 600;
  font-size: 16px;
}
.level {
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
  margin-left: -20px;
}
.menu-btn {
  background: transparent;
  border: none;
  color: white;
  font-size: 22px;
  cursor: pointer;
}

/* Dropdown menu */
.dropdown-menu {
  position: absolute;
  right: 10px;
  top: 55px;
  background: white;
  color: #000;
  list-style: none;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  padding: 6px 0;
  z-index: 10;
  width: 120px;
}
.dropdown-menu li {
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
}
.dropdown-menu li:hover {
  background-color: #f2f2f2;
}
</style>
