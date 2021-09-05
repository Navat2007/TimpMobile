import {createContext} from 'react';
import AuthService from "../services/auth.service";

export const UserContext = createContext(!!AuthService.getCurrentUser());
export const ProjectsContext = createContext(null);
export const TasksContext = createContext(null);
export const MessagesContext = createContext(null);