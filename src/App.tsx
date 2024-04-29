import './App.css'
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


import PlanView from './views/PlanView'
import ProgramView from './views/ProgramView'
import { UserConfigProvider } from './contexts/UserConfigContext'


function App() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-muted/80 px-4 md:px-6">
        <h1 className="mb-4">Operator + Green building</h1>
      </header>

      <Separator className="mb-4"/>

      <UserConfigProvider>
        <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/80 p-4 md:gap-8 md:p-10">
          <Tabs defaultValue="plan" className="mb-4">
            <TabsList>
              <TabsTrigger value="plan">Plan</TabsTrigger>
              <TabsTrigger value="program">Program</TabsTrigger>
            </TabsList>
            <TabsContent value="plan">
                <PlanView />
            </TabsContent>
            <TabsContent value="program">
              <ProgramView />
            </TabsContent>
          </Tabs>
        </main>
      </UserConfigProvider>
    </div>
  )
}

export default App
