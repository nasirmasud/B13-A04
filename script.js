let interviewList = [];
let rejectedList = [];

// heading job count
const allJobCount = document.getElementById("all-job-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
// card top total job count
const allJobCountNum = document.querySelector(".all-job-count-num");

// available job filter buttons
const allJobCountBtn = document.getElementById("show-all-btn");
const interviewCountBtn = document.getElementById("show-interview-btn");
const rejectedCountBtn = document.getElementById("show-rejected-btn");

// Job card
const mainJobCardList = document.getElementById("job-card-list");
// filtered job card
const filteredJobCardList = document.getElementById("filtered-job-card-list");
// filtered rejected job card
const filteredRejectedCardList = document.getElementById(
  "filtered-rejected-card-list",
);
// no job page
const emptyJobSection = document.querySelector(".empty-job").parentNode;

// total job count
function totalJobCount() {
  allJobCount.innerText = mainJobCardList.children.length;
  allJobCountNum.innerText = mainJobCardList.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}
totalJobCount();

// button toggle style
function toggleStyle(id) {
  allJobCountBtn.classList.remove("bg-blue-500", "text-white");
  interviewCountBtn.classList.remove("bg-blue-500", "text-white");
  rejectedCountBtn.classList.remove("bg-blue-500", "text-white");

  allJobCountBtn.classList.add(
    "bg-transparent",
    "text-gray-600",
    "border",
    "border-gray-500",
  );
  interviewCountBtn.classList.add(
    "bg-transparent",
    "text-gray-600",
    "border",
    "border-gray-500",
  );
  rejectedCountBtn.classList.add(
    "bg-transparent",
    "text-gray-600",
    "border",
    "border-gray-500",
  );

  // active button
  document.getElementById(id).classList.add("bg-blue-500", "text-white");
  document
    .getElementById(id)
    .classList.remove(
      "bg-transparent",
      "text-gray-600",
      "border",
      "border-gray-500",
    );

  // section show hide
  mainJobCardList.classList.add("hidden");
  filteredJobCardList.classList.add("hidden");
  filteredRejectedCardList.classList.add("hidden");
  emptyJobSection.classList.add("hidden");

  if (id == "show-interview-btn") {
    filteredJobCardList.classList.remove("hidden");
    if (interviewList.length == 0) {
      emptyJobSection.classList.remove("hidden");
    }
  } else if (id == "show-all-btn") {
    mainJobCardList.classList.remove("hidden");
    if (mainJobCardList.children.length == 0) {
      emptyJobSection.classList.remove("hidden");
    }
  } else if (id == "show-rejected-btn") {
    filteredRejectedCardList.classList.remove("hidden");
    if (rejectedList.length == 0) {
      emptyJobSection.classList.remove("hidden");
    }
  }
}

// interview button event listener
mainJobCardList.addEventListener("click", function (e) {
  if (e.target.classList.contains("interview-btn")) {
    const parentNode = e.target.parentNode.parentNode;
    const companyName = parentNode.querySelector(".company-name").innerText;
    const jobRole = parentNode.querySelector(".job-role").innerText;
    const jobDetails = parentNode.querySelector(".job-details").innerText;
    const roleDetails = parentNode.querySelector(".role-details").innerText;
    const status = parentNode.querySelector(".status").innerText;

    parentNode.querySelector(".status").innerText = "INTERVIEW";

    const jobData = {
      companyName,
      jobRole,
      jobDetails,
      roleDetails,
      status: "INTERVIEW",
    };

    const jobExists = interviewList.find(
      (item) => item.companyName == jobData.companyName,
    );
    if (!jobExists) {
      interviewList.push(jobData);
    }

    rejectedList = rejectedList.filter(
      (item) => item.companyName != jobData.companyName,
    );

    totalJobCount();
    renderJobCard();
    renderRejectCard();
  } else if (e.target.classList.contains("rejected-btn")) {
    const parentNode = e.target.parentNode.parentNode;
    const companyName = parentNode.querySelector(".company-name").innerText;
    const jobRole = parentNode.querySelector(".job-role").innerText;
    const jobDetails = parentNode.querySelector(".job-details").innerText;
    const roleDetails = parentNode.querySelector(".role-details").innerText;
    const status = parentNode.querySelector(".status").innerText;

    parentNode.querySelector(".status").innerText = "REJECTED";

    const jobData = {
      companyName,
      jobRole,
      jobDetails,
      roleDetails,
      status: "REJECTED",
    };

    const jobExists = rejectedList.find(
      (item) => item.companyName == jobData.companyName,
    );
    if (!jobExists) {
      rejectedList.push(jobData);
    }

    interviewList = interviewList.filter(
      (item) => item.companyName != jobData.companyName,
    );

    totalJobCount();
    renderJobCard();
    renderRejectCard();
  }
});

// render interview job card
function renderJobCard() {
  filteredJobCardList.innerHTML = "";

  for (jobs of interviewList) {
    let div = document.createElement("div");
    div.className =
      "job-card grid grid-cols-1 sm:grid-cols-12 gap-4 items-start bg-white rounded-2xl p-6";
    div.innerHTML = `
              <div class="card-content col-span-1 sm:col-span-11 order-1">
            <h4 class="company-name text-xl font-bold text-[#002c5c]">
              ${jobs.companyName}
            </h4>
            <h5 class="job-role text-lg text-gray-600">
              ${jobs.jobRole}
            </h5>
            <p class="job-details text-sm text-gray-600 py-4">
              ${jobs.jobDetails}
            </p>
            <button
              class="status bg-[#eef4ff] font-semibold py-2 px-4 border-0 rounded text-sm"
            >
              ${jobs.status}
            </button>
            <p class="role-details text-xs text-gray-600 py-4">${jobs.roleDetails}</p>
            <div class="job-status flex flex-wrap gap-2">
              <button
                class="bg-transparent hover:bg-green-500 text-green-600 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded text-sm"
              >
                INTERVIEW
              </button>
              <button
                class="bg-transparent hover:bg-red-500 text-red-600 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded text-sm"
              >
                REJECTED
              </button>
            </div>
          </div>
          <div
            class="card-delete col-span-1 sm:col-span-1 flex justify-start sm:justify-end order-2"
          >
            <button
              class="bg-transparent hover:bg-red-500 text-gray-600 hover:text-white px-3 py-2 border border-gray-400 rounded-full"
            >
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>`;

    filteredJobCardList.appendChild(div);
  }
}

// rejected button event listener
function renderRejectCard() {
  filteredRejectedCardList.innerHTML = "";

  for (jobs of rejectedList) {
    let div = document.createElement("div");
    div.className =
      "job-card grid grid-cols-1 sm:grid-cols-12 gap-4 items-start bg-white rounded-2xl p-6";
    div.innerHTML = `
              <div class="card-content col-span-1 sm:col-span-11 order-1">
            <h4 class="company-name text-xl font-bold text-[#002c5c]">
              ${jobs.companyName}
            </h4>
            <h5 class="job-role text-lg text-gray-600">
              ${jobs.jobRole}
            </h5>
            <p class="job-details text-sm text-gray-600 py-4">
              ${jobs.jobDetails}
            </p>
            <button
              class="status bg-[#eef4ff] font-semibold py-2 px-4 border-0 rounded text-sm"
            >
              ${jobs.status}
            </button>
            <p class="role-details text-xs text-gray-600 py-4">${jobs.roleDetails}</p>
            <div class="job-status flex flex-wrap gap-2">
              <button
                class="bg-transparent hover:bg-green-500 text-green-600 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded text-sm"
              >
                INTERVIEW
              </button>
              <button
                class="bg-transparent hover:bg-red-500 text-red-600 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded text-sm"
              >
                REJECTED
              </button>
            </div>
          </div>
          <div
            class="card-delete col-span-1 sm:col-span-1 flex justify-start sm:justify-end order-2"
          >
            <button
              class="delete-btn bg-transparent hover:bg-red-500 text-gray-600 hover:text-white px-3 py-2 border border-gray-400 rounded-full"
            >
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>`;

    filteredRejectedCardList.appendChild(div);
  }
}
