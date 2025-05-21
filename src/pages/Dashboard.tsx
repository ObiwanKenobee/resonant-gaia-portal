
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Database, Eye, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 px-4 pb-12">
      <div className="container mx-auto max-w-5xl">
        <header className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Welcome, Steward.</h1>
          <p className="text-slate-600">
            You've entered the Gaia Operating Layer — where AI meets ecology, and futures are modeled.
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Energy Node Mapper */}
          <Card className="border border-slate-200 hover:border-gaia-blue/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xl font-bold">🔋 Energy Node Mapper</CardTitle>
              <Globe className="h-5 w-5 text-gaia-blue" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">
                View and interact with live decentralized microgrids.
              </p>
              <div className="bg-slate-100 rounded-md p-4 h-40 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm text-slate-500">Interactive node map</p>
                  <div className="mt-2 flex justify-center">
                    <Button variant="outline" size="sm">
                      Access Mapper
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* AI Protocol Editor */}
          <Card className="border border-slate-200 hover:border-gaia-green/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xl font-bold">🧠 AI Protocol Editor</CardTitle>
              <Brain className="h-5 w-5 text-gaia-green" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">
                Adjust ethical layers and feedback loops.
              </p>
              <div className="bg-slate-100 rounded-md p-4 h-40 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm text-slate-500">Protocol visualization</p>
                  <div className="mt-2 flex justify-center">
                    <Button variant="outline" size="sm">
                      Edit Protocols
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Wireless Transfer Simulation */}
          <Card className="border border-slate-200 hover:border-gaia-amber/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xl font-bold">📡 Wireless Transfer Simulation</CardTitle>
              <Eye className="h-5 w-5 text-gaia-amber" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">
                Test Tesla/Mallove-based transmissions.
              </p>
              <div className="bg-slate-100 rounded-md p-4 h-40 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm text-slate-500">Simulation environment</p>
                  <div className="mt-2 flex justify-center">
                    <Button variant="outline" size="sm">
                      Run Simulation
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Cultural Code Archive */}
          <Card className="border border-slate-200 hover:border-gaia-teal/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-md group">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xl font-bold">🧬 Cultural Code Archive</CardTitle>
              <Database className="h-5 w-5 text-gaia-teal" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 mb-4">
                Access shared knowledge systems and embed values in code.
              </p>
              <div className="bg-slate-100 rounded-md p-4 h-40 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-sm text-slate-500">Knowledge repository</p>
                  <div className="mt-2 flex justify-center">
                    <Button variant="outline" size="sm">
                      Browse Archive
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500 mb-4">
            Dashboard functionality requires backend integration
          </p>
          <Button asChild variant="outline">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
