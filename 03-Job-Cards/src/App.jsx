import "./App.css";

import Card from "./Components/Card";

function App() {
  const jobs = [
    {
      image:
        "https://i.pinimg.com/736x/f0/c2/03/f0c20338fb98ca7785de471077612f00.jpg",
      companyName: "Amazon",
      time: "5 days ago",
      role: "Senior UI/UX Designer",
      tag1: "Part Time",
      tag2: "Senior Level",
      salary: "$123/hr",
      location: "Mumbai, India",
    },
    {
      image:
        "https://i.pinimg.com/1200x/e2/cd/42/e2cd4264ef814fa8c1db180db1b5d1de.jpg",
      companyName: "Google",
      time: "2 days ago",
      role: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      salary: "$145/hr",
      location: "Bengaluru, India",
    },
    {
      image:
        "https://i.pinimg.com/736x/91/92/1c/91921cec4f8a8cbe3d09e596e0659d81.jpg",
      companyName: "Microsoft",
      time: "1 week ago",
      role: "Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      salary: "$152/hr",
      location: "Hyderabad, India",
    },
    {
      image:
        "https://i.pinimg.com/1200x/0a/db/09/0adb09b6580d9c13a6fd4af026649940.jpg",
      companyName: "Meta",
      time: "3 days ago",
      role: "React Developer",
      tag1: "Remote",
      tag2: "Junior Level",
      salary: "$98/hr",
      location: "Remote",
    },
    {
      image:
        "https://i.pinimg.com/736x/27/44/e4/2744e4d2047031e5babfe4f3b810dcd2.jpg",
      companyName: "Apple",
      time: "6 days ago",
      role: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      salary: "$170/hr",
      location: "Pune, India",
    },
    {
      image:
        "https://i.pinimg.com/1200x/8c/74/0b/8c740bc13bd5a0a19c24d28dff98cbdd.jpg",
      companyName: "Netflix",
      time: "2 weeks ago",
      role: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      salary: "$185/hr",
      location: "Bengaluru, India",
    },
    {
      image:
        "https://i.pinimg.com/736x/9e/ab/c5/9eabc54fbe3cd7a6931695dcce52cc82.jpg",
      companyName: "Adobe",
      time: "4 days ago",
      role: "Graphic Designer",
      tag1: "Part Time",
      tag2: "Junior Level",
      salary: "$90/hr",
      location: "Noida, India",
    },
    {
      image:
        "https://i.pinimg.com/1200x/dd/fd/12/ddfd129a047238762e5bfbaac9b8e81c.jpg",
      companyName: "Oracle",
      time: "1 day ago",
      role: "Java Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      salary: "$148/hr",
      location: "Chennai, India",
    },
    {
      image:
        "https://i.pinimg.com/736x/1a/68/e2/1a68e21c776065c70542e56ea014cfa5.jpg",
      companyName: "IBM",
      time: "3 weeks ago",
      role: "Cloud Engineer",
      tag1: "Hybrid",
      tag2: "Mid Level",
      salary: "$138/hr",
      location: "Gurugram, India",
    },
    {
      image:
        "https://i.pinimg.com/736x/10/91/5e/10915e83113207ebfbec881c8acb26e2.jpg",
      companyName: "Intel",
      time: "5 days ago",
      role: "Data Analyst",
      tag1: "Full Time",
      tag2: "Entry Level",
      salary: "$110/hr",
      location: "Bengaluru, India",
    },
    {
      image:
        "https://i.pinimg.com/736x/ee/90/d6/ee90d6ac9c5990148e11ee9a74593e1c.jpg",
      companyName: "Salesforce",
      time: "4 weeks ago",
      role: "DevOps Engineer",
      tag1: "Remote",
      tag2: "Senior Level",
      salary: "$162/hr",
      location: "Remote",
    },
    {
      image:
        "https://i.pinimg.com/1200x/51/17/e9/5117e9ef09029a5da485a92d9ad6192e.jpg",
      companyName: "NVIDIA",
      time: "2 weeks ago",
      role: "AI/ML Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      salary: "$195/hr",
      location: "Hyderabad, India",
    },
  ];

  return (
    <div className="parent">
      {jobs.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              image={elem.image}
              company={elem.companyName}
              time={elem.time}
              role={elem.role}
              tag1={elem.tag1}
              tag2={elem.tag2}
              salary={elem.salary}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
