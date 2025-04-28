import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

const DigitalMarketingPage = () => {
  return (
    <div className="container mx-auto p-6 md:p-10">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-12">
        Digital Marketing Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Business Analysis */}
        <Card className="bg-gradient-to-br from-slate-800/30 to-slate-700/30 backdrop-blur-lg border border-white/10 hover:scale-105 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-xl text-white">Business Analysis</CardTitle>
            <CardDescription className="text-gray-300">
              We research and analyze your business to generate more leads.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Content Creation */}
        <Card className="bg-gradient-to-br from-slate-800/30 to-slate-700/30 backdrop-blur-lg border border-white/10 hover:scale-105 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-xl text-white">Content Creation</CardTitle>
            <CardDescription className="text-gray-300">
              We create engaging posters and reels tailored to your brand.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <Badge
                  variant="secondary"
                  className={cn("from-purple-500/20 to-blue-500/20 text-purple-300 mr-2")}
                >
                  Posters
                </Badge>
                8 posters per month
              </li>
              <li className="flex items-center text-gray-300">
                <Badge
                  variant="secondary"
                  className={cn("from-pink-500/20 to-yellow-500/20 text-pink-300 mr-2")}
                >
                  Reels
                </Badge>
                8 reels per month
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Advertisement Management */}
        <Card className="bg-gradient-to-br from-slate-800/30 to-slate-700/30 backdrop-blur-lg border border-white/10 hover:scale-105 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-xl text-white">Advertisement Management</CardTitle>
            <CardDescription className="text-gray-300">
              We manage and run targeted advertisements for your business.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <Badge
                  variant="secondary"
                  className={cn("from-blue-500/20 to-cyan-500/20 text-blue-300 mr-2")}
                >
                  Meta Ads
                </Badge>
                (Facebook & Instagram)
              </li>
              <li className="flex items-center text-gray-300">
                <Badge
                  variant="secondary"
                  className={cn("from-green-500/20 to-teal-500/20 text-green-300 mr-2")}
                >
                  Google Ads
                </Badge>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Social Media Management */}
        <Card className="bg-gradient-to-br from-slate-800/30 to-slate-700/30 backdrop-blur-lg border border-white/10 hover:scale-105 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-xl text-white">Social Media Management</CardTitle>
            <CardDescription className="text-gray-300">
              We handle your social media accounts, ensuring consistent growth and engagement.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Monthly Reports */}
        <Card className="bg-gradient-to-br from-slate-800/30 to-slate-700/30 backdrop-blur-lg border border-white/10 hover:scale-105 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-xl text-white">Monthly Reports</CardTitle>
            <CardDescription className="text-gray-300">
              We provide a detailed monthly report to track your business performance.
            </CardDescription>
          </CardHeader>
        </Card>

      </div>
    </div>
  );
};

export default DigitalMarketingPage;
