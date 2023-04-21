export const actionType = {
    
    SET_DETAILS: "SET_DETAILS",
  };
  
  const reducer = (state, action) => {
    // console.log(action);
  
    switch (action.type) {
      
  
      case actionType.SET_DETAILS:
        return {
          ...state,
          details: action.details,
        };
  
    
  
      default:
        return state;
    }
  };
  
  export default reducer;
  