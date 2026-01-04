import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import Home from "./pages/Home";
import NotFound from "./pages/not-found";

function Router() {
    return (
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/blogs" component={() => <div>Blogs Page</div>} />
            <Route path="/resume" component={() => <div>Resume Page</div>} />
            <Route
                path="/bookshelf"
                component={() => <div>Book Shelf Page</div>}
            />
            <Route component={NotFound} />
        </Switch>
    );
}

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <Toaster />
                <Router />
            </TooltipProvider>
        </QueryClientProvider>
    );
}

export default App;
