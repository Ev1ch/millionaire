import React, { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorsService } from 'services';
import { Error } from 'containers';

interface IErrorBoundaryProps {
    children: ReactNode;
}

interface IErrorBoundaryState {
    isError: boolean;
}

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = { isError: false };
    }

    public static getDerivedStateFromError() {
        return { isError: true };
    }

    public componentDidCatch(error: unknown, errorInfo: ErrorInfo) {
        ErrorsService.logError(error, errorInfo);
    }

    public render() {
        const { children } = this.props;
        const { isError } = this.state;

        if (isError) {
            return <Error />;
        }

        return children;
    }
}

export default ErrorBoundary;
