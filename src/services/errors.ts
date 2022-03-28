import { ErrorInfo } from 'react';

export const logError = (error: unknown, errorInfo: ErrorInfo) => {
    console.error(`Error: ${error}`);
    console.error(`Stack: ${errorInfo.componentStack}`);
};
