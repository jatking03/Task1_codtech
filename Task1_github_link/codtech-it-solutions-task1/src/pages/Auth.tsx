
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Auth = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Register form state
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // This is a mock authentication - in a real app, this would connect to your backend
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Success!",
        description: "You have been logged in successfully.",
      });
      navigate('/'); // Redirect to home page after login
    }, 1500);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (registerPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // This is a mock registration - in a real app, this would connect to your backend
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account created!",
        description: "Your account has been created successfully.",
      });
      navigate('/'); // Redirect to home page after registration
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-portfolio-blue flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <a href="/" className="text-portfolio-accent font-mono text-2xl font-semibold inline-block mb-6">
            Portfolio
          </a>
          <h1 className="text-portfolio-text text-2xl md:text-3xl font-bold mb-2">Welcome back</h1>
          <p className="text-portfolio-text-secondary text-sm md:text-base">Sign in to your account or create a new one</p>
        </div>

        <Card className="bg-portfolio-light-blue border-portfolio-accent/10">
          <CardContent className="pt-6">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid grid-cols-2 mb-6 bg-portfolio-blue/40">
                <TabsTrigger value="login" className="text-sm md:text-base">Login</TabsTrigger>
                <TabsTrigger value="register" className="text-sm md:text-base">Register</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-portfolio-text">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="name@example.com"
                      required
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="bg-portfolio-blue border-portfolio-accent/20 text-portfolio-text focus-visible:ring-portfolio-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password" className="text-portfolio-text">Password</Label>
                      <a href="#" className="text-xs font-medium text-portfolio-accent hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    <Input 
                      id="password" 
                      type="password"
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="bg-portfolio-blue border-portfolio-accent/20 text-portfolio-text focus-visible:ring-portfolio-accent"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-portfolio-accent text-portfolio-blue hover:bg-portfolio-accent/90 font-medium"
                    disabled={isLoading}
                  >
                    {isLoading ? "Logging in..." : "Login"}
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-portfolio-text">Name</Label>
                    <Input 
                      id="name" 
                      type="text"
                      placeholder="John Doe" 
                      required
                      value={registerName}
                      onChange={(e) => setRegisterName(e.target.value)}
                      className="bg-portfolio-blue border-portfolio-accent/20 text-portfolio-text focus-visible:ring-portfolio-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email" className="text-portfolio-text">Email</Label>
                    <Input 
                      id="register-email" 
                      type="email"
                      placeholder="name@example.com" 
                      required
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      className="bg-portfolio-blue border-portfolio-accent/20 text-portfolio-text focus-visible:ring-portfolio-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password" className="text-portfolio-text">Password</Label>
                    <Input 
                      id="register-password" 
                      type="password"
                      required
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      className="bg-portfolio-blue border-portfolio-accent/20 text-portfolio-text focus-visible:ring-portfolio-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="text-portfolio-text">Confirm Password</Label>
                    <Input 
                      id="confirm-password" 
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="bg-portfolio-blue border-portfolio-accent/20 text-portfolio-text focus-visible:ring-portfolio-accent"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-portfolio-accent text-portfolio-blue hover:bg-portfolio-accent/90 font-medium"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Create account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
