import './App.css'
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


import { UserConfigProvider } from './contexts/UserConfigContext'
import ProgramZuluHTView from './views/ProgramZuluHTView'
import ProgramOperatorView from './views/ProgramOperatorView'
import Program531BView from './views/Program531BView'


function App() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-muted/80 px-4 md:px-6">
        <h1 className="mb-4">lifts</h1>
      </header>

      <Separator className="mb-4" />

      <UserConfigProvider>
        <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/80 p-4 md:gap-8 md:p-10">
          <Tabs defaultValue="zuluht" className="mb-4">
            <TabsList>
              <TabsTrigger value="zuluht">Zulu HT</TabsTrigger>
              <TabsTrigger value="operator">Operator</TabsTrigger>
              <TabsTrigger value="531b">5/3/1 Beginner</TabsTrigger>
            </TabsList>
            <TabsContent value="zuluht">
              <ProgramZuluHTView />
            </TabsContent>
            <TabsContent value="operator">
              <ProgramOperatorView />
            </TabsContent>
            <TabsContent value="531b">
              <Program531BView />
            </TabsContent>
          </Tabs>
        </main>
      </UserConfigProvider>
    </div >
  )
}

export default App
