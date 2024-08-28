import { ThemeContextProvider } from "@/context/ThemeContext";
import AppContent from "@/components/features/AppContent";
import AppBodyLayout from "@/components/layout/AppBodyLayout";

function App() {
  return (
    <ThemeContextProvider>
      <AppBodyLayout>
        <AppContent />
      </AppBodyLayout>
    </ThemeContextProvider>
  );
}

export default App;
