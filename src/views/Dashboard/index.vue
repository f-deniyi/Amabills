<template>
  <AppLayout>
    <div className="dashboard-container">
      <div className="mb-4 ">
        <div className=" dashboard-cards-container ">
          <div className="card  border-none ">
            <img src="../../assets/card.png" className="card-grad-img" />
            <div className="d-flex justify-content-between align-items-center">
              <div className="">
                <h6 className="mb-0">Products</h6>
                <h5>3</h5>
              </div>
              <div>
                <img src="../../assets/1.png" width="80" />
              </div>
            </div>
          </div>
          <div className="card  border-none ">
            <img src="../../assets/card.png" className="card-grad-img" />
            <div className="d-flex justify-content-between align-items-center">
              <div className="">
                <h6 className="mb-0">Sales</h6>
                <h5>₦16,345.00</h5>
              </div>
              <div>
                <img src="../../assets/2.png" width="80" />
              </div>
            </div>
          </div>
          <div className="card  border-none ">
            <img src="../../assets/card.png" className="card-grad-img" />
            <div className="d-flex justify-content-between align-items-center">
              <div className="">
                <h6 className="mb-0">Posts</h6>
                <h5>177</h5>
              </div>
              <div>
                <img src="../../assets/3.png" width="80" />
              </div>
            </div>
          </div>
          <div className="card  border-none ">
            <img src="../../assets/card.png" className="card-grad-img" />
            <div className="d-flex justify-content-between align-items-center">
              <div className="">
                <h6 className="mb-0">Users</h6>
                <h5>107</h5>
              </div>
              <div>
                <img src="../../assets/4.png" width="80" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-7 feed-wrapper">
          <div
            className="d-sm-block d-md-flex justify-content-between align-items-center post-header  py-1 mb-1"
          >
            <div class="d-flex mb-2">
              <img src="../../assets/chat.png" />

              <p>Recent General Feeds</p>
            </div>
            <div className="feed-search-container">
              <div className="search-icon">
                <img src="../../assets/search.png" />
              </div>
              <input
                type="text"
                className="search-field"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="feeds">
            <div className="mb-1 border-bottom pt-3">
              <div
                className="d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  <img className="user-dp" src="../../assets/F1.png" />
                  <h6 class="mb-0 feed-poster">Moses Olaniyi</h6>
                </div>
                <p className="feed-date">Tue 24 May, 2022 04:01:22</p>
              </div>
              <p className="feed my-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus et facilisis mi id ultrices. Tortor eleifend diam ut
                aenean eget diam. Nullam et facilisi non venenatis. Molestie
                lectus facilisi sed laoreet faucibus.
              </p>
            </div>
            <div className="mb-1 border-bottom pt-3">
              <div
                className="d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  <img
                    className="user-p"
                    width="30"
                    src="../../assets/F2.png"
                  />
                  <h6 class="mb-0 feed-poster">Julliet Chinwere</h6>
                </div>
                <p className="feed-date">Tue 24 May, 2022 04:01:22</p>
              </div>
              <p className="feed my-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus et facilisis mi id ultrices. Tortor eleifend diam ut
                aenean eget diam. Nullam et facilisi non venenatis. Molestie
                lectus facilisi sed laoreet faucibus.
              </p>
            </div>
            <div className="mb-1 border-bottom pt-3">
              <div
                className="d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  <img className="user-dp" src="../../assets/user.png" />
                  <h6 class="mb-0 feed-poster">Super Admin</h6>
                </div>
                <p className="feed-date">Tue 24 May, 2022 04:01:22</p>
              </div>
              <p className="feed my-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus et facilisis mi id ultrices. Tortor eleifend diam ut
                aenean eget diam. Nullam et facilisi non venenatis. Molestie
                lectus facilisi sed laoreet faucibus.
              </p>
            </div>
            <div className="mb-1  pt-3">
              <div
                className="d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  <img className="user-dp" src="../../assets/F1.png" />
                  <h6 class="mb-0 feed-poster">Moses Olaniyi</h6>
                </div>
                <p className="feed-date">Tue 24 May, 2022 04:01:22</p>
              </div>
              <p className="feed my-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus et facilisis mi id ultrices. Tortor eleifend diam ut
                aenean eget diam. Nullam et facilisi non venenatis. Molestie
                lectus facilisi sed laoreet faucibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>


<script>
import AppLayout from "../../layout/AppLayout.vue";
export default {
  name: "dash-board",
  props: {
    msg: String,
  },
  components: {
    AppLayout,
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
  width: 15.5%;
  background: #404690;
  background: linear-gradient(
    219deg,
    rgba(64, 70, 144, 1) 0%,
    rgba(64, 70, 144, 1) 93%,
    rgba(26, 139, 162, 0.31) 100%
  );
  height: 100vh;
  /* padding-top: 54px; */
}
.main {
  margin: 0 0 0 15.5%;
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
}
.user-details p {
  margin: 0 15px;
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

.dashboard-cards-container {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(
      0,
      1fr
    );
  grid-gap: 12px;
}

.dashboard-cards-container .card {
  background: #e8e9eb;
  position: relative;
  height: 169px;
  border: none !important;
  padding: 64px 3px 0px 34px;
  width: 100%;
  /* margin: 0 2px; */
}
.dashboard-cards-container .card .card-grad-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
}
.dashboard-cards-container h6 {
  font-weight: 500;
  font-size: 20px;

  color: #242966;
}
.dashboard-cards-container h5 {
  font-weight: 600;
  font-size: 20px;
  color: #242966;
}
.post-header {
  background: #e8e9eb;
  border-radius: 7.32203px;
  padding-left: 15px;
  padding-right: 7px;
}
.post-header p {
  color: #242966;
}
.feed-search-container {
  background: white;
  border-radius: 7.32203px;
  display: flex;

  padding: 2px 16px;
  align-items: center;
  /* width: 300px; */
}
.feeds {
  background: #fafafa;
  border-radius: 8px;
  padding: 0 22px;
}
.feed-date {
  font-weight: 600;
  font-size: 14px;
  color: #6b6a6a;
}
.feed-poster {
  font-weight: 600;
  font-size: 16.2908px;
  /* margin-right: 2px; */
  color: #000000;
  margin-left: 6px;
}
.feed {
  font-weight: 500;
  font-size: 14px;

  color: #403c3c;
}
@media (max-width: 768px) {
  .main {
    margin: 0 0 0 0;
    /* background: black; */
    /* height: 100vh; */
    padding: 0;
  }
  .dashboard-cards-container {
    display: grid;
    grid-template-columns: minmax(0, 1fr) !important;
    grid-gap: 12px;
  }
  .dashboard-container {
    margin: auto;
    width: 90%;
  }
  .feed-date {
    font-weight: 400;
    font-size: 12px;
    color: #6b6a6a;
  }
  .feed-poster {
    font-weight: 400;
    font-size: 13.908px;
    margin-right: 2px;
    color: #000000;
  }
  .feed-search-container {
    /* width:%; */
    margin-bottom: 5px;
  }
}
@media (max-width: 1030px) {
  .dashboard-cards-container {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    grid-gap: 12px;
  }
  .feed-wrapper {
    flex: 0 0 auto;
    width: 100%;
  }
}

@media (min-width: 600px) and (max-width: 1030px) {
  .post-header {
    display: flex !important;
  }
}
</style>
