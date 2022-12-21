<script>
export default {
  data() {
    return {
      scTimer: 0,
      scY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        console.log("this.scY", this.scY)
        clearTimeout(this.scTimer);
         console.log("this.scTimer", this.scTimer)
        this.scTimer = 0;
      }, 100);
      
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
   
};
</script>
<template>
  <div class="row m-0" style="background-color: #0c8ce9">
    <div class="col-lg-10 mx-auto">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-xl-6">
          <h2 class="display-4 pt-4 my-5 mx-3 fw-700 text-white">
            Workforce Analytics for Productivity-Minded Modern Teams
          </h2>
          <div class="align my-3 mx-3" style="color: white">
            <h4>Work in a more informed way with actionable data insights.</h4>
            <h4>
              <a style="color: white" href="/">
                Employee productivity monitoring, automatic time tracking,
              </a>
            </h4>
            <h4>remote work management, and so much more.</h4>
            <div class="active pt-5">
              <button
                class="btn btn-outline try-free my-0 mx-0 my-sm-0"
                type="submit"
              >
                Try For Free
              </button>
              &nbsp;
              <button
                class="btn book-demo my-0 mx-0 my-sm-0 text-white"
                type="button"
              >
                Book a Demo
              </button>
            </div>

            <div class="row">
              <div class="col-lg-6 col-xxl-6 col-md-7">
                <div class="my-3">
                  <p class="text-center text-white fs-15 fw-400 p-0">
                    No credit card required
                  </p>
                </div>
              </div>
              <div class="col-lg-6 col-xxl-6 col-md-5"></div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-md-12 col-xl-6 my-5">
          <img
            alt="header logo"
            class="logo my-5"
            src="@/assets/Heroimage.png"
            style="width: 100%"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- session one -->
  <div class="text-center">
    <h1 class="display-4 pt-5 text-center fw-700" style="color: #2c3460">
      Understand What Enables Your <br />
      People to do Great Work
    </h1>
  </div>
  <div class="container-fluid">
    <div class="col-lg-10 mx-auto">
      <div class="row m-0">
        <div class="col-lg-12 col-md-12 col-xl-6 my-4">
          <p class="fw-bold px-3" style="color: #33cdbb">
            Increase Productivity
          </p>
          <h3 class="fw-bold px-3" style="font-size: 1.75em; color: #2c3460">
            Employee Monitoring
          </h3>
          <div class="my-3 mx-3 fs-18" style="line-height: 1.5">
            <p class="m-0 fw-bold">
              It’s impossible to watch your employees every minute of the day.
            </p>
            <p class="m-0 fw-bold">
              But Insightful employee monitoring software can do it for you,
            </p>
            <p class="m-0 fw-bold">creating a more productive workplace.</p>
          </div>

          <div class="row mt-5">
            <div>
              <img
                alt="png-img"
                class="img-fluid ms-3"
                src="@/assets/Circle with tick blue.png"
              />
              <span class="fw-bold pl-10 fs-22" style="color: #2c3460">
                Computer Activity Tracking
              </span>

              <p class="pt-0 mt-0 px-5 fs-18">
                Working hard, browsing social media or time-wasting? Always<br />
                know how employees use their time, app and website usage,<br />
                and overall productivity.
              </p>
            </div>
          </div>

          <div class="row mt-2">
            <div>
              <img
                alt="png-img"
                class="img-fluid ms-3"
                src="@/assets/Circle with tick blue.png"
              />
              <span class="fw-bold pl-10 fs-22" style="color: #2c3460">
                Regular Screenshots
              </span>

              <p class="pt-0 mt-0 px-5 fs-18">
                Working hard, browsing social media or time-wasting? Always<br />
                know how employees use their time, app and website usage,<br />
                and overall productivity.
              </p>
            </div>
          </div>

          <div class="row mt-2">
            <div>
              <img
                alt="png-img"
                class="img-fluid ms-3"
                src="@/assets/Circle with tick blue.png"
              />
              <span class="fw-bold pl-10 fs-22" style="color: #2c3460">
                Computer Activity Tracking
              </span>

              <p class="pt-0 mt-0 px-5 fs-18">
                Working hard, browsing social media or time-wasting? Always<br />
                know how employees use their time, app and website usage,<br />
                and overall productivity.
              </p>
            </div>

            <div class="btn-align pt-5">
              <button
                class="btn btn-outline more my-2 mx-2 my-sm-0 fs-22"
                type="submit"
              >
                Learn More
              </button>
              <button
                class="btn btn tracking my-2 mx-2 my-sm-0 fs-22"
                type="button"
              >
                Start Tracking
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-md-12 col-xl-6 my-3">
          <img alt=" " class="img-fluid my-5" src="@/assets/secondmain.png" />
        </div>
      </div>
    </div>
  </div>

  <!-- session three -->
  <div class="col-lg-10 mx-auto">
    <div class="row m-0">
      <div class="col-lg-12 col-md-12 col-xl-6 my-3">
        <img alt=" " class="img-fluid my-5" src="@/assets/secondmain.png" />
      </div>
      <div class="col-lg-12 col-md-12 col-xl-6 my-4">
        <p class="fw-bold px-3" style="color: #ffae10">Increase Productivity</p>
        <h3 class="fw-bold px-3" style="font-size: 1.75em; color: #2c3460">
          Employee Monitoring
        </h3>
        <div class="my-3 mx-3 fs-18" style="line-height: 1.5">
          <p class="m-0 fw-bold">
            It’s impossible to watch your employees every minute of the day.
          </p>
          <p class="m-0 fw-bold">
            But Insightful employee monitoring software can do it for you,
          </p>
          <p class="m-0 fw-bold">creating a more productive workplace.</p>
        </div>
        <div class="row mt-5">
          <div>
            <img
              alt="png-img"
              class="img-fluid ms-3"
              src="@/assets/Circle with tick.png"
            />
            <span class="fw-bold pl-10 fs-22" style="color: #2c3460">
              Computer Activity Tracking
            </span>

            <p class="pt-0 mt-0 px-5 fs-18">
              Working hard, browsing social media or time-wasting? Always<br />
              know how employees use their time, app and website usage,<br />
              and overall productivity.
            </p>
          </div>
        </div>
        <div class="row mt-2">
          <div>
            <img
              alt="png-img"
              class="img-fluid ms-3"
              src="@/assets/Circle with tick.png"
            />
            <span class="fw-bold pl-10 fs-22" style="color: #2c3460">
              Regular Screenshots
            </span>

            <p class="pt-0 mt-0 px-5 fs-18">
              Working hard, browsing social media or time-wasting? Always<br />
              know how employees use their time, app and website usage,<br />
              and overall productivity.
            </p>
          </div>
        </div>

        <div class="row mt-2">
          <div>
            <img
              alt="png-img"
              class="img-fluid ms-3"
              src="@/assets/Circle with tick.png"
            />
            <span class="fw-bold pl-10 fs-22" style="color: #2c3460">
              Computer Activity Tracking
            </span>

            <p class="pt-0 mt-0 px-5 fs-18">
              Working hard, browsing social media or time-wasting? Always<br />
              know how employees use their time, app and website usage,<br />
              and overall productivity.
            </p>
          </div>

          <div class="btn-align pt-5">
            <button
              class="btn btn-outline more my-2 mx-2 my-sm-0 fs-22"
              type="submit"
            >
              Learn More
            </button>
            <button
              class="btn btn tracking my-2 mx-2 my-sm-0 fs-22"
              type="button"
            >
              Start Tracking
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- session four -->
  <div class="col-lg-10 mx-auto">
    <div class="row m-0">
      <div class="col-lg-12 col-md-12 col-xl-6 my-4">
        <p class="fw-bold px-3" style="color: #33cdbb">Increase Productivity</p>
        <h3 class="fw-bold px-3" style="font-size: 1.75em; color: #2c3460">
          Employee Monitoring
        </h3>
        <div class="my-3 mx-3 fs-18" style="line-height: 1.5">
          <p class="m-0 fw-bold">
            It’s impossible to watch your employees every minute of the day.
          </p>
          <p class="m-0 fw-bold">
            But Insightful employee monitoring software can do it for you,
          </p>
          <p class="m-0 fw-bold">creating a more productive workplace.</p>
        </div>

        <div class="row mt-5">
          <div>
            <img
              alt="png-img"
              class="img-fluid ms-3"
              src="@/assets/Circle with tick blue.png"
            />
            <span class="fw-bold pl-10 fs-22" style="color: #2c3460">
              Computer Activity Tracking
            </span>

            <p class="pt-0 mt-0 px-5 fs-18">
              Working hard, browsing social media or time-wasting? Always<br />
              know how employees use their time, app and website usage,<br />
              and overall productivity.
            </p>
          </div>
        </div>

        <div class="row mt-2">
          <div>
            <img
              alt="png-img"
              class="img-fluid ms-3"
              src="@/assets/Circle with tick blue.png"
            />
            <span class="fw-bold pl-10 fs-22" style="color: #2c3460">
              Regular Screenshots
            </span>

            <p class="pt-0 mt-0 px-5 fs-18">
              Working hard, browsing social media or time-wasting? Always<br />
              know how employees use their time, app and website usage,<br />
              and overall productivity.
            </p>
          </div>
        </div>

        <div class="row mt-2">
          <div>
            <img
              alt="png-img"
              class="img-fluid ms-3"
              src="@/assets/Circle with tick blue.png"
            />
            <span class="fw-bold pl-10 fs-22" style="color: #2c3460">
              Computer Activity Tracking
            </span>

            <p class="pt-0 mt-0 px-5 fs-18">
              Working hard, browsing social media or time-wasting? Always<br />
              know how employees use their time, app and website usage,<br />
              and overall productivity.
            </p>
          </div>

          <div class="btn-align pt-5">
            <button
              class="btn btn-outline more my-2 mx-2 my-sm-0 fs-22"
              type="submit"
            >
              Learn More
            </button>
            <button
              class="btn btn tracking my-2 mx-2 my-sm-0 fs-22"
              type="button"
            >
              Start Tracking
            </button>
          </div>
        </div>
      </div>
      <div class="col-lg-12 col-md-12 col-xl-6 my-3">
        <img alt=" " class="img-fluid my-5" src="@/assets/secondmain.png" />
      </div>
    </div>
  </div>

  <!-- session five -->
  <div class="text-center">
    <h1 class="display-4 pt-5 text-center fw-700" style="color: #2c3460">
      The productivity bump teams<br />
      experience with openworx
    </h1>
  </div>

  <section class="three-column-images">
    <div class="row m-0">
      <div class="col-xs-6 col-sm-4">
        <img alt=" " class="img-fluid my-5" src="@/assets/image01.png" />
        <div class="border-right">
          <h1
            style="
              font-weight: 900;
              font-size: 58px;
              line-height: 124.7%;
              color: #0c8ce9;
            "
          >
            +24%
          </h1>
          <p class="fs-22 fw-400" style="color: #2c3460">
            <strong
              >More Efficient <br />
              Business Process</strong
            >
          </p>
        </div>
      </div>
      <div class="col-xs-6 col-sm-4">
        <img alt=" " class="img-fluid my-5" src="@/assets/image02.png" />
        <div class="border-right">
          <h1
            style="
              font-weight: 900;
              font-size: 58px;
              line-height: 124.7%;
              color: #0c8ce9;
            "
          >
            +15%
          </h1>
          <p class="fs-22 fw-400" style="color: #2c3460">
            <strong
              >More Efficient <br />
              Business Process</strong
            >
          </p>
        </div>
      </div>
      <div class="col-xs-6 col-sm-4">
        <img alt=" " class="img-fluid my-5" src="@/assets/image03.png" />
        <div class="border-right">
          <h1
            style="
              font-weight: 900;
              font-size: 58px;
              line-height: 124.7%;
              color: #0c8ce9;
            "
          >
            +10%
          </h1>
          <p class="fs-22 fw-400" style="color: #2c3460">
            <strong
              >More Efficient <br />
              Business Process</strong
            >
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- session six -->
  <div class="row m-0 p-5 my-5 bg-image">
    <div class="col-lg-10 mx-auto">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-xl-6">
          <h2 class="display-4 pt-5 my-5 mx-3 fw-700 text-white">
            Incredibly easy to install on all operating systems
          </h2>
          <div class="my-3 mx-3 fs-18 text-white">
            <h3>Try the simplest solution today...</h3>
            <div class="pt-5">
              <button
                class="btn btn-outline try-free my-2 mx-2 my-sm-0"
                type="submit"
              >
                Start Free Trial
              </button>
            </div>
            <p class="text-white mx-4 p-2 fs-15 fw-400">
              No credit card required
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- session seven -->
  <div class="container-fluid">
    <div class="col-lg-10 mx-auto">
      <div class="row m-0">
        <div class="col-lg-12 col-md-12 col-xl-6 p-3">
          <img src="@/assets/imagesec8.png" class="img-fluid" />
        </div>
        <div class="col-lg-12 col-md-12 col-xl-6 my-5 p-3">
          <h2 class="discover display-4 fw-700" style="color: #2c3460">
            Ready to user opnworx?
          </h2>
          <p class="mt-4 fw-400" style="font-size: 24px">
            Take an in-depth look at how our product work. Start your free trial
            now and begin using opnworx, the workforce monitoring software to
            make your team productive than before.
          </p>
          <p class="fw-bold my-5" style="font-size: 20px; color: #0c8ce9">
            <img src="@/assets/Arrow 1.png" />&nbsp;Visit How it Works Page
          </p>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>

  <!-- session eight -->
  <div class="container-fluid">
    <div class="text-center">
      <h1 class="display-4 pt-2 fw-700 my-5" style="color: #2c3460">
        How do you want to securely<br />
        store your data?
      </h1>
    </div>

    <div class="col-lg-10 mx-auto">
      <div class="row m-0">
        <div class="col-lg-12 col-md-12 col-xl-6 my-2 p-3">
          <h2 class="display-4 pt-1 fw-700" style="color: #2c3460">
            Cloud Solution
          </h2>
          <p class="fw-400" style="font-size: 24px">
            The best option for teams who want a fast, easy setup in just a few
            minutes. No tricky setup, added technical equipment,or involvement
            from your IT team. Your data is safely stored on industry-leading
            AWS infrastructure using the latest security standards.
          </p>
          <p class="mb-5 fw-bold my-5" style="font-size: 20px; color: #0c8ce9">
            <img src="@/assets/Arrow 1.png " />&nbsp;Visit How it Works Page
          </p>
        </div>
        <div class="col-lg-12 col-md-12 col-xl-6 p-3">
          <img src="@/assets/imgsec9.png" class="img-fluid" />
        </div>
      </div>
    </div>
  </div>

  <!-- session nine -->
  <div class="container-fluid">
    <div class="col-lg-10 mx-auto">
      <div class="row m-0">
        <div class="col-lg-12 col-md-12 col-xl-6 p-3">
          <img src="@/assets/imagesec8.png" class="img-fluid" />
        </div>
        <div class="col-lg-12 col-md-12 col-xl-6 my-5 p-3">
          <h2 class="discover display-4 fw-700" style="color: #2c3460">
            On-premise Solution
          </h2>
          <p class="mt-4 fw-400" style="font-size: 24px">
            TWanting to store your data on your own servers? Our on-premise
            solution is for teams who don’t mind alittle extra technical effort
            and have the IT team to pull it off. Your company provides the
            servers, we usethem to store our data.
          </p>
          <p class="fw-bold my-5" style="font-size: 20px; color: #0c8ce9">
            <img src="@/assets/Arrow 1.png" />&nbsp;Learn More
          </p>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>

  <!-- session ten -->
  <div class="container openworx">
    <div class="row mt-5 mb-5 g-3" style="width: 75.33%">
      <div class="text-center">
        <h1 class="fw-700" style="font-size: 4.953vh; color: #2c3460">
          Why thousands have <br />
          chosen openworx
        </h1>
      </div>

      <div class="col-4 col-lg-4 col-sm-12 col-12">
        <div class="card setCard">
          <div class="card-image-wrapper">
            <img
              src="@/assets/img11one.png"
              class="card-img-top img-fluid"
              alt="..."
            />
          </div>
          <div class="card-body">
            <h2 class="fw-700 fs-2vh">Manage teams effectively</h2>
            <p class="fw-400 text-center fs-1vh">
              openworx helps you keep your teams closely aligned to get everyone
              on the same page and keep track of all the moving parts.
            </p>
          </div>
        </div>
      </div>
      <div class="col-4 col-lg-4 col-sm-12 col-12">
        <div class="card setCard">
          <div class="card-image-wrapper">
            <img
              src="@/assets/img11two.png"
              class="card-img-top img-fluid"
              alt="..."
            />
          </div>
          <div class="card-body">
            <h2 class="fw-700 fs-2vh">Manage teams effectively</h2>
            <p class="fw-400 text-center fs-1vh">
              openworx helps you keep your teams closely aligned to get everyone
              on the same page and keep track of all the moving parts.
            </p>
          </div>
        </div>
      </div>
      <div class="col-4 col-lg-4 col-sm-12 col-12">
        <div class="card setCard">
          <div class="card-image-wrapper">
            <img
              src="@/assets/img11three.png"
              class="card-img-top img-fluid"
              alt="..."
            />
          </div>
          <div class="card-body">
            <h2 class="fw-700 fs-2vh">Manage teams effectively</h2>
            <p class="fw-400 text-center fs-1vh">
              openworx helps you keep your teams closely aligned to get everyone
              on the same page and keep track of all the moving parts.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- session eleven -->
  <div class="row m-0 p-5 my-0 mt-5 bg-img1">
    <div class="col-lg-10 mx-auto">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-xl-6">
          <h2 class="workplace display-4 pt-5 my-5 mx-3 fw-700 text-white">
            Ready to Take Full Control Of Your Workplace?
          </h2>
          <div
            class="align my-3 mx-3 text-white"
            style="font-size: 18px; line-height: 1.5"
          >
            <h3 class="simple">Try the simplest solution today...</h3>
            <div class="active pt-5">
              <button
                class="btn btn-outline try-free my-2 mx-2 my-sm-0"
                type="submit"
              >
                Start Free Trial
              </button>
            </div>

            <p class="text-white mx-4 p-2 fw-400 fs-15">
              No credit card required
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- backup button -->
  <button class="btn btn-primary button-scroll-to-top" v-show="scY > 300" @click = "toTop">
    <span><fa icon="arrow-up" /></span>
  </button>
