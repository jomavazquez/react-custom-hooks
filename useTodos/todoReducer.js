export const todoReducer = ( initialState = [], action = {} ) => {

	switch( action.type ){
		case 'ADD TODO':
			return [ ...initialState, action.payload ];

		case 'REMOVE TODO':
			return initialState.filter( todo => todo.id !== action.payload );

		case 'TOGGLE TODO':
			return initialState.map( todo => {
				if( todo.id === action.payload ){
					return {
						...todo,
						done: !todo.done
					}
				}
				return todo;
			});
		default:
			return initialState;
	}

}