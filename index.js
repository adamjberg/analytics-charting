const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

// Create an array of dates for the last 7 days, including today
const last7Days = [];
for (let i = 6; i >= 0; i--) {
  const date = new Date();
  date.setDate(date.getDate() - i);
  last7Days.push(date.toDateString());
}

const data = [
  {
    event: "page_view",
    page: "/",
    date: new Date("2023-10-16T08:30:00"), // Full timestamp with date and time
  },
  {
    event: "page_view",
    page: "/about",
    date: new Date("2023-10-16T08:30:00"), // Full timestamp with date and time
  },
  {
    event: "page_view",
    page: "/about",
    date: new Date("2023-10-16T08:30:00"), // Full timestamp with date and time
  },
  {
    event: "page_view",
    page: "/about",
    date: new Date("2023-10-16T08:30:00"), // Full timestamp with date and time
  },
  {
    event: "page_view",
    page: "/",
    date: new Date("2023-10-16T08:30:00"), // Full timestamp with date and time
  },
  {
    event: "page_view",
    page: "/",
    date: new Date("2023-10-16T08:30:00"), // Full timestamp with date and time
  },
  {
    event: "page_view",
    page: "/",
    date: new Date("2023-10-16T08:30:00"), // Full timestamp with date and time
  },
  {
    event: "page_view",
    page: "/",
    date: new Date("2023-10-16T08:30:00"), // Full timestamp with date and time
  },
  {
    event: "page_view",
    page: "/",
    date: new Date("2023-10-16T08:30:00"), // Full timestamp with date and time
  },
  {
    event: "page_view",
    page: "/",
    date: new Date("2023-10-16T08:30:00"), // Full timestamp with date and time
  },
  {
    event: "page_view",
    page: "/",
    date: new Date("2023-10-16T08:30:00"), // Full timestamp with date and time
  },
  {
    event: "page_view",
    page: "/",
    date: new Date("2023-10-16T08:30:00"), // Full timestamp with date and time
  },
  {
    event: "page_view",
    page: "/",
    date: new Date("2023-10-16T08:30:00"), // Full timestamp with date and time
  },
  {
    event: "page_view",
    page: "/",
    date: new Date("2023-10-16T08:30:00"), // Full timestamp with date and time
  },
  {
    event: "page_view",
    page: "/",
    date: new Date("2023-10-16T08:30:00"), // Full timestamp with date and time
  },
  {
    event: "page_view",
    page: "/",
    date: new Date("2023-10-16T08:30:00"), // Full timestamp with date and time
  },
  {
    event: "page_view",
    page: "/",
    date: new Date("2023-10-16T08:30:00"), // Full timestamp with date and time
  },
  {
    event: "page_view",
    page: "/",
    date: new Date("2023-10-17T12:45:00"), // Full timestamp with date and time
  },
  // Add more data entries with full timestamps for other days
];

// Extract the dates from the data
const dates = data.map((entry) => entry.date.toDateString());

// Create an object to store the counts of page views for each date
const pageViewsCount = {};

let maxOnDay = 0;
dates.forEach((date) => {
  if (pageViewsCount[date]) {
    pageViewsCount[date]++;
  } else {
    pageViewsCount[date] = 1;
  }

  if (pageViewsCount[date] > maxOnDay) {
    maxOnDay = pageViewsCount[date];
  }
});

// Map the counts to the correct labeled date
const pageViews = last7Days.map((label) => pageViewsCount[label] || 0);

new Chart(canvas, {
  type: "bar",
  data: {
    labels: last7Days, // Use the dynamically generated last 7 days as labels
    datasets: [
      {
        label: "# of Page Views",
        data: pageViews,
        borderWidth: 1,
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // You can customize the bar color
        borderColor: 'rgba(75, 192, 192, 1)', // You can customize the border color
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: Math.max(10, Math.ceil(maxOnDay / 10) * 10),
      },
    },
  },
});
