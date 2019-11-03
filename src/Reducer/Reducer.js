const initialState={
    User:"",
    loginUser:false,
    books: [],
    booksBorrowed:[],
    currentPage:1,
    nextPage:2,
    prevPage:0,
    totalPages:0,
    Start:1   
}

const Reducer=(state=initialState,action)=>{
    switch (action.type){
        case "getBooks":
            return {...state,books:action.payload.books,nextPage:action.payload.nextPage,prevPage:action.payload.prevPage,totalPages:action.payload.totalPages}
        case "changecurrentpage":
            return{
                ...state,currentPage:action.payload
            }
        case "loggedin":
            return{
                ...state,loginUser:action.payload.login,User:action.payload.user
            }
        case "next":
            return{
                ...state,Start:state.Start+1
            }
        case "prev":
              return{
             ...state,Start:state.Start-1
               }
        case "bookborrow":
            return{
                ...state,booksBorrowed:[...state.booksBorrowed,action.payload]
            }
        case "bookreturn":
            let index=state.booksBorrowed.indexOf(action.payload)
            state.booksBorrowed.splice(index,1)
            return {
                ...state,booksBorrowed:[...state.booksBorrowed]
            }
        case "searchbook":
            return {
                ...state,books:action.payload
            }
        default:
            return state
    }
}
export default Reducer;