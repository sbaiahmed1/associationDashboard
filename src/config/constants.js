// const baseUrl = 'https://nodebackend-pfe.herokuapp.com/';
const baseUrl = 'http://127.0.0.1:3000/';
const Events = [
    {
        _id: '5e8bb2f998571c7a788c62d2',
        name: 'Festival Yoo',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Adipiscing elit ut aliquam purus. Donec ac odio tempor orci dapibus. Maecenas ultricies mi eget mauris pharetra et ultrices neque.',
        date: '1561061455',
        location: 'Monastir',
        createdAt: '2020-04-06T22:53:45.593Z',
        updatedAt: '2020-04-12T20:56:27.431Z',
        __v: 0,
    },
    {
        _id: '5e8fa3b11cc731392c7bf329',
        name: 'Im an event',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Adipiscing elit ut aliquam purus. Donec ac odio tempor orci dapibus. Maecenas ultricies mi eget mauris pharetra et ultrices neque.',
        date: '1592683855',
        location: 'Monastir',
        createdAt: '2020-04-09T22:37:37.131Z',
        updatedAt: '2020-04-09T22:37:37.131Z',
        __v: 0,
    },
    {
        _id: '5e8fa3b11cc731392c7bf329',
        name: 'Im an event',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Adipiscing elit ut aliquam purus. Donec ac odio tempor orci dapibus. Maecenas ultricies mi eget mauris pharetra et ultrices neque.',
        date: '1592683855',
        location: 'Monastir',
        createdAt: '2020-04-09T22:37:37.131Z',
        updatedAt: '2020-04-09T22:37:37.131Z',
        __v: 0,
    },
    {
        _id: '5e8fa3b11cc731392c7bf329',
        name: 'Im an event',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Adipiscing elit ut aliquam purus. Donec ac odio tempor orci dapibus. Maecenas ultricies mi eget mauris pharetra et ultrices neque.',
        date: '1592683855',
        location: 'Monastir',
        createdAt: '2020-04-09T22:37:37.131Z',
        updatedAt: '2020-04-09T22:37:37.131Z',
        __v: 0,
    }
];
const Tasks = [
    {
        _id: '5assadga57asdgh6asdhas6',
        title: 'Do Do Yoo',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Adipiscing elit ut aliquam purus. Donec ac odio tempor orci dapibus. Maecenas ultricies mi eget mauris pharetra et ultrices neque.',
        createdAt: '2020-04-06T22:53:45.593Z',
        updatedAt: '2020-04-12T20:56:27.431Z',
        __v: 0,
    },
    {
        _id: '5e8fa3b11cc731392ccdd45545',
        title: 'Im an event',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Adipiscing elit ut aliquam purus. Donec ac odio tempor orci dapibus. Maecenas ultricies mi eget mauris pharetra et ultrices neque.',
        createdAt: '2020-04-09T22:37:37.131Z',
        updatedAt: '2020-04-09T22:37:37.131Z',
        __v: 0,
    },
    {
        _id: '5e8fa3b11cc7313sh56as329',
        title: 'Im an event',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Adipiscing elit ut aliquam purus. Donec ac odio tempor orci dapibus. Maecenas ultricies mi eget mauris pharetra et ultrices neque.',
        createdAt: '2020-04-09T22:37:37.131Z',
        updatedAt: '2020-04-09T22:37:37.131Z',
        __v: 0,
    },
];

const Routes = [
    {
        routeName: 'events',
        label: 'Events',
        childrenRoutes: [
            {
                routeName: 'addevent',
                label: 'Add New Event',
            },
            {
                routeName: 'events',
                label: 'Events'
            }
        ]
    },
    {
        routeName: 'tasks',
        label: 'Tasks',
        childrenRoutes: [
            {
                routeName: 'addtask',
                label: 'Add New Task',
            },
            {
                routeName: 'tasks',
                label: 'Tasks'
            }
        ]
    },
    {
        routeName: 'users',
        label: 'Users',
        childrenRoutes: [
            {
                routeName: 'adduser',
                label: 'Add New User',
            },
            {
                routeName: 'users',
                label: 'Users'
            }
        ]
    },
    {
        routeName: 'polls',
        label: 'Polls',
        childrenRoutes: [
            {
                routeName: 'addpoll',
                label: 'Add New Poll',
            },
            {
                routeName: 'polls',
                label: 'Polls'
            }
        ]
    },

];

export {baseUrl, Events, Tasks, Routes};