</template>

<style>
.fs-15 {
  font-size: 15px !important;
}

.fw-400 {
  font-weight: 400 !important;
}

.text-white {
  color: white !important;
}

.fw-700 {
  font-weight: 700 !important;
}
.try-free {
  width: 190px;
  height: 60px;
  color: #fff !important;
  margin: 0 0 0 12px;
  font-size: 22px !important;
  background: #38e0cc !important;
  border-radius: 8px;
}

.try-free:hover {
  background-color: #18d7c0 !important;
  color: white !important;
}

.book-demo {
  font-size: 22px !important;
  color: #fff;
  margin: 0 0 0 12px;
  width: 190px;
  height: 60px;
  border-color: #ffffff !important;
  border-radius: 8px;
}

.fs-18 {
  font-size: 18px !important;
}

.pl-10 {
  padding-left: 10px !important;
}

.fs-22 {
  font-size: 22px !important;
}

.tracking {
  width: 190px;
  height: 60px;
  color: #ffffff !important;
  margin: 0 0 0 12px;
  background: #0c8ce9 !important;
  border-radius: 8px;
}

.tracking:hover {
  background-color: #067dd2 !important;
  color: white !important;
}

.more {
  color: #0c8ce9 !important;
  margin: 0 0 0 12px;
  width: 190px;
  height: 60px;
  border-color: #0c8ce9 !important;
  border-radius: 8px;
}

