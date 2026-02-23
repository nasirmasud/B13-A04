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
