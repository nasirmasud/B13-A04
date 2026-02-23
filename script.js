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
