const initialState={
    User:"",
    loginUser:false,
    books: [],
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
            console.log(action.payload);
            return{
                ...state,currentPage:action.payload
            }
        case "loggedin":
            return{
                ...state,loginUser:action.payload
            }
        case "next":
            return{
                ...state,Start:state.Start+1
            }
        case "prev":
              return{
             ...state,Start:state.Start-1
               }
        default:
            return state
    }
}
export default Reducer;