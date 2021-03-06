let JobInfo = [
                    {  
                       "id": 0,       
                       "company": "Alibaba",
                       "appliedDate": "03-01-2017",
                       "position": "Front-End Engineer",
                       "status": "Replied",
                       "jobLink": "http://www.alibabagroup.com/en/global/careers",
                    },
                    {
                       "id": 1,
                       "company": "Tencent",
                       "appliedDate": "03-01-2017",
                       "position": "Front-End Developer",
                       "status": "Pending",
                       "jobLink": "http://join.qq.com/"
                    },
                    {
                       "id": 2,
                       "company": "LiveRamp",
                       "appliedDate": "02-07-2017",
                       "position": "2017 Summer Intern",
                       "status": "Declined",
                       "jobLink": "https://www.redfin.com/about/jobs"
                    }
                  ];

export let initialJobState = JobInfo.map((job) => {
        return Object.assign({}, job, {editing: false});
});

const jobReducer = (state=initialJobState, action) => {
  // state.map((job) => {
  //   return Object.assign({}, job, {editing: false});
  // });
  switch (action.type) {
    case "EDIT_JOB":
      state = state.map((job) => {
          if (job.id === action.payload) {
            job = {...job, editing: true};
          }
          return job;
        });
      break;

    case "REMOVE_JOB":
      state = state.filter((job) => job.id !== action.payload);// becareful of the type!
      break;

    case "SAVE_JOB":
      state = state.map((job) => {
        return (job.id === action.payload.id)?
                action.payload.detail:
                job;
      });
      break;

    case "ADD_JOB":
      state = [...state, action.payload.detail]
      break;
  }
  return state;
}

export default jobReducer;