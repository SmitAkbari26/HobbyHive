// ErrorBoundary.jsx

import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can log the error to an error reporting service
        console.error("Error caught by error boundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render a fallback UI here
            return <div>Something went wrong. Please try again later.</div>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
