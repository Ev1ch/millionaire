import { ErrorInfo } from 'react';

// eslint-disable-next-line
export const logError = (error: unknown, errorInfo: ErrorInfo) => {
    console.error(`Error: ${error}`);
    console.error(`Stack: ${errorInfo.componentStack}`);
};
