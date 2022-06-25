<template>
  <div class="app-layout">
    <div className="side-bar d-none d-md-block">
      <div className="logo">
        <img src="../assets/logo.png" />
      </div>
      <div>
        <div
          v-for="item in menu"
          v-bind:key="item.name"
          className="mb-3 router-container"
        >
          <router-link :to="{ path: item.url }" class="router-link">
            <img
              v-bind:src="item.activeIcon"
              className="router-icon"
              width="20"
            />
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </div>
    <div className="main">
      <div className="nav-bar d-none d-md-flex">
        <div className="search-container">
          <div className="search-icon">
            <img src="../assets/search.png" />
          </div>
          <input type="text" className="search-field" placeholder="Search" />
        </div>
        <div className="nav-content">
          <div>
            <img className="notification" src="../assets/notification.png" />
          </div>
          <div className="user-details">
            <p>Hi, Olayimika</p>
            <img className="user-dp" src="../assets/user.png" />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center py-3 px-3 mb-3 d-md-none mobile-nav-content">
        <div>
          <img src='../assets/mobile-nav.png'/>
          </div>
        <div className="d-flex align-items-center justify-content-end">
          <div>
            <img className="notification-" src="../assets/notification.png" width='30' />
          </div>
            <p class="user-name">Hi, Olayimika</p>
          <div className="">
            <img className="" src="../assets/user.png" width='30' />
          </div>
        </div>
      </div>
      <div className="mobile-search-container d-sm-block d-md-none mb-3 mx-auto ">
          <div className="search-icon">
            <img src="../assets/search.png" />
          </div>
          <input type="text" className="search-field" placeholder="Search" />
        </div>
      <slot></slot>
    </div>
  </div>
</template>


<script>
import dashboard from "../assets/dashboard-icon.png";
import settings from "../assets/Settings-icon.png";
import i1 from "../assets/1 2.png";
import i2 from "../assets/2 2.png";
import i3 from "../assets/3 2.png";
import i4 from "../assets/4 2.png";
import i5 from "../assets/5.png";
import i6 from "../assets/6.png";
import i7 from "../assets/7.png";
import i8 from "../assets/8.png";
import i9 from "../assets/9.png";
import i10 from "../assets/10.png";
import i11 from "../assets/11.png";
export default {
  name: "AppLayout",
  props: {
    msg: String,
  },
  data() {
    return {
      menu: [
        {
          name: "Dashboard",
          url: "/",
          type: "child",
          activeIcon: dashboard,
          inActiveIcon: "../assets/dashboard-icon.png",
        },
        {
          name: "Settings",
          url: "/settings",
          type: "parent",
          activeIcon: settings,
          inActiveIcon: "../assets/Settings-icon.png",
        },
        {
          name: "Feeds",
          url: "/feedssettings",
          type: "parent",
          activeIcon: i1,
          inActiveIcon: "../assets/Settings-icon.png",
        },
        {
          name: "User managements",
          url: "/settings",
          type: "parent",
          activeIcon: i2,
          inActiveIcon: "../assets/Settings-icon.png",
        },
        {
          name: "Contacts managements",
          url: "/settings",
          type: "parent",
          activeIcon: i3,
          inActiveIcon: "../assets/Settings-icon.png",
        },
        {
          name: "Departments",
          url: "/departments",
          type: "parent",
          activeIcon: i4,
          inActiveIcon: "../assets/Settings-icon.png",
        },
        {
          name: "Schedule & Reports",
          url: "/settings",
          type: "parent",
          activeIcon: i5,
          inActiveIcon: "../assets/Settings-icon.png",
        },
        {
          name: "Inventory",
          url: "/settings",
          type: "parent",
          activeIcon: i6,
          inActiveIcon: "../assets/Settings-icon.png",
        },
        {
          name: "Sales & Payments",
          url: "/settings",
          type: "parent",
          activeIcon: i7,
          inActiveIcon: "../assets/Settings-icon.png",
        },
        {
          name: "Companies",
          url: "/settings",
          type: "parent",
          activeIcon: i8,
          inActiveIcon: "../assets/Settings-icon.png",
        },
        {
          name: "Requests",
          url: "/settings",
          type: "parent",
          activeIcon: i9,
          inActiveIcon: "../assets/Settings-icon.png",
        },
        {
          name: "Messaging",
          url: "/settings",
          type: "parent",
          activeIcon: i10,
          inActiveIcon: "../assets/Settings-icon.png",
        },
        {
          name: "Conferencing",
          url: "/settings",
          type: "parent",
          activeIcon: i11,
          inActiveIcon: "../assets/Settings-icon.png",
        },
      ],
    };
  },
  //
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-layout {
  height: 100vh;
}
.navbar {
  display: flex;
}
.side-bar {
  position: fixed;
  width: 20%;
  background: #404690;
  background: linear-gradient(
    219deg,
    rgba(64, 70, 144, 1) 0%,
    rgba(64, 70, 144, 1) 93%,
    rgba(26, 139, 162, 0.31) 100%
  );
  height: 100vh;
  overflow: scroll;
  /* padding-top: 54px; */
}
.main {
  margin: 0 0 0 20%;
  /* background: black; */
  /* height: 100vh; */
  padding: 0 42px 42px 42px;
}
p {
  margin: 0;
}
.logo {
  padding: 54px 15px 48px 15px;
  text-align: center;
}
.logo img {
  width: 100%;
}
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 44px 0;
}
.search-container {
  background: #f0f0f0;
  border-radius: 35.5985px;
  display: flex;

  padding: 5px 16px;
  align-items: center;
  width: 300px;
}
.mobile-search-container{
  background: #f0f0f0;

  border-radius: 10px;
  display: flex;
  padding: 5px 16px;
  align-items: center;
  width: 90%;
}
.search-icon {
  padding-top: 0px;
  margin-right: 3px;
}
.search-icon img {
  width: 90%;
}
.search-field {
  border: none;
  background: transparent;
  padding: 8px 8px 8px 0;
  outline: none;
}
.search-field:focus {
  border: none;
  outline: none;
}
.nav-content {
  display: flex;
  align-items: center;
  /* padding: 13px 21px; */
}

.user-details {
  display: flex;
  align-items: center;
  justify-content: end;
}
.user-details p {
  margin: 0 15px 0 0;
}
.notification {
  width: 80%;
}
.user-dp {
  width: 20%;
}
::placeholder {
  font-weight: 400;
  /* font-size: 16px; */
  /* opacity: 0.6; */
  color: #000;
}

.router-link {
  text-decoration: none !important;
  color: white;
  padding: 9px 17px;
  display: flex;
}

.router-link-active {
  background: #232759;
  color: #58a0df;
  border-left: solid 4px #58a0df;
}
.router-icon {
  margin: 0 7px 3px 0;
}
.mobile-nav-content {
  background: #404690;
  color: white;
}
.user-name{
  margin:0 2px 0 5px;
}
@media (max-width: 768px) {
  .main {
    margin: 0 0 0 0;
    /* background: black; */
    /* height: 100vh; */
    padding: 0;
  }
}
</style>