.more:hover {
  background-color: #0c8ce9;
  color: white;
}

.three-column-images {
  background: white;
}

.three-column-images .row {
  text-align: center;
}

.three-column-images img {
  margin-bottom: 10px;
  margin-top: 20px;
}

.three-column-images a {
  font-weight: bold;
}

.border-right {
  border-right: 1px solid #d9d9d9;
}

.bg-image {
  background-image: url(@/assets/Rectangle\ 26.png);
  background-size: cover;
}

.openworx {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    103.55deg,
    rgba(38, 72, 255, 0.08) 0%,
    rgba(165, 217, 255, 0.09) 53.1%,
    rgba(193, 202, 253, 0.14) 100%
  );
}

.setCard {
  max-width: 370px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
}

.card-image-wrapper {
  display: flex;
  width: 100%;
  height: 150px;
}

.card-img-top {
  display: block;
  width: auto !important;
  max-height: 100%;
  margin: auto;
}

.fs-1vh {
  font-size: 1.657vh !important;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.01em;
  color: #000000;
}

.fs-2vh {
  font-size: 2.27vh !important;
  line-height: 150%;
  text-align: center;
  letter-spacing: 0.01em;
  color: #2c3460;
}

.bg-img1 {
  background-image: url(@/assets/img12bg.png);
  background-size: cover;
}

.button-scroll-to-top {
  position: fixed;
  transition: all .2s ease-in-out;
  z-index: 1030;
  right: 30px;
  bottom: 30px;
  border-radius: 50%;
  float: right;
}

</style>