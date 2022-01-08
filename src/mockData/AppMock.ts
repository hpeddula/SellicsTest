export const mockState = {
    appImages: {
            approvedImages: [
                'https://images.unsplash.com/photo-1641220903854-a447498640c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDE1MzMxODQ&ixlib=rb-1.2.1&q=80&w=200',
                'https://images.unsplash.com/photo-1640003854809-b2a0e97bb289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDE1MzMxOTA&ixlib=rb-1.2.1&q=80&w=200',
                'https://images.unsplash.com/photo-1639884758285-00377c9ccd87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDE1MzMxOTI&ixlib=rb-1.2.1&q=80&w=200',
                'https://images.unsplash.com/photo-1640173493133-9d819e00b0c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDE1MzMxOTU&ixlib=rb-1.2.1&q=80&w=200',
                'https://images.unsplash.com/photo-1639164666391-9c88fc6339e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDE1MzMxOTk&ixlib=rb-1.2.1&q=80&w=200',
                'https://images.unsplash.com/photo-1639164666391-9c88fc6339e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDE1MzMxOTk&ixlib=rb-1.2.1&q=80&w=200'
            ],
        }
}

export const appMockState = {
    appImages: {
        approvedImages: [
            'https://images.unsplash.com/photo-1641220903854-a447498640c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDE1MzMxODQ&ixlib=rb-1.2.1&q=80&w=200',
            'https://images.unsplash.com/photo-1640003854809-b2a0e97bb289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDE1MzMxOTA&ixlib=rb-1.2.1&q=80&w=200',
            'https://images.unsplash.com/photo-1639884758285-00377c9ccd87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDE1MzMxOTI&ixlib=rb-1.2.1&q=80&w=200',
            'https://images.unsplash.com/photo-1640173493133-9d819e00b0c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDE1MzMxOTU&ixlib=rb-1.2.1&q=80&w=200',
            'https://images.unsplash.com/photo-1639164666391-9c88fc6339e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDE1MzMxOTk&ixlib=rb-1.2.1&q=80&w=200',
            'https://images.unsplash.com/photo-1639164666391-9c88fc6339e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDE1MzMxOTk&ixlib=rb-1.2.1&q=80&w=200'
        ],
        urls:{small: 'https://images.unsplash.com/photo-1641220903854-a447498640c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDE1MzMxODQ&ixlib=rb-1.2.1&q=80&w=200',thumb:''},
        id:1
    }
}
export const appMockStateWithNoApprovedImages = {
    appImages: {
        approvedImages: [],
        urls:{thumb:''},
        id:1
    }
}

export const withStateError = {
    appImages: {
        approvedImages: [],
        urls:{small:'https://images.unsplash.com/photo-1641220903854-a447498640c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDE1MzMxODQ&ixlib=rb-1.2.1&q=80&w=200',thumb:''},
        id:1,
        error:'Error'
    }
}
export const withLoadingTrue = {
    appImages: {
        approvedImages: [],
        urls:{small:'https://images.unsplash.com/photo-1641220903854-a447498640c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODkwNTR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDE1MzMxODQ&ixlib=rb-1.2.1&q=80&w=200',thumb:''},
        id:1,
        error:'',
       loading:true
    }
}