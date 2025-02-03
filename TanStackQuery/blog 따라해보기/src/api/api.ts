import axios from 'axios';
import type { Todo } from '../type/type';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getTodos = async (): Promise<Todo[]> => {
    const response = await api.get<Todo[]>('/todos');
    return response.data;
}