import React from "react";
import { Button } from "@/components/ui/button";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
  error?: Error;
};

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error("App crashed:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center p-6">
          <div className="max-w-xl w-full border border-border rounded-xl p-6 bg-card">
            <h1 className="font-display text-2xl font-bold text-foreground mb-2">Something went wrong</h1>
            <p className="text-muted-foreground mb-4">
              A component failed to render. Try reloading the page.
            </p>
            {this.state.error?.message ? (
              <pre className="text-xs bg-muted/50 border border-border rounded-lg p-3 overflow-auto mb-4">
                {this.state.error.message}
              </pre>
            ) : null}
            <div className="flex gap-3">
              <Button onClick={this.handleReload}>Reload</Button>
              <Button variant="outline" onClick={() => (window.location.href = "/")}>Go Home</Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
