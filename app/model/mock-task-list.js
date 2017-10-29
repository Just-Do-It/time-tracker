const mockTaskList = [
  {
    id: 1,
    name: 'Task 1',
    description: 'description task 1',
    timeCreate: new Date(2017, 9, 23, 11, 13),
    play: false,
    timeTask: 7000000,
    status: true, // open - true, close - false
    states: [
      {
        id: 1,
        timeStart: '12:20',
        timeEnd: '12:40'
      },
      {
        id: 2,
        timeStart: '12:50',
        timeEnd: '13:30'
      }
    ],
    subTasks: [
      {
        id: 1,
        name: 'subtask 1',
        status: true
      },
      {
        id: 23,
        name: 'subtask 2',
        status: true
      }
    ]
  },
  {
    id: 2,
    name: 'Task 2',
    description: 'description task 1',
    timeCreate: new Date(2017, 9, 25, 12, 1),
    play: false,
    timeTask: 6000000,
    status: true, // open - true, close - false
    states: [
      {
        id: 1,
        timeStart: '12:20',
        timeEnd: '12:40'
      },
      {
        id: 2,
        timeStart: '12:50',
        timeEnd: '13:30'
      }
    ],
    subTasks: [
      {
        id: 1,
        name: 'subtask 1',
        status: true
      },
      {
        id: 2,
        name: 'subtask 2',
        status: false
      }
    ]
  }
]

export default mockTaskList
