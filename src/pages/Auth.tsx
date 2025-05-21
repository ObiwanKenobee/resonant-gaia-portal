
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/sonner";
import { Link } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication (in a real app, you'd connect to a backend)
    setTimeout(() => {
      setIsLoading(false);
      toast.error("Authentication functionality requires backend integration");
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="absolute inset-0 circuit-overlay opacity-30"></div>
      
      {/* Energy orbs */}
      <div className="absolute w-32 h-32 rounded-full bg-gaia-green/10 blur-xl animate-float top-1/4 left-1/4"></div>
      <div className="absolute w-40 h-40 rounded-full bg-gaia-blue/10 blur-xl animate-float animation-delay-2000 bottom-1/4 right-1/3"></div>
      
      <div className="max-w-md w-full relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Unlock the Gaia Mesh</h1>
          <p className="text-slate-600">
            Sign in to join the planetary energy protocol, access blueprints, or contribute to live nodes.
          </p>
        </div>
        
        <Card className="backdrop-blur-sm border border-slate-200">
          <CardHeader>
            <CardTitle>Authentication</CardTitle>
            <CardDescription>
              All access is governed by the Gaia Protocol Charter — a living ethics framework for resilience, equity, and open science.
            </CardDescription>
          </CardHeader>
          
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="signin">
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4 pt-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input 
                      id="password" 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-gaia-gradient" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Authenticating..." : "Sign In with Digital Commons ID"}
                  </Button>
                  <Button variant="outline" className="w-full" disabled={isLoading}>
                    Request UNESCO Verification
                  </Button>
                </CardFooter>
              </form>
            </TabsContent>
            
            <TabsContent value="signup">
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4 pt-6">
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input 
                      id="signup-email" 
                      type="email" 
                      placeholder="your@email.com" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input 
                      id="signup-password" 
                      type="password" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input 
                      id="confirm-password" 
                      type="password" 
                      required
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-gaia-gradient" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Sign Up as a Mesh Contributor"}
                  </Button>
                </CardFooter>
              </form>
            </TabsContent>
          </Tabs>
        </Card>
        
        <div className="mt-6 text-center">
          <Link to="/" className="text-gaia-blue hover:text-gaia-green underline">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
