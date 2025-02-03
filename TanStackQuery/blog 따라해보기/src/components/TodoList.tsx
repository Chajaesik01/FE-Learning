import { useSuspenseQuery, useQueryClient } from "@tanstack/react-query"
import { getTodos } from "../api/api" 

const TodoList = () => {
    const queryClient = useQueryClient();
    const { 
        data: todos, 
        isLoading, 
        error, 
        isStale, 
        refetch 
    } = useSuspenseQuery({
        queryKey: ['todos'],
        queryFn: getTodos,
        select: data => data.filter(todo => todo.userId === 1), 
        staleTime: 1000 * 5,
        structuralSharing(oldData, newData) {
            if(!oldData) return newData;

            return newData.map((newTodo) => {
                const oldTodo = oldData.find(old => old.id === newTodo.id)
                return oldTodo || newTodo;
            })
         },
    });

    if (isLoading){
        return <div>Loading...</div>
    }

    if (error){
        return <div>Error: {error.message}</div>
    }

    function getCachedData(){
        return queryClient.getQueryData(['todos']);
    }

    const handleRefetch = async () => {
        // 캐시된 데이터 먼저 확인
        const cachedData = getCachedData();
        
        if (cachedData) {
            console.log('Cached Data:', cachedData);
        }

        // 실제 refetch 수행
        await refetch();
    }

    console.log('Todos:', todos);

    return (
      <div>
        <h1>할 일 목록</h1>
        <h2>{isStale ? "상했어요" : "신선해요" }</h2>
        <button onClick={handleRefetch}>새로 패치</button>
        
        <ul>
          {todos?.map((todo) => (
            <li key={todo.id}>
              {todo.title} - {todo.completed ? '완료' : '미완료'}
            </li>
          ))}
        </ul>
      </div>
    );
}

export default TodoList