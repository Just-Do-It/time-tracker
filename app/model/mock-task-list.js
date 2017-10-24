const mockTaskList = [
  {
    id: 1,
    name: 'Task 1',
    description: 'description task 1',
    timeCreate: '12:20',
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
        play: false,
        timeTask: '1h 20m'
      }
    ]
  },
  {
    id: 2,
    name: 'Task 2',
    description: 'description task 1',
    timeCreate: '12:20',
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
        play: false,
        timeTask: '1h 20m'
      }
    ]
  }
]

export default mockTaskList
