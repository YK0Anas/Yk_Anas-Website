/*
 * Soft Utility design reminder: routes should feel like pages in one coherent
 * developer sketchbook, not unrelated templates. The shared shell owns the visual
 * spine while each page keeps its own focused story.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import SiteLayout from "./components/SiteLayout";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import About from "./pages/About";
import Connect from "./pages/Connect";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Services from "./pages/Services";

function Router() {
  return (
    <SiteLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/about" component={About} />
        <Route path="/connect" component={Connect} />
        <Route path="/services" component={Services} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </SiteLayout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
