import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import { BlogPost } from "./components/BlogPost";
import { CustomCursor } from "./components/ui/cursor";
import { VisualEffects } from "./components/VisualEffects";
import { BackToTop } from "./components/BackToTop";
import { ThemeProvider } from "./components/ThemeProvider";
import { useEffect } from "react";

function Router() {
  // Add logging to check if this component renders
  console.log("Router component rendering");
  
  const [location] = useLocation();
  
  // Check if the current location has a hash (for blog posts)
  const hasHash = location.includes('#');
  
  if (hasHash && location === '/' + location.split('#')[1]) {
    // This means we're at a URL like "/aerogenius-blog" which should be treated as "/#aerogenius-blog"
    // Redirect to the correct format
    window.location.href = '/#' + location.split('/')[1];
    return null;
  }

  // If we're at the root with a hash, render BlogPost for blog entries
  if (location === '/' && hasHash) {
    const hash = location.split('#')[1];
    if (hash && !['about', 'skills', 'projects', 'resume', 'blog', 'contact'].includes(hash)) {
      return <BlogPost />;
    }
  }
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Add logging to check if App component renders at all
  useEffect(() => {
    console.log("App component mounted");
  }, []);

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <CustomCursor />
        <VisualEffects />
        <Router />
        <BackToTop />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
